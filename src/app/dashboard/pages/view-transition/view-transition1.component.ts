import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="View Transition 1"/>
  <section class="flex justify-start">
    <img 
    src="assets/atenea.jpeg"
    alt="Perrita-linda"
    width="200"
    height="300"
    style="view-transition-name: hero1;"
    />
    <div
    class="bg-blue-500 w-56 h-56"
    style="view-transition-name: hero2;"
    >
    </div>
  </section>
  `
})
export default class ViewTransitionComponent {

}
