import { Component, ContentChildren, InjectionToken, QueryList } from '@angular/core';

export const customToken = new InjectionToken('Custom token for ZooComponent')

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  providers: [
    {
      provide: customToken,
      useExisting: ZooComponent,
    },
    {
      provide: 'zooComponent',
      useValue: 'Test',
    }
  ]
})
export class ZooComponent {}
