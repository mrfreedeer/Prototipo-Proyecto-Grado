import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { IniComponent } from './components/ini/ini.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditServicesComponent } from './components/edit-services/edit-services.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'ini',
                component: IniComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent
            },
            {
                path: 'myservices',
                component: EditServicesComponent
            },
            {
                path: 'edit-profile',
                component: EditProfileComponent
            }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
