import { Component, AfterViewInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { UpdateService } from './services/update/update.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(
    public platform: Platform,
    public updateService: UpdateService,
    private _snackBar: MatSnackBar
  ) {
  }

  async ngAfterViewInit() {
    if (await this.updateService.isUpdateAvailable()) {
      this._snackBar.open("New update available!", "Ok", {
        duration: 5000,
        verticalPosition: "bottom"
      });
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
