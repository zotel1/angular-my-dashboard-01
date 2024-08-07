import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title [title]="currentFramework()"] />

  <pre> {{framewokAsSignal() | json }} </pre>
  <pre> {{ framewokAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {


    public currentFramework = computed(
        () => `Change detection - ${ this.framewokAsSignal().name}`
    )

    public framewokAsSignal = signal({
        name: 'Angular',
        releaseDate: 2016,
    });
    public framewokAsProperty = {
        name: 'Angular',
        releaseDate: 2016,
    }

    constructor() {
        setTimeout(() => {

         //   this.framewokAsProperty.name = 'React';
         this.framewokAsSignal.update( value => ({
            ...value,
            name: 'React'
         }))

            console.log('Hecho')
        }, 3000);
    }

}
