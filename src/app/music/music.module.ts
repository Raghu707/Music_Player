import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { musicComponent } from "./music.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "About",
      urls: [{ title: "Music", url: "/music" }, { title: "Music" }],
    },
    component: musicComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class AboutModule {}
