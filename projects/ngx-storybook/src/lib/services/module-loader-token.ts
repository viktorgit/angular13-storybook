import { InjectionToken } from '@angular/core';
import { IStoryConfig } from '../types/config';

export const MODULE_LOADER = new InjectionToken<IStoryConfig>('module load token');
