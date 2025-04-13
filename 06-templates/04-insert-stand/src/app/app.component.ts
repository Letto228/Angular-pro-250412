import { Component, inject, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { from } from 'rxjs';
import { nameToken } from './name-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: nameToken, useValue: 'Egor Sidorov'}
  ]
})
export class AppComponent {
  readonly appInjector = inject(Injector);
  readonly component$ = from(
    import('./undeclarated/undeclarated.component').then(m => m.UndeclaratedComponent),
  );

  title = 'insert-stand';

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  // onClickComponent() {
  //   // this.container.createComponent(DeclaratedComponent);
  //   const injector = Injector.create({
  //     parent: this.appInjector,
  //     providers: [
  //       {provide: nameToken, useValue: 'Egor Sidorov'}
  //     ],
  //   })
  //   const componentRef = this.container.createComponent(UndeclaratedComponent, {injector});

  //   // componentRef.setInput();
  // }

  onClickTemplate(template: TemplateRef<{$implicit: string, name: string, city: string}>) {
    this.container.createEmbeddedView(template, {
      $implicit: 'Test',
      name: 'Egor',
      city: 'Moscow',
    });
  }

  onClickClear() {
    this.container.clear();
  }

}
