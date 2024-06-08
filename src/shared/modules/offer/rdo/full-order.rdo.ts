import { Expose } from 'class-transformer';
import { City, Coordinates, Facilities, HouseType } from '../../../types/index.js';

export class FullOfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

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
  public rating: number;

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
  public authorId: string;

  @Expose()
  public numberComments: number;

  @Expose()
  public coordinates: Coordinates;
}
