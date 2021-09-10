import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tictactoe2Component } from './tictactoe2/tictactoe2.component';
import { Tictactoe1Component } from './tictactoe1/tictactoe1.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './profile/experience.component';
import { ConnectionComponent } from './profile/connection.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProfilesService } from './profiles.service';
import { GraphQLModule } from './graphql.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    Tictactoe2Component,
    Tictactoe1Component,
    ProfileComponent,
    ExperienceComponent,
    ConnectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzTypographyModule,
    NzButtonModule,
    NzInputModule,
    NzMenuModule,
    GraphQLModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, ProfilesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
