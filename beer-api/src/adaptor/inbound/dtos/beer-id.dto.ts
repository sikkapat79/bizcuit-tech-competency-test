import { Transform } from 'class-transformer';
import { IsInt, IsPositive } from 'class-validator';

export default class BeerIdDto {
  @IsInt()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  public readonly beerId: number;
}
