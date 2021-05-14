import { Component, Input } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <ion-auto-complete
      [(model)]="selected"
      [multi]="true"
      [dataProvider]="provider"
      [label]="'Your Team'"
      [labelPosition]="'floating'"
    ></ion-auto-complete>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  constructor(public provider: PeopleService) {}
}
