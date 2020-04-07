import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

class RuleRequest {
  @IsOptional()
  @IsString()
  link?: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}

export default RuleRequest;
