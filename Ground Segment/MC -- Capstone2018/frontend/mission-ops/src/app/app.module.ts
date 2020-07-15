import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // TODO: Before deployment, maybe refine this to only the modules we need to reduce package size
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighchartsChartModule } from 'highcharts-angular';
import { ToastrModule } from 'ngx-toastr';
import { MomentModule } from 'ngx-moment';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from '@danielmoncada/angular-datetime-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelecommandsComponent } from './telecommands/telecommands.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TelecommandDetailsComponent } from './telecommand-details/telecommand-details.component';
import { TelecommandBatchesComponent } from './telecommand-batches/telecommand-batches.component';
import { TelecommandBatchDetailsComponent } from './telecommand-batch-details/telecommand-batch-details.component';
import { QueuesComponent } from './queues/queues.component';
import { ExecutionQueueComponent } from './execution-queue/execution-queue.component';
import { TransmissionQueueComponent } from './transmission-queue/transmission-queue.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AlertComponent } from './alert/alert.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ModalComponent } from './modal/modal.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LogoutComponent } from './logout/logout.component';
import { ChartComponent } from './chart/chart.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentTelemetryComponent } from './component-telemetry/component-telemetry.component';
import { TelemetryDataComponent } from './telemetry-data/telemetry-data.component';
import { UsersComponent } from './users/users.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QueuedTelecommandComponent } from './queued-telecommand/queued-telecommand.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { CreateSystemComponent } from './create-system/create-system.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { CreateComponentTelemetryComponent } from './create-component-telemetry/create-component-telemetry.component';
import { CubesatSysInputsComponent } from './cubesat-sys-inputs/cubesat-sys-inputs.component';
import { CreateQueuedTelecommandComponent } from './create-queued-telecommand/create-queued-telecommand.component';
import { DatetimePickerComponent } from './datetime-picker/datetime-picker.component';
import { PresetTelecommandDetailsComponent } from './preset-telecommand-details/preset-telecommand-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnomalySubscriptionComponent } from './anomaly-subscription/anomaly-subscription.component';
import { TelecommandDropdownComponent } from './telecommand-dropdown/telecommand-dropdown.component';
import { CreatePassComponent } from './create-pass/create-pass.component';
import { AnomalyTableComponent } from './anomaly-table/anomaly-table.component';
import { PanoramaViewerComponent } from './panorama-viewer/panorama-viewer.component';
import { MediaLibraryComponent } from './media-library/media-library.component';
import { MediaViewComponent } from './media-view/media-view.component';
import { SortableDirective } from 'src/app/services/anomalies/sortable.directive';
import { CreateTelemetryTypeComponent } from './create-telemetry-type/create-telemetry-type.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TelecommandsComponent,
    HeaderComponent,
    LoginComponent,
    TelecommandDetailsComponent,
    TelecommandBatchesComponent,
    TelecommandBatchDetailsComponent,
    QueuesComponent,
    ExecutionQueueComponent,
    TransmissionQueueComponent,
    CreateUserComponent,
    AlertComponent,
    NewPasswordComponent,
    ModalComponent,
    AccessDeniedComponent,
    LogoutComponent,
    QueuedTelecommandComponent,
    ChartComponent,
    ComponentListComponent,
    ComponentTelemetryComponent,
    TelemetryDataComponent,
    UsersComponent,
    PaginationComponent,
    ModifyUserComponent,
    CreateSystemComponent,
    CreateComponentComponent,
    CreateComponentTelemetryComponent,
    CubesatSysInputsComponent,
    CreateQueuedTelecommandComponent,
    DatetimePickerComponent,
    PresetTelecommandDetailsComponent,
    HomePageComponent,
    AnomalySubscriptionComponent,
    TelecommandDropdownComponent,
    CreatePassComponent,
    AnomalyTableComponent,
    PanoramaViewerComponent,
    MediaLibraryComponent,
    MediaViewComponent,
    SortableDirective,
    CreateTelemetryTypeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    MomentModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateSystemComponent, 
    CreateComponentComponent,
    CreateComponentTelemetryComponent,
    CreateQueuedTelecommandComponent,
    CreatePassComponent,
    CreateTelemetryTypeComponent,
  ]
})
export class AppModule { }
