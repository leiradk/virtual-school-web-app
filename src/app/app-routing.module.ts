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
import { TeacherComponent } from './components/dashboard/teacher/teacher.component';
import { TeacherMainComponent } from './components/dashboard/teacher/teacher-content/teacher-main/teacher-main.component';
import { ClassDetailsComponent } from './components/dashboard/teacher/teacher-content/class-details/class-details.component';
import { ClassHomeComponent } from './components/dashboard/teacher/teacher-content/class-details/class-home/class-home.component';
import { ClassworkComponent } from './components/dashboard/teacher/teacher-content/class-details/classwork/classwork.component';
import { CheckStudentsComponent } from './components/dashboard/teacher/teacher-content/class-details/check-students/check-students.component';
import { StudentComponent } from "./components/dashboard/student/student.component";
import { StudentMainComponent } from "./components/dashboard/student/student-content/student-main/student-main.component";
import { StudentInvitationsComponent } from "./components/dashboard/student/student-content/student-invitations/student-invitations.component";

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
  {
    path: "teacher",
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
        path: "class-details",
        component: ClassDetailsComponent,
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
            component: ClassworkComponent
          },
          {
            path: 'people',
            component: CheckStudentsComponent
          },
        ]
      }
    ]
  },
  {
    path: "student",
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
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
