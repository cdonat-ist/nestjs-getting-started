import { ApiProperty } from "@nestjs/swagger";

export class DbUserDto {

    @ApiProperty()
    id: number;
    
    @ApiProperty()
    email: string;
    
    @ApiProperty()
    name: string | null
}
