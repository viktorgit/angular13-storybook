import { NgModule } from '@angular/core';
import { TestFirstComponent } from '../test-module-one-component/test-first.component';
import { TestSecondComponent } from './components/two/test-second.component';

@NgModule({
  declarations: [TestFirstComponent, TestSecondComponent],
  exports: [TestFirstComponent, TestSecondComponent]
})
export class TestTwoComponentModule { }