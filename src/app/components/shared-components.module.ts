import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CountryComponent } from './country/country.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CountryListComponent } from './country-list/country-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TraceRouteComponent } from './trace-route/trace-route.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ContentComponent } from './content/content.component';
import { BackendGatewayModule } from '../gateway/backend';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TraceRouteCountryComponent } from './trace-route-country/trace-route-country.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    declarations: [
        SearchComponent, 
        CountryComponent, 
        CountryListComponent, 
        TraceRouteComponent, 
        ContentComponent, 
        TraceRouteCountryComponent
    ],
    exports: [
        SearchComponent, 
        CountryComponent, 
        CountryListComponent, 
        ContentComponent, 
        TraceRouteComponent,
        TraceRouteCountryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatBottomSheetModule,
        BackendGatewayModule,
        ScrollingModule,
        MatListModule,
        MatProgressBarModule
    ]
})
export class SharedComponentsModule {

}