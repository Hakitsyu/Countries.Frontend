import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class LoadingModule { 
  static forRoot(): ModuleWithProviders<LoadingModule> {
    return {
      ngModule: LoadingModule,
      providers: [
        LoadingService
      ]
    } as ModuleWithProviders<LoadingModule>
  }
}
