import {IsOptional, Length, Matches} from 'class-validator';
import { UpdateUserMessages } from './update-user.messages.js';


export class UpdateUserDto {
  @IsOptional()
  @Matches(/\.(jpe?g|png)$/i, { message: UpdateUserMessages.avatarPath.invalidFormat })
  public avatarPath?: string;

  @IsOptional()
  @Length(1, 15, { message: UpdateUserMessages.name.lengthField })
  public name?: string;

  @IsOptional()
  public favoriteOffers?: string[];
}
