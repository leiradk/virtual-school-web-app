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
import { TeacherStaffComponent } from "./components/dashboard/admin/content/list-page/teacher-staff/teacher-staff.component";
import { ListPageComponent } from "./components/dashboard/admin/content/list-page/list-page.component";
import { StudentsComponent } from "./components/dashboard/admin/content/list-page/students/students.component";
import { ContentComponent } from "./components/dashboard/admin/content/content.component";
import { NavbarComponent } from "./components/dashboard/admin/navbar/navbar.component";
import { SidebarComponent } from "./components/dashboard/admin/sidebar/sidebar.component";
import { MainPageComponent } from "./components/dashboard/admin/content/main-page/main-page.component";
import { ClasslistComponent } from './components/dashboard/admin/content/list-page/classlist/classlist.component';
import { ParentListComponent } from './components/dashboard/admin/content/list-page/parent-list/parent-list.component';
import { SubjectComponent } from './components/dashboard/admin/content/list-page/subject/subject.component';
import { LoadingSpinnerComponent } from './components/ui/loading-spinner/loading-spinner.component';
import { TeacherComponent } from './components/dashboard/teacher/teacher.component';
import { TeacherContentComponent } from './components/dashboard/teacher/teacher-content/teacher-content.component';
import { TeacherSidebarComponent } from './components/dashboard/teacher/teacher-sidebar/teacher-sidebar.component';
import { TeacherNavbarComponent } from './components/dashboard/teacher/teacher-navbar/teacher-navbar.component';
import { TeacherMainComponent } from './components/dashboard/teacher/teacher-content/teacher-main/teacher-main.component';
import { ClassDetailsComponent } from './components/dashboard/teacher/teacher-content/class-details/class-details.component';
import { ClassHomeComponent } from './components/dashboard/teacher/teacher-content/class-details/class-home/class-home.component';
import { ClassReminderComponent } from './components/dashboard/teacher/teacher-content/class-details/class-home/class-reminder/class-reminder.component';
import { ClassPostComponent } from './components/dashboard/teacher/teacher-content/class-details/class-home/class-post/class-post.component';
<<<<<<< HEAD
import { ClassworkComponent } from './components/dashboard/teacher/teacher-content/class-details/classwork/classwork.component';
import { CheckStudentsComponent } from './components/dashboard/teacher/teacher-content/class-details/check-students/check-students.component';
=======
import { IonicModule } from '@ionic/angular';
>>>>>>> 497ee722c740ff82b794e5555e0a86d0618889aa
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
    SubjectComponent,
    LoadingSpinnerComponent,
    TeacherComponent,
    TeacherContentComponent,
    TeacherSidebarComponent,
    TeacherNavbarComponent,
    TeacherMainComponent,
    ClassDetailsComponent,
    ClassHomeComponent,
    ClassReminderComponent,
    ClassPostComponent,
    ClassworkComponent,
    CheckStudentsComponent,
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
    BrowserAnimationsModule,
    IonicModule.forRoot()
  ],
  providers: [ ApiHostService, SystemUtils],
  bootstrap: [AppComponent],
})
export class AppModule {}
