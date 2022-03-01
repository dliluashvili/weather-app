import { Args, Query, Resolver } from '@nestjs/graphql'
import { WeatherDto } from './weather.dto'
import { Weather } from './weather.entity'
import { WeatherService } from './weather.service'

@Resolver((of) => Weather)
export class WeatherResolver {
    constructor(private weatherService: WeatherService) {}

    @Query((returns) => Weather)
    weathers(@Args('input') weatherDto: WeatherDto) {
        return this.weatherService.getWeather(weatherDto)
    }
}
