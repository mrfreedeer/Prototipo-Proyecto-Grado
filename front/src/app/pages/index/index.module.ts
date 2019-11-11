import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DxDataGridModule, DxTagBoxModule } from 'devextreme-angular';
import { IniComponent } from './components/ini/ini.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-modal';
import { EditServicesComponent } from './components/edit-services/edit-services.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing,
        DxDataGridModule,
        DxTagBoxModule,
        NgImageSliderModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule
    ],
    declarations: [
        IndexComponent,
        SearchComponent,
        CategoriesComponent,
        IniComponent,
        EditProfileComponent,
        EditServicesComponent
    ]
})
export class IndexModule { }
