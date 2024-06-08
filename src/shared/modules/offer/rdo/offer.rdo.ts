import { Expose } from 'class-transformer';
import { City, HouseType } from '../../../types/index.js';

export class OfferRdo {
  @Expose()
  public id:string;

  @Expose()
  public price: number;

  @Expose()
  public title: string;

  @Expose()
  public type: HouseType;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public description:string;

  @Expose()
  public postDate: Date;

  @Expose()
  public city: City;

  @Expose()
  public previewPhoto: string;

  @Expose()
  public isPremium: boolean;

  @Expose()
  public rating:number;

  @Expose()
  public numberComments: number;
}
