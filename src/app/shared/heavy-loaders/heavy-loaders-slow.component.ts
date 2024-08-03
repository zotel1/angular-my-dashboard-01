import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Hola mundo</h1>
  `
})
export class HeavyLoadersSlowComponent {

}
