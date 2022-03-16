import { Component } from '@angular/core';
import { StoryBookLoaderService } from '../story-book/story-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './story-book.component.html'
})
export class StoryBookComponent {
  title = 'storybook';

  constructor(private moduleService: StoryBookLoaderService) {
    console.log('init storybook component');
  }
}
