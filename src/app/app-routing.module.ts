import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StartComponent } from './pages/game/start/start.component';
import { CheckListComponent } from './pages/game/check-list/check-list.component';
import { InstructionComponent } from './pages/game/instruction/instruction.component';
import { ElectionComponent } from './pages/game/election/election.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game/start', component: StartComponent },
  { path: 'game/check-list', component: CheckListComponent },
  { path: 'game/instruction', component: InstructionComponent },
  { path: 'game/election', component: ElectionComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
