import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarOpened: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

}
