import { Request } from 'express';
import { RequestParams } from '../../libs/rest/types/request.params.type.js';
import { RequestBody } from '../../libs/rest/types/request-body.type.js';
import { LogoutUserDto } from './dto/logout-user.dto.js';

export type LogoutUserRequest = Request<RequestParams, RequestBody, LogoutUserDto>;
