import { IsArray, IsBoolean, IsEnum, IsMongoId, IsObject, IsOptional, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Coordinates, HouseType } from '../../../types';
import { City } from '../../../types/city.enum';
import { Facilities } from '../../../types/facilities.enum';
import { CreateOfferValidationMessage } from './create-offer.messages';


export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title?: string;

  @IsOptional()
  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  public postDate?: Date;

  @IsOptional()
  @IsEnum(City, { message: CreateOfferValidationMessage.city.invalidFormat })
  public city?: City;

  @IsOptional()
  @MaxLength(256, { message: CreateOfferValidationMessage.previewPhoto.maxLength })
  public previewPhoto?: string;

  @IsOptional()
  @IsArray({ message: CreateOfferValidationMessage.photos.invalidFormat })
  public photos?: string[];

  @IsOptional()
  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalid })
  public isPremium?: boolean;

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.isFavorite.invalidFormat})
  public isFavorite?: boolean;

  @IsOptional()
  public rating?: number;

  @IsOptional()
  @IsEnum(HouseType, {message: CreateOfferValidationMessage.type.invalidFormat})
  public type?: HouseType;

  @IsOptional()
  @Min(1, { message: CreateOfferValidationMessage.roomCount.min })
  @Max(8, { message: CreateOfferValidationMessage.roomCount.max })
  public roomCount?: number;

  @IsOptional()
  @Min(1, { message: CreateOfferValidationMessage.guestsCount.min })
  @Max(10, { message: CreateOfferValidationMessage.guestsCount.max })
  public guestsCount?: number;

  @IsOptional()
  @Min(100, { message: CreateOfferValidationMessage.price.min })
  @Max(100000, { message: CreateOfferValidationMessage.price.max })
  public price?: number;

  @IsOptional()
  @IsArray({ message: CreateOfferValidationMessage.facilities.invalidFormat })
  @IsEnum(Facilities, {message: CreateOfferValidationMessage.facilities.invalidElementFormat})
  public facilities?: Facilities[];

  @IsOptional()
  @IsObject({ message: CreateOfferValidationMessage.coordinates.invalidFormat })
  public coordinates?: Coordinates;

  @IsOptional()
  @IsMongoId({ message: CreateOfferValidationMessage.authorId.invalidId })
  public authorId?: string;

  @IsOptional()
  public numberComments?: number;
}
