import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';


export class CommentRdo {
  @Expose()
  public id: number;

  @Expose()
  public text: string;

  @Expose({ name: 'createdAt'})
  public postDate: string;

  @Expose({ name: 'authorId' })
  @Type(() => UserRdo)
  public user: UserRdo;
}
