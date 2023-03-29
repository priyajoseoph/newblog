import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';

import { PostcardComponent } from './postcard/postcard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { LoginComponent } from './login/login.component';
import { CommandComponent } from './command/command.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ManagepostComponent } from './managepost/managepost.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { CommentviewComponent } from './commentview/commentview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AuthInterceptor } from './auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
 
    PostcardComponent,
    
    SingleCategoryComponent,
    LoginComponent,
    CommandComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
  
    TermsComponent,
    CreatepostComponent,
    ManagepostComponent,
    UserprofileComponent,
    ManageuserComponent,
    CommentviewComponent,
    ViewprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true}] ,

    bootstrap: [AppComponent]
})
export class AppModule { }
