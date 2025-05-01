import { IsBoolean, IsNumber, IsObject } from "class-validator"

export class CreateFriendDto {
    @IsObject()
    sender: number;

    @IsObject()
    recipient: number;

    @IsBoolean()
    status: boolean
}

export type TUpdateFriendDto = Partial<CreateFriendDto>