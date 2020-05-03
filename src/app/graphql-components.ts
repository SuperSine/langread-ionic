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
  DateTime: any;
  Long: any;
  BigInt: any;
  Byte: any;
  DateTimeOffset: any;
  Decimal: any;
  Guid: any;
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
  sendauthcode?: Maybe<Scalars['Boolean']>;
  sendreset?: Maybe<Scalars['Boolean']>;
  sendverify?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['Boolean']>;
};


export type AuthAuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type AuthEmailArgs = {
  email: Scalars['String'];
};


export type AuthSendauthcodeArgs = {
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


export type AuthUsernameArgs = {
  username: Scalars['String'];
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
  url?: Maybe<Scalars['String']>;
};

export type DocumentQueryType = {
   __typename?: 'DocumentQueryType';
  get?: Maybe<WordTagDocumentCleanType>;
  giveItToMe?: Maybe<WordTagDocumentCleanType>;
  infoDocuments?: Maybe<InfoDocumentsCleanType>;
  list?: Maybe<Array<Maybe<DocumentType>>>;
  search?: Maybe<Array<Maybe<DocumentType>>>;
  stats?: Maybe<WordTagStaticsType>;
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
  createDate?: Maybe<Scalars['DateTime']>;
  docId: Scalars['String'];
  id: Scalars['String'];
  status: Scalars['Int'];
  title: Scalars['String'];
  updateDate?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
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
  wti?: Maybe<WordTagInfoMutation>;
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

export enum TokenPurpose {
  Email = 'EMAIL',
  PhoneNumber = 'PHONE_NUMBER',
  UserLogin = 'USER_LOGIN'
}



export type UpdateUserViewModelType = {
  userName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
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
  user?: Maybe<UpdateUserViewModelType>;
};


export type UserVerifyArgs = {
  email: Scalars['String'];
  code: Scalars['String'];
  purpose?: Maybe<TokenPurpose>;
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
  userName: Scalars['String'];
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
  createTime?: Maybe<Scalars['DateTime']>;
  document?: Maybe<DocumentType>;
  smallWordTagInfo?: Maybe<WordTagInfoCleanType>;
  status: Scalars['Int'];
  updateTime?: Maybe<Scalars['DateTime']>;
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

export type WordTagInfoMutation = {
   __typename?: 'WordTagInfoMutation';
  remove?: Maybe<Scalars['Boolean']>;
};


export type WordTagInfoMutationRemoveArgs = {
  word: Scalars['String'];
  tagName: Scalars['String'];
};

export type WordTagStaticsType = {
   __typename?: 'WordTagStaticsType';
  documentCount: Scalars['Long'];
  tagCount: Scalars['Int'];
  tagWordCount: Scalars['Int'];
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
      & Pick<UserType, 'appId' | 'appSecret' | 'firstName' | 'lastName' | 'email' | 'token'>
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
      & Pick<UserType, 'appId' | 'appSecret' | 'firstName' | 'lastName' | 'email' | 'token'>
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

export type SendTotpQueryVariables = {
  email: Scalars['String'];
};


export type SendTotpQuery = (
  { __typename?: 'Query' }
  & { auth?: Maybe<(
    { __typename?: 'Auth' }
    & Pick<Auth, 'sendauthcode'>
  )> }
);

export type VerifyCodeMutationVariables = {
  email: Scalars['String'];
  code: Scalars['String'];
  purpose?: Maybe<TokenPurpose>;
};


export type VerifyCodeMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { verify?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'appId' | 'appSecret' | 'firstName' | 'lastName' | 'userName' | 'email' | 'token'>
    )> }
  )> }
);

export type UpdateUserMutationVariables = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
  user?: Maybe<UpdateUserViewModelType>;
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { update?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'firstName' | 'lastName' | 'email' | 'userName' | 'appId' | 'appSecret' | 'token'>
    )> }
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
        & Pick<DocumentType, 'docId' | 'id' | 'content' | 'createDate' | 'updateDate' | 'title' | 'url' | 'wordsCount'>
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

export type GetStatsQueryVariables = {};


export type GetStatsQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'DocumentQueryType' }
    & { stats?: Maybe<(
      { __typename?: 'WordTagStaticsType' }
      & Pick<WordTagStaticsType, 'documentCount' | 'tagCount' | 'tagWordCount'>
    )> }
  )> }
);

export type RemoveTagMutationVariables = {
  word: Scalars['String'];
  tagName: Scalars['String'];
};


export type RemoveTagMutation = (
  { __typename?: 'Mutation' }
  & { wti?: Maybe<(
    { __typename?: 'WordTagInfoMutation' }
    & Pick<WordTagInfoMutation, 'remove'>
  )> }
);

export type SaveDocumentMutationVariables = {
  title: Scalars['String'];
  content: Scalars['String'];
  wordTagLiteStr: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  docId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SaveDocumentMutation = (
  { __typename?: 'Mutation' }
  & { doc?: Maybe<(
    { __typename?: 'Doc' }
    & { save?: Maybe<(
      { __typename?: 'WordTagDocumentCleanType' }
      & Pick<WordTagDocumentCleanType, 'createTime' | 'updateTime' | 'status'>
      & { document?: Maybe<(
        { __typename?: 'DocumentType' }
        & Pick<DocumentType, 'docId' | 'id' | 'content' | 'createDate' | 'updateDate' | 'title' | 'wordsCount' | 'url'>
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

export type DeleteDocumentMutationVariables = {
  docId: Scalars['String'];
};


export type DeleteDocumentMutation = (
  { __typename?: 'Mutation' }
  & { doc?: Maybe<(
    { __typename?: 'Doc' }
    & Pick<Doc, 'delete'>
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
      email
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
      firstName
      lastName
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
export const SendTotpDocument = gql`
    query sendTotp($email: String!) {
  auth {
    sendauthcode(email: $email)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendTotpGQL extends Apollo.Query<SendTotpQuery, SendTotpQueryVariables> {
    document = SendTotpDocument;
    
  }
export const VerifyCodeDocument = gql`
    mutation verifyCode($email: String!, $code: String!, $purpose: TokenPurpose) {
  user {
    verify(email: $email, code: $code, purpose: $purpose) {
      appId
      appSecret
      firstName
      lastName
      userName
      email
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyCodeGQL extends Apollo.Mutation<VerifyCodeMutation, VerifyCodeMutationVariables> {
    document = VerifyCodeDocument;
    
  }
export const UpdateUserDocument = gql`
    mutation updateUser($appId: String, $appSecret: String, $user: UpdateUserViewModelType) {
  user {
    update(appId: $appId, appSecret: $appSecret, user: $user) {
      firstName
      lastName
      email
      userName
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
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
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
        url
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
export const GetStatsDocument = gql`
    query getStats {
  document {
    stats {
      documentCount
      tagCount
      tagWordCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetStatsGQL extends Apollo.Query<GetStatsQuery, GetStatsQueryVariables> {
    document = GetStatsDocument;
    
  }
export const RemoveTagDocument = gql`
    mutation removeTag($word: String!, $tagName: String!) {
  wti {
    remove(word: $word, tagName: $tagName)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveTagGQL extends Apollo.Mutation<RemoveTagMutation, RemoveTagMutationVariables> {
    document = RemoveTagDocument;
    
  }
export const SaveDocumentDocument = gql`
    mutation saveDocument($title: String!, $content: String!, $wordTagLiteStr: String!, $id: String, $docId: String, $url: String) {
  doc {
    save(document: {title: $title, content: $content, id: $id, docId: $docId, url: $url}, wordTagLiteStr: $wordTagLiteStr) {
      document {
        docId
        id
        content
        createDate
        updateDate
        title
        wordsCount
        url
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
  export class SaveDocumentGQL extends Apollo.Mutation<SaveDocumentMutation, SaveDocumentMutationVariables> {
    document = SaveDocumentDocument;
    
  }
export const DeleteDocumentDocument = gql`
    mutation deleteDocument($docId: String!) {
  doc {
    delete(docId: $docId)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteDocumentGQL extends Apollo.Mutation<DeleteDocumentMutation, DeleteDocumentMutationVariables> {
    document = DeleteDocumentDocument;
    
  }