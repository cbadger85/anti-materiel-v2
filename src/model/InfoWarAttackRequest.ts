import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import {
  InfoWarAttackCategory,
  InfoWarAttackTarget,
  InfoWarAttackType,
  InfoWareAttackRange,
  SkillType,
} from '../entity/InfoWarAttack';

class InfoWarAttackRequest {
  @IsOptional()
  @IsString()
  link?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(InfoWarAttackType)
  attackType: InfoWarAttackType;

  @IsArray()
  @IsString({ each: true })
  range: InfoWareAttackRange[];

  @IsString()
  @IsNotEmpty()
  category: InfoWarAttackCategory;

  @IsString()
  @IsNotEmpty()
  attackModifier: string;

  @IsString()
  @IsNotEmpty()
  opponentModifier: string;

  @IsString()
  @IsNotEmpty()
  damage: string;

  @IsString()
  @IsNotEmpty()
  burst: string;

  @IsArray()
  @IsUUID(undefined, { each: true })
  ammoIds: string[];

  @IsArray()
  @IsString({ each: true })
  target: InfoWarAttackTarget[];

  @IsArray()
  @IsString({ each: true })
  skillType: SkillType[];

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  special?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  effect?: string;
}

export default InfoWarAttackRequest;
