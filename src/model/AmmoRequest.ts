import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsUUID,
} from 'class-validator';

class AmmoRequest {
  @IsOptional()
  @IsString()
  link?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  combinedAmmo?: string[];
}

export default AmmoRequest;
