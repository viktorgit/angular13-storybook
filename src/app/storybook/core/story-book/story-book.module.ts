import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryBookComponent } from '../story-book-component/story-book.component';
import { IStoryConfig } from '../types/config';
import { MODULE_LOADER } from './module-loader-token';
import { StoryBookLoaderService } from './story-book.service';

const routes: Routes = [{
  path: '',
  component: StoryBookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [StoryBookComponent],
  bootstrap: [StoryBookComponent]
})
export class StoryBookModule {
  static forRoot(config: IStoryConfig): ModuleWithProviders<StoryBookModule> {
    return {
      ngModule: StoryBookModule,
      providers: [
        StoryBookLoaderService,
        {
          provide: MODULE_LOADER,
          useValue: config
        }]
    }
  }
}
