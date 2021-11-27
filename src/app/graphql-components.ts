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
  DateTime: any;
  Long: any;
};



export type Auth = {
   __typename?: 'Auth';
  profile?: Maybe<ProfileType>;
  auth?: Maybe<UserType>;
  email?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['Boolean']>;
  sendverify?: Maybe<Scalars['Boolean']>;
  sendreset?: Maybe<Scalars['Boolean']>;
  sendauthcode?: Maybe<Scalars['Boolean']>;
};


export type AuthProfileArgs = {
  appId: Scalars['String'];
  appSecret: Scalars['String'];
};


export type AuthAuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type AuthEmailArgs = {
  email: Scalars['String'];
};


export type AuthUsernameArgs = {
  username: Scalars['String'];
};


export type AuthSendverifyArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
};


export type AuthSendresetArgs = {
  appId?: Maybe<Scalars['String']>;
  appSecret?: Maybe<Scalars['String']>;
};


export type AuthSendauthcodeArgs = {
  email: Scalars['String'];
};

export type BackTranslationType = {
   __typename?: 'BackTranslationType';
  normalizedText: Scalars['String'];
  displayTarget: Scalars['String'];
  numExamples: Scalars['Int'];
  frequencyCount: Scalars['Int'];
};

export type CommentInputType = {
  content: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  readId: Scalars['String'];
};

export type CommentType = {
   __typename?: 'CommentType';
  id: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  creator: Scalars['String'];
  upvoteCount?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  createTime?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
  createdByCurrentUser: Scalars['Boolean'];
  hasVoted: Scalars['Boolean'];
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
  type: Scalars['String'];
  word: Scalars['String'];
  lexicalEntries?: Maybe<Array<Maybe<LexicalEntryType>>>;
};

export type Doc = {
   __typename?: 'Doc';
  save?: Maybe<WordTagDocumentCleanType>;
  add?: Maybe<WordTagDocumentCleanType>;
  fork?: Maybe<WordTagDocumentCleanType>;
  delete?: Maybe<Scalars['Int']>;
  update?: Maybe<WordTagDocumentCleanType>;
  deleteAllData?: Maybe<Scalars['Int']>;
};


export type DocSaveArgs = {
  document: DocumentInputType;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type DocAddArgs = {
  document: DocumentInputType;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type DocForkArgs = {
  docId: Scalars['String'];
  groupId?: Maybe<Scalars['String']>;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type DocDeleteArgs = {
  docId?: Maybe<Scalars['String']>;
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
  groupId?: Maybe<Scalars['String']>;
};

export type DocumentQueryType = {
   __typename?: 'DocumentQueryType';
  infoDocuments?: Maybe<InfoDocumentsCleanType>;
  giveItToMe?: Maybe<WordTagDocumentCleanType>;
  get?: Maybe<WordTagDocumentCleanType>;
  list?: Maybe<PaginatedDocumentType>;
  search?: Maybe<Array<Maybe<DocumentType>>>;
  stats?: Maybe<WordTagStaticsType>;
};


export type DocumentQueryTypeInfoDocumentsArgs = {
  word?: Maybe<Scalars['String']>;
  lastId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type DocumentQueryTypeGiveItToMeArgs = {
  content?: Maybe<Scalars['String']>;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type DocumentQueryTypeGetArgs = {
  docId?: Maybe<Scalars['String']>;
  includeWti?: Maybe<Scalars['Boolean']>;
};


export type DocumentQueryTypeListArgs = {
  lastId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
};


export type DocumentQueryTypeSearchArgs = {
  keywords?: Maybe<Scalars['String']>;
  lastId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type DocumentType = {
   __typename?: 'DocumentType';
  id: Scalars['String'];
  docId: Scalars['String'];
  title: Scalars['String'];
  status: Scalars['Int'];
  content: Scalars['String'];
  createDate?: Maybe<Scalars['DateTime']>;
  updateDate?: Maybe<Scalars['DateTime']>;
  wordsCount: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  forkId?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type EntryResultType = {
   __typename?: 'EntryResultType';
  word: Scalars['String'];
  phonetic?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  meanings?: Maybe<Array<Maybe<MeaningType>>>;
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
  unfollow?: Maybe<Scalars['Int']>;
  follow?: Maybe<Scalars['Int']>;
  create?: Maybe<GroupType>;
  update?: Maybe<GroupType>;
  delete?: Maybe<Scalars['Int']>;
};


export type GroupMutationUnfollowArgs = {
  groupId?: Maybe<Scalars['String']>;
  followerId?: Maybe<Scalars['String']>;
};


export type GroupMutationFollowArgs = {
  groupId?: Maybe<Scalars['String']>;
};


export type GroupMutationCreateArgs = {
  data?: Maybe<GroupInputType>;
};


export type GroupMutationUpdateArgs = {
  data: GroupInputType;
};


export type GroupMutationDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};

export type GroupQuery = {
   __typename?: 'GroupQuery';
  detail?: Maybe<GroupType>;
  userGroupList?: Maybe<Array<Maybe<GroupType>>>;
  allGroupList?: Maybe<Array<Maybe<GroupType>>>;
  top?: Maybe<Array<Maybe<GroupType>>>;
  topByFollowers?: Maybe<Array<Maybe<GroupType>>>;
  checkAvailable?: Maybe<Scalars['Boolean']>;
  followers?: Maybe<Array<Maybe<UserViewType>>>;
};


export type GroupQueryDetailArgs = {
  id?: Maybe<Scalars['String']>;
};


export type GroupQueryUserGroupListArgs = {
  keywords?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  includeDefault?: Maybe<Scalars['Boolean']>;
};


export type GroupQueryAllGroupListArgs = {
  keywords?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type GroupQueryTopArgs = {
  top?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};


export type GroupQueryTopByFollowersArgs = {
  top?: Maybe<Scalars['Int']>;
};


export type GroupQueryCheckAvailableArgs = {
  name?: Maybe<Scalars['String']>;
};


export type GroupQueryFollowersArgs = {
  groupId?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type GroupType = {
   __typename?: 'GroupType';
  id: Scalars['String'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  groupTypeId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  languages?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  lastUpdatedBy?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  readCount?: Maybe<Scalars['Int']>;
  createTime?: Maybe<Scalars['DateTime']>;
  updateTime?: Maybe<Scalars['DateTime']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isFollowed?: Maybe<Scalars['Boolean']>;
  creatorUserName?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
};

export type InfoCleanType = {
   __typename?: 'InfoCleanType';
  tag?: Maybe<TagType>;
  count: Scalars['Int'];
};

export type InfoDocumentsCleanType = {
   __typename?: 'InfoDocumentsCleanType';
  wordTagInfo?: Maybe<WordTagInfoCleanType>;
  documents?: Maybe<Array<Maybe<DocumentType>>>;
};

export type LexicalEntryType = {
   __typename?: 'LexicalEntryType';
  entries?: Maybe<Array<Maybe<EntryType>>>;
  language: Scalars['String'];
  lexicalCategory: Scalars['String'];
  text: Scalars['String'];
  pronunciations?: Maybe<Array<Maybe<PronunciationType>>>;
};


export type MeaningType = {
   __typename?: 'MeaningType';
  partOfSpeech: Scalars['String'];
  definitions?: Maybe<Array<Maybe<DefinitionType>>>;
};

export enum MomentGroupType {
  All = 'ALL',
  Profile = 'PROFILE',
  Group = 'GROUP',
  Page = 'PAGE',
  Comment = 'COMMENT'
}

export type MomentInputType = {
  parent?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  momentGroupTypeId?: Maybe<Scalars['Int']>;
};

export type MomentMutation = {
   __typename?: 'MomentMutation';
  delete?: Maybe<MomentType>;
  post?: Maybe<MomentType>;
  comment?: Maybe<CommentType>;
  vote?: Maybe<MomentType>;
};


export type MomentMutationDeleteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MomentMutationPostArgs = {
  data: MomentInputType;
};


export type MomentMutationCommentArgs = {
  data: CommentInputType;
};


export type MomentMutationVoteArgs = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type MomentQuery = {
   __typename?: 'MomentQuery';
  listByGroup?: Maybe<Array<Maybe<MomentType>>>;
  listByFollowing?: Maybe<Array<Maybe<MomentType>>>;
  listByLang?: Maybe<Array<Maybe<MomentType>>>;
  listByComment?: Maybe<Array<Maybe<CommentType>>>;
  getByDocId?: Maybe<MomentType>;
};


export type MomentQueryListByGroupArgs = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<MomentGroupType>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MomentQueryListByFollowingArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
};


export type MomentQueryListByLangArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  langCode?: Maybe<Scalars['String']>;
};


export type MomentQueryListByCommentArgs = {
  id?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MomentQueryGetByDocIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MomentType = {
   __typename?: 'MomentType';
  id: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  creator: Scalars['String'];
  upvoteCount?: Maybe<Scalars['Int']>;
  forkCount?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  createTime?: Maybe<Scalars['DateTime']>;
  momentGroupTypeId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  readId?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
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

export type PaginatedDocumentType = {
   __typename?: 'PaginatedDocumentType';
  lastId?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<DocumentType>>>;
};

export type ProfileMutation = {
   __typename?: 'ProfileMutation';
  follow?: Maybe<Scalars['Int']>;
  unfollow?: Maybe<Scalars['Int']>;
  deleteAllData?: Maybe<Scalars['Int']>;
};


export type ProfileMutationFollowArgs = {
  profileId?: Maybe<Scalars['String']>;
};


export type ProfileMutationUnfollowArgs = {
  followerUserId?: Maybe<Scalars['String']>;
};

export type ProfileQuery = {
   __typename?: 'ProfileQuery';
  profile?: Maybe<UserViewType>;
  followers?: Maybe<Array<Maybe<UserViewType>>>;
  followings?: Maybe<Array<Maybe<UserViewType>>>;
  people?: Maybe<Array<Maybe<UserViewType>>>;
  friends?: Maybe<Array<Maybe<UserViewType>>>;
};


export type ProfileQueryProfileArgs = {
  userId?: Maybe<Scalars['String']>;
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


export type ProfileQueryPeopleArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type ProfileQueryFriendsArgs = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileType = {
   __typename?: 'ProfileType';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  displayLanguage?: Maybe<Scalars['String']>;
  targetLanguage?: Maybe<Scalars['String']>;
  sourceLanguage?: Maybe<Scalars['String']>;
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
  id: Scalars['String'];
  tagName: Scalars['String'];
  tagColor: Scalars['String'];
  tagFont: Scalars['String'];
  createDate: Scalars['DateTime'];
};

export type Timeline = {
   __typename?: 'Timeline';
  get?: Maybe<TimelineItemsType>;
  search?: Maybe<Array<Maybe<Scalars['String']>>>;
  wordByMonth?: Maybe<TimelineValueByMonthType>;
  tagByMonth?: Maybe<TimelineValueByMonthType>;
};


export type TimelineGetArgs = {
  lastId?: Maybe<Scalars['String']>;
  limitDocs?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
};


export type TimelineSearchArgs = {
  keyword?: Maybe<Scalars['String']>;
};


export type TimelineWordByMonthArgs = {
  word?: Maybe<Scalars['String']>;
};


export type TimelineTagByMonthArgs = {
  tagName?: Maybe<Scalars['String']>;
};

export type TimelineItemsType = {
   __typename?: 'TimelineItemsType';
  lastId: Scalars['String'];
  nextId?: Maybe<Scalars['String']>;
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  count: Scalars['Int'];
  words?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  wordTagInfo?: Maybe<WordTagInfoCleanType>;
};

export type TimelineValueByMonthType = {
   __typename?: 'TimelineValueByMonthType';
  count: Scalars['Int'];
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  data?: Maybe<Array<Maybe<ValueByMonthType>>>;
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
  normalizedSource: Scalars['String'];
  displaySource: Scalars['String'];
  translations?: Maybe<Array<Maybe<TranslationType>>>;
};

export type TranslationType = {
   __typename?: 'TranslationType';
  normalizedTarget: Scalars['String'];
  displayTarget: Scalars['String'];
  posTag: Scalars['String'];
  confidence: Scalars['Float'];
  prefixWord: Scalars['String'];
  backTranslations?: Maybe<Array<Maybe<BackTranslationType>>>;
};

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
  register?: Maybe<UserType>;
  update?: Maybe<UserType>;
  email?: Maybe<UserType>;
  password?: Maybe<Scalars['Boolean']>;
  verify?: Maybe<UserType>;
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


export type UserVerifyArgs = {
  email: Scalars['String'];
  code: Scalars['String'];
  purpose?: Maybe<TokenPurpose>;
};

export type UserType = {
   __typename?: 'UserType';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  appId: Scalars['String'];
  appSecret: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  displayLanguage: Scalars['String'];
  targetLanguage: Scalars['String'];
  sourceLanguage: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type UserViewType = {
   __typename?: 'UserViewType';
  id: Scalars['String'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  isFollowing: Scalars['Boolean'];
  isFollower: Scalars['Boolean'];
  followerCount: Scalars['Int'];
  followingCount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
};

export type ValueByMonthType = {
   __typename?: 'ValueByMonthType';
  yearMonth?: Maybe<YearMonthType>;
  total: Scalars['Int'];
};

export type WordInfoCleanType = {
   __typename?: 'WordInfoCleanType';
  word: Scalars['String'];
  wordInfos?: Maybe<Array<Maybe<InfoCleanType>>>;
};

export type WordProfileType = {
   __typename?: 'WordProfileType';
  word: Scalars['String'];
  score: Scalars['Float'];
  dictResult?: Maybe<SearchResultType>;
  entryResults?: Maybe<Array<Maybe<EntryResultType>>>;
  wordInfo?: Maybe<Array<Maybe<InfoCleanType>>>;
  translationResult?: Maybe<TranslationResultType>;
};

export type WordTagDocumentCleanType = {
   __typename?: 'WordTagDocumentCleanType';
  smallWordTagInfo?: Maybe<WordTagInfoCleanType>;
  bigWordTagInfo?: Maybe<WordTagInfoCleanType>;
  document?: Maybe<DocumentType>;
  createTime?: Maybe<Scalars['DateTime']>;
  updateTime?: Maybe<Scalars['DateTime']>;
  status: Scalars['Int'];
  userId: Scalars['String'];
  isCreator: Scalars['Boolean'];
};

export type WordTagInfo = {
   __typename?: 'WordTagInfo';
  get?: Maybe<WordTagInfoCleanType>;
  dict?: Maybe<SearchResultType>;
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
  top?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type WordTagInfoCleanType = {
   __typename?: 'WordTagInfoCleanType';
  wti?: Maybe<Array<Maybe<WordInfoCleanType>>>;
  tags?: Maybe<Array<Maybe<TagType>>>;
  createDate: Scalars['DateTime'];
  updateDate: Scalars['DateTime'];
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
  tagWordCount: Scalars['Int'];
  tagCount: Scalars['Int'];
};

export type YearMonthType = {
   __typename?: 'YearMonthType';
  year: Scalars['Int'];
  month: Scalars['Int'];
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
  pageSize: Scalars['Int'];
  lastId?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};


export type GetDocumentsQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'DocumentQueryType' }
    & { list?: Maybe<(
      { __typename?: 'PaginatedDocumentType' }
      & Pick<PaginatedDocumentType, 'lastId'>
      & { data?: Maybe<Array<Maybe<(
        { __typename?: 'DocumentType' }
        & Pick<DocumentType, 'id' | 'docId' | 'title' | 'content' | 'createDate'>
      )>>> }
    )> }
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
      & Pick<WordTagDocumentCleanType, 'isCreator' | 'userId' | 'createTime' | 'updateTime' | 'status'>
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
  top?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
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

export type GetTimelineQueryVariables = {
  index?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  lastId?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};


export type GetTimelineQuery = (
  { __typename?: 'Query' }
  & { timeline?: Maybe<(
    { __typename?: 'Timeline' }
    & { get?: Maybe<(
      { __typename?: 'TimelineItemsType' }
      & Pick<TimelineItemsType, 'words' | 'lastId'>
      & { wordTagInfo?: Maybe<(
        { __typename?: 'WordTagInfoCleanType' }
        & { wti?: Maybe<Array<Maybe<(
          { __typename?: 'WordInfoCleanType' }
          & Pick<WordInfoCleanType, 'word'>
          & { wordInfos?: Maybe<Array<Maybe<(
            { __typename?: 'InfoCleanType' }
            & { tag?: Maybe<(
              { __typename?: 'TagType' }
              & Pick<TagType, 'id' | 'tagName' | 'tagColor' | 'tagFont'>
            )> }
          )>>> }
        )>>> }
      )> }
    )> }
  )> }
);

export type ForkDoucmentMutationVariables = {
  docId: Scalars['String'];
  groupId?: Maybe<Scalars['String']>;
  wordTagLiteStr?: Maybe<Scalars['String']>;
};


export type ForkDoucmentMutation = (
  { __typename?: 'Mutation' }
  & { doc?: Maybe<(
    { __typename?: 'Doc' }
    & { fork?: Maybe<(
      { __typename?: 'WordTagDocumentCleanType' }
      & { document?: Maybe<(
        { __typename?: 'DocumentType' }
        & Pick<DocumentType, 'docId' | 'forkId'>
      )> }
    )> }
  )> }
);

export type DeleteAllCoreDataMutationVariables = {};


export type DeleteAllCoreDataMutation = (
  { __typename?: 'Mutation' }
  & { doc?: Maybe<(
    { __typename?: 'Doc' }
    & Pick<Doc, 'deleteAllData'>
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
      & Pick<GroupType, 'id' | 'name' | 'readCount' | 'memberCount' | 'creator' | 'description' | 'isAdmin' | 'isFollowed' | 'languages'>
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
    & { update?: Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name' | 'readCount' | 'memberCount' | 'creator' | 'description' | 'isAdmin' | 'isFollowed' | 'languages'>
    )> }
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
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  includeDefault?: Maybe<Scalars['Boolean']>;
};


export type UserGroupListQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupQuery' }
    & { userGroupList?: Maybe<Array<Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name' | 'readCount' | 'memberCount' | 'creator' | 'description' | 'isAdmin' | 'isFollowed' | 'languages' | 'isDefault'>
    )>>> }
  )> }
);

export type AllGroupListQueryVariables = {
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
};


export type AllGroupListQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupQuery' }
    & { allGroupList?: Maybe<Array<Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name' | 'readCount' | 'memberCount' | 'creator' | 'description' | 'isAdmin' | 'isFollowed' | 'languages' | 'isDefault'>
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

export type UnFollowGroupMutationVariables = {
  groupId: Scalars['String'];
  followerId: Scalars['String'];
};


export type UnFollowGroupMutation = (
  { __typename?: 'Mutation' }
  & { group?: Maybe<(
    { __typename?: 'GroupMutation' }
    & Pick<GroupMutation, 'unfollow'>
  )> }
);

export type ListMomentByFollowingQueryVariables = {
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
};


export type ListMomentByFollowingQuery = (
  { __typename?: 'Query' }
  & { moment?: Maybe<(
    { __typename?: 'MomentQuery' }
    & { listByFollowing?: Maybe<Array<Maybe<(
      { __typename?: 'MomentType' }
      & Pick<MomentType, 'groupId' | 'id' | 'title' | 'content' | 'createTime' | 'language' | 'status' | 'userName' | 'upvoteCount' | 'forkCount' | 'creator' | 'readId'>
    )>>> }
  )> }
);

export type ListMomentByLangQueryVariables = {
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  langCode?: Maybe<Scalars['String']>;
};


export type ListMomentByLangQuery = (
  { __typename?: 'Query' }
  & { moment?: Maybe<(
    { __typename?: 'MomentQuery' }
    & { listByLang?: Maybe<Array<Maybe<(
      { __typename?: 'MomentType' }
      & Pick<MomentType, 'groupId' | 'id' | 'title' | 'content' | 'createTime' | 'language' | 'status' | 'userName' | 'upvoteCount' | 'forkCount' | 'creator' | 'readId'>
    )>>> }
  )> }
);

export type ListMomentByGroupQueryVariables = {
  groupId: Scalars['String'];
  typeId: MomentGroupType;
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type ListMomentByGroupQuery = (
  { __typename?: 'Query' }
  & { moment?: Maybe<(
    { __typename?: 'MomentQuery' }
    & { listByGroup?: Maybe<Array<Maybe<(
      { __typename?: 'MomentType' }
      & Pick<MomentType, 'groupId' | 'id' | 'title' | 'content' | 'createTime' | 'language' | 'status' | 'userName' | 'upvoteCount' | 'forkCount' | 'creator' | 'readId'>
    )>>> }
  )> }
);

export type LikeMomentMutationVariables = {
  id: Scalars['String'];
  value: Scalars['Int'];
};


export type LikeMomentMutation = (
  { __typename?: 'Mutation' }
  & { moment?: Maybe<(
    { __typename?: 'MomentMutation' }
    & { vote?: Maybe<(
      { __typename?: 'MomentType' }
      & Pick<MomentType, 'upvoteCount'>
    )> }
  )> }
);

export type DeleteMomentMutationVariables = {
  id: Scalars['String'];
};


export type DeleteMomentMutation = (
  { __typename?: 'Mutation' }
  & { moment?: Maybe<(
    { __typename?: 'MomentMutation' }
    & { delete?: Maybe<(
      { __typename?: 'MomentType' }
      & Pick<MomentType, 'status' | 'id'>
    )> }
  )> }
);

export type GetMomentByDocIdQueryVariables = {
  id: Scalars['String'];
};


export type GetMomentByDocIdQuery = (
  { __typename?: 'Query' }
  & { moment?: Maybe<(
    { __typename?: 'MomentQuery' }
    & { getByDocId?: Maybe<(
      { __typename?: 'MomentType' }
      & Pick<MomentType, 'groupId' | 'id' | 'title' | 'content' | 'createTime' | 'language' | 'status' | 'userName' | 'upvoteCount' | 'forkCount' | 'creator' | 'commentCount'>
    )> }
  )> }
);

export type GetFollowersQueryVariables = {
  index: Scalars['Int'];
  size: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
};


export type GetFollowersQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileQuery' }
    & { followers?: Maybe<Array<Maybe<(
      { __typename?: 'UserViewType' }
      & Pick<UserViewType, 'id' | 'name' | 'description' | 'followerCount' | 'followingCount'>
    )>>> }
  )> }
);

export type GetFollowingsQueryVariables = {
  index: Scalars['Int'];
  size: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
};


export type GetFollowingsQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileQuery' }
    & { followings?: Maybe<Array<Maybe<(
      { __typename?: 'UserViewType' }
      & Pick<UserViewType, 'id' | 'name' | 'description' | 'followerCount' | 'followingCount'>
    )>>> }
  )> }
);

export type GetUserProfileQueryVariables = {
  userId: Scalars['String'];
};


export type GetUserProfileQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileQuery' }
    & { profile?: Maybe<(
      { __typename?: 'UserViewType' }
      & Pick<UserViewType, 'id' | 'name' | 'description' | 'followerCount' | 'followingCount' | 'isFollower' | 'isFollowing'>
    )> }
  )> }
);

export type FollowProfileMutationVariables = {
  userId: Scalars['String'];
};


export type FollowProfileMutation = (
  { __typename?: 'Mutation' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileMutation' }
    & Pick<ProfileMutation, 'follow'>
  )> }
);

export type UnFollowProfileMutationVariables = {
  userId: Scalars['String'];
};


export type UnFollowProfileMutation = (
  { __typename?: 'Mutation' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileMutation' }
    & Pick<ProfileMutation, 'unfollow'>
  )> }
);

export type GetGroupFollowersQueryVariables = {
  groupId: Scalars['String'];
  index: Scalars['Int'];
  size: Scalars['Int'];
};


export type GetGroupFollowersQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupQuery' }
    & { followers?: Maybe<Array<Maybe<(
      { __typename?: 'UserViewType' }
      & Pick<UserViewType, 'id' | 'name' | 'description' | 'followerCount' | 'followingCount'>
    )>>> }
  )> }
);

export type GetGroupDetailQueryVariables = {
  groupId: Scalars['String'];
};


export type GetGroupDetailQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'GroupQuery' }
    & { detail?: Maybe<(
      { __typename?: 'GroupType' }
      & Pick<GroupType, 'id' | 'name' | 'readCount' | 'memberCount' | 'creator' | 'description' | 'isAdmin' | 'isFollowed' | 'languages'>
    )> }
  )> }
);

export type ListByCommentQueryVariables = {
  id: Scalars['String'];
  pageSize: Scalars['Int'];
  pageIndex: Scalars['Int'];
};


export type ListByCommentQuery = (
  { __typename?: 'Query' }
  & { moment?: Maybe<(
    { __typename?: 'MomentQuery' }
    & { listByComment?: Maybe<Array<Maybe<(
      { __typename?: 'CommentType' }
      & Pick<CommentType, 'id' | 'creator' | 'createTime' | 'content' | 'parent' | 'root' | 'userName' | 'createdByCurrentUser' | 'upvoteCount' | 'hasVoted'>
    )>>> }
  )> }
);

export type PostCommentMutationVariables = {
  comment: CommentInputType;
};


export type PostCommentMutation = (
  { __typename?: 'Mutation' }
  & { moment?: Maybe<(
    { __typename?: 'MomentMutation' }
    & { comment?: Maybe<(
      { __typename?: 'CommentType' }
      & Pick<CommentType, 'creator' | 'createTime' | 'id' | 'content'>
    )> }
  )> }
);

export type DeleteAllSocialDataMutationVariables = {};


export type DeleteAllSocialDataMutation = (
  { __typename?: 'Mutation' }
  & { profile?: Maybe<(
    { __typename?: 'ProfileMutation' }
    & Pick<ProfileMutation, 'deleteAllData'>
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
    query getDocuments($pageSize: Int!, $lastId: String, $keywords: String) {
  document {
    list(limit: $pageSize, lastId: $lastId, keywords: $keywords) {
      data {
        id
        docId
        title
        content
        createDate
      }
      lastId
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
      isCreator
      userId
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
    query getTopmost($top: Int, $userId: String) {
  wti {
    topMost(top: $top, userId: $userId) {
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
export const GetTimelineDocument = gql`
    query getTimeline($index: Int, $size: Int, $lastId: String, $keywords: String) {
  timeline {
    get(index: $index, size: $size, lastId: $lastId, keywords: $keywords) {
      words
      wordTagInfo {
        wti {
          word
          wordInfos {
            tag {
              id
              tagName
              tagColor
              tagFont
            }
          }
        }
      }
      lastId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTimelineGQL extends Apollo.Query<GetTimelineQuery, GetTimelineQueryVariables> {
    document = GetTimelineDocument;
    
  }
export const ForkDoucmentDocument = gql`
    mutation forkDoucment($docId: String!, $groupId: String, $wordTagLiteStr: String) {
  doc {
    fork(docId: $docId, groupId: $groupId, wordTagLiteStr: $wordTagLiteStr) {
      document {
        docId
        forkId
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ForkDoucmentGQL extends Apollo.Mutation<ForkDoucmentMutation, ForkDoucmentMutationVariables> {
    document = ForkDoucmentDocument;
    
  }
export const DeleteAllCoreDataDocument = gql`
    mutation deleteAllCoreData {
  doc {
    deleteAllData
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteAllCoreDataGQL extends Apollo.Mutation<DeleteAllCoreDataMutation, DeleteAllCoreDataMutationVariables> {
    document = DeleteAllCoreDataDocument;
    
  }
export const CreateGroupDocument = gql`
    mutation createGroup($group: GroupInputType) {
  group {
    create(data: $group) {
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
  export class CreateGroupGQL extends Apollo.Mutation<CreateGroupMutation, CreateGroupMutationVariables> {
    document = CreateGroupDocument;
    
  }
export const UpdateGroupDocument = gql`
    mutation updateGroup($group: GroupInputType!) {
  group {
    update(data: $group) {
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
    query userGroupList($pageIndex: Int, $pageSize: Int, $userId: String, $keywords: String, $includeDefault: Boolean) {
  group {
    userGroupList(pageIndex: $pageIndex, pageSize: $pageSize, userId: $userId, keywords: $keywords, includeDefault: $includeDefault) {
      id
      name
      readCount
      memberCount
      creator
      description
      isAdmin
      isFollowed
      languages
      isDefault
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
    query allGroupList($pageIndex: Int, $pageSize: Int, $keywords: String) {
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
      isDefault
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
export const UnFollowGroupDocument = gql`
    mutation unFollowGroup($groupId: String!, $followerId: String!) {
  group {
    unfollow(groupId: $groupId, followerId: $followerId)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnFollowGroupGQL extends Apollo.Mutation<UnFollowGroupMutation, UnFollowGroupMutationVariables> {
    document = UnFollowGroupDocument;
    
  }
export const ListMomentByFollowingDocument = gql`
    query listMomentByFollowing($pageIndex: Int!, $pageSize: Int!, $userId: String) {
  moment {
    listByFollowing(pageIndex: $pageIndex, pageSize: $pageSize, id: $userId) {
      groupId
      id
      title
      content
      createTime
      language
      status
      userName
      upvoteCount
      forkCount
      creator
      readId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListMomentByFollowingGQL extends Apollo.Query<ListMomentByFollowingQuery, ListMomentByFollowingQueryVariables> {
    document = ListMomentByFollowingDocument;
    
  }
export const ListMomentByLangDocument = gql`
    query listMomentByLang($pageIndex: Int!, $pageSize: Int!, $langCode: String) {
  moment {
    listByLang(pageIndex: $pageIndex, pageSize: $pageSize, langCode: $langCode) {
      groupId
      id
      title
      content
      createTime
      language
      status
      userName
      upvoteCount
      forkCount
      creator
      readId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListMomentByLangGQL extends Apollo.Query<ListMomentByLangQuery, ListMomentByLangQueryVariables> {
    document = ListMomentByLangDocument;
    
  }
export const ListMomentByGroupDocument = gql`
    query listMomentByGroup($groupId: String!, $typeId: MomentGroupType!, $pageIndex: Int!, $pageSize: Int!) {
  moment {
    listByGroup(id: $groupId, type: $typeId, pageIndex: $pageIndex, pageSize: $pageSize) {
      groupId
      id
      title
      content
      createTime
      language
      status
      userName
      upvoteCount
      forkCount
      creator
      readId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListMomentByGroupGQL extends Apollo.Query<ListMomentByGroupQuery, ListMomentByGroupQueryVariables> {
    document = ListMomentByGroupDocument;
    
  }
export const LikeMomentDocument = gql`
    mutation likeMoment($id: String!, $value: Int!) {
  moment {
    vote(id: $id, value: $value) {
      upvoteCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeMomentGQL extends Apollo.Mutation<LikeMomentMutation, LikeMomentMutationVariables> {
    document = LikeMomentDocument;
    
  }
export const DeleteMomentDocument = gql`
    mutation deleteMoment($id: String!) {
  moment {
    delete(id: $id) {
      status
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMomentGQL extends Apollo.Mutation<DeleteMomentMutation, DeleteMomentMutationVariables> {
    document = DeleteMomentDocument;
    
  }
export const GetMomentByDocIdDocument = gql`
    query getMomentByDocId($id: String!) {
  moment {
    getByDocId(id: $id) {
      groupId
      id
      title
      content
      createTime
      language
      status
      userName
      upvoteCount
      forkCount
      creator
      commentCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMomentByDocIdGQL extends Apollo.Query<GetMomentByDocIdQuery, GetMomentByDocIdQueryVariables> {
    document = GetMomentByDocIdDocument;
    
  }
export const GetFollowersDocument = gql`
    query getFollowers($index: Int!, $size: Int!, $userId: String) {
  profile {
    followers(pageIndex: $index, pageSize: $size, userId: $userId) {
      id
      name
      description
      followerCount
      followingCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFollowersGQL extends Apollo.Query<GetFollowersQuery, GetFollowersQueryVariables> {
    document = GetFollowersDocument;
    
  }
export const GetFollowingsDocument = gql`
    query getFollowings($index: Int!, $size: Int!, $userId: String) {
  profile {
    followings(pageIndex: $index, pageSize: $size, userId: $userId) {
      id
      name
      description
      followerCount
      followingCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFollowingsGQL extends Apollo.Query<GetFollowingsQuery, GetFollowingsQueryVariables> {
    document = GetFollowingsDocument;
    
  }
export const GetUserProfileDocument = gql`
    query getUserProfile($userId: String!) {
  profile {
    profile(userId: $userId) {
      id
      name
      description
      followerCount
      followingCount
      isFollower
      isFollowing
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserProfileGQL extends Apollo.Query<GetUserProfileQuery, GetUserProfileQueryVariables> {
    document = GetUserProfileDocument;
    
  }
export const FollowProfileDocument = gql`
    mutation followProfile($userId: String!) {
  profile {
    follow(profileId: $userId)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FollowProfileGQL extends Apollo.Mutation<FollowProfileMutation, FollowProfileMutationVariables> {
    document = FollowProfileDocument;
    
  }
export const UnFollowProfileDocument = gql`
    mutation unFollowProfile($userId: String!) {
  profile {
    unfollow(followerUserId: $userId)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnFollowProfileGQL extends Apollo.Mutation<UnFollowProfileMutation, UnFollowProfileMutationVariables> {
    document = UnFollowProfileDocument;
    
  }
export const GetGroupFollowersDocument = gql`
    query getGroupFollowers($groupId: String!, $index: Int!, $size: Int!) {
  group {
    followers(groupId: $groupId, index: $index, size: $size) {
      id
      name
      description
      followerCount
      followingCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetGroupFollowersGQL extends Apollo.Query<GetGroupFollowersQuery, GetGroupFollowersQueryVariables> {
    document = GetGroupFollowersDocument;
    
  }
export const GetGroupDetailDocument = gql`
    query getGroupDetail($groupId: String!) {
  group {
    detail(id: $groupId) {
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
  export class GetGroupDetailGQL extends Apollo.Query<GetGroupDetailQuery, GetGroupDetailQueryVariables> {
    document = GetGroupDetailDocument;
    
  }
export const ListByCommentDocument = gql`
    query listByComment($id: String!, $pageSize: Int!, $pageIndex: Int!) {
  moment {
    listByComment(id: $id, pageSize: $pageSize, pageIndex: $pageIndex) {
      id
      creator
      createTime
      content
      parent
      root
      userName
      createdByCurrentUser
      upvoteCount
      hasVoted
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListByCommentGQL extends Apollo.Query<ListByCommentQuery, ListByCommentQueryVariables> {
    document = ListByCommentDocument;
    
  }
export const PostCommentDocument = gql`
    mutation postComment($comment: CommentInputType!) {
  moment {
    comment(data: $comment) {
      creator
      createTime
      id
      content
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostCommentGQL extends Apollo.Mutation<PostCommentMutation, PostCommentMutationVariables> {
    document = PostCommentDocument;
    
  }
export const DeleteAllSocialDataDocument = gql`
    mutation deleteAllSocialData {
  profile {
    deleteAllData
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteAllSocialDataGQL extends Apollo.Mutation<DeleteAllSocialDataMutation, DeleteAllSocialDataMutationVariables> {
    document = DeleteAllSocialDataDocument;
    
  }