import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/landing-page/login/login.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
