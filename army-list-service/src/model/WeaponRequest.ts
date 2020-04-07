import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsArray,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { RangeBandType, RangeBandModifier } from '../entity/WeaponRangeBand';
import { Type } from 'class-transformer';

class WeaponRangeBand {
  @IsString()
  min: string;

  @IsString()
  max: string;

  @IsString()
  modifier: RangeBandModifier;

  @IsEnum(RangeBandType)
  type: RangeBandType;
}

class WeaponMode {
  @IsString()
  name: string;

  @IsString()
  damage: string;

  @IsString()
  burst: string;

  @IsArray()
  @IsUUID(undefined, { each: true })
  ammoIds: string[];

  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  traitIds: string[];

  @ValidateNested()
  @Type(type => WeaponRangeBand)
  weaponRangeBands?: WeaponRangeBand[];
}

class WeaponRequest {
  @IsOptional()
  @IsString()
  link?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @ValidateNested()
  @Type(type => WeaponMode)
  weaponModes: WeaponMode[];
}

export default WeaponRequest;
