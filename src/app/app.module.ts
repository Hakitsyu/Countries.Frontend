import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './components/shared-components.module';
import { BackendGatewayModule } from './gateway/backend';
import { environment } from 'src/environments/environment';
import { LoadingModule } from './modules/loading/loading.module';
import { CountriesStore } from './store/countries.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    BackendGatewayModule.forRoot({
      url: environment.url
    }),
    LoadingModule.forRoot()
  ],
  providers: [CountriesStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
