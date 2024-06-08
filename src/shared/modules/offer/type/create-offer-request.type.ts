import { Request } from 'express';
import { CreateOfferDto } from '../dto/create-offer.dto.js';
import { RequestParams } from '../../../libs/types/request.params.js';
import { RequestBody } from '../../../libs/types/request-body.type.js';

export type CreateOfferRequest = Request<RequestParams, RequestBody, CreateOfferDto>;
