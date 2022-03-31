import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [{
//   path: 'story',
//   loadChildren: () => import('./storybook/core/story-book/story-book.module').then(m => m.TestStoryBookModule)
// }];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
