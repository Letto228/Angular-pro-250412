import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FirstPageComponent implements DoCheck {

  counter = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this.counter += 1;
      // this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  detach() {
    this.changeDetectorRef.detach()
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }

  reattach() {
    this.changeDetectorRef.reattach();
  }

}
