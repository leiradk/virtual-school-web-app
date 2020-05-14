import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/landing-page/login/login.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MainPageComponent } from "./components/dashboard/admin/content/main-page/main-page.component";
import { StudentsComponent } from "./components/dashboard/admin/content/list-page/students/students.component";
import { TeacherStaffComponent } from "./components/dashboard/admin/content/list-page/teacher-staff/teacher-staff.component";
import { ClasslistComponent } from "./components/dashboard/admin/content/list-page/classlist/classlist.component";
import { ParentListComponent } from "./components/dashboard/admin/content/list-page/parent-list/parent-list.component";
import { SubjectComponent } from './components/dashboard/admin/content/list-page/subject/subject.component';
import { TeacherComponent } from './components/dashboard/user/teacher/teacher.component';
import { TeacherMainComponent } from './components/dashboard/user/teacher/teacher-content/teacher-main/teacher-main.component';
import { ClassDetailsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-details.component';
import { ClassHomeComponent } from './components/dashboard/user/teacher/teacher-content/class-details/class-home/class-home.component';
import { ClassworkComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/classwork.component';
import { LessonsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/lessons/lessons.component';
import { WorkViewComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/work-view/work-view.component';
import { DetailsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/classwork/details/details.component';
import { CheckStudentsComponent } from './components/dashboard/user/teacher/teacher-content/class-details/check-students/check-students.component';
import { StudentComponent } from "./components/dashboard/user/student/student.component";
import { StudentMainComponent } from "./components/dashboard/user/student/student-content/student-main/student-main.component";
import { StudentInvitationsComponent } from "./components/dashboard/user/student/student-content/student-invitations/student-invitations.component";
import { ClassroomComponent } from "./components/dashboard/user/student/student-content/classroom/classroom.component";
import { UserComponent } from "./components/dashboard/user/user.component";
import { RoomDetailsComponent } from "./components/dashboard/user/room-details/room-details.component";
import { InviteUsersComponent } from "./components/dashboard/user/room-details/teacher-side/invite-users/invite-users.component";
import { AssignWorkComponent } from "./components/dashboard/user/room-details/teacher-side/assign-work/assign-work.component";
import { AssignDetailsComponent } from "./components/dashboard/user/room-details/teacher-side/assign-work/assign-details/assign-details.component";
import { ViewWorkDetailsComponent } from "./components/dashboard/user/room-details/teacher-side/assign-work/view-work-details/view-work-details.component";


import { CheckWorkComponent } from "./components/dashboard/user/room-details/student-side/check-work/check-work.component";
import { CheckDetailsComponent } from "./components/dashboard/user/room-details/student-side/check-work/check-details/check-details.component";
import { CheckClassWorkComponent } from "./components/dashboard/user/room-details/student-side/check-work/check-class-work/check-class-work.component";
import { StudentHomeComponent } from "./components/dashboard/user/room-details/student-side/student-home/student-home.component";
import { CheckUsersComponent } from "./components/dashboard/user/room-details/student-side/check-users/check-users.component";

CheckStudentsComponent
const routes: Routes = [
  {
    path: "",
    redirectTo: "Landing-Page",
    pathMatch: "full",
  },

  {
    path: "Landing-Page",
    component: LandingPageComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
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
        path: "class-list",
        component: ClasslistComponent,
      },
      {
        path: "parents-list",
        component: ParentListComponent,
      },
      {
        path: "subject-list",
        component: SubjectComponent,
      },
    ],
  },
  // {
  //   path: "teacher",
  //   component: TeacherComponent,
  //   children: [
  //     {
  //       path: "",
  //       redirectTo: "main",
  //       pathMatch: "full"
  //     },
  //     {
  //       path: "main",
  //       component: TeacherMainComponent
  //     },
  //     {
  //       path: "class-details",
  //       component: ClassDetailsComponent,
  //       children: [
  //         {
  //           path: "",
  //           redirectTo: "home",
  //           pathMatch: "full"
  //         },
  //         {
  //           path: 'home',
  //           component: ClassHomeComponent
  //         },
  //         {
  //           path: 'class-work',
  //           component: ClassworkComponent,
  //           children: [
  //             {
  //               path: "",
  //               redirectTo: 'details',
  //               pathMatch: "full"
  //             },
  //             {
  //               path: 'details',
  //               component: DetailsComponent,
  //             },
  //             {
  //               path: 'lessons',
  //               component: LessonsComponent,
  //             }, {
  //               path: 'work-view',
  //               component: WorkViewComponent,
  //             },
  //           ]
  //         },
  //         {
  //           path: 'people',
  //           component: CheckStudentsComponent
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: "student",
  //   component: StudentComponent,
  //   children: [
  //     {
  //       path: "",
  //       redirectTo: "main",
  //       pathMatch: "full"
  //     },
  //     {
  //       path: "main",
  //       component: StudentMainComponent
  //     },
  //     {
  //       path: "invitations",
  //       component: StudentInvitationsComponent
  //     },
  //     {
  //       path: "classroom",
  //       component: ClassroomComponent,
  //       children: [
  //         {
  //           path: "",
  //           redirectTo: "home",
  //           pathMatch: "full"
  //         },
  //         {
  //           path: 'home',
  //           component: ClassHomeComponent
  //         },
  //         {
  //           path: 'class-work',
  //           component: ClassworkComponent,

  //         },
  //         {
  //           path: 'people',
  //           component: CheckStudentsComponent
  //         },
  //       ]
  //     },

  //   ]
  // },
  {
    path: "user",
    component: UserComponent,
    children: [
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
                component: StudentHomeComponent
              },
              {
                path: 'class-work',
                component: CheckWorkComponent,
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
                  {
                    path: 'lessons',
                    component: LessonsComponent,
                  }, {
                    path: 'work-view',
                    component: CheckClassWorkComponent,
                  },
                ]
              },
              {
                path: 'people',
                component: CheckUsersComponent
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
                component: ClassHomeComponent
              },
              {
                path: 'class-work',
                component: AssignWorkComponent,
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
                    component: LessonsComponent,
                  }, {
                    path: 'work-view',
                    component: ViewWorkDetailsComponent,
                  },
                ]
              },
              {
                path: 'invites',
                component: InviteUsersComponent
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
