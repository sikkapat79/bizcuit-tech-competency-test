import { IsString, IsUUID } from 'class-validator';

export default class CreateBeerDto {
  @IsUUID()
  public readonly uid: string;

  @IsString()
  public readonly brand: string;

  @IsString()
  public readonly name: string;

  @IsString()
  public readonly style: string;

  @IsString()
  public readonly hop: string;

  @IsString()
  public readonly yeast: string;

  @IsString()
  public readonly malts: string;

  @IsString()
  public readonly ibu: string;

  @IsString()
  public readonly alcohol: string;

  @IsString()
  public readonly blg: string;
}
