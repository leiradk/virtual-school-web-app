import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/landing-page/login/login.component";
import { VerificationComponent } from "./components/verification/verification.component";
import { UpdateProfileComponent } from "./components/verification/update-profile/update-profile.component";
import { UpdatePasswordComponent } from "./components/verification/update-password/update-password.component";
import { AddStudentComponent } from "./components/verification/add-student/add-student.component";

// import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminComponent } from "./components/dashboard/admin/admin.component";
import { MainPageComponent } from "./components/dashboard/admin/content/main-page/main-page.component";
import { StudentsComponent } from "./components/dashboard/admin/content/list-page/students/students.component";
import { TeacherStaffComponent } from "./components/dashboard/admin/content/list-page/teacher-staff/teacher-staff.component";
import { ParentListComponent } from "./components/dashboard/admin/content/list-page/parent-list/parent-list.component";
import { ArchivesComponent } from "./components/dashboard/admin/content/list-page/archives/archives.component";
import { MaterialsComponent } from "./components/dashboard/admin/content/materials/materials.component";
import { TeacherComponent } from './components/dashboard/user/teacher/teacher.component';
import { TeacherMainComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-main.component';
import { CalendarComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/assigned-events/calendar/calendar.component';
import { SetEventsComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/assigned-events/set-events/set-events.component';
import { TeachingMaterialsComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teaching-materials/teaching-materials.component';
import { LessonPlanComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/lesson-plan/lesson-plan.component';
import { RecordComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/record/record.component';
import { AssignedEventsComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/assigned-events/assigned-events.component';
import { TeacherDashboardMainComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-dashboard-main/teacher-dashboard-main.component';
// import { ClassDetailsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-details.component';
// import { ClassHomeComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-home/class-home.component';
// import { ClassworkComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/classwork.component';
// import { LessonsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/lessons/lessons.component';
// import { WorkViewComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/work-view/work-view.component';
// import { DetailsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/details/details.component';
// import { CheckStudentsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/check-students/check-students.component';
import { StudentComponent } from "./components/dashboard/user/student/student.component";
import { StudentMainComponent } from "./components/dashboard/user/student/student-content/student-main/student-main.component";
import { StudentInvitationsComponent } from "./components/dashboard/user/student/student-content/student-invitations/student-invitations.component";
import { ClassroomComponent } from "./components/dashboard/user/student/student-content/classroom/classroom.component";
import { LibraryComponent } from "./components/dashboard/user/student/student-content/library/library.component";
import { StudentClassesComponent } from "./components/dashboard/user/student/student-content/student-classes/student-classes.component";
import { StudentCalendarComponent } from "./components/dashboard/user/student/student-content/student-main/student-assigned-events/student-calendar/student-calendar.component";
import { StudentSetEventsComponent } from "./components/dashboard/user/student/student-content/student-main/student-assigned-events/student-set-events/student-set-events.component";



import { UserComponent } from "./components/dashboard/user/user.component";
import { RoomDetailsComponent } from "./components/dashboard/user/room-details/room-details.component";
import { InviteUsersComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/invite-users.component";
import { ClassGradesComponent } from "./components/dashboard/user/room-details/teacher-side/class-grades/class-grades.component";
import { ParentGuardianTabComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/tabs/parent-guardian-tab/parent-guardian-tab.component";
import { StudentTabComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/tabs/student-tab/student-tab.component";
import { TeacherStaffTabComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/tabs/teacher-staff-tab/teacher-staff-tab.component";
import { MyAssignedClassesComponent } from "./components/dashboard/user/teacher/teacher-content/my-assigned-classes/my-assigned-classes.component";

// parent
import { ParentComponent } from "./components/dashboard/user/parent/parent.component";
import { ParentMainComponent } from "./components/dashboard/user/parent/parent-main/parent-main.component";
import { NewStudentComponent } from "./components/dashboard/user/parent/parent-main/new-student/new-student.component";
import { ParentSideComponent } from "./components/dashboard/user/room-details/parent-side/parent-side.component";
import { ParentHomeComponent } from "./components/dashboard/user/room-details/parent-side/parent-home/parent-home.component";
import { CheckStudentClassworkComponent } from "./components/dashboard/user/room-details/parent-side/check-student-classwork/check-student-classwork.component";
import { CheckStudentGradeComponent } from "./components/dashboard/user/room-details/parent-side/check-student-grade/check-student-grade.component";


import { AssignWorkComponent } from "./components/dashboard/user/room-details/teacher-side/assign-work/assign-work.component";
import { AssignLessonsComponent } from "./components/dashboard/user/room-details/teacher-side/assign-work/assign-lessons/assign-lessons.component";
import { AssignDetailsComponent } from "./components/dashboard/user/room-details/teacher-side/assign-work/assign-details/assign-details.component";
import { ViewWorkDetailsComponent } from "./components/dashboard/user/room-details/teacher-side/assign-work/view-work-details/view-work-details.component";
import { TeacherHomeComponent } from "./components/dashboard/user/room-details/teacher-side/teacher-home/teacher-home.component";


import { CheckWorkComponent } from "./components/dashboard/user/room-details/student-side/check-work/check-work.component";
import { CheckDetailsComponent } from "./components/dashboard/user/room-details/student-side/check-work/check-details/check-details.component";
import { CheckClassWorkComponent } from "./components/dashboard/user/room-details/student-side/check-work/check-class-work/check-class-work.component";
import { StudentHomeComponent } from "./components/dashboard/user/room-details/student-side/student-home/student-home.component";
import { CheckUsersComponent } from "./components/dashboard/user/room-details/student-side/check-users/check-users.component";
import { MyTeachersComponent } from "./components/dashboard/user/student/student-content/my-teachers/my-teachers.component";
import { MyBadgesComponent } from "./components/dashboard/user/student/student-content/my-badges/my-badges.component";

// CheckStudentsComponent
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "verify",
    component: VerificationComponent,
    children: [
      {
        path: "update-profile",
        component: UpdateProfileComponent,
        data: { animation: 'UpdateProfile' },
      },
      {
        path: "update-password",
        component: UpdatePasswordComponent,
        data: { animation: 'UpdatePassword' },
      }, {
        path: "add-student",
        component: AddStudentComponent,
        data: { animation: 'AddStudent' },
      },

    ]
  },
  {
    path: "dashboard",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
      },
      {
        path: "main",
        component: MainPageComponent,
      },
      {
        path: "student-lists",
        component: StudentsComponent,
      },
      {
        path: "staff-teacher-lists",
        component: TeacherStaffComponent,
      },

      {
        path: "parents-list",
        component: ParentListComponent,
      },
      {
        path: "acounts-archive",
        component: ArchivesComponent,
      },
      {
        path: "materials-archive",
        component: MaterialsComponent,
      },
    ],
  },

  {
    path: "user",
    component: UserComponent,
    children: [
      {
        path: "p",
        component: ParentComponent,
        children: [
          {
            path: "",
            redirectTo: "main",
            pathMatch: "full"
          },
          {
            path: "main",
            component: ParentMainComponent,
          },

          {
            path: "classroom",
            component: ParentSideComponent,
            children: [
              {
                path: "",
                redirectTo: "classwork",
                pathMatch: "full"
              },
              {
                path: "classwork",
                component: CheckStudentClassworkComponent,
              },
              {
                path: "grades",
                component: CheckStudentGradeComponent,
              },
            ],
          },
          {
            path: "add-student",
            component: NewStudentComponent,
          },
        ]

      },
      {
        path: "s",
        component: StudentComponent,
        children: [
          {
            path: "",
            redirectTo: "main",
            pathMatch: "full"
          },
          {
            path: "main",
            component: StudentMainComponent,
            children: [
              {
                path: "",
                redirectTo: "events",
                pathMatch: "full"
              },
              {
                path: "events",
                component: StudentCalendarComponent
              },
              {
                path: "event-scheduler",
                component: StudentSetEventsComponent
              },
            ]
          },
          {
            path: "classes",
            component: StudentClassesComponent
          },
          
          {
            path: "invitations",
            component: StudentInvitationsComponent
          },
          {
            path: "library",
            component: LibraryComponent
          },
          {
            path: "my-teachers",
            component: MyTeachersComponent,
          },
          {
            path: "my-badges",
            component: MyBadgesComponent,
          },
          {
            path: "classroom",
            component: RoomDetailsComponent,
            children: [
              {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
              },
              {
                path: 'home',
                component: StudentHomeComponent,
                data: { animation: 'One' }
              },
              {
                path: 'class-work',
                component: CheckWorkComponent,
                data: { animation: 'Two' },
                children: [
                  {
                    path: "",
                    redirectTo: 'details',
                    pathMatch: "full"
                  },
                  {
                    path: 'details',
                    component: CheckDetailsComponent,
                  },
                  // {
                  //   path: 'lessons',
                  //   component: LessonsComponent,
                  // }, 
                  {
                    path: 'work-view',
                    component: CheckClassWorkComponent,
                  },
                ]
              },
              {
                path: 'people',
                component: CheckUsersComponent,
                data: { animation: 'Three' }
              },
            ]
          },

        ]
      },
      {
        path: "t",
        component: TeacherComponent,
        children: [
          {
            path: "",
            redirectTo: "main",
            pathMatch: "full"
          },
          // {
          //   path: "main",
          //   component: TeacherMainComponent,
          //   children: [
          //     {
          //       path: "",
          //       redirectTo: "home",
          //       pathMatch: "full"
          //     },


          //   ]
          // },
          {
            path: "main",
            component: TeacherDashboardMainComponent,
            children: [
              {
                path: "",
                redirectTo: "events",
                pathMatch: "full"
              },
              {
                path: "events",
                component: CalendarComponent
              },
              {
                path: "event-scheduler",
                component: SetEventsComponent
              },
            ]
          },
          {
            path: "teaching-materials",
            component: TeachingMaterialsComponent
          },
          {
            path: "lesson-plan",
            component: LessonPlanComponent
          },
          {
            path: "records",
            component: RecordComponent
          },
     
          {
            path: "classes",
            component: MyAssignedClassesComponent
          },

          {
            path: "classroom",
            component: RoomDetailsComponent,
            children: [
              {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
              },
              {
                path: 'home',
                component: TeacherHomeComponent,
                data: { animation: 'One' }
              },
              {
                path: 'class-work',
                component: AssignWorkComponent,
                data: { animation: 'Two' },
                children: [
                  {
                    path: "",
                    redirectTo: 'details',
                    pathMatch: "full"
                  },
                  {
                    path: 'details',
                    component: AssignDetailsComponent,
                  },
                  {
                    path: 'lessons',
                    component: AssignLessonsComponent,
                  },
                  {
                    path: 'work-view',
                    component: ViewWorkDetailsComponent,
                  },
                ]
              },
              {
                path: 'invites',
                component: InviteUsersComponent,
                data: { animation: 'Three' },
                children: [
                  {
                    path: "",
                    redirectTo: 'teacher',
                    pathMatch: "full"
                  },
                  {
                    path: 'guardian',
                    component: ParentGuardianTabComponent,
                  },
                  {
                    path: 'student',
                    component: StudentTabComponent,
                  },
                  {
                    path: 'teacher',
                    component: TeacherStaffTabComponent,
                  }
                ]
              },
              {
                path: 'grades',
                component: ClassGradesComponent,
                data: { animation: 'Four' }
              },
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
