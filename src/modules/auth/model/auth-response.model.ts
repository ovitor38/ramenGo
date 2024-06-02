import { ApiProperty } from "@nestjs/swagger";

export class AuthResponseModel {
    @ApiProperty()
    access_token: string
}
