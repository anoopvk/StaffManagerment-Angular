import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativeStaffsComponent } from './widgets/administrative-staffs/administrative-staffs.component';
import { AllStaffsComponent } from './widgets/all-staffs/all-staffs.component';
import { SupportStaffsComponent } from './widgets/support-staffs/support-staffs.component';
import { TeachingStaffsComponent } from './widgets/teaching-staffs/teaching-staffs.component';

const routes: Routes = [
  { path: "all", component: AllStaffsComponent },
  { path: "administrativestaffs", component: AdministrativeStaffsComponent },
  { path: "supportstaffs", component: SupportStaffsComponent },
  { path: "teachingstaffs", component: TeachingStaffsComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
