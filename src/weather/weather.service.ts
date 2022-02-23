import { HttpService, Injectable } from '@nestjs/common'
import { map } from 'rxjs/operators'
import * as moment from 'moment'
import { WeatherDto } from './weather.dto'

@Injectable()
export class WeatherService {
    constructor(private httpService: HttpService) {}

    getWeather(weatherDto: WeatherDto) {
        const date = moment(new Date(`${weatherDto.date}`)).format('YYYY-MM-DD')

        return this.httpService
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherDto.lat}&lon=${weatherDto.lng}&cnt=7&appid=${process.env.API_KEY}`
            )
            .pipe(
                map((response) => response.data.daily),
                map((daily) => {
                    const item = daily.find((dItem) => {
                        const itemDate = moment(
                            new Date(dItem.dt * 1000)
                        ).format('YYYY-MM-DD')

                        if (itemDate === date) {
                            return dItem
                        }
                    })

                    return {
                        description: item.weather[0].description,
                    }
                })
            )
    }
}
