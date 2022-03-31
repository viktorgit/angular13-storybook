import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentViewerComponent } from './component-viewer.component';

@NgModule({
  declarations: [
    ComponentViewerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ComponentViewerComponent]
})
export class ComponentViewerModule { }
