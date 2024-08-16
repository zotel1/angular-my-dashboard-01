import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="User"/>

  @if(user()) {
    <section>
        <img [srcset]="user()!.avatar"
        [alt]="user()!.first_name">/
    </section>

  } @else {<p>Cargando información</p>
    }
  `
})
export default class UserComponent {
    private route = inject( ActivatedRoute );

    public user = signal<User | undefined>(undefined)

   // constructor() {
     //   console.log()
   // }
}
