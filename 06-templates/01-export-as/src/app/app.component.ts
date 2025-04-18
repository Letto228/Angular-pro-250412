import { Component, ViewChild } from '@angular/core';
import { ColoryDirective } from './colory.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ColoryDirective)
  coloryDirective: ColoryDirective | undefined;
}
