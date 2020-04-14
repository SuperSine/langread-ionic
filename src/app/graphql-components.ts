import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  BigInt: any;
  Byte: any;
  DateTime: any;
  DateTimeOffset: any;
  Decimal: any;
  Guid: any;
  Long: any;
  Milliseconds: any;
  SByte: any;
  Seconds: any;
  Short: any;
  UInt: any;
  ULong: any;
  Uri: any;
  UShort: any;
};



export type Auth = {
   __typename?: 'Auth';
  auth?: Maybe<UserType>;
  email?: Maybe<Scalars['Boolean']>;
  sendreset?: Maybe<Scalars['Boolean']>;
  sendverify?: Maybe<Scalars['Boolean']>;
};


export type AuthAuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type AuthEmailArgs = {
  email: Scalars['String'];
};


export type AuthSendresetArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
};


export type AuthSendverifyArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
};







export type DictResultType = {
   __typename?: 'DictResultType';
  id: Scalars['String'];
  language: Scalars['String'];
  lexicalEntries?: Maybe<Array<Maybe<LexicalEntryType>>>;
  type: Scalars['String'];
  word: Scalars['String'];
};

export type Doc = {
   __typename?: 'Doc';
  add?: Maybe<WordTagDocumentCleanType>;
  delete?: Maybe<Scalars['Int']>;
  save?: Maybe<WordTagDocumentCleanType>;
  update?: Maybe<WordTagDocumentCleanType>;
};


export type DocAddArgs = {
  document: DocumentInputType;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type DocDeleteArgs = {
  docId?: Maybe<Scalars['String']>;
};


export type DocSaveArgs = {
  document: DocumentInputType;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type DocUpdateArgs = {
  docId?: Maybe<Scalars['String']>;
  document: DocumentInputType;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};

export type DocumentInputType = {
  title: Scalars['String'];
  content: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  docId?: Maybe<Scalars['String']>;
};

export type DocumentQueryType = {
   __typename?: 'DocumentQueryType';
  get?: Maybe<WordTagDocumentCleanType>;
  giveItToMe?: Maybe<WordTagDocumentCleanType>;
  infoDocuments?: Maybe<InfoDocumentsCleanType>;
  list?: Maybe<Array<Maybe<DocumentType>>>;
  search?: Maybe<Array<Maybe<DocumentType>>>;
};


export type DocumentQueryTypeGetArgs = {
  docId?: Maybe<Scalars['String']>;
  includeWti?: Maybe<Scalars['Boolean']>;
};


export type DocumentQueryTypeGiveItToMeArgs = {
  content?: Maybe<Scalars['String']>;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type DocumentQueryTypeInfoDocumentsArgs = {
  word?: Maybe<Scalars['String']>;
  lastId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['String']>;
};


export type DocumentQueryTypeListArgs = {
  lastId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};


export type DocumentQueryTypeSearchArgs = {
  keywords?: Maybe<Scalars['String']>;
  lastId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type DocumentType = {
   __typename?: 'DocumentType';
  content: Scalars['String'];
  createDate: Scalars['Date'];
  docId: Scalars['String'];
  id: Scalars['String'];
  status: Scalars['Int'];
  title: Scalars['String'];
  updateDate: Scalars['Date'];
  wordsCount: Scalars['Int'];
};

export type EntryType = {
   __typename?: 'EntryType';
  homographNumber: Scalars['String'];
  senses?: Maybe<Array<Maybe<SenseType>>>;
};


export type InfoCleanType = {
   __typename?: 'InfoCleanType';
  count: Scalars['Int'];
  tag?: Maybe<TagType>;
};

export type InfoDocumentsCleanType = {
   __typename?: 'InfoDocumentsCleanType';
  documents?: Maybe<Array<Maybe<DocumentType>>>;
  wordTagInfo?: Maybe<WordTagInfoCleanType>;
};

export type LexicalEntryType = {
   __typename?: 'LexicalEntryType';
  entries?: Maybe<Array<Maybe<EntryType>>>;
  language: Scalars['String'];
  lexicalCategory: Scalars['String'];
  pronunciations?: Maybe<Array<Maybe<PronunciationType>>>;
  text: Scalars['String'];
};



export type Mutation = {
   __typename?: 'Mutation';
  doc?: Maybe<Doc>;
  secret?: Maybe<Secret>;
  tag?: Maybe<TagMutation>;
  user?: Maybe<User>;
};

export type PronunciationType = {
   __typename?: 'PronunciationType';
  audioFile?: Maybe<Scalars['String']>;
  dialects?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneticNotation?: Maybe<Scalars['String']>;
  phoneticSpelling?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  auth?: Maybe<Auth>;
  document?: Maybe<DocumentQueryType>;
  tag?: Maybe<TagQuery>;
  timeline?: Maybe<Timeline>;
  token?: Maybe<Token>;
  wti?: Maybe<WordTagInfo>;
};


export type SearchResultType = {
   __typename?: 'SearchResultType';
  results?: Maybe<Array<Maybe<DictResultType>>>;
};


export type Secret = {
   __typename?: 'Secret';
  update?: Maybe<UserType>;
};


export type SecretUpdateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SenseType = {
   __typename?: 'SenseType';
  definitions: Array<Maybe<Scalars['String']>>;
  domains: Array<Maybe<Scalars['String']>>;
  examples: Array<Maybe<Scalars['String']>>;
};


export type TagInput = {
  tagName: Scalars['String'];
  tagFont: Scalars['String'];
  tagColor: Scalars['String'];
};

export type TagMutation = {
   __typename?: 'TagMutation';
  add?: Maybe<TagType>;
  delete?: Maybe<Scalars['Int']>;
  update?: Maybe<Scalars['Int']>;
};


export type TagMutationAddArgs = {
  tag: TagInput;
};


export type TagMutationDeleteArgs = {
  tagName: Scalars['String'];
};


export type TagMutationUpdateArgs = {
  tagName: Scalars['String'];
  tag: TagInput;
};

export type TagQuery = {
   __typename?: 'TagQuery';
  all?: Maybe<Array<Maybe<TagType>>>;
};

export type TagType = {
   __typename?: 'TagType';
  createDate: Scalars['Date'];
  id: Scalars['String'];
  tagColor: Scalars['String'];
  tagFont: Scalars['String'];
  tagName: Scalars['String'];
};

export type Timeline = {
   __typename?: 'Timeline';
  get?: Maybe<TimelineItemsType>;
  search?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagByMonth?: Maybe<TimelineValueByMonthType>;
  wordByMonth?: Maybe<TimelineValueByMonthType>;
};


export type TimelineGetArgs = {
  lastId?: Maybe<Scalars['String']>;
  limitDocs?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};


export type TimelineSearchArgs = {
  keyword?: Maybe<Scalars['String']>;
};


export type TimelineTagByMonthArgs = {
  tagName?: Maybe<Scalars['String']>;
};


export type TimelineWordByMonthArgs = {
  word?: Maybe<Scalars['String']>;
};

export type TimelineItemsType = {
   __typename?: 'TimelineItemsType';
  count: Scalars['Int'];
  lastId: Scalars['String'];
  nextId?: Maybe<Scalars['String']>;
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  wordTagInfo?: Maybe<WordTagInfoCleanType>;
};

export type TimelineValueByMonthType = {
   __typename?: 'TimelineValueByMonthType';
  count: Scalars['Int'];
  data?: Maybe<Array<Maybe<ValueByMonthType>>>;
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type Token = {
   __typename?: 'Token';
  get?: Maybe<Scalars['String']>;
};


export type TokenGetArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
};



export type UpdateInputModelType = {
  userName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type User = {
   __typename?: 'User';
  email?: Maybe<UserType>;
  password?: Maybe<Scalars['Boolean']>;
  register?: Maybe<UserType>;
  update?: Maybe<UserType>;
  verify?: Maybe<UserType>;
};


export type UserEmailArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type UserPasswordArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type UserRegisterArgs = {
  email: Scalars['String'];
  phonenumber?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
};


export type UserUpdateArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
  user?: Maybe<UpdateInputModelType>;
};


export type UserVerifyArgs = {
  id: Scalars['String'];
  code: Scalars['String'];
};

export type UserType = {
   __typename?: 'UserType';
  appId: Scalars['String'];
  appSecret: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};


export type ValueByMonthType = {
   __typename?: 'ValueByMonthType';
  total: Scalars['Int'];
  yearMonth?: Maybe<YearMonthType>;
};

export type WordInfoCleanType = {
   __typename?: 'WordInfoCleanType';
  word: Scalars['String'];
  wordInfos?: Maybe<Array<Maybe<InfoCleanType>>>;
};

export type WordProfileType = {
   __typename?: 'WordProfileType';
  dictResult?: Maybe<SearchResultType>;
  score: Scalars['Float'];
  word: Scalars['String'];
  wordInfo?: Maybe<Array<Maybe<InfoCleanType>>>;
};

export type WordTagDocumentCleanType = {
   __typename?: 'WordTagDocumentCleanType';
  bigWordTagInfo?: Maybe<WordTagInfoCleanType>;
  createTime: Scalars['Date'];
  document?: Maybe<DocumentType>;
  smallWordTagInfo?: Maybe<WordTagInfoCleanType>;
  status: Scalars['Int'];
  updateTime: Scalars['Date'];
};

export type WordTagInfo = {
   __typename?: 'WordTagInfo';
  dict?: Maybe<SearchResultType>;
  get?: Maybe<WordTagInfoCleanType>;
  profile?: Maybe<WordProfileType>;
  topMost?: Maybe<Array<Maybe<WordProfileType>>>;
};


export type WordTagInfoDictArgs = {
  word?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};


export type WordTagInfoProfileArgs = {
  word?: Maybe<Scalars['String']>;
};


export type WordTagInfoTopMostArgs = {
  top?: Maybe<Scalars['String']>;
};

export type WordTagInfoCleanType = {
   __typename?: 'WordTagInfoCleanType';
  createDate: Scalars['Date'];
  tags?: Maybe<Array<Maybe<TagType>>>;
  updateDate: Scalars['Date'];
  wti?: Maybe<Array<Maybe<WordInfoCleanType>>>;
};

export type YearMonthType = {
   __typename?: 'YearMonthType';
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type LoginQueryVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginQuery = (
  { __typename?: 'Query' }
  & { auth?: Maybe<(
    { __typename?: 'Auth' }
    & { auth?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'appId' | 'appSecret' | 'firstName' | 'lastName' | 'token'>
    )> }
  )> }
);

export type RegisterMutationVariables = {
  email: Scalars['String'];
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { register?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'appId' | 'appSecret' | 'email' | 'token'>
    )> }
  )> }
);

export type TokenQueryVariables = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
};


export type TokenQuery = (
  { __typename?: 'Query' }
  & { token?: Maybe<(
    { __typename?: 'Token' }
    & Pick<Token, 'get'>
  )> }
);

export type CheckEmailQueryVariables = {
  email: Scalars['String'];
};


export type CheckEmailQuery = (
  { __typename?: 'Query' }
  & { auth?: Maybe<(
    { __typename?: 'Auth' }
    & Pick<Auth, 'email'>
  )> }
);

export type VerifyUserMutationVariables = {
  id: Scalars['String'];
  code: Scalars['String'];
};


export type VerifyUserMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { verify?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'appId' | 'appSecret' | 'token'>
    )> }
  )> }
);

export type SendVerifyQueryVariables = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
};


export type SendVerifyQuery = (
  { __typename?: 'Query' }
  & { auth?: Maybe<(
    { __typename?: 'Auth' }
    & Pick<Auth, 'sendverify'>
  )> }
);

export type UpdateEmailMutationVariables = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
  email: Scalars['String'];
};


export type UpdateEmailMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { email?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'appId' | 'appSecret' | 'token' | 'email'>
    )> }
  )> }
);

export type SendRestQueryVariables = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
};


export type SendRestQuery = (
  { __typename?: 'Query' }
  & { auth?: Maybe<(
    { __typename?: 'Auth' }
    & Pick<Auth, 'sendreset'>
  )> }
);

export type ChangePasswordMutationVariables = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'password'>
  )> }
);

export type GetDocumentQueryVariables = {
  docId: Scalars['String'];
};


export type GetDocumentQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'DocumentQueryType' }
    & { get?: Maybe<(
      { __typename?: 'WordTagDocumentCleanType' }
      & Pick<WordTagDocumentCleanType, 'createTime' | 'updateTime' | 'status'>
      & { document?: Maybe<(
        { __typename?: 'DocumentType' }
        & Pick<DocumentType, 'docId' | 'id' | 'content' | 'createDate' | 'updateDate' | 'title'>
      )>, smallWordTagInfo?: Maybe<(
        { __typename?: 'WordTagInfoCleanType' }
        & { wti?: Maybe<Array<Maybe<(
          { __typename?: 'WordInfoCleanType' }
          & Pick<WordInfoCleanType, 'word'>
          & { wordInfos?: Maybe<Array<Maybe<(
            { __typename?: 'InfoCleanType' }
            & Pick<InfoCleanType, 'count'>
            & { tag?: Maybe<(
              { __typename?: 'TagType' }
              & Pick<TagType, 'id' | 'tagName'>
            )> }
          )>>> }
        )>>>, tags?: Maybe<Array<Maybe<(
          { __typename?: 'TagType' }
          & Pick<TagType, 'id' | 'tagName' | 'tagColor'>
        )>>> }
      )>, bigWordTagInfo?: Maybe<(
        { __typename?: 'WordTagInfoCleanType' }
        & { tags?: Maybe<Array<Maybe<(
          { __typename?: 'TagType' }
          & Pick<TagType, 'id' | 'tagName' | 'tagColor'>
        )>>> }
      )> }
    )> }
  )> }
);

export type GetDocumentsQueryVariables = {
  pageSize: Scalars['String'];
  lastId: Scalars['String'];
  keywords?: Maybe<Scalars['String']>;
};


export type GetDocumentsQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'DocumentQueryType' }
    & { list?: Maybe<Array<Maybe<(
      { __typename?: 'DocumentType' }
      & Pick<DocumentType, 'id' | 'docId' | 'title' | 'content' | 'createDate'>
    )>>> }
  )> }
);

export type GiveItToMeQueryVariables = {
  content: Scalars['String'];
};


export type GiveItToMeQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'DocumentQueryType' }
    & { giveItToMe?: Maybe<(
      { __typename?: 'WordTagDocumentCleanType' }
      & Pick<WordTagDocumentCleanType, 'createTime' | 'updateTime' | 'status'>
      & { document?: Maybe<(
        { __typename?: 'DocumentType' }
        & Pick<DocumentType, 'docId' | 'id' | 'content' | 'createDate' | 'updateDate' | 'title' | 'wordsCount'>
      )>, smallWordTagInfo?: Maybe<(
        { __typename?: 'WordTagInfoCleanType' }
        & { wti?: Maybe<Array<Maybe<(
          { __typename?: 'WordInfoCleanType' }
          & Pick<WordInfoCleanType, 'word'>
          & { wordInfos?: Maybe<Array<Maybe<(
            { __typename?: 'InfoCleanType' }
            & Pick<InfoCleanType, 'count'>
            & { tag?: Maybe<(
              { __typename?: 'TagType' }
              & Pick<TagType, 'tagName'>
            )> }
          )>>> }
        )>>>, tags?: Maybe<Array<Maybe<(
          { __typename?: 'TagType' }
          & Pick<TagType, 'tagName' | 'tagColor'>
        )>>> }
      )>, bigWordTagInfo?: Maybe<(
        { __typename?: 'WordTagInfoCleanType' }
        & { tags?: Maybe<Array<Maybe<(
          { __typename?: 'TagType' }
          & Pick<TagType, 'tagName' | 'tagColor'>
        )>>> }
      )> }
    )> }
  )> }
);

export const LoginDocument = gql`
    query login($email: String!, $password: String!) {
  auth {
    auth(email: $email, password: $password) {
      appId
      appSecret
      firstName
      lastName
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
  }
export const RegisterDocument = gql`
    mutation register($email: String!) {
  user {
    register(email: $email) {
      appId
      appSecret
      email
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
  }
export const TokenDocument = gql`
    query token($appId: String!, $appSecret: String!) {
  token {
    get(appId: $appId, appSecret: $appSecret)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TokenGQL extends Apollo.Query<TokenQuery, TokenQueryVariables> {
    document = TokenDocument;
    
  }
export const CheckEmailDocument = gql`
    query checkEmail($email: String!) {
  auth {
    email(email: $email)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckEmailGQL extends Apollo.Query<CheckEmailQuery, CheckEmailQueryVariables> {
    document = CheckEmailDocument;
    
  }
export const VerifyUserDocument = gql`
    mutation verifyUser($id: String!, $code: String!) {
  user {
    verify(id: $id, code: $code) {
      appId
      appSecret
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyUserGQL extends Apollo.Mutation<VerifyUserMutation, VerifyUserMutationVariables> {
    document = VerifyUserDocument;
    
  }
export const SendVerifyDocument = gql`
    query sendVerify($appId: String!, $appSecret: String!) {
  auth {
    sendverify(appId: $appId, appSecret: $appSecret)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendVerifyGQL extends Apollo.Query<SendVerifyQuery, SendVerifyQueryVariables> {
    document = SendVerifyDocument;
    
  }
export const UpdateEmailDocument = gql`
    mutation updateEmail($appId: String!, $appSecret: String!, $email: String!) {
  user {
    email(appId: $appId, appSecret: $appSecret, email: $email) {
      appId
      appSecret
      token
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEmailGQL extends Apollo.Mutation<UpdateEmailMutation, UpdateEmailMutationVariables> {
    document = UpdateEmailDocument;
    
  }
export const SendRestDocument = gql`
    query sendRest($appId: String!, $appSecret: String!) {
  auth {
    sendreset(appId: $appId, appSecret: $appSecret)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendRestGQL extends Apollo.Query<SendRestQuery, SendRestQueryVariables> {
    document = SendRestDocument;
    
  }
export const ChangePasswordDocument = gql`
    mutation changePassword($appId: String!, $appSecret: String!, $token: String!, $password: String!) {
  user {
    password(appId: $appId, appSecret: $appSecret, token: $token, password: $password)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePasswordGQL extends Apollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> {
    document = ChangePasswordDocument;
    
  }
export const GetDocumentDocument = gql`
    query getDocument($docId: String!) {
  document {
    get(docId: $docId) {
      document {
        docId
        id
        content
        createDate
        updateDate
        title
      }
      smallWordTagInfo {
        wti {
          wordInfos {
            tag {
              id
              tagName
            }
            count
          }
          word
        }
        tags {
          id
          tagName
          tagColor
        }
      }
      bigWordTagInfo {
        tags {
          id
          tagName
          tagColor
        }
      }
      createTime
      updateTime
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDocumentGQL extends Apollo.Query<GetDocumentQuery, GetDocumentQueryVariables> {
    document = GetDocumentDocument;
    
  }
export const GetDocumentsDocument = gql`
    query getDocuments($pageSize: String!, $lastId: String!, $keywords: String) {
  document {
    list(limit: $pageSize, lastId: $lastId, keywords: $keywords) {
      id
      docId
      title
      content
      createDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDocumentsGQL extends Apollo.Query<GetDocumentsQuery, GetDocumentsQueryVariables> {
    document = GetDocumentsDocument;
    
  }
export const GiveItToMeDocument = gql`
    query giveItToMe($content: String!) {
  document {
    giveItToMe(content: $content) {
      document {
        docId
        id
        content
        createDate
        updateDate
        title
        wordsCount
      }
      smallWordTagInfo {
        wti {
          wordInfos {
            tag {
              tagName
            }
            count
          }
          word
        }
        tags {
          tagName
          tagColor
        }
      }
      bigWordTagInfo {
        tags {
          tagName
          tagColor
        }
      }
      createTime
      updateTime
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GiveItToMeGQL extends Apollo.Query<GiveItToMeQuery, GiveItToMeQueryVariables> {
    document = GiveItToMeDocument;
    
  }