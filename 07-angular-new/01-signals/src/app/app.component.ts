import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  get title() {
    console.log('Calculated CD');

    return 'signals';
  };

  get countValue(): number {
    return this.count();
  }

  // readonly count = signal(0, {equal: () => false});
  readonly count = signal(0);
  readonly doubleCount = computed(() => this.count() * 2);

  constructor() {
    // const count = signal(0);

    // console.log(this.count());

    // this.count.set(4);

    // console.log(this.count());

    // this.count.update(value => value + 1);

    // console.log(this.count());

    // setInterval(() => {
    //   this.count.update(value => value + 1);
    //   // this.count.set(4);
    // }, 1000);

    // ----------------------------------------

    // this.count.update(value => value + 1);
    // this.count.update(value => value + 1);
    // this.count.update(value => value + 1);

    // this.doubleCount(); // calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted

    // this.count.update(value => value + 1);

    // this.doubleCount(); // calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted
    // this.doubleCount(); // no calcualted

    // ----------------------------------------

    // const showCount = signal(false);
    // const count = signal(0);
    // const conditionalCount = computed(() => {
    //     console.warn('Computed calculated');

    //     return showCount() ? `The count: ${count()}` : `Nothing`;
    // });

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());
    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());
    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // // eslint-disable-next-line no-console
    // console.log('Update count');
    // count.update(count => count + 1);

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // // eslint-disable-next-line no-console
    // console.log('Update count');
    // count.update(count => count + 1);

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // // eslint-disable-next-line no-console
    // console.log('Update count');
    // count.update(count => count + 1);

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // // eslint-disable-next-line no-console
    // console.log('Show count: true');
    // showCount.set(true);

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());
    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());
    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // // eslint-disable-next-line no-console
    // console.log('Update count');
    // count.update(count => count + 1);

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // // eslint-disable-next-line no-console
    // console.log('Update count');
    // count.update(count => count + 1);

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // // eslint-disable-next-line no-console
    // console.log('Update count');
    // count.update(count => count + 1);

    // // eslint-disable-next-line no-console
    // console.log(conditionalCount());

    // ----------------------------------------

    setInterval(() => {
      this.count.update(value => value + 1);
    }, 1000);

    const effectRef = effect(onCleanup => {
      const countValue = this.count();

      onCleanup(() => {
        console.log('Cleanup', countValue, this.count());
      })

      console.log(`The current count: ${countValue}`);
    })
    // }, {injector})

    // effectRef.destroy();
  }
}
