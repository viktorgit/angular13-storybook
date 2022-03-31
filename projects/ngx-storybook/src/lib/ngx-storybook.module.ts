import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IStoryConfig } from './types/config';
import { NgxStorybookComponent } from './ngx-storybook.component';
import { MODULE_LOADER } from './services/module-loader-token';
import { NgxStorybookService } from './services/ngx-storybook.service';

const routes: Routes = [{
  path: 'ngx-storybook',
  component: NgxStorybookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [NgxStorybookComponent],
  bootstrap: [NgxStorybookComponent]
})
export class NgxStorybookModule {
  static forRoot(config: IStoryConfig): ModuleWithProviders<NgxStorybookModule> {
    return {
      ngModule: NgxStorybookModule,
      providers: [
        NgxStorybookService,
        {
          provide: MODULE_LOADER,
          useValue: config
        }]
    }
  }
}

