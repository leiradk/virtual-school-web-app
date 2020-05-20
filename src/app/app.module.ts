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
import { IonicModule } from '@ionic/angular';

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
import { TeacherComponent } from './components/dashboard/user/teacher/teacher.component';
import { TeacherContentComponent } from './components/dashboard/user/teacher/teacher-content/teacher-content.component';
import { TeacherSidebarComponent } from './components/dashboard/user/teacher/teacher-sidebar/teacher-sidebar.component';
import { TeacherNavbarComponent } from './components/dashboard/user/teacher/teacher-navbar/teacher-navbar.component';
import { TeacherMainComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-main.component';
// import { ClassDetailsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-details.component';
// import { ClassHomeComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-home/class-home.component';
// import { ClassReminderComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-home/class-reminder/class-reminder.component';
// import { ClassPostComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-home/class-post/class-post.component';
// import { ClassworkComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/classwork.component';
// import { CheckStudentsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/check-students/check-students.component';
import { StudentComponent } from './components/dashboard/user/student/student.component';
import { StudentNavbarComponent } from './components/dashboard/user/student/student-navbar/student-navbar.component';
import { StudentSidebarComponent } from './components/dashboard/user/student/student-sidebar/student-sidebar.component';
import { StudentContentComponent } from './components/dashboard/user/student/student-content/student-content.component';
import { StudentMainComponent } from './components/dashboard/user/student/student-content/student-main/student-main.component';
import { StudentInvitationsComponent } from './components/dashboard/user/student/student-content/student-invitations/student-invitations.component';
import { Error404Component } from './components/ui/error404/error404.component';
import { ClassroomComponent } from './components/dashboard/user/student/student-content/classroom/classroom.component';
import { LoadingBarComponent } from './components/ui/loading-bar/loading-bar.component';
// import { LessonsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/lessons/lessons.component';
// import { DetailsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/details/details.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { QuizzesComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/quizzes/quizzes.component';
// import { WorkViewComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/work-view/work-view.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { UserSidebarComponent } from './components/dashboard/user/user-sidebar/user-sidebar.component';
import { UserNavbarComponent } from './components/dashboard/user/user-navbar/user-navbar.component';
import { RoomDetailsComponent } from './components/dashboard/user/room-details/room-details.component';
import { TeacherSideComponent } from './components/dashboard/user/room-details/teacher-side/teacher-side.component';
import { StudentSideComponent } from './components/dashboard/user/room-details/student-side/student-side.component';
import { TeacherHomeComponent } from './components/dashboard/user/room-details/teacher-side/teacher-home/teacher-home.component';
import { AssignWorkComponent } from './components/dashboard/user/room-details/teacher-side/assign-work/assign-work.component';
import { InviteUsersComponent } from './components/dashboard/user/room-details/teacher-side/invite-users/invite-users.component';
import { PostsComponent } from './components/dashboard/user/room-details/teacher-side/teacher-home/posts/posts.component';
import { RemindersComponent } from './components/dashboard/user/room-details/teacher-side/teacher-home/reminders/reminders.component';
import { AssignDetailsComponent } from './components/dashboard/user/room-details/teacher-side/assign-work/assign-details/assign-details.component';
import { AssignLessonsComponent } from './components/dashboard/user/room-details/teacher-side/assign-work/assign-lessons/assign-lessons.component';
import { AssignQuizzesComponent } from './components/dashboard/user/room-details/teacher-side/assign-work/assign-quizzes/assign-quizzes.component';
import { ViewWorkDetailsComponent } from './components/dashboard/user/room-details/teacher-side/assign-work/view-work-details/view-work-details.component';
import { StudentHomeComponent } from './components/dashboard/user/room-details/student-side/student-home/student-home.component';
import { CheckPostComponent } from './components/dashboard/user/room-details/student-side/student-home/check-post/check-post.component';
import { CheckRemindersComponent } from './components/dashboard/user/room-details/student-side/student-home/check-reminders/check-reminders.component';
import { CheckUsersComponent } from './components/dashboard/user/room-details/student-side/check-users/check-users.component';
import { CheckWorkComponent } from './components/dashboard/user/room-details/student-side/check-work/check-work.component';
import { CheckDetailsComponent } from './components/dashboard/user/room-details/student-side/check-work/check-details/check-details.component';
import { CheckClassWorkComponent } from './components/dashboard/user/room-details/student-side/check-work/check-class-work/check-class-work.component';

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
    // ClassDetailsComponent,
    // ClassHomeComponent,
    // ClassReminderComponent,
    // ClassPostComponent,
    // ClassworkComponent,
    // CheckStudentsComponent,
    StudentComponent,
    StudentNavbarComponent,
    StudentSidebarComponent,
    StudentContentComponent,
    StudentMainComponent,
    StudentInvitationsComponent,
    Error404Component,
    ClassroomComponent,
    LoadingBarComponent,
    // LessonsComponent,
    // DetailsComponent,
    // QuizzesComponent,
    // WorkViewComponent,
    UserComponent,
    UserSidebarComponent,
    UserNavbarComponent,
    RoomDetailsComponent,
    TeacherSideComponent,
    StudentSideComponent,
    TeacherHomeComponent,
    AssignWorkComponent,
    InviteUsersComponent,
    PostsComponent,
    RemindersComponent,
    AssignDetailsComponent,
    AssignLessonsComponent,
    AssignQuizzesComponent,
    ViewWorkDetailsComponent,
    StudentHomeComponent,
    CheckPostComponent,
    CheckRemindersComponent,
    CheckUsersComponent,
    CheckWorkComponent,
    CheckDetailsComponent,
    CheckClassWorkComponent,
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
    IonicModule.forRoot(),
    RichTextEditorAllModule,
    NgbModule,
  ],
  providers: [ ApiHostService, SystemUtils],
  bootstrap: [AppComponent],
})
export class AppModule {}
