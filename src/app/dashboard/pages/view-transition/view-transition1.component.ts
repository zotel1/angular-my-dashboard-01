import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="View Transition 2"/>
  <section class="flex justify-start">
    <img 
    src="assets/atenea.jpeg"
    alt="Perrita-linda"
    width="200"
    height="300"
    />
  `
})
export default class ViewTransitionComponent {

}
