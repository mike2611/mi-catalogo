import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogComponent } from './log/log.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent

  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'log',
    component: LogComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
