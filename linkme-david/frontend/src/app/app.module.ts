import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ExperienceComponent } from './profile/experience.component';
import { ProfilesService } from './profiles.service';
import { ConnectionsComponent } from './connections/connections.component';
import { LoginService } from './login.service';
import { ProfilesComponent } from './profile/profiles.component';
import { AuthInterceptor } from './auth.interceptor';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ExperienceComponent,
    ConnectionsComponent,
    ProfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDropDownModule,
    NzGridModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ProfilesService,
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
