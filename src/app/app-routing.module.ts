import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PublicComponent } from './components/public/public.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
        { path: "users", component: UserComponent },
        { path: "public", component: PublicComponent }
      ])
  ]
})
export class AppRoutingModule { }
