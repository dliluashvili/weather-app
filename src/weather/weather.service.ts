import { HttpService } from '@nestjs/axios'
import { Injectable, HttpException } from '@nestjs/common'
import { WeatherDto } from './weather.dto'
import * as moment from 'moment'
import { WeatherNotFoundException } from './weather-not-found.exception'
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'
import { Weather } from './weather.entity'

@Injectable()
export class WeatherService {
    constructor(private readonly httpService: HttpService) {}

    getWeather(weatherDto: WeatherDto): Observable<Weather> {
        const { date } = weatherDto
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherDto.lat}&lon=${weatherDto.lng}&cnt=7&appid=${process.env.API_KEY}`

        return this.httpService.get(url).pipe(
            map((response) => response.data.daily),
            map((daily) => {
                return daily.find((dItem) => {
                    const itemDate: string = moment(
                        new Date(dItem.dt * 1000)
                    ).format('YYYY-MM-DD')

                    if (itemDate === date) {
                        return dItem
                    }
                })
            }),
            map((item) => {
                if (item && item.weather && item.weather.length > 0) {
                    return {
                        description: item.weather[0].description,
                    }
                }

                throw new WeatherNotFoundException(date)
            }),
            catchError((err: any) => {
                throw new HttpException(
                    err.response.message,
                    err.response.statusCode
                )
            })
        )
    }
}
