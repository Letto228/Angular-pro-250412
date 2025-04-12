import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {
  // `preload` вызывается для каждого лениво загружаемого пути, кроме того, что уже загружен
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data?.['needPreload']) {
        // если хотим предзагрузить чанк - возвращаем из метода результат вызова функции полученной во втором аргументе метода `preload` - `load()`
        // return load();
        return timer(5000).pipe(switchMap(() => load()));
    }

    // если предзагрузка не требуется - возвращаем поток с `null` - `of(null)`
    // return of(null);
    return EMPTY;
  }
}
