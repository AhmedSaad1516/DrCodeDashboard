import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/login/login.component';
import { GuardRouterGuard } from 'src/core/guard-router.guard';
import { HomeComponent } from './leyout/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
     path:'',
     component:NavbarComponent,
     canActivateChild:[GuardRouterGuard],
     children: [
 
      {path:'',component:HomeComponent},
      
      {path:'home',
      loadChildren: () => import(`../dashboard/leyout/leyout.module`).then(m => m.LeyoutModule)},

      {path:'chat',
      loadChildren: () => import(`../dashboard/chat/chat.module`).then(m => m.ChatModule)},
      
      {path:'orders',
      loadChildren: () => import(`../dashboard/orders/orders.module`).then(m => m.OrdersModule)},
      
      
     ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
