import { CommonModule } from "@angular/common";
import { Component, OnInit, HostListener } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-full-layout",
  standalone: true,
  imports:[RouterModule,CommonModule, NgbCollapseModule],
  templateUrl: "./homePage.component.html",
  styleUrls: ["./homePage.component.scss"],
})
export class FullComponent implements OnInit {

  constructor(public router: Router) {}
  public isCollapsed = false;
  public innerWidth: number = 0;
  public defaultSidebar: string = "";
  public showMobileMenu = false;
  public expandLogo = false;
  public sidebartype = "full";

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
   
 
  }
  @HostListener("window:resize", ["$event"])
  onResize() {
    this.handleSidebar();
  }
  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = "full";
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }
  toggleSidebarType() {
    switch (this.sidebartype) {
      case "full":
        this.sidebartype = "mini-sidebar";
        break;

      case "mini-sidebar":
        this.sidebartype = "full";
        break;
      default:
    }
  }
}
