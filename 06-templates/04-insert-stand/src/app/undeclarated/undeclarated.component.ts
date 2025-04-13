import { Component, InjectionToken, ProviderToken, inject } from '@angular/core';
import { nameToken } from '../name-token';

@Component({
  selector: 'app-undeclarated',
  templateUrl: './undeclarated.component.html',
  styleUrls: ['./undeclarated.component.css']
})
export class UndeclaratedComponent {
  readonly name = inject(nameToken, {optional: true})
}
