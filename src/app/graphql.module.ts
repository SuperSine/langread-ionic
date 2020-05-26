import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { createHttpLink } from "apollo-link-http";
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink, Observable, from } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {T_USER_TOKEN, AuthService} from './services/auth.service';
import {mergeMap,map,tap} from 'rxjs/operators';
import ApolloClient from 'apollo-client';
import {onError} from 'apollo-link-error';
import {environment} from '../environments/environment';
import { GlobalService } from './services/global.service';
import { TranslateService } from '@ngx-translate/core';
const uri = 'http://localhost:5001'; // <-- add the URL of the GraphQL server here
export async function createApollo(httpLink: HttpLink,storage:Storage) {

}

@NgModule({
  imports:[HttpLinkModule],
  exports: [ApolloModule, HttpLinkModule],
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


      const authMiddleware = new ApolloLink((operation, forward) => {
        var token  = window['tempLangreadUserToken'];
        if (token) {
          operation.setContext({
              headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
          });
        }
  
        return forward(operation);
      });
  
  
      /**
       * property statusCode missing in networkError object
       * https://github.com/apollographql/apollo-link/issues/300
       */
      const renewTokenLink = onError((result)=>{
        (async () => {
          const offline = await this.translate.get("general.offline").toPromise();
          var networkError = result.networkError;
          if(networkError && 'status' in networkError){
            if(networkError['status'] === 401){
              console.log('you can perform logout here!');
              this.authService.requestToken();
  
            }else if(networkError['status'] === 403){
              this.authService.setEmailConfirmed(false);
            }else if(networkError['status'] === 0){
              this.globalService.throwError([{message:offline}]);
            }
              
          }else if(result.graphQLErrors){
            this.globalService.throwError(result.graphQLErrors as any[]);
          }
        })();

      });
  
      let optionA = {
        link: createHttpLink({uri: environment.authEndpoint}),
        cache: new InMemoryCache(),
      };
  
      const http = httpLink.create({uri: environment.coreEndpoint});
      let optionB = {
        link: from([authMiddleware, renewTokenLink, http]),
        cache: new InMemoryCache(),
      };
  
      apollo.create(optionA,"auth");
      apollo.create(optionB,"core");


  }
}
