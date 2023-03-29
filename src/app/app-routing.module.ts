import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommandComponent } from './command/command.component';
import { CommentviewComponent } from './commentview/commentview.component';
import { ContactComponent } from './contact/contact.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagepostComponent } from './managepost/managepost.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

import { PostcardComponent } from './postcard/postcard.component';
import { SignupComponent } from './signup/signup.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { TermsComponent } from './terms/terms.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

{path:'home',component:HomeComponent},
  {path:'post',component:PostcardComponent},
  {path:'login',component:LoginComponent},
  {path:'single-category',component:SingleCategoryComponent},
  {path:'signup',component:SignupComponent},
  {path:'command',component:CommandComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'dashboard',component:DashboardComponent},

  {path:'terms',component:TermsComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'managepost',component:ManagepostComponent},
  {path:'manageuser',component:ManageuserComponent},
  {path:'commentview',component:CommentviewComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'createpost',component:CreatepostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
