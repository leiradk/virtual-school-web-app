import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/landing-page/login/login.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MainPageComponent } from "./components/dashboard/content/main-page/main-page.component";
import { StudentsComponent } from "./components/dashboard/content/list-page/students/students.component";
import { TeacherStaffComponent } from "./components/dashboard/content/list-page/teacher-staff/teacher-staff.component";
import { ClasslistComponent } from "./components/dashboard/content/list-page/classlist/classlist.component";

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
