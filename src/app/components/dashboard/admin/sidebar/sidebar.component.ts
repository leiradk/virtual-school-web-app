import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', '../../../../../assets/admin/css/styles.min.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public toggle: boolean = true;

  public toggleDashboard: boolean = false;
  public toggleStaff: boolean = false;
  public toggleParent: boolean = false;
  public toggleStudent: boolean = false;
  public toggleAcount: boolean = false;
  public toggleMaterial: boolean = false;

  clickEvent(event) {
    this.toggle = !this.toggle;
  }

  toggleSidebar(sidebar) {
    if (sidebar === 'dashboard') {
      this.toggleDashboard = true;
      this.toggleParent = false;
      this.toggleStaff = false;
      this.toggleStudent = false;
      this.toggleAcount = false;
      this.toggleMaterial = false;
    }
    if (sidebar === 'parent') {
      this.toggleDashboard = false;
      this.toggleParent = true;
      this.toggleStaff = false;
      this.toggleStudent = false;
      this.toggleAcount = false;
      this.toggleMaterial = false;
    }
    if (sidebar === 'staff') {
      this.toggleDashboard = false;
      this.toggleParent = false;
      this.toggleStaff = true;
      this.toggleStudent = false;
      this.toggleAcount = false;
      this.toggleMaterial = false;
    }
    if (sidebar === 'student') {
      this.toggleDashboard = false;
      this.toggleParent = false;
      this.toggleStaff = false;
      this.toggleStudent = true;
      this.toggleAcount = false;
      this.toggleMaterial = false;
    }
    if (sidebar === 'acount') {
      this.toggleDashboard = false;
      this.toggleParent = false;
      this.toggleStaff = false;
      this.toggleStudent = false;
      this.toggleAcount = true;
      this.toggleMaterial = false;
    }
    if (sidebar === 'material') {
      this.toggleDashboard = false;
      this.toggleParent = false;
      this.toggleStaff = false;
      this.toggleStudent = false;
      this.toggleAcount = false;
      this.toggleMaterial = true;
    }
  }


}
