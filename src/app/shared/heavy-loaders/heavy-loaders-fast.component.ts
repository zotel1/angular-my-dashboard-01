import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import DashboardComponent from "../../dashboard/dashboard.component";
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule, DashboardComponent, TitleComponent],
  template: `
  <section [ngClass]="['w-full', cssClass]">

  <ng-component />
  </section>
  `
})
export class HeavyLoadersFastComponent {

    @Input({ required: true }) cssClass!: string;

    constructor() {
        console.log('Heavy LoaderFast Creado')
    }

}
