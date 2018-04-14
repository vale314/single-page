import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {FotosComponent} from './fotos/fotos.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { BuscarComponent } from './admin/buscar/buscar.component';
import { AgregarComponent } from './admin/agregar/agregar.component';
import { ShowPComponent } from './admin/show-p/show-p.component';

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
        component:AdminComponent,
        children:[
            {
                path:'find',
                component:BuscarComponent
            },
            {
                path:'delete',
                component:DeleteComponent
            },
            {
                path:'add',
                component:AgregarComponent
            },
            {
                path:'showP',
                component:ShowPComponent
            }
        ]
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