import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleApplicationMonolithicSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [SampleApplicationMonolithicSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
