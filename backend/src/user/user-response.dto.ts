import { Expose } from 'class-transformer';

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  lastname: string;

  @Expose()
  email: string;

  @Expose()
  age: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
