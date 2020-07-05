import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/landing-page/login/login.component";
import { VerificationComponent } from "./components/verification/verification.component";
import { UpdateProfileComponent } from "./components/verification/update-profile/update-profile.component";
import { UpdatePasswordComponent } from "./components/verification/update-password/update-password.component";
import { AddStudentComponent } from "./components/verification/add-student/add-student.component";

// import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MainPageComponent } from "./components/dashboard/admin/content/main-page/main-page.component";
import { StudentsComponent } from "./components/dashboard/admin/content/list-page/students/students.component";
import { TeacherStaffComponent } from "./components/dashboard/admin/content/list-page/teacher-staff/teacher-staff.component";
import { ParentListComponent } from "./components/dashboard/admin/content/list-page/parent-list/parent-list.component";
import { ArchivesComponent } from "./components/dashboard/admin/content/list-page/archives/archives.component";
import { TeacherComponent } from './components/dashboard/user/teacher/teacher.component';
import { TeacherMainComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-main.component';
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
import { UserComponent } from "./components/dashboard/user/user.component";
import { RoomDetailsComponent } from "./components/dashboard/user/room-details/room-details.component";
import { InviteUsersComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/invite-users.component";
import { ClassGradesComponent } from "./components/dashboard/user/room-details/teacher-side/class-grades/class-grades.component";
import { ParentGuardianTabComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/tabs/parent-guardian-tab/parent-guardian-tab.component";
import { StudentTabComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/tabs/student-tab/student-tab.component";
import { TeacherStaffTabComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/tabs/teacher-staff-tab/teacher-staff-tab.component";

// parent
import { ParentComponent } from "./components/dashboard/user/parent/parent.component";

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
    component: DashboardComponent,
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
        path: "archive",
        component: ArchivesComponent,
      },

    ],
  },
 
  {
    path: "user",
    component: UserComponent,
    children: [
      {
        path: "p",
        component: ParentComponent
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
            component: StudentMainComponent
          },
          {
            path: "invitations",
            component: StudentInvitationsComponent
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
          {
            path: "main",
            component: TeacherMainComponent
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
