import { NgModule } from '@angular/core';

//Modulos
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        GraficoDonaComponent,
        IncrementadorComponent,
        AccountSettingsComponent
      ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        GraficoDonaComponent,
        IncrementadorComponent
    ],
    imports:[
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})
export class PagesModule{

}