import { Inject, Injectable } from '@angular/core';
import { IStoryConfig } from '../types/config';
import { MODULE_LOADER } from './module-loader-token';

@Injectable()
export class StoryBookLoaderService {
  constructor(@Inject(MODULE_LOADER) private config: IStoryConfig) {
    console.log('load modules and components')
    console.log(this.config)
  }
}
