import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";
// import { Http, HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule} from "ngx-toastr";
//services
import { ApiHostService } from "./services/api-host.service";
import { SystemUtils } from "./services/system.utils";

//components
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginComponent } from "./components/landing-page/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TeacherStaffComponent } from "./components/dashboard/content/list-page/teacher-staff/teacher-staff.component";
import { ListPageComponent } from "./components/dashboard/content/list-page/list-page.component";
import { StudentsComponent } from "./components/dashboard/content/list-page/students/students.component";
import { ContentComponent } from "./components/dashboard/content/content.component";
import { NavbarComponent } from "./components/dashboard/navbar/navbar.component";
import { SidebarComponent } from "./components/dashboard/sidebar/sidebar.component";
import { MainPageComponent } from "./components/dashboard/content/main-page/main-page.component";
import { ClasslistComponent } from './components/dashboard/content/list-page/classlist/classlist.component';
import { ParentListComponent } from './components/dashboard/content/list-page/parent-list/parent-list.component';
import { SubjectComponent } from './components/dashboard/content/list-page/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    TeacherStaffComponent,
    ListPageComponent,
    StudentsComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    MainPageComponent,
    ClasslistComponent,
    ParentListComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    // HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ ApiHostService, SystemUtils],
  bootstrap: [AppComponent],
})
export class AppModule {}
