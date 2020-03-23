import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() {
  }

  isUpdateAvailable() {
    return new Promise<boolean>((resolve, reject) => {
      // lazy way of disabling service workers while developing
      if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
        // register service worker file
        navigator.serviceWorker.register('service-worker.js')
          .then(reg => {
            reg.onupdatefound = () => {
              const installingWorker = reg.installing;
              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case 'installed':
                    if (navigator.serviceWorker.controller) {
                      // new update available
                      resolve(true);
                    } else {
                      // no update available
                      resolve(false);
                    }
                    break;
                }
              };
            };
          })
          .catch(err => console.error('[SW ERROR]', err));
      }
    });
  }
}
