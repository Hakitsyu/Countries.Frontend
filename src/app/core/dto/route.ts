import { SimplifiedCountryDto } from './simplified-country';

export interface RouteDto {
    from: SimplifiedCountryDto,
    to: SimplifiedCountryDto,
    steps: SimplifiedCountryDto[]
}