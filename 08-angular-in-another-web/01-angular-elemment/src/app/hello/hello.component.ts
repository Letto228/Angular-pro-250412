import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  count = 0;
  @Input() name: string = '';

  @Output() submitClick = new EventEmitter<string>();

  constructor() {
    setInterval(() => {
      this.count += 1;
    }, 1000)
  }

  onClick() {
    this.submitClick.emit(this.name);
  }
}
