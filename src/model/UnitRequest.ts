import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsPositive,
  ValidateNested,
  IsArray,
  IsUUID,
  IsInt,
} from 'class-validator';
import {
  Classification,
  UnitType,
  OrderType,
  Impetuous,
  Cube,
} from '../entity/Details';
import { Sectorial } from '../entity/Sectorial';
import { Type } from 'class-transformer';
import ProfileRequest from './ProfileRequest';

class Availability {
  @IsString()
  sectorial: Sectorial;

  @IsPositive()
  @IsInt()
  amount: number;
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
  move: string;

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
  avaliability: Availability[];

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
  notes: string[];

  @ValidateNested()
  @Type(type => ProfileRequest)
  profiles: ProfileRequest[];
}

export default UnitRequest;
