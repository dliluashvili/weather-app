import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WeatherModule } from './weather/weather.module'

@Module({
    imports: [WeatherModule, ConfigModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
