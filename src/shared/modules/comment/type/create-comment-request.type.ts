import { type Request } from 'express';
import { RequestBody } from '../../../libs/rest/types/request-body.type.js';
import { CreateCommentDto } from '../dto/create-comment.dto.js';
import { ParamOfferId } from '../../offer/type/param.offerid.type.js';

export type CreateCommentRequest = Request<ParamOfferId, RequestBody, CreateCommentDto>;
