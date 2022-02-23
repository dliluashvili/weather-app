import { Body, Controller, Post } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { WeatherDto } from './weather.dto'

@Controller('weather')
export class WeatherController {
    constructor(private weatherService: WeatherService) {}

    @Post('/get')
    getWeather(@Body() weatherDto: WeatherDto){
        return this.weatherService.getWeather(weatherDto)
    }
}
