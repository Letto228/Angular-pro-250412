import { Component, ElementRef, ViewChild } from '@angular/core';
import { customToken, ZooComponent } from './zoo/zoo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentchildren-by-service';

  // @ViewChild('zooComponent')
  // value: ZooComponent | undefined;
  @ViewChild(ZooComponent)
  value: ZooComponent | undefined;
  // @ViewChild(customToken)
  // value: ZooComponent | undefined;

  @ViewChild(ZooComponent, {read: ElementRef})
  set valueElement(value: ElementRef | undefined) {
    console.log(value?.nativeElement);
  };

  constructor() {
    setTimeout(() => {
      console.log(this.value);
    }, 1000);
  }
}
