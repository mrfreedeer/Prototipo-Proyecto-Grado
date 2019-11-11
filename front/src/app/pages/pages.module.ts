import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxTagBoxModule } from 'devextreme-angular';
import { ArchwizardModule} from 'angular-archwizard';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        DxTagBoxModule,
        ArchwizardModule,
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        RegisterComponent,
    ]
})
export class PagesModule { }
