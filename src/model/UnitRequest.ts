import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import {
  Classification,
  Cube,
  Impetuous,
  OrderType,
  UnitType,
} from '../entity/Details';
import { Sectorial } from '../entity/Sectorial';
import ProfileRequest from './ProfileRequest';

class Availability {
  @IsString()
  sectorial: Sectorial;

  @IsOptional()
  @IsPositive()
  @IsInt()
  limit?: number;
}

class Details {
  @IsString()
  isc: string;

  @IsString()
  classification: Classification;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  unitType?: UnitType;

  @IsEnum(OrderType)
  orderType: OrderType;

  @IsOptional()
  @IsBoolean()
  hackable?: boolean;

  @IsOptional()
  @IsEnum(Impetuous)
  impetuous?: Impetuous;

  @IsOptional()
  @IsEnum(Cube)
  cube?: Cube;

  @IsString()
  mov: string;

  @IsString()
  cc: string;

  @IsString()
  bs: string;

  @IsString()
  ph: string;

  @IsString()
  wip: string;

  @IsString()
  arm: string;

  @IsString()
  bts: string;

  @IsString()
  w: string;

  @IsOptional()
  @IsBoolean()
  structure?: boolean;

  @IsString()
  s: string;

  @ValidateNested()
  @Type(type => Availability)
  ava: Availability[];

  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  skillIds: string[];

  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  equipmentIds: string[];
}

class UnitRequest {
  @ValidateNested()
  @Type(type => Details)
  primaryDetails: Details;

  @ValidateNested()
  @IsOptional()
  @Type(type => Details)
  secondaryDetails: Details;

  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  additionalUnitIds: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  notes?: string[];

  @ValidateNested()
  @Type(type => ProfileRequest)
  profiles: ProfileRequest[];
}

export default UnitRequest;
