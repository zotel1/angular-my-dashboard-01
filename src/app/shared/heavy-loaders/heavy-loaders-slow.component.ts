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

    constructor() {

        // En la vida real no deberiamos hacer esto
        const start = Date.now();
        while( Date.now() - start < 3000) {}

        console.log('Cargado')
        
    }

}
