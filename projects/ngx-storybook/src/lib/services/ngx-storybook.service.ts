import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';
import { IStoryConfig } from '../types/config';
import { MODULE_LOADER } from './module-loader-token';

@Injectable()
export class NgxStorybookService {
  private lazyMap: Map<string, Promise<unknown>> = new Map();

  constructor(
    @Inject(MODULE_LOADER) private config: IStoryConfig,
    private router: Router
  ) {
    console.log('load modules and components')
    console.log(this.config)
  }

  getLazyModule(key: string): Promise<unknown> {
    return this.lazyMap.get(key) as Promise<unknown>;
  }

  loadLazyModules(moduleUrl: string): Observable<number | void> {
    return of(1).pipe(
      delay(2000),
      tap(() => {
        this.lazyMap.set(
          'lazy',
          import(moduleUrl).then(m => m.LazyModule)
        );
      })
    );
  }

  loadLazyModule(url: string): void {
    this.loadLazyModules(url).subscribe(() => {
      const config = this.router.config;
      config.push({
        path: 'lazy',
        loadChildren: () => this.getLazyModule('lazy')
      });
      this.router.resetConfig(config);
      this.router.navigate([url ? url : 'lazy']);
      // this.routes = this.router.config;
    });
  }
}
