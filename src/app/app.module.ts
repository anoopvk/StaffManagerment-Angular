import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { TeachingStaffsComponent } from './widgets/teaching-staffs/teaching-staffs.component';
import { NavbarRowComponent } from './common/navbar-row/navbar-row.component';
// import { DeleteStaffBtnComponent } from './common/delete-staff-btn/delete-staff-btn.component';
import { AllStaffsComponent } from './widgets/all-staffs/all-staffs.component';
import { AdministrativeStaffsComponent } from './widgets/administrative-staffs/administrative-staffs.component';
import { SupportStaffsComponent } from './widgets/support-staffs/support-staffs.component';
import { HeaderComponent } from './common/header/header.component';
import { ConfirmationPopupComponent } from './common/confirmation-popup/confirmation-popup.component';
import { StaffFormComponent } from './common/staff-form/staff-form.component';
import { FormsModule } from '@angular/forms';
import { ContentTextComponent } from './common/content-text/content-text.component';
import { ContentTextBottomComponent } from './common/content-text-bottom/content-text-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AllStaffsComponent,
    AdministrativeStaffsComponent,
    SupportStaffsComponent,
    TeachingStaffsComponent,
    NavbarRowComponent,
    ConfirmationPopupComponent,
    StaffFormComponent,
    ContentTextComponent,
    ContentTextBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
