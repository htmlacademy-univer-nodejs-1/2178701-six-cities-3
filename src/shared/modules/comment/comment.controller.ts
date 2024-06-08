import { inject, injectable } from 'inversify';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { CommentService } from './comment-service.interface.js';
import { OfferService } from '../offer/index.js';
import { fillDTO } from '../../helpers/index.js';
import { BaseController } from '../../libs/rest/controller/base-controller.abstract.js';
import { HttpMethod } from '../../libs/rest/types/http-method.enum.js';
import { HttpError } from '../../libs/rest/errors/index.js';
import { CommentRdo } from './rdo/comment.rdo.js';
import { CreateCommentRequest } from './type/create-comment-request.type.js';
import { ValidateDtoMiddleware } from '../../libs/rest/middleware/validate-dto.middleware.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { PrivateRouteMiddleware } from '../../libs/rest/middleware/private-route.middleware.js';
import { UserService } from '../user/user-service.interface.js';


@injectable()
export default class CommentController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CommentService) private readonly commentService: CommentService,
    @inject(Component.OfferService) private readonly offerService: OfferService,
    @inject(Component.UserService) private readonly userService: UserService,
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController…');
    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new ValidateDtoMiddleware(CreateCommentDto),
        new PrivateRouteMiddleware(),
      ]
    });
  }

  public async create(
    { body, params }: CreateCommentRequest,
    res: Response
  ): Promise<void> {

    const { offerId } = params;

    if (! await this.offerService.exists(offerId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found.`,
        'CommentController'
      );
    }

    if (! await this.userService.findById(body.userId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `User with id ${body.userId} not found.`,
        'CommentController'
      );
    }

    if (offerId !== body.offerId) {
      throw new HttpError(
        StatusCodes.BAD_REQUEST,
        `Offers ${offerId} and ${body.offerId} not equals.`,
        'CommentController'
      );
    }
    const comment = await this.commentService.create({ ...body, userId: body.userId });
    await this.offerService.incCommentCount(offerId);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}
