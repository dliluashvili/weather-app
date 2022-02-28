import { NotFoundException } from '@nestjs/common'

export class WeatherNotFoundException extends NotFoundException {
    constructor(date: string) {
        super(`Weather with this date ${date} not found`)
    }
}
