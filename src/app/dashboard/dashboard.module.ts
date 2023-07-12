import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    DashboardRoutingModule
  ],
  bootstrap: [ DashboardComponent ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class DashboardModule { }
