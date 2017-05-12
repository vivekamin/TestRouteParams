import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HelloComponent } from './hello.component';
import { NoMatchComponent } from './nomatch.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'hello',  component: HelloComponent },
  { path: 'hello/:tenantid/:empid',  component: HelloComponent },
  {path : '**', component: NoMatchComponent}
];

@NgModule({
  imports: [  RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
