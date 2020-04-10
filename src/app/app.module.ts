import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/landing-page/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeacherStaffComponent } from './components/dashboard/content/list-page/teacher-staff/teacher-staff.component';
import { ListPageComponent } from './components/dashboard/content/list-page/list-page.component';
import { StudentsComponent } from './components/dashboard/content/list-page/students/students.component';
import { ContentComponent } from './components/dashboard/content/content.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { ClasslistComponent } from './components/dashboard/content/list-page/classlist/classlist.component';

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
    ClasslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
