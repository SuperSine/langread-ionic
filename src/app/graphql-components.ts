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
  DateTimeOffset: any;
  Seconds: any;
  Milliseconds: any;
  Decimal: any;
  Uri: any;
  Guid: any;
  Short: any;
  UShort: any;
  UInt: any;
  BigInt: any;
  ULong: any;
  Byte: any;
  SByte: any;
};



export type Auth = {
   __typename?: 'Auth';
  auth?: Maybe<UserType>;
  email?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<ProfileType>;
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


export type AuthProfileArgs = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
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

export type BackTranslationType = {
   __typename?: 'BackTranslationType';
  displayTarget: Scalars['String'];
  frequencyCount: Scalars['Int'];
  normalizedText: Scalars['String'];
  numExamples: Scalars['Int'];
};







export type DefinitionType = {
   __typename?: 'DefinitionType';
  description: Scalars['String'];
  example?: Maybe<Scalars['String']>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type EntryResultType = {
   __typename?: 'EntryResultType';
  meanings?: Maybe<Array<Maybe<MeaningType>>>;
  origin?: Maybe<Scalars['String']>;
  phonetic?: Maybe<Scalars['String']>;
  word: Scalars['String'];
};

export type EntryType = {
   __typename?: 'EntryType';
  homographNumber: Scalars['String'];
  senses?: Maybe<Array<Maybe<SenseType>>>;
};

export type GroupInputType = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  groupTypeId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  languages?: Maybe<Scalars['String']>;
};

export type GroupMutation = {
   __typename?: 'GroupMutation';
  create?: Maybe<GroupType>;
  delete?: Maybe<Scalars['Int']>;
  follow?: Maybe<Scalars['Int']>;
  update?: Maybe<Scalars['Int']>;
};


export type GroupMutationCreateArgs = {
  data?: Maybe<GroupInputType>;
};


export type GroupMutationDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type GroupMutationFollowArgs = {
  groupId?: Maybe<Scalars['String']>;
};


export type GroupMutationUpdateArgs = {
  data: GroupInputType;
};

export type GroupQuery = {
   __typename?: 'GroupQuery';
  allGroupList?: Maybe<Array<Maybe<GroupType>>>;
  checkAvailable?: Maybe<Scalars['Boolean']>;
  detail?: Maybe<GroupType>;
  top?: Maybe<Array<Maybe<GroupType>>>;
  topByFollowers?: Maybe<Array<Maybe<GroupType>>>;
  userGroupList?: Maybe<Array<Maybe<GroupType>>>;
};


export type GroupQueryAllGroupListArgs = {
  keywords?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['String']>;
};


export type GroupQueryCheckAvailableArgs = {
  name?: Maybe<Scalars['String']>;
};


export type GroupQueryDetailArgs = {
  id?: Maybe<Scalars['String']>;
};


export type GroupQueryTopArgs = {
  top?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};


export type GroupQueryTopByFollowersArgs = {
  top?: Maybe<Scalars['Int']>;
};


export type GroupQueryUserGroupListArgs = {
  keywords?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type GroupType = {
   __typename?: 'GroupType';
  createTime: Scalars['Date'];
  creator: Scalars['String'];
  creatorUserName: Scalars['String'];
  description: Scalars['String'];
  groupTypeId: Scalars['Int'];
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  isFollowed: Scalars['Boolean'];
  languages: Scalars['String'];
  lastUpdatedBy: Scalars['String'];
  memberCount: Scalars['Int'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  readCount: Scalars['Int'];
  updateTime: Scalars['Date'];
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


export type MeaningType = {
   __typename?: 'MeaningType';
  definitions?: Maybe<Array<Maybe<DefinitionType>>>;
  partOfSpeech: Scalars['String'];
};


export type MomentInputType = {
  parent: Scalars['String'];
  root: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  language: Scalars['String'];
  groupId: Scalars['String'];
  momentGroupTypeId?: Maybe<Scalars['Int']>;
};

export type MomentMutation = {
   __typename?: 'MomentMutation';
  delete?: Maybe<MomentType>;
  post?: Maybe<MomentType>;
  vote?: Maybe<MomentType>;
};


export type MomentMutationDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MomentMutationPostArgs = {
  data: MomentInputType;
};


export type MomentMutationVoteArgs = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type MomentQuery = {
   __typename?: 'MomentQuery';
  listByFollowing?: Maybe<Array<Maybe<MomentType>>>;
  listByGroup?: Maybe<Array<Maybe<MomentType>>>;
};


export type MomentQueryListByFollowingArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
};


export type MomentQueryListByGroupArgs = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Type>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type MomentType = {
   __typename?: 'MomentType';
  content: Scalars['String'];
  createTime: Scalars['Date'];
  creator: Scalars['String'];
  groupId: Scalars['String'];
  id: Scalars['String'];
  language: Scalars['String'];
  momentGroupTypeId?: Maybe<Scalars['Int']>;
  parent: Scalars['String'];
  root: Scalars['String'];
  status: Scalars['Int'];
  title: Scalars['String'];
  upvoteCount: Scalars['Int'];
  userVoted: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  doc?: Maybe<Doc>;
  group?: Maybe<GroupMutation>;
  moment?: Maybe<MomentMutation>;
  profile?: Maybe<ProfileMutation>;
  secret?: Maybe<Secret>;
  tag?: Maybe<TagMutation>;
  user?: Maybe<User>;
  wti?: Maybe<WordTagInfoMutation>;
};

export type ProfileMutation = {
   __typename?: 'ProfileMutation';
  follow?: Maybe<Scalars['Int']>;
};


export type ProfileMutationFollowArgs = {
  profileId?: Maybe<Scalars['String']>;
};

export type ProfileQuery = {
   __typename?: 'ProfileQuery';
  followers?: Maybe<Array<Maybe<UserViewType>>>;
  followings?: Maybe<Array<Maybe<UserViewType>>>;
  friends?: Maybe<Array<Maybe<UserViewType>>>;
  people?: Maybe<Array<Maybe<UserViewType>>>;
};


export type ProfileQueryFollowersArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};


export type ProfileQueryFollowingsArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};


export type ProfileQueryFriendsArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};


export type ProfileQueryPeopleArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type ProfileType = {
   __typename?: 'ProfileType';
  displayLanguage?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  sourceLanguage?: Maybe<Scalars['String']>;
  targetLanguage?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
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
  group?: Maybe<GroupQuery>;
  moment?: Maybe<MomentQuery>;
  profile?: Maybe<ProfileQuery>;
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

export type TranslationResultType = {
   __typename?: 'TranslationResultType';
  displaySource: Scalars['String'];
  normalizedSource: Scalars['String'];
  translations?: Maybe<Array<Maybe<TranslationType>>>;
};

export type TranslationType = {
   __typename?: 'TranslationType';
  backTranslations?: Maybe<Array<Maybe<BackTranslationType>>>;
  confidence: Scalars['Float'];
  displayTarget: Scalars['String'];
  normalizedTarget: Scalars['String'];
  posTag: Scalars['String'];
  prefixWord: Scalars['String'];
};

export enum Type {
  All = 'ALL',
  Profile = 'PROFILE',
  Group = 'GROUP',
  Page = 'PAGE'
}



export type UpdateUserViewModelType = {
  userName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  displayLanguage?: Maybe<Scalars['String']>;
  targetLanguage?: Maybe<Scalars['String']>;
  sourceLanguage?: Maybe<Scalars['String']>;
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
  displayLanguage?: Maybe<Scalars['String']>;
  sourceLanguage?: Maybe<Scalars['String']>;
  targetLanguage?: Maybe<Scalars['String']>;
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
  displayLanguage: Scalars['String'];
  email: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  sourceLanguage: Scalars['String'];
  targetLanguage: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
};

export type UserViewType = {
   __typename?: 'UserViewType';
  followerCount: Scalars['Int'];
  followingCount: Scalars['Int'];
  id: Scalars['String'];
  isFollower: Scalars['Boolean'];
  isFollowing: Scalars['Boolean'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
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
  entryResults?: Maybe<Array<Maybe<EntryResultType>>>;
  score: Scalars['Float'];
  translationResult?: Maybe<TranslationResultType>;
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
  fromLang?: Maybe<Scalars['String']>;
  toLang?: Maybe<Scalars['String']>;
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
      & Pick<UserType, 'appId' | 'appSecret' | 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'userName' | 'emailConfirmed' | 'displayLanguage' | 'targetLanguage' | 'sourceLanguage' | 'token'>
    )> }
  )> }
);

export type RegisterMutationVariables = {
  email: Scalars['String'];
  displayLanguage: Scalars['String'];
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { register?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'appId' | 'appSecret' | 'firstName' | 'lastName' | 'email' | 'token' | 'displayLanguage'>
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
      & Pick<UserType, 'firstName' | 'lastName' | 'email' | 'userName' | 'appId' | 'appSecret' | 'token' | 'displayLanguage' | 'targetLanguage' | 'sourceLanguage'>
    )> }
  )> }
);

export type GetProfileQueryVariables = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
};


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { auth?: Maybe<(
    { __typename?: 'Auth' }
    & { profile?: Maybe<(
      { __typename?: 'ProfileType' }
      & Pick<ProfileType, 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'userName' | 'emailConfirmed' | 'displayLanguage' | 'targetLanguage' | 'sourceLanguage'>
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
  lastId?: Maybe<Scalars['String']>;
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

export type GetWordProfileQueryVariables = {
  word: Scalars['String'];
  fromLang: Scalars['String'];
  toLang: Scalars['String'];
};


export type GetWordProfileQuery = (
  { __typename?: 'Query' }
  & { wti?: Maybe<(
    { __typename?: 'WordTagInfo' }
    & { profile?: Maybe<(
      { __typename?: 'WordProfileType' }
      & Pick<WordProfileType, 'word' | 'score'>
      & { wordInfo?: Maybe<Array<Maybe<(
        { __typename?: 'InfoCleanType' }
        & Pick<InfoCleanType, 'count'>
        & { tag?: Maybe<(
          { __typename?: 'TagType' }
          & Pick<TagType, 'tagFont' | 'tagName' | 'tagColor' | 'id'>
        )> }
      )>>>, entryResults?: Maybe<Array<Maybe<(
        { __typename?: 'EntryResultType' }
        & Pick<EntryResultType, 'origin' | 'word' | 'phonetic'>
        & { meanings?: Maybe<Array<Maybe<(
          { __typename?: 'MeaningType' }
          & Pick<MeaningType, 'partOfSpeech'>
          & { definitions?: Maybe<Array<Maybe<(
            { __typename?: 'DefinitionType' }
            & Pick<DefinitionType, 'description' | 'example'>
          )>>> }
        )>>> }
      )>>>, translationResult?: Maybe<(
        { __typename?: 'TranslationResultType' }
        & Pick<TranslationResultType, 'displaySource'>
        & { translations?: Maybe<Array<Maybe<(
          { __typename?: 'TranslationType' }
          & Pick<TranslationType, 'displayTarget' | 'posTag' | 'confidence'>
          & { backTranslations?: Maybe<Array<Maybe<(
            { __typename?: 'BackTranslationType' }
            & Pick<BackTranslationType, 'normalizedText' | 'displayTarget'>
          )>>> }
        )>>> }
      )> }
    )> }
  )>, timeline?: Maybe<(
    { __typename?: 'Timeline' }
    & { wordByMonth?: Maybe<(
      { __typename?: 'TimelineValueByMonthType' }
      & { data?: Maybe<Array<Maybe<(
        { __typename?: 'ValueByMonthType' }
        & Pick<ValueByMonthType, 'total'>
        & { yearMonth?: Maybe<(
          { __typename?: 'YearMonthType' }
          & Pick<YearMonthType, 'year' | 'month'>
        )> }
      )>>> }
    )> }
  )> }
);

export type GetTopmostQueryVariables = {
  top?: Maybe<Scalars['String']>;
};


export type GetTopmostQuery = (
  { __typename?: 'Query' }
  & { wti?: Maybe<(
    { __typename?: 'WordTagInfo' }
    & { topMost?: Maybe<Array<Maybe<(
      { __typename?: 'WordProfileType' }
      & Pick<WordProfileType, 'word' | 'score'>
      & { wordInfo?: Maybe<Array<Maybe<(
        { __typename?: 'InfoCleanType' }
        & { tag?: Maybe<(
          { __typename?: 'TagType' }
          & Pick<TagType, 'tagFont' | 'tagName' | 'tagColor'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type CreateGroupMutationVariables = {
  group?: Maybe<GroupInputType>;
};


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { group?: Maybe<(
    { __typename?: 'GroupMutation' }
    & { create?: Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'description' | 'id'>
    )> }
  )> }
);

export type UpdateGroupMutationVariables = {
  group: GroupInputType;
};


export type UpdateGroupMutation = (
  { __typename?: 'Mutation' }
  & { group?: Maybe<(
    { __typename?: 'GroupMutation' }
    & Pick<GroupMutation, 'update'>
  )> }
);

export type CheckAvailableQueryVariables = {
  name?: Maybe<Scalars['String']>;
};


export type CheckAvailableQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupQuery' }
    & Pick<GroupQuery, 'checkAvailable'>
  )> }
);

export type UserGroupListQueryVariables = {
  pageIndex?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};


export type UserGroupListQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupQuery' }
    & { userGroupList?: Maybe<Array<Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name' | 'readCount' | 'memberCount' | 'creator' | 'description' | 'isAdmin' | 'isFollowed' | 'languages'>
    )>>> }
  )> }
);

export type AllGroupListQueryVariables = {
  pageIndex?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};


export type AllGroupListQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupQuery' }
    & { allGroupList?: Maybe<Array<Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name' | 'readCount' | 'memberCount' | 'creator' | 'description' | 'isAdmin' | 'isFollowed' | 'languages'>
    )>>> }
  )> }
);

export type DeleteGroupMutationVariables = {
  id: Scalars['String'];
};


export type DeleteGroupMutation = (
  { __typename?: 'Mutation' }
  & { group?: Maybe<(
    { __typename?: 'GroupMutation' }
    & Pick<GroupMutation, 'delete'>
  )> }
);

export type FollowGroupMutationVariables = {
  id?: Maybe<Scalars['String']>;
};


export type FollowGroupMutation = (
  { __typename?: 'Mutation' }
  & { group?: Maybe<(
    { __typename?: 'GroupMutation' }
    & Pick<GroupMutation, 'follow'>
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
      phoneNumber
      userName
      emailConfirmed
      displayLanguage
      targetLanguage
      sourceLanguage
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
    mutation register($email: String!, $displayLanguage: String!) {
  user {
    register(email: $email, displayLanguage: $displayLanguage) {
      appId
      appSecret
      firstName
      lastName
      email
      token
      displayLanguage
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
      displayLanguage
      targetLanguage
      sourceLanguage
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
export const GetProfileDocument = gql`
    query getProfile($appId: String!, $appSecret: String!) {
  auth {
    profile(appId: $appId, appSecret: $appSecret) {
      firstName
      lastName
      email
      phoneNumber
      userName
      emailConfirmed
      displayLanguage
      targetLanguage
      sourceLanguage
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfileGQL extends Apollo.Query<GetProfileQuery, GetProfileQueryVariables> {
    document = GetProfileDocument;
    
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
    query getDocuments($pageSize: String!, $lastId: String, $keywords: String) {
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
export const GetWordProfileDocument = gql`
    query getWordProfile($word: String!, $fromLang: String!, $toLang: String!) {
  wti {
    profile(word: $word, fromLang: $fromLang, toLang: $toLang) {
      word
      score
      wordInfo {
        tag {
          tagFont
          tagName
          tagColor
          id
        }
        count
      }
      entryResults {
        origin
        word
        phonetic
        meanings {
          definitions {
            description
            example
          }
          partOfSpeech
        }
      }
      translationResult {
        displaySource
        translations {
          displayTarget
          posTag
          confidence
          backTranslations {
            normalizedText
            displayTarget
          }
        }
      }
    }
  }
  timeline {
    wordByMonth(word: $word) {
      data {
        total
        yearMonth {
          year
          month
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWordProfileGQL extends Apollo.Query<GetWordProfileQuery, GetWordProfileQueryVariables> {
    document = GetWordProfileDocument;
    
  }
export const GetTopmostDocument = gql`
    query getTopmost($top: String) {
  wti {
    topMost(top: $top) {
      word
      score
      wordInfo {
        tag {
          tagFont
          tagName
          tagColor
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTopmostGQL extends Apollo.Query<GetTopmostQuery, GetTopmostQueryVariables> {
    document = GetTopmostDocument;
    
  }
export const CreateGroupDocument = gql`
    mutation createGroup($group: GroupInputType) {
  group {
    create(data: $group) {
      description
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateGroupGQL extends Apollo.Mutation<CreateGroupMutation, CreateGroupMutationVariables> {
    document = CreateGroupDocument;
    
  }
export const UpdateGroupDocument = gql`
    mutation updateGroup($group: GroupInputType!) {
  group {
    update(data: $group)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateGroupGQL extends Apollo.Mutation<UpdateGroupMutation, UpdateGroupMutationVariables> {
    document = UpdateGroupDocument;
    
  }
export const CheckAvailableDocument = gql`
    query checkAvailable($name: String) {
  group {
    checkAvailable(name: $name)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckAvailableGQL extends Apollo.Query<CheckAvailableQuery, CheckAvailableQueryVariables> {
    document = CheckAvailableDocument;
    
  }
export const UserGroupListDocument = gql`
    query userGroupList($pageIndex: String, $pageSize: String, $userId: String, $keywords: String) {
  group {
    userGroupList(pageIndex: $pageIndex, pageSize: $pageSize, userId: $userId, keywords: $keywords) {
      id
      name
      readCount
      memberCount
      creator
      description
      isAdmin
      isFollowed
      languages
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGroupListGQL extends Apollo.Query<UserGroupListQuery, UserGroupListQueryVariables> {
    document = UserGroupListDocument;
    
  }
export const AllGroupListDocument = gql`
    query allGroupList($pageIndex: String, $pageSize: String, $keywords: String) {
  group {
    allGroupList(pageIndex: $pageIndex, pageSize: $pageSize, keywords: $keywords) {
      id
      name
      readCount
      memberCount
      creator
      description
      isAdmin
      isFollowed
      languages
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllGroupListGQL extends Apollo.Query<AllGroupListQuery, AllGroupListQueryVariables> {
    document = AllGroupListDocument;
    
  }
export const DeleteGroupDocument = gql`
    mutation deleteGroup($id: String!) {
  group {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteGroupGQL extends Apollo.Mutation<DeleteGroupMutation, DeleteGroupMutationVariables> {
    document = DeleteGroupDocument;
    
  }
export const FollowGroupDocument = gql`
    mutation followGroup($id: String) {
  group {
    follow(groupId: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FollowGroupGQL extends Apollo.Mutation<FollowGroupMutation, FollowGroupMutationVariables> {
    document = FollowGroupDocument;
    
  }