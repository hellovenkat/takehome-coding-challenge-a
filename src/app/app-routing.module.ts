import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreatetargetComponent } from './components/createtarget/createtarget.component';
import { NewtargetComponent } from './components/newtarget/newtarget.component';
import { TargetDetailComponent }  from './components/target-detail/target-detail.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'createtarget', component: CreatetargetComponent },
  { path: 'dashboard', component: NewtargetComponent },
  { path: 'configurations', component: ConfigurationsComponent },
  { path: 'detail/:id', component: TargetDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


