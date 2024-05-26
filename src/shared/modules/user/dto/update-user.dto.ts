import { IsEmail, IsEnum, IsString, Length } from 'class-validator';
import { UserType } from '../../../types/user-type.enum';
import { CreateUserMessages } from './create-user.messages';


export class UpdateUserDto {
  @IsString({ message: CreateUserMessages.name.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.name.lengthField })
  public name: string;

  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email: string;

  @IsString({ message: CreateUserMessages.avatarPath.invalidFormat })
  public avatarPath: string;

  @IsEnum(UserType, { message: CreateUserMessages.type.invalidFormat })
  public type: UserType;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  public password: string;
}
