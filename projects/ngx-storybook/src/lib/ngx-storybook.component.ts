import { Component, OnInit } from '@angular/core';
import { NgxStorybookService } from './services/ngx-storybook.service';

@Component({
  selector: 'lib-ngx-storybook',
  templateUrl: './ngx-storybook.component.html',
  styles: [
  ]
})
export class NgxStorybookComponent implements OnInit {

  constructor(private storybookService: NgxStorybookService) { }

  ngOnInit(): void {
  }

}
