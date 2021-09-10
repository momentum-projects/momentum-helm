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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ExperienceComponent } from './profile/experience.component';
import { ProfilesService } from './profiles.service';
import { createHttpLink, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { environment } from 'src/environments/environment';
import { APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';

// const httpLink = createHttpLink({
//   uri: 'https://api.github.com/graphql',
// });

const authLink = setContext((_, { headers }) => {
  const token = environment.githubToken;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const ApolloProvider = {
  provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization
  useFactory(httpLink: HttpLink): NamedOptions {
    return {
      newClientName: {
        // <-- this settings will be saved by name: newClientName
        cache: new InMemoryCache(),
        link: authLink.concat(
          httpLink.create({
            uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql',
          })
        ),
      },
    };
  },
  deps: [HttpLink],
};

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, ProfileComponent, ExperienceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyModule,
  ],
  providers: [
    ApolloProvider,
    { provide: NZ_I18N, useValue: en_US },
    ProfilesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
