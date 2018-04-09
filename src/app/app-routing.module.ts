import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {FotosComponent} from './fotos/fotos.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {
        path:'',
        component:BodyComponent,
        pathMatch:'full'
    },
    {
        path:'fotos',
        component:FotosComponent,
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {   path: '**',  
        component: BodyComponent,
        redirectTo:''
    },
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRoutingModule{

}