import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageHomeComponent } from './sistema/page-home/page-home.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path : 'usuario/page-home', component: PageHomeComponent},
    { path: '' , redirectTo: 'usuario/page-home', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
