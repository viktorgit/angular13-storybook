import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxStorybookModule, IStoryConfig } from 'ngx-storybook';

const storyConfig: IStoryConfig = {
  modules: [
    {
      components: [],
      module: 'src/app/test-modules/test-module-two-components/test-module-two-components.module#TestTwoComponentModule'
    },
    {
      components: [],
      module: 'src/app/test-modules/test-module-two-components/test-module-two-components.module'
    },
    {
      components: [],
      module: './src/app/test-modules/test-module-one-component/test-module-one-component.module'
    }
  ]
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStorybookModule.forRoot(storyConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
