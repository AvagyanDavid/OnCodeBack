import { IsInt, isInt, IsObject, IsString, Min } from "class-validator";

export class UpdateFileDto {
    @IsInt()
    @Min(1)
    lineNumber: number;

    @IsObject()
    range: {start: number; end: number};

    @IsString()
    text: string;
}