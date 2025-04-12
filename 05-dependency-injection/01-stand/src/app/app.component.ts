import { Component, inject, InjectionToken, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stand';

  constructor() {
    // Tokens

    // Bad
    // const token = 123;
    // const token = 'str';
    
    // Norm
    // const token = {};

    // Best
    const token = new InjectionToken<unknown>('This test token');
    class Token {
      private readonly tokenValue = inject(token);

      constructor() {
        console.log(this.tokenValue);
      }
    };
    const copyToken = new InjectionToken('This copy');
    const universalToken = new InjectionToken('Universal token');

    const parentInjector = Injector.create({providers: [
      {
        provide: token,
        useValue: 'Test',
      },
    ]})
    const injector = Injector.create({parent: parentInjector, providers: [
      // {
      //   provide: token,
      //   useValue: 'New',
      // },

      // {
      //   provide: Token,
      //   useClass: Token
      // },
      Token,

      {
        provide: copyToken, // токен - псевдоним
        useExisting: Token, // token
      },

      {
        provide: universalToken,
        // useFactory: () => 'Test',
        // useFactory: () => new Token(),
        useFactory: () => inject(token),
      }
    ]});

    console.log(
      injector.get(token),
    )
    // console.log(
    //   injector.get(Token),
    //   injector.get(copyToken),
    //   injector.get(Token) === injector.get(copyToken),
    //   injector.get(universalToken),
    // )
  }
}
