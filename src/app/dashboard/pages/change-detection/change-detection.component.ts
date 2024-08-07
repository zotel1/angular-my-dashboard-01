import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title title="Change Detection" />

  <pre> {{framewokAsSignal() | json }} </pre>
  <pre> {{ framewokAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {

    public framewokAsSignal = signal({
        name: 'Angular',
        releaseDate: 2016,
    })
    public framewokAsProperty = {
        name: 'Angular',
        releaseDate: 2016,
    }

    constructor() {
        setTimeout(() => {

            this.framewokAsProperty.name = 'React';

            console.log('Hecho')
        }, 3000);
    }

}
