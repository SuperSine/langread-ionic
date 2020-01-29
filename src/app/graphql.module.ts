import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { createHttpLink } from "apollo-link-http";
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink, Observable } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {T_USER_TOKEN, AuthService} from './services/auth.service';
import { from, concat} from 'rxjs';
import {mergeMap,map,tap} from 'rxjs/operators';
import ApolloClient from 'apollo-client';

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
  constructor(apollo: Apollo, httpLink:HttpLink){
    var token  = window['tempLangreadUserToken'];

    const authMiddleware = new ApolloLink((operation, forward) => {
      if (token) {
        operation.setContext({
            headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
        });
      }
      return forward(operation);
    });

    let optionA = {
      link: createHttpLink({uri:'http://localhost:81/api/graphql'}),
      cache: new InMemoryCache(),
    };

    const http = httpLink.create({uri:'http://localhost:5003/api/graphql'});
    let optionB = {
      link: authMiddleware.concat(http),
      cache: new InMemoryCache(),
    };

    apollo.create(optionA,"auth");
    apollo.create(optionB,"core");

  }
}
