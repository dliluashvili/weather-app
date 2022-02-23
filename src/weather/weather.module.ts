import { HttpModule, Module } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { WeatherController } from './weather.controller'

@Module({
    imports: [HttpModule],
    providers: [WeatherService],
    controllers: [WeatherController],
})
export class WeatherModule {}
