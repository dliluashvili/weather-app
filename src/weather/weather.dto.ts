import { IsDate, IsDateString, IsNotEmpty, IsNumber } from 'class-validator'

export class WeatherDto {
    @IsNumber()
    @IsNotEmpty()
    lat: number

    @IsNumber()
    @IsNotEmpty()
    lng: number

    @IsDateString()
    @IsNotEmpty()
    date: Date
}
