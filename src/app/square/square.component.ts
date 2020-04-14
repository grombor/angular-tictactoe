import { Component, Input } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: [ 
    'button {height:100%; width:100%}'
    ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
