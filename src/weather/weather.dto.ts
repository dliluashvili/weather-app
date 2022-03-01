import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class WeatherDto {
    @IsNumber()
    @IsNotEmpty()
    @Field()
    lat: number

    @IsNumber()
    @IsNotEmpty()
    @Field()
    lng: number

    @IsString()
    @IsNotEmpty()
    @Field()
    date: string
}
