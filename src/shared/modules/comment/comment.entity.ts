import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/index.js';
import { OfferEntity } from '../offer/index.js';


export interface CommentEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'comments',
  }
})

export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
    ref: UserEntity
  })
  public authorId!: Ref<UserEntity>;

  @prop({
    ref: OfferEntity,
    required: true
  })
  public offerId!: Ref<OfferEntity>;

  @prop({
    required: true,
    trim: true
  })
  public description!: string;

  @prop({
    required: true,
    type: () => Date,
  })
  public postDate: Date;
}

export const CommentModel = getModelForClass(CommentEntity);
