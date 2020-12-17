import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { BusComponent } from './_components/bus/bus.component'
import { SettingsComponent } from './_components/_navigation/navbar/settings/settings.component'
import { ProfileComponent } from './_components/_navigation/navbar/profile/profile.component'
import { HelpComponent } from './_components/_navigation/navbar/help/help.component'
import { ExportComponent } from './_components/export/export.component'
import { BeaconComponent } from './_components/beacon/beacon.component'
import { WeatherComponent } from './_components/weather/weather.component'
import { QuestionnairesComponent } from './_components/questionnaires/questionnaires.component'
import { EditComponent } from './_components/questionnaires/edit/edit.component';
import { Questionnaire } from './_model/questionnaire';
import { LoginComponent } from './_components/_navigation/navbar/profile/login/login.component';
import {CommunicationComponent} from "./_components/communication/communication.component";
import { ViewComponent } from "./_components/communication/view/view.component";
import { NewMessageComponent } from "./_components/communication/new-message/new-message.component";
import { AuthGuard } from './_guards/auth-guard';
import { StewardComponent } from './_components/steward/steward.component';
import {Message} from "./_model/message";
import {MonitorComponent} from './_components/monitor/monitor.component';
import {NewComponent} from './_components/questionnaires/new/new.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'bus', component: BusComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
  { path: 'export', component: ExportComponent, canActivate: [AuthGuard] },
  { path: 'beacon', component: BeaconComponent, canActivate: [AuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'questionnaire/editQuestionnaire', component: EditComponent, canActivate: [AuthGuard],  data: { questionnaire: Questionnaire }},
  { path: 'questionnaire', component: QuestionnairesComponent, canActivate: [AuthGuard] },
  { path: 'steward', component: StewardComponent, canActivate: [AuthGuard]},
  { path: 'communication', component: CommunicationComponent, canActivate:[AuthGuard]},
  { path: 'communication/viewMessage', component: ViewComponent, canActivate: [AuthGuard]},
  { path: 'communication/newMessage', component: NewMessageComponent, canActivate: [AuthGuard]},
  {path: 'monitoring', component: MonitorComponent, canActivate: [AuthGuard]},
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'questionnaire/new', component: NewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
