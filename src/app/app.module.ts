import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first


import '@fullcalendar/daygrid/main.css';

import { BrowserModule } from "@angular/platform-browser";
// import { Http, HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
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
import { ParentListComponent } from './components/dashboard/admin/content/list-page/parent-list/parent-list.component';
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
import { ArchivesComponent } from './components/dashboard/admin/content/list-page/archives/archives.component';
import { PeopleTabComponent } from './components/dashboard/user/room-details/teacher-side/invite-users/people-tab/people-tab.component';
import { TabsComponent } from './components/dashboard/user/room-details/teacher-side/invite-users/tabs/tabs.component';
import { TeacherStaffTabComponent } from './components/dashboard/user/room-details/teacher-side/invite-users/tabs/teacher-staff-tab/teacher-staff-tab.component';
import { ParentGuardianTabComponent } from './components/dashboard/user/room-details/teacher-side/invite-users/tabs/parent-guardian-tab/parent-guardian-tab.component';
import { StudentTabComponent } from './components/dashboard/user/room-details/teacher-side/invite-users/tabs/student-tab/student-tab.component';
import { VerificationComponent } from './components/verification/verification.component';
import { ClassGradesComponent } from './components/dashboard/user/room-details/teacher-side/class-grades/class-grades.component';
import { AddClassworkComponent } from './components/dashboard/user/room-details/teacher-side/assign-work/assign-details/add-classwork/add-classwork.component';
import { UpdateClassworkComponent } from './components/dashboard/user/room-details/teacher-side/assign-work/assign-details/update-classwork/update-classwork.component';
import { ParentComponent } from './components/dashboard/user/parent/parent.component';
import { UpdatePasswordComponent } from './components/verification/update-password/update-password.component';
import { UpdateProfileComponent } from './components/verification/update-profile/update-profile.component';
import { AddStudentComponent } from './components/verification/add-student/add-student.component';
import { ParentSideComponent } from './components/dashboard/user/room-details/parent-side/parent-side.component';
import { ParentMainComponent } from './components/dashboard/user/parent/parent-main/parent-main.component';
import { StudentRoomsComponent } from './components/dashboard/user/parent/student-rooms/student-rooms.component';
import { ParentHomeComponent } from './components/dashboard/user/room-details/parent-side/parent-home/parent-home.component';
import { CheckStudentClassworkComponent } from './components/dashboard/user/room-details/parent-side/check-student-classwork/check-student-classwork.component';
import { CheckStudentGradeComponent } from './components/dashboard/user/room-details/parent-side/check-student-grade/check-student-grade.component';
import { ProfileComponent } from './components/dashboard/admin/profile/profile.component';
import { StudentProfileComponent } from './components/dashboard/admin/profile/student-profile/student-profile.component';
import { ParentProfileComponent } from './components/dashboard/admin/profile/parent-profile/parent-profile.component';
import { NewStudentComponent } from './components/dashboard/user/parent/parent-main/new-student/new-student.component';
import { MaterialsComponent } from './components/dashboard/admin/content/materials/materials.component';
import { LibraryComponent } from './components/dashboard/user/student/student-content/library/library.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { MyTeachersComponent } from './components/dashboard/user/student/student-content/my-teachers/my-teachers.component';
import { MyBadgesComponent } from './components/dashboard/user/student/student-content/my-badges/my-badges.component';
import { MyAssignedClassesComponent } from './components/dashboard/user/teacher/teacher-content/my-assigned-classes/my-assigned-classes.component';
import { CalendarComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/assigned-events/calendar/calendar.component';
import { SetEventsComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/assigned-events/set-events/set-events.component';
import { LoadingLibraryComponent } from './components/ui/loading-library/loading-library.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { ClassAnnouncementsComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/class-announcements/class-announcements.component';
import { TeachingMaterialsComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teaching-materials/teaching-materials.component';
import { LessonPlanComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/lesson-plan/lesson-plan.component';
import { RecordComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/record/record.component';
import { AssignedEventsComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/assigned-events/assigned-events.component';
import { TeacherDashboardMainComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/teacher-dashboard-main.component';
import { StudentClassesComponent } from './components/dashboard/user/student/student-content/student-classes/student-classes.component';
import { StudentAssignedEventsComponent } from './components/dashboard/user/student/student-content/student-main/student-assigned-events/student-assigned-events.component';
import { StudentCalendarComponent } from './components/dashboard/user/student/student-content/student-main/student-assigned-events/student-calendar/student-calendar.component';
import { StudentSetEventsComponent } from './components/dashboard/user/student/student-content/student-main/student-assigned-events/student-set-events/student-set-events.component';
import { StudentClassAnnouncemetsComponent } from './components/dashboard/user/student/student-content/student-main/student-class-announcemets/student-class-announcemets.component';


import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';


import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { TeacherViewModulesComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-view-modules/teacher-view-modules.component';
import { MyGradesComponent } from './components/dashboard/user/room-details/student-side/my-grades/my-grades.component';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])
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
    ParentListComponent,
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
    ArchivesComponent,
    PeopleTabComponent,
    TabsComponent,
    TeacherStaffTabComponent,
    ParentGuardianTabComponent,
    StudentTabComponent,
    VerificationComponent,
    ClassGradesComponent,
    AddClassworkComponent,
    UpdateClassworkComponent,
    ParentComponent,
    UpdatePasswordComponent,
    UpdateProfileComponent,
    AddStudentComponent,
    ParentSideComponent,
    ParentMainComponent,
    StudentRoomsComponent,
    ParentHomeComponent,
    CheckStudentClassworkComponent,
    CheckStudentGradeComponent,
    ProfileComponent,
    StudentProfileComponent,
    ParentProfileComponent,
    NewStudentComponent,
    MaterialsComponent,
    LibraryComponent,
    AdminComponent,
    MyTeachersComponent,
    MyBadgesComponent,
    MyAssignedClassesComponent,
    CalendarComponent,
    SetEventsComponent,
    LoadingLibraryComponent,
    ClassAnnouncementsComponent,
    TeachingMaterialsComponent,
    LessonPlanComponent,
    RecordComponent,
    AssignedEventsComponent,
    TeacherDashboardMainComponent,
    StudentClassesComponent,
    StudentAssignedEventsComponent,
    StudentCalendarComponent,
    StudentSetEventsComponent,
    StudentClassAnnouncemetsComponent,
    TeacherViewModulesComponent,
    MyGradesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
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
    FullCalendarModule, // register FullCalendar with you app
    
    //IMPORTED ALL MATERIAL COMPONENTS
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ], exports: [
    //EXPORTED ALL MATERIAL COMPONENTS
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,  
  ],
  providers: [ApiHostService, SystemUtils, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
