import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { ExperienceComponent } from './shared/experience/experience.component';
import Icons from './icons';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ConnectButtonComponent } from './shared/connect-button/connect-button.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { LoginComponent } from './shared/login/login.component';
import { ProfileService } from './shared/services/profile.service';
import { GraphQLModule } from './graphql.module';
import { ProfileHomeComponent } from './shared/profile-home/profile-home.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ExperienceComponent,
    ConnectButtonComponent,
    LoginComponent,
    ProfileHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTypographyModule,
    NzIconModule.forRoot(Icons),
    NzBreadCrumbModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzCardModule,
    NzInputNumberModule,
    GraphQLModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
