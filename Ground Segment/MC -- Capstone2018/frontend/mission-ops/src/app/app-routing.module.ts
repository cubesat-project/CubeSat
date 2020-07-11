import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelecommandsComponent } from './telecommands/telecommands.component';
import { LoginComponent } from './login/login.component';
import { TelecommandBatchesComponent } from './telecommand-batches/telecommand-batches.component';
import { QueuesComponent } from './queues/queues.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LogoutComponent } from './logout/logout.component';
import { ChartComponent } from './chart/chart.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { UsersComponent } from './users/users.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { CubesatSysInputsComponent } from './cubesat-sys-inputs/cubesat-sys-inputs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnomalySubscriptionComponent } from './anomaly-subscription/anomaly-subscription.component';
import { AnomalyTableComponent } from './anomaly-table/anomaly-table.component';
import { MediaLibraryComponent } from './media-library/media-library.component';
import { MediaViewComponent } from './media-view/media-view.component';

import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { AntiAuthGuardService } from 'src/app/services/anti-auth-guard/anti-auth-guard.service';
import { AdminGuardService } from 'src/app/services/admin-guard/admin-guard.service';
import { AdminOrSelfGuardService } from 'src/app/services/admin-or-self-guard/admin-or-self-guard.service';

const routes: Routes = [
  { path : '', component: HomePageComponent },
  { path : 'telecommands', component: TelecommandsComponent/*, canActivate: [AuthGuardService] */},
  { path : 'telecommandBatches', component: TelecommandBatchesComponent/*, canActivate: [AuthGuardService] */},
  { path : 'queue', component: QueuesComponent/*, canActivate: [AuthGuardService] */},
  { path : 'login', component: LoginComponent/*, canActivate: [AntiAuthGuardService] */},
  { path : 'users/create', component: CreateUserComponent, canActivate: [] },
  { path : 'error/access-denied', component: AccessDeniedComponent },
  { path : 'logout', component: LogoutComponent/*, canActivate: [AuthGuardService] */},
  { path : 'chart', component: ChartComponent },
  { path: 'telemetry', component: ComponentListComponent/*, canActivate: [AuthGuardService] */},
  { path : 'users', component: UsersComponent/*, canActivate: [AuthGuardService, AdminGuardService] */},
  { path : 'users/edit', component: ModifyUserComponent/*, canActivate: [AuthGuardService, AdminOrSelfGuardService] */},
  { path : 'system-inputs', component: CubesatSysInputsComponent/*, canActivate: [AuthGuardService, AdminGuardService] */},
  { path : 'anomaly-subscription', component: AnomalySubscriptionComponent },
  { path : 'anomalies', component: AnomalyTableComponent },
  { path : 'payloadData', component: MediaLibraryComponent },
  { path : 'payloadData/view', component: MediaViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
