import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-hello',
  template: `
    <h1 class="bg">Hello {{name}}!</h1>
  `,
  styles: [
    `
    h1 { font-family: Lato; }
  `,
  ],
})
export class HelloComponent {
  @Input() name: string;
}
