import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { StartComponent } from './pages/game/start/start.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PlatformModule} from '@angular/cdk/platform';
import { NotMobileComponent } from './pages/not-mobile/not-mobile.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { CheckListComponent } from './pages/game/check-list/check-list.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { InstructionComponent } from './pages/game/instruction/instruction.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ElectionComponent } from './pages/game/election/election.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    StartComponent,
    NotMobileComponent,
    CheckListComponent,
    GameHeaderComponent,
    InstructionComponent,
    ElectionComponent,
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PlatformModule,
    HttpClientModule,
    /*Angular Material*/
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
