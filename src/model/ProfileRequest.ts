import {
  IsString,
  IsPositive,
  IsInt,
  IsOptional,
  IsBoolean,
  IsArray,
  IsUUID,
} from 'class-validator';
import { Sectorial } from '../entity/Sectorial';

class ProfileRequest {
  @IsString()
  profile: string;

  @IsPositive()
  @IsInt()
  const: number;

  @IsPositive()
  @IsInt()
  swc: number;

  @IsOptional()
  @IsBoolean()
  isLieutenant?: boolean;

  @IsArray()
  @IsUUID(undefined, { each: true })
  specialRuleIds: string[];

  @IsArray()
  @IsUUID(undefined, { each: true })
  equipmentIds: string[];

  @IsArray()
  @IsUUID(undefined, { each: true })
  bswIds: string[];

  @IsArray()
  @IsUUID(undefined, { each: true })
  ccwIds: string[];

  @IsArray()
  @IsUUID(undefined, { each: true })
  miscIds: string[];

  @IsArray()
  @IsString({ each: true })
  sectorials: Sectorial[];

  @IsArray()
  @IsUUID(undefined, { each: true })
  infoWarAttackIds: string[];

  @IsArray()
  @IsUUID(undefined, { each: true })
  addsProfileIds: string[];
}

export default ProfileRequest;
