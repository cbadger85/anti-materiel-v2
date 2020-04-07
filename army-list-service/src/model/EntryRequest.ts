import {
  IsOptional,
  IsString,
  IsArray,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Sectorial } from '../entity/Sectorial';
import { Type } from 'class-transformer';
import ProfileRequest from './ProfileRequest';

class EntryRequest {
  @IsOptional()
  @IsString()
  isc?: string;

  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  sectorials: Sectorial[];

  @IsUUID()
  primaryUnitId: string;

  @IsArray()
  @IsUUID(undefined, { each: true })
  secondaryUnitIds: string[];

  @ValidateNested()
  @Type(type => ProfileRequest)
  profiles: ProfileRequest[];
}

export default EntryRequest;
