import { Routes } from "@angular/router";
import { SignUpComponent } from "./menu/sign-up/sign-up.component";
import { UserProfileComponent } from "./menu/user-profile/user-profile.component";

const Routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user-profile', component: UserProfileComponent},
]
export {Routes};
