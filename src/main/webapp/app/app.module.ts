import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SampleApplicationMonolithicSharedModule } from 'app/shared/shared.module';
import { SampleApplicationMonolithicCoreModule } from 'app/core/core.module';
import { SampleApplicationMonolithicAppRoutingModule } from './app-routing.module';
import { SampleApplicationMonolithicHomeModule } from './home/home.module';
import { SampleApplicationMonolithicEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SampleApplicationMonolithicSharedModule,
    SampleApplicationMonolithicCoreModule,
    SampleApplicationMonolithicHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SampleApplicationMonolithicEntityModule,
    SampleApplicationMonolithicAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SampleApplicationMonolithicAppModule {}
