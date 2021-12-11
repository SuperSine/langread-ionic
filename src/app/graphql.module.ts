import {APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpLink} from 'apollo-angular/http';
import {createHttpLink} from '@apollo/client/link/http';
import {onError} from '@apollo/client/link/error';
import {RetryLink} from '@apollo/client/link/retry';
import {InMemoryCache, ApolloLink, Observable, from, ApolloClient} from '@apollo/client/core';
import {NgModule} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {T_USER_TOKEN, AuthService} from './services/auth.service';
import {mergeMap,map,tap} from 'rxjs/operators';


import {environment} from '../environments/environment';
import { GlobalService } from './services/global.service';
import { TranslateService } from '@ngx-translate/core';
export async function createApollo(httpLink: HttpLink,storage:Storage) {

}

@NgModule({
  imports:[HttpClientModule]
  // providers: [
  //   {
  //     provide: APOLLO_OPTIONS,
  //     useFactory: createApollo,
  //     deps: [HttpLink, Storage],
  //   },
  // ],
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink:HttpLink, 
              private authService:AuthService,
              private globalService:GlobalService,
              private translate:TranslateService){


      const headerMiddleware = new ApolloLink((operation, forward) => {
        var token  = window['tempLangreadUserToken'];
        var headers = {};
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        headers['Accept-Language'] = this.translate.getBrowserCultureLang();

        operation.setContext({
          headers: new HttpHeaders(headers)
        });
  
        return forward(operation);
      });
  
  
      /**
       * property statusCode missing in networkError object
       * https://github.com/apollographql/apollo-link/issues/300
       */
      const renewTokenLink = onError((result)=>{
        (async () => {
          const offline = await this.translate.get('general.offline').toPromise();
          var networkError = result.networkError;
          if(networkError && 'status' in networkError){
            if(networkError['status'] === 401){
              // console.log('you can perform logout here!');
              
              if(this.authService.userObj != null)
                this.authService.requestToken();
              else
                this.authService.logout();
  
            }else if(networkError['status'] === 403){
              this.authService.checkAvailability();
            }else if(networkError['status'] === 0){
              this.globalService.throwError([{message:offline}]);
            }
              
          }else if(result.graphQLErrors){
            this.globalService.throwError(result.graphQLErrors as any[]);
          }
        })();

      });

      const retryLink = new RetryLink({
        delay: {
          initial: 3000,
          max: Infinity,
          jitter: true
        },
        attempts: {
          max: 10,
          retryIf: (error, _operation) => !!error
        },
      });
      

      let authOption = {
        link: createHttpLink({uri: environment.authEndpoint}),
        cache: new InMemoryCache(),
      };

      const coreLink = httpLink.create({uri: environment.coreEndpoint});
      let coreOption = {
        link: from([retryLink, headerMiddleware, renewTokenLink, coreLink]),
        cache: new InMemoryCache(
          {
            typePolicies:{
              PaginatedDocumentType:{
                fields:{
                  data:{
                    merge: (existing = [], incoming:any[]) => {
                      return [...existing, ...incoming];
                    }
                  }
                }
              }
            }
          }
        ),
      };

      const socialLink = httpLink.create({uri: environment.socialEndpoint});
      let socialOption = {
        link: from([retryLink, headerMiddleware, renewTokenLink, socialLink]),
        cache: new InMemoryCache(),
      }
  
      apollo.create(authOption, 'auth');
      apollo.create(coreOption, 'core');
      apollo.create(socialOption, 'social');


  }
}
