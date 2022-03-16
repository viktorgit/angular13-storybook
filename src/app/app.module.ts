import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryBookModule } from './storybook/core/story-book/story-book.module';
import { IStoryConfig } from './storybook/core/types/config';

const storyConfig: IStoryConfig = {
  modules: []
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoryBookModule.forRoot(storyConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
