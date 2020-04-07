import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Sectorial } from '../entity/Sectorial';

class ProfileRequest {
  @IsString()
  name: string;

  @IsPositive()
  @IsInt()
  cost: number;

  @Min(0)
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
  @IsUUID(undefined, { each: true })
  infoWarAttackIds: string[];

  @IsArray()
  @IsString({ each: true })
  sectorials: Sectorial[];

  @IsArray()
  @IsUUID(undefined, { each: true })
  addsProfileIds: string[];
}

export default ProfileRequest;
