import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {FotosComponent} from './fotos/fotos.component';
import { BodyComponent } from './body/body.component';


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