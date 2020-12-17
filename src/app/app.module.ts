import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ChartsModule, ThemeService} from 'ng2-charts';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DatePipe} from '@angular/common';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_components/_app/app.component';
import { NavbarComponent } from './_components/_navigation/navbar/navbar.component';
import { SidebarComponent } from './_components/_navigation/sidebar/sidebar.component';
import { PlaceholderComponent } from './_components/dashboard/userInfo/userInfo.component';
import { ActivityComponent } from './_components/dashboard/activity/activity.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { BusComponent } from './_components/bus/bus.component';
import { SettingsComponent } from './_components/_navigation/navbar/settings/settings.component';
import { ProfileComponent } from './_components/_navigation/navbar/profile/profile.component';
import { HelpComponent } from './_components/_navigation/navbar/help/help.component';
import { ExportComponent } from './_components/export/export.component';
import { BeaconComponent } from './_components/beacon/beacon.component';
import { LoadingComponent } from './_components/_core/loading.component';
import { LineChartComponent } from './_components/bus/linechart/linechart.component';
import { WeatherComponent } from './_components/weather/weather.component';
import { QuestionnairesComponent } from './_components/questionnaires/questionnaires.component';
import { EditComponent } from './_components/questionnaires/edit/edit.component';
import { PiechartComponent } from './_components/questionnaires/edit/piechart/piechart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './_components/questionnaires/edit/dialog/dialog.component';
import { LoginComponent } from './_components/_navigation/navbar/profile/login/login.component';
import { AuthGuard } from './_guards/auth-guard';
import { AuthenticationService } from './_services/authentication.service';
import { AuthInterceptor } from './_guards/auth-interceptor';
import { UserInfoStore } from './_services/mobx/user-info.store';
import { CommunicationComponent } from './_components/communication/communication.component';
import { ViewComponent } from './_components/communication/view/view.component';
import { NewMessageComponent } from './_components/communication/new-message/new-message.component';
import { ConfirmMessagePopupComponent } from './_components/communication/new-message/confirm-message-popup/confirm-message-popup.component';
import { StewardComponent } from './_components/steward/steward.component';
import { CategoryComponent } from './_components/steward/category/category.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EditCategoryComponent } from './_components/steward/edit-category/edit-category.component';
import { MapComponent } from './_components/bus/map/map.component';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import { TableInstanceComponent } from './_components/table-instance/table-instance.component';
import { MonitorComponent } from './_components/monitor/monitor.component';
import { NewComponent } from './_components/questionnaires/new/new.component';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    PlaceholderComponent,
    ActivityComponent,
    DashboardComponent,
    BusComponent,
    SettingsComponent,
    ProfileComponent,
    HelpComponent,
    ExportComponent,
    BeaconComponent,
    LoadingComponent,
    LineChartComponent,
    WeatherComponent,
    QuestionnairesComponent,
    EditComponent,
    PiechartComponent,
    DialogComponent,
    LoginComponent,
    CommunicationComponent,
    ViewComponent,
    NewMessageComponent,
    ConfirmMessagePopupComponent,
    StewardComponent,
    CategoryComponent,
    EditCategoryComponent,
    MapComponent,
    TableInstanceComponent,
    MonitorComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MobxAngularModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatExpansionModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidGhldG91Y2FuIiwiYSI6ImNqeXkyc3FleTFhcm8zY255bWt1ZTZoc2EifQ.F37Sf5Lwi585EtWdUWtIcA'
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  entryComponents: [
    DialogComponent, ConfirmMessagePopupComponent, EditCategoryComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserInfoStore,
    DatePipe,
    ThemeService,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
