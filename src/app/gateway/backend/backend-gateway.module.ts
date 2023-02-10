import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BackendGatewayOptions, BackendGatewayService } from './backend-gateway.service';

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class BackendGatewayModule {
    static forRoot(options: BackendGatewayOptions): ModuleWithProviders<BackendGatewayModule> {
        return {
            ngModule: BackendGatewayModule,
            providers: [
                {
                    provide: BackendGatewayService,
                    useFactory: (http: HttpClient) => new BackendGatewayService(http, options),
                    deps: [HttpClient] 
                }
            ]       
        } as ModuleWithProviders<BackendGatewayModule>;
    }
}