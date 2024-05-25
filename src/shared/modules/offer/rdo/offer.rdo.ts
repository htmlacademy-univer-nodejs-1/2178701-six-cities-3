import { Expose } from 'class-transformer';
import { City } from '../../../types';
import { HouseType } from '../../../types';
import { Facilities } from '../../../types';
import { Coordinates } from '../../../types';
import { UserEntity } from '../../../modules/user/user.entity';
import { Ref } from '@typegoose/typegoose';

export class OfferRdo {
  @Expose()
  public id:string;

  @Expose()
  public title: string;

  @Expose()
  public description:string;

  @Expose()
  public postDate: Date;

  @Expose()
  public city: City;

  @Expose()
  public previewPhoto: string;

  @Expose()
  public photos: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating:number;

  @Expose()
  public type: HouseType;

  @Expose()
  public roomCount: number;

  @Expose()
  public guestsCount: number;

  @Expose()
  public price: number;

  @Expose()
  public facilities: Facilities[];

  @Expose()
  public coordinates: Coordinates;

  @Expose()
  public authorId: Ref<UserEntity>;

  @Expose()
  public numberComments: number;
}
