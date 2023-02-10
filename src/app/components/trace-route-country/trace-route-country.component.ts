import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/core/entities';

@Component({
  selector: 'app-trace-route-country',
  templateUrl: './trace-route-country.component.html',
  styleUrls: ['./trace-route-country.component.scss']
})
export class TraceRouteCountryComponent {
  @Input() country?: Country;
  @Output() selectedCountry: EventEmitter<Country> = new EventEmitter<Country>();


  @HostListener('click', ['$event.target'])
  handleClick(target: any) {
    this.selectedCountry.emit(this.country);
  }
}
