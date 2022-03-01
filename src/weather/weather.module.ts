import { Module } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { WeatherResolver } from './weather.resolver'
import { HttpModule } from '@nestjs/axios'

@Module({
    imports: [HttpModule],
    providers: [WeatherService, WeatherResolver],
    controllers: [],
})
export class WeatherModule {}
