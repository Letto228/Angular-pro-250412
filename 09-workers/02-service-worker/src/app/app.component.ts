
import { Component, inject } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor() {
    const swUpdate = inject(SwUpdate);
    const swPush = inject(SwPush);

    swUpdate.versionUpdates
      .pipe(
        filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'),
      )
      .subscribe(event => {
        if (confirm('Есть новая версия приложения - обновить?')) {
          document.location.reload();
        }
      })

    // timer(1000 * 60 * 60)
    //   .pipe(
    //     switchMap(() => swUpdate.checkForUpdate()),
    //     filter(Boolean),
    //   )
    //   .subscribe(() => {
    //     if (confirm('Есть новая вресия приложения, перезагрузить?')) {
    //       document.location.reload();
    //     }
    //   });

    swPush.messages.subscribe(message => {
      console.log(message);
    });

    Notification.requestPermission().then(permissionResult => {
      if (permissionResult === 'granted') {
        console.log('Can show notifiacation')
      }
    });

    // swPush.requestSubscription({serverPublicKey}).then(pushSubscription => {

    // });
  }
}
