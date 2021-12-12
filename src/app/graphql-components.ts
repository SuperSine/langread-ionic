import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  appId?: InputMaybe<Scalars['String']>;
  appSecret?: InputMaybe<Scalars['String']>;
};


export type AuthSendverifyArgs = {
  appId?: InputMaybe<Scalars['String']>;
  appSecret?: InputMaybe<Scalars['String']>;
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

export type CommentInputType = {
  content: Scalars['String'];
  parent?: InputMaybe<Scalars['String']>;
  readId: Scalars['String'];
};

export type CommentType = {
  __typename?: 'CommentType';
  content: Scalars['String'];
  createTime?: Maybe<Scalars['DateTime']>;
  createdByCurrentUser: Scalars['Boolean'];
  creator: Scalars['String'];
  hasVoted: Scalars['Boolean'];
  id: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  upvoteCount?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
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
  deleteAllData?: Maybe<Scalars['Int']>;
  fork?: Maybe<WordTagDocumentCleanType>;
  save?: Maybe<WordTagDocumentCleanType>;
  update?: Maybe<WordTagDocumentCleanType>;
};


export type DocAddArgs = {
  document: DocumentInputType;
  wordTagLiteStr?: InputMaybe<Scalars['String']>;
};


export type DocDeleteArgs = {
  docId?: InputMaybe<Scalars['String']>;
};


export type DocForkArgs = {
  docId: Scalars['String'];
  groupId?: InputMaybe<Scalars['String']>;
  wordTagLiteStr?: InputMaybe<Scalars['String']>;
};


export type DocSaveArgs = {
  document: DocumentInputType;
  wordTagLiteStr?: InputMaybe<Scalars['String']>;
};


export type DocUpdateArgs = {
  docId?: InputMaybe<Scalars['String']>;
  document: DocumentInputType;
  wordTagLiteStr?: InputMaybe<Scalars['String']>;
};

export type DocumentInputType = {
  content: Scalars['String'];
  docId?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type DocumentQueryType = {
  __typename?: 'DocumentQueryType';
  get?: Maybe<WordTagDocumentCleanType>;
  giveItToMe?: Maybe<WordTagDocumentCleanType>;
  infoDocuments?: Maybe<InfoDocumentsCleanType>;
  list?: Maybe<PaginatedDocumentType>;
  search?: Maybe<Array<Maybe<DocumentType>>>;
  stats?: Maybe<WordTagStaticsType>;
};


export type DocumentQueryTypeGetArgs = {
  docId?: InputMaybe<Scalars['String']>;
  includeWti?: InputMaybe<Scalars['Boolean']>;
};


export type DocumentQueryTypeGiveItToMeArgs = {
  content?: InputMaybe<Scalars['String']>;
  wordTagLiteStr?: InputMaybe<Scalars['String']>;
};


export type DocumentQueryTypeInfoDocumentsArgs = {
  lastId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  word?: InputMaybe<Scalars['String']>;
};


export type DocumentQueryTypeListArgs = {
  keywords?: InputMaybe<Scalars['String']>;
  lastId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type DocumentQueryTypeSearchArgs = {
  keywords?: InputMaybe<Scalars['String']>;
  lastId?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type DocumentType = {
  __typename?: 'DocumentType';
  content: Scalars['String'];
  createDate?: Maybe<Scalars['DateTime']>;
  docId: Scalars['String'];
  forkId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  language?: Maybe<Scalars['String']>;
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
  description?: InputMaybe<Scalars['String']>;
  groupTypeId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
};

export type GroupMutation = {
  __typename?: 'GroupMutation';
  create?: Maybe<GroupType>;
  delete?: Maybe<Scalars['Int']>;
  follow?: Maybe<Scalars['Int']>;
  unfollow?: Maybe<Scalars['Int']>;
  update?: Maybe<GroupType>;
};


export type GroupMutationCreateArgs = {
  data?: InputMaybe<GroupInputType>;
};


export type GroupMutationDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type GroupMutationFollowArgs = {
  groupId?: InputMaybe<Scalars['String']>;
};


export type GroupMutationUnfollowArgs = {
  followerId?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
};


export type GroupMutationUpdateArgs = {
  data: GroupInputType;
};

export type GroupQuery = {
  __typename?: 'GroupQuery';
  allGroupList?: Maybe<Array<Maybe<GroupType>>>;
  checkAvailable?: Maybe<Scalars['Boolean']>;
  detail?: Maybe<GroupType>;
  followers?: Maybe<Array<Maybe<UserViewType>>>;
  id?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<GroupType>>>;
  topByFollowers?: Maybe<Array<Maybe<GroupType>>>;
  userGroupList?: Maybe<Array<Maybe<GroupType>>>;
};


export type GroupQueryAllGroupListArgs = {
  keywords?: InputMaybe<Scalars['String']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type GroupQueryCheckAvailableArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type GroupQueryDetailArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type GroupQueryFollowersArgs = {
  groupId?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type GroupQueryTopArgs = {
  top?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type GroupQueryTopByFollowersArgs = {
  top?: InputMaybe<Scalars['Int']>;
};


export type GroupQueryUserGroupListArgs = {
  includeDefault?: InputMaybe<Scalars['Boolean']>;
  keywords?: InputMaybe<Scalars['String']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GroupType = {
  __typename?: 'GroupType';
  createTime?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<Scalars['String']>;
  creatorUserName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  groupTypeId?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isFollowed?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Scalars['String']>;
  lastUpdatedBy?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  readCount?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['DateTime']>;
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

export enum MomentGroupType {
  All = 'ALL',
  Comment = 'COMMENT',
  Group = 'GROUP',
  Page = 'PAGE',
  Profile = 'PROFILE'
}

export type MomentInputType = {
  content: Scalars['String'];
  groupId?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  momentGroupTypeId?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['String']>;
  root?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MomentMutation = {
  __typename?: 'MomentMutation';
  comment?: Maybe<CommentType>;
  delete?: Maybe<MomentType>;
  post?: Maybe<MomentType>;
  vote?: Maybe<MomentType>;
};


export type MomentMutationCommentArgs = {
  data: CommentInputType;
};


export type MomentMutationDeleteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MomentMutationPostArgs = {
  data: MomentInputType;
};


export type MomentMutationVoteArgs = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type MomentQuery = {
  __typename?: 'MomentQuery';
  getByDocId?: Maybe<MomentType>;
  listByComment?: Maybe<Array<Maybe<CommentType>>>;
  listByFollowing?: Maybe<Array<Maybe<MomentType>>>;
  listByGroup?: Maybe<Array<Maybe<MomentType>>>;
  listByLang?: Maybe<Array<Maybe<MomentType>>>;
};


export type MomentQueryGetByDocIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MomentQueryListByCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type MomentQueryListByFollowingArgs = {
  id?: InputMaybe<Scalars['String']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type MomentQueryListByGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<MomentGroupType>;
};


export type MomentQueryListByLangArgs = {
  langCode?: InputMaybe<Scalars['String']>;
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type MomentType = {
  __typename?: 'MomentType';
  commentCount?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  createTime?: Maybe<Scalars['DateTime']>;
  creator: Scalars['String'];
  forkCount?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  momentGroupTypeId?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['String']>;
  readId?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  upvoteCount?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
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
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<DocumentType>>>;
  lastId?: Maybe<Scalars['String']>;
};

export type ProfileMutation = {
  __typename?: 'ProfileMutation';
  deleteAllData?: Maybe<Scalars['Int']>;
  follow?: Maybe<Scalars['Int']>;
  unfollow?: Maybe<Scalars['Int']>;
};


export type ProfileMutationFollowArgs = {
  profileId?: InputMaybe<Scalars['String']>;
};


export type ProfileMutationUnfollowArgs = {
  followerUserId?: InputMaybe<Scalars['String']>;
};

export type ProfileQuery = {
  __typename?: 'ProfileQuery';
  followers?: Maybe<Array<Maybe<UserViewType>>>;
  followings?: Maybe<Array<Maybe<UserViewType>>>;
  friends?: Maybe<Array<Maybe<UserViewType>>>;
  people?: Maybe<Array<Maybe<UserViewType>>>;
  profile?: Maybe<UserViewType>;
};


export type ProfileQueryFollowersArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type ProfileQueryFollowingsArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type ProfileQueryFriendsArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type ProfileQueryPeopleArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type ProfileQueryProfileArgs = {
  userId?: InputMaybe<Scalars['String']>;
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
  tagColor: Scalars['String'];
  tagFont: Scalars['String'];
  tagName: Scalars['String'];
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
  tag: TagInput;
  tagName: Scalars['String'];
};

export type TagQuery = {
  __typename?: 'TagQuery';
  all?: Maybe<Array<Maybe<TagType>>>;
};

export type TagType = {
  __typename?: 'TagType';
  createDate: Scalars['DateTime'];
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
  index?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  lastId?: InputMaybe<Scalars['String']>;
  limitDocs?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TimelineSearchArgs = {
  keyword?: InputMaybe<Scalars['String']>;
};


export type TimelineTagByMonthArgs = {
  tagName?: InputMaybe<Scalars['String']>;
};


export type TimelineWordByMonthArgs = {
  word?: InputMaybe<Scalars['String']>;
};

export type TimelineItemsType = {
  __typename?: 'TimelineItemsType';
  count: Scalars['Int'];
  lastId: Scalars['String'];
  nextId?: Maybe<Scalars['String']>;
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  wordTagInfo?: Maybe<WordTagInfoCleanType>;
  words?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
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
  appId?: InputMaybe<Scalars['String']>;
  appSecret?: InputMaybe<Scalars['String']>;
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

export type UpdateUserViewModelType = {
  displayLanguage?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  sourceLanguage?: InputMaybe<Scalars['String']>;
  targetLanguage?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
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
  appId?: InputMaybe<Scalars['String']>;
  appSecret?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};


export type UserPasswordArgs = {
  appId?: InputMaybe<Scalars['String']>;
  appSecret?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type UserRegisterArgs = {
  displayLanguage?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phonenumber?: InputMaybe<Scalars['String']>;
  sourceLanguage?: InputMaybe<Scalars['String']>;
  targetLanguage?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type UserUpdateArgs = {
  appId?: InputMaybe<Scalars['String']>;
  appSecret?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UpdateUserViewModelType>;
};


export type UserVerifyArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
  purpose?: InputMaybe<TokenPurpose>;
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
  description?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  isCreator: Scalars['Boolean'];
  smallWordTagInfo?: Maybe<WordTagInfoCleanType>;
  status: Scalars['Int'];
  updateTime?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type WordTagInfo = {
  __typename?: 'WordTagInfo';
  dict?: Maybe<SearchResultType>;
  get?: Maybe<WordTagInfoCleanType>;
  profile?: Maybe<WordProfileType>;
  topMost?: Maybe<Array<Maybe<WordProfileType>>>;
};


export type WordTagInfoDictArgs = {
  lang?: InputMaybe<Scalars['String']>;
  word?: InputMaybe<Scalars['String']>;
};


export type WordTagInfoProfileArgs = {
  fromLang?: InputMaybe<Scalars['String']>;
  toLang?: InputMaybe<Scalars['String']>;
  word?: InputMaybe<Scalars['String']>;
};


export type WordTagInfoTopMostArgs = {
  top?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type WordTagInfoCleanType = {
  __typename?: 'WordTagInfoCleanType';
  createDate: Scalars['DateTime'];
  tags?: Maybe<Array<Maybe<TagType>>>;
  updateDate: Scalars['DateTime'];
  wti?: Maybe<Array<Maybe<WordInfoCleanType>>>;
};

export type WordTagInfoMutation = {
  __typename?: 'WordTagInfoMutation';
  remove?: Maybe<Scalars['Boolean']>;
};


export type WordTagInfoMutationRemoveArgs = {
  tagName: Scalars['String'];
  word: Scalars['String'];
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

export type LoginQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', auth?: { __typename?: 'UserType', appId: string, appSecret: string, firstName?: string | null | undefined, lastName?: string | null | undefined, email: string, phoneNumber?: string | null | undefined, userName: string, emailConfirmed: boolean, displayLanguage: string, targetLanguage: string, sourceLanguage: string, token?: string | null | undefined } | null | undefined } | null | undefined };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  displayLanguage: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', register?: { __typename?: 'UserType', appId: string, appSecret: string, firstName?: string | null | undefined, lastName?: string | null | undefined, email: string, token?: string | null | undefined, displayLanguage: string } | null | undefined } | null | undefined };

export type TokenQueryVariables = Exact<{
  appId: Scalars['String'];
  appSecret: Scalars['String'];
}>;


export type TokenQuery = { __typename?: 'Query', token?: { __typename?: 'Token', get?: string | null | undefined } | null | undefined };

export type CheckEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckEmailQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', email?: boolean | null | undefined } | null | undefined };

export type SendVerifyQueryVariables = Exact<{
  appId: Scalars['String'];
  appSecret: Scalars['String'];
}>;


export type SendVerifyQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', sendverify?: boolean | null | undefined } | null | undefined };

export type UpdateEmailMutationVariables = Exact<{
  appId: Scalars['String'];
  appSecret: Scalars['String'];
  email: Scalars['String'];
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', email?: { __typename?: 'UserType', appId: string, appSecret: string, token?: string | null | undefined, email: string } | null | undefined } | null | undefined };

export type SendRestQueryVariables = Exact<{
  appId: Scalars['String'];
  appSecret: Scalars['String'];
}>;


export type SendRestQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', sendreset?: boolean | null | undefined } | null | undefined };

export type ChangePasswordMutationVariables = Exact<{
  appId: Scalars['String'];
  appSecret: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', password?: boolean | null | undefined } | null | undefined };

export type SendTotpQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendTotpQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', sendauthcode?: boolean | null | undefined } | null | undefined };

export type VerifyCodeMutationVariables = Exact<{
  email: Scalars['String'];
  code: Scalars['String'];
  purpose?: InputMaybe<TokenPurpose>;
}>;


export type VerifyCodeMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', verify?: { __typename?: 'UserType', appId: string, appSecret: string, firstName?: string | null | undefined, lastName?: string | null | undefined, userName: string, email: string, token?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdateUserMutationVariables = Exact<{
  appId?: InputMaybe<Scalars['String']>;
  appSecret?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UpdateUserViewModelType>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', update?: { __typename?: 'UserType', firstName?: string | null | undefined, lastName?: string | null | undefined, email: string, userName: string, appId: string, appSecret: string, token?: string | null | undefined, displayLanguage: string, targetLanguage: string, sourceLanguage: string } | null | undefined } | null | undefined };

export type GetProfileQueryVariables = Exact<{
  appId: Scalars['String'];
  appSecret: Scalars['String'];
}>;


export type GetProfileQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', profile?: { __typename?: 'ProfileType', firstName?: string | null | undefined, lastName?: string | null | undefined, email: string, phoneNumber?: string | null | undefined, userName: string, emailConfirmed: boolean, displayLanguage?: string | null | undefined, targetLanguage?: string | null | undefined, sourceLanguage?: string | null | undefined } | null | undefined } | null | undefined };

export type GetDocumentQueryVariables = Exact<{
  docId: Scalars['String'];
}>;


export type GetDocumentQuery = { __typename?: 'Query', document?: { __typename?: 'DocumentQueryType', get?: { __typename?: 'WordTagDocumentCleanType', createTime?: any | null | undefined, updateTime?: any | null | undefined, status: number, document?: { __typename?: 'DocumentType', docId: string, id: string, content: string, createDate?: any | null | undefined, updateDate?: any | null | undefined, title: string } | null | undefined, smallWordTagInfo?: { __typename?: 'WordTagInfoCleanType', wti?: Array<{ __typename?: 'WordInfoCleanType', word: string, wordInfos?: Array<{ __typename?: 'InfoCleanType', count: number, tag?: { __typename?: 'TagType', id: string, tagName: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, tags?: Array<{ __typename?: 'TagType', id: string, tagName: string, tagColor: string } | null | undefined> | null | undefined } | null | undefined, bigWordTagInfo?: { __typename?: 'WordTagInfoCleanType', tags?: Array<{ __typename?: 'TagType', id: string, tagName: string, tagColor: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type GetDocumentsQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  lastId?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
}>;


export type GetDocumentsQuery = { __typename?: 'Query', document?: { __typename?: 'DocumentQueryType', list?: { __typename?: 'PaginatedDocumentType', lastId?: string | null | undefined, data?: Array<{ __typename?: 'DocumentType', id: string, docId: string, title: string, content: string, createDate?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type GiveItToMeQueryVariables = Exact<{
  content: Scalars['String'];
}>;


export type GiveItToMeQuery = { __typename?: 'Query', document?: { __typename?: 'DocumentQueryType', giveItToMe?: { __typename?: 'WordTagDocumentCleanType', id?: string | null | undefined, isCreator: boolean, userId: string, createTime?: any | null | undefined, updateTime?: any | null | undefined, status: number, document?: { __typename?: 'DocumentType', docId: string, id: string, content: string, createDate?: any | null | undefined, updateDate?: any | null | undefined, title: string, url?: string | null | undefined, wordsCount: number } | null | undefined, smallWordTagInfo?: { __typename?: 'WordTagInfoCleanType', wti?: Array<{ __typename?: 'WordInfoCleanType', word: string, wordInfos?: Array<{ __typename?: 'InfoCleanType', count: number, tag?: { __typename?: 'TagType', tagName: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, tags?: Array<{ __typename?: 'TagType', tagName: string, tagColor: string } | null | undefined> | null | undefined } | null | undefined, bigWordTagInfo?: { __typename?: 'WordTagInfoCleanType', tags?: Array<{ __typename?: 'TagType', tagName: string, tagColor: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type GetStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatsQuery = { __typename?: 'Query', document?: { __typename?: 'DocumentQueryType', stats?: { __typename?: 'WordTagStaticsType', documentCount: any, tagCount: number, tagWordCount: number } | null | undefined } | null | undefined };

export type RemoveTagMutationVariables = Exact<{
  word: Scalars['String'];
  tagName: Scalars['String'];
}>;


export type RemoveTagMutation = { __typename?: 'Mutation', wti?: { __typename?: 'WordTagInfoMutation', remove?: boolean | null | undefined } | null | undefined };

export type SaveDocumentMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  wordTagLiteStr: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  docId?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}>;


export type SaveDocumentMutation = { __typename?: 'Mutation', doc?: { __typename?: 'Doc', save?: { __typename?: 'WordTagDocumentCleanType', createTime?: any | null | undefined, updateTime?: any | null | undefined, status: number, document?: { __typename?: 'DocumentType', docId: string, id: string, content: string, createDate?: any | null | undefined, updateDate?: any | null | undefined, title: string, wordsCount: number, url?: string | null | undefined } | null | undefined, smallWordTagInfo?: { __typename?: 'WordTagInfoCleanType', wti?: Array<{ __typename?: 'WordInfoCleanType', word: string, wordInfos?: Array<{ __typename?: 'InfoCleanType', count: number, tag?: { __typename?: 'TagType', tagName: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, tags?: Array<{ __typename?: 'TagType', tagName: string, tagColor: string } | null | undefined> | null | undefined } | null | undefined, bigWordTagInfo?: { __typename?: 'WordTagInfoCleanType', tags?: Array<{ __typename?: 'TagType', tagName: string, tagColor: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type DeleteDocumentMutationVariables = Exact<{
  docId: Scalars['String'];
}>;


export type DeleteDocumentMutation = { __typename?: 'Mutation', doc?: { __typename?: 'Doc', delete?: number | null | undefined } | null | undefined };

export type GetWordProfileQueryVariables = Exact<{
  word: Scalars['String'];
  fromLang: Scalars['String'];
  toLang: Scalars['String'];
}>;


export type GetWordProfileQuery = { __typename?: 'Query', wti?: { __typename?: 'WordTagInfo', profile?: { __typename?: 'WordProfileType', word: string, score: number, wordInfo?: Array<{ __typename?: 'InfoCleanType', count: number, tag?: { __typename?: 'TagType', tagFont: string, tagName: string, tagColor: string, id: string } | null | undefined } | null | undefined> | null | undefined, entryResults?: Array<{ __typename?: 'EntryResultType', origin?: string | null | undefined, word: string, phonetic?: string | null | undefined, meanings?: Array<{ __typename?: 'MeaningType', partOfSpeech: string, definitions?: Array<{ __typename?: 'DefinitionType', description: string, example?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, translationResult?: { __typename?: 'TranslationResultType', displaySource: string, translations?: Array<{ __typename?: 'TranslationType', displayTarget: string, posTag: string, confidence: number, backTranslations?: Array<{ __typename?: 'BackTranslationType', normalizedText: string, displayTarget: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined, timeline?: { __typename?: 'Timeline', wordByMonth?: { __typename?: 'TimelineValueByMonthType', data?: Array<{ __typename?: 'ValueByMonthType', total: number, yearMonth?: { __typename?: 'YearMonthType', year: number, month: number } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type GetTopmostQueryVariables = Exact<{
  top?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
}>;


export type GetTopmostQuery = { __typename?: 'Query', wti?: { __typename?: 'WordTagInfo', topMost?: Array<{ __typename?: 'WordProfileType', word: string, score: number, wordInfo?: Array<{ __typename?: 'InfoCleanType', tag?: { __typename?: 'TagType', tagFont: string, tagName: string, tagColor: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetTimelineQueryVariables = Exact<{
  index?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  lastId?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
}>;


export type GetTimelineQuery = { __typename?: 'Query', timeline?: { __typename?: 'Timeline', get?: { __typename?: 'TimelineItemsType', words?: Array<Array<string | null | undefined> | null | undefined> | null | undefined, lastId: string, wordTagInfo?: { __typename?: 'WordTagInfoCleanType', wti?: Array<{ __typename?: 'WordInfoCleanType', word: string, wordInfos?: Array<{ __typename?: 'InfoCleanType', tag?: { __typename?: 'TagType', id: string, tagName: string, tagColor: string, tagFont: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type ForkDoucmentMutationVariables = Exact<{
  docId: Scalars['String'];
  groupId?: InputMaybe<Scalars['String']>;
  wordTagLiteStr?: InputMaybe<Scalars['String']>;
}>;


export type ForkDoucmentMutation = { __typename?: 'Mutation', doc?: { __typename?: 'Doc', fork?: { __typename?: 'WordTagDocumentCleanType', document?: { __typename?: 'DocumentType', docId: string, forkId?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type DeleteAllCoreDataMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllCoreDataMutation = { __typename?: 'Mutation', doc?: { __typename?: 'Doc', deleteAllData?: number | null | undefined } | null | undefined };

export type CreateGroupMutationVariables = Exact<{
  group?: InputMaybe<GroupInputType>;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', group?: { __typename?: 'GroupMutation', create?: { __typename?: 'GroupType', id: string, name: string, readCount?: number | null | undefined, memberCount?: number | null | undefined, creator?: string | null | undefined, description?: string | null | undefined, isAdmin?: boolean | null | undefined, isFollowed?: boolean | null | undefined, languages?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdateGroupMutationVariables = Exact<{
  group: GroupInputType;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', group?: { __typename?: 'GroupMutation', update?: { __typename?: 'GroupType', id: string, name: string, readCount?: number | null | undefined, memberCount?: number | null | undefined, creator?: string | null | undefined, description?: string | null | undefined, isAdmin?: boolean | null | undefined, isFollowed?: boolean | null | undefined, languages?: string | null | undefined } | null | undefined } | null | undefined };

export type CheckAvailableQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type CheckAvailableQuery = { __typename?: 'Query', group?: { __typename?: 'GroupQuery', checkAvailable?: boolean | null | undefined } | null | undefined };

export type UserGroupListQueryVariables = Exact<{
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  includeDefault?: InputMaybe<Scalars['Boolean']>;
}>;


export type UserGroupListQuery = { __typename?: 'Query', group?: { __typename?: 'GroupQuery', id?: string | null | undefined, userGroupList?: Array<{ __typename?: 'GroupType', id: string, name: string, readCount?: number | null | undefined, memberCount?: number | null | undefined, creator?: string | null | undefined, description?: string | null | undefined, isAdmin?: boolean | null | undefined, isFollowed?: boolean | null | undefined, languages?: string | null | undefined, isDefault?: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type AllGroupListQueryVariables = Exact<{
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
}>;


export type AllGroupListQuery = { __typename?: 'Query', group?: { __typename?: 'GroupQuery', allGroupList?: Array<{ __typename?: 'GroupType', id: string, name: string, readCount?: number | null | undefined, memberCount?: number | null | undefined, creator?: string | null | undefined, description?: string | null | undefined, isAdmin?: boolean | null | undefined, isFollowed?: boolean | null | undefined, languages?: string | null | undefined, isDefault?: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', group?: { __typename?: 'GroupMutation', delete?: number | null | undefined } | null | undefined };

export type FollowGroupMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type FollowGroupMutation = { __typename?: 'Mutation', group?: { __typename?: 'GroupMutation', follow?: number | null | undefined } | null | undefined };

export type UnFollowGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  followerId: Scalars['String'];
}>;


export type UnFollowGroupMutation = { __typename?: 'Mutation', group?: { __typename?: 'GroupMutation', unfollow?: number | null | undefined } | null | undefined };

export type ListMomentByFollowingQueryVariables = Exact<{
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  userId?: InputMaybe<Scalars['String']>;
}>;


export type ListMomentByFollowingQuery = { __typename?: 'Query', moment?: { __typename?: 'MomentQuery', listByFollowing?: Array<{ __typename?: 'MomentType', groupId?: string | null | undefined, id: string, title?: string | null | undefined, content: string, createTime?: any | null | undefined, language?: string | null | undefined, status: number, userName?: string | null | undefined, upvoteCount?: number | null | undefined, forkCount?: number | null | undefined, creator: string, readId?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type ListMomentByLangQueryVariables = Exact<{
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
  langCode?: InputMaybe<Scalars['String']>;
}>;


export type ListMomentByLangQuery = { __typename?: 'Query', moment?: { __typename?: 'MomentQuery', listByLang?: Array<{ __typename?: 'MomentType', groupId?: string | null | undefined, id: string, title?: string | null | undefined, content: string, createTime?: any | null | undefined, language?: string | null | undefined, status: number, userName?: string | null | undefined, upvoteCount?: number | null | undefined, forkCount?: number | null | undefined, creator: string, readId?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type ListMomentByGroupQueryVariables = Exact<{
  groupId: Scalars['String'];
  typeId: MomentGroupType;
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type ListMomentByGroupQuery = { __typename?: 'Query', moment?: { __typename?: 'MomentQuery', listByGroup?: Array<{ __typename?: 'MomentType', groupId?: string | null | undefined, id: string, title?: string | null | undefined, content: string, createTime?: any | null | undefined, language?: string | null | undefined, status: number, userName?: string | null | undefined, upvoteCount?: number | null | undefined, forkCount?: number | null | undefined, creator: string, readId?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type LikeMomentMutationVariables = Exact<{
  id: Scalars['String'];
  value: Scalars['Int'];
}>;


export type LikeMomentMutation = { __typename?: 'Mutation', moment?: { __typename?: 'MomentMutation', vote?: { __typename?: 'MomentType', upvoteCount?: number | null | undefined } | null | undefined } | null | undefined };

export type DeleteMomentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMomentMutation = { __typename?: 'Mutation', moment?: { __typename?: 'MomentMutation', delete?: { __typename?: 'MomentType', status: number, id: string } | null | undefined } | null | undefined };

export type GetMomentByDocIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMomentByDocIdQuery = { __typename?: 'Query', moment?: { __typename?: 'MomentQuery', getByDocId?: { __typename?: 'MomentType', groupId?: string | null | undefined, id: string, title?: string | null | undefined, content: string, createTime?: any | null | undefined, language?: string | null | undefined, status: number, userName?: string | null | undefined, upvoteCount?: number | null | undefined, forkCount?: number | null | undefined, creator: string, commentCount?: number | null | undefined } | null | undefined } | null | undefined };

export type GetFollowersQueryVariables = Exact<{
  index: Scalars['Int'];
  size: Scalars['Int'];
  userId?: InputMaybe<Scalars['String']>;
}>;


export type GetFollowersQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileQuery', followers?: Array<{ __typename?: 'UserViewType', id: string, name: string, description?: string | null | undefined, followerCount: number, followingCount: number } | null | undefined> | null | undefined } | null | undefined };

export type GetFollowingsQueryVariables = Exact<{
  index: Scalars['Int'];
  size: Scalars['Int'];
  userId?: InputMaybe<Scalars['String']>;
}>;


export type GetFollowingsQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileQuery', followings?: Array<{ __typename?: 'UserViewType', id: string, name: string, description?: string | null | undefined, followerCount: number, followingCount: number } | null | undefined> | null | undefined } | null | undefined };

export type GetUserProfileQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileQuery', profile?: { __typename?: 'UserViewType', id: string, name: string, description?: string | null | undefined, followerCount: number, followingCount: number, isFollower: boolean, isFollowing: boolean } | null | undefined } | null | undefined };

export type FollowProfileMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FollowProfileMutation = { __typename?: 'Mutation', profile?: { __typename?: 'ProfileMutation', follow?: number | null | undefined } | null | undefined };

export type UnFollowProfileMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UnFollowProfileMutation = { __typename?: 'Mutation', profile?: { __typename?: 'ProfileMutation', unfollow?: number | null | undefined } | null | undefined };

export type GetGroupFollowersQueryVariables = Exact<{
  groupId: Scalars['String'];
  index: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetGroupFollowersQuery = { __typename?: 'Query', group?: { __typename?: 'GroupQuery', followers?: Array<{ __typename?: 'UserViewType', id: string, name: string, description?: string | null | undefined, followerCount: number, followingCount: number } | null | undefined> | null | undefined } | null | undefined };

export type GetGroupDetailQueryVariables = Exact<{
  groupId: Scalars['String'];
}>;


export type GetGroupDetailQuery = { __typename?: 'Query', group?: { __typename?: 'GroupQuery', detail?: { __typename?: 'GroupType', id: string, name: string, readCount?: number | null | undefined, memberCount?: number | null | undefined, creator?: string | null | undefined, description?: string | null | undefined, isAdmin?: boolean | null | undefined, isFollowed?: boolean | null | undefined, languages?: string | null | undefined } | null | undefined } | null | undefined };

export type ListByCommentQueryVariables = Exact<{
  id: Scalars['String'];
  pageSize: Scalars['Int'];
  pageIndex: Scalars['Int'];
}>;


export type ListByCommentQuery = { __typename?: 'Query', moment?: { __typename?: 'MomentQuery', listByComment?: Array<{ __typename?: 'CommentType', id: string, creator: string, createTime?: any | null | undefined, content: string, parent?: string | null | undefined, root?: string | null | undefined, userName?: string | null | undefined, createdByCurrentUser: boolean, upvoteCount?: number | null | undefined, hasVoted: boolean } | null | undefined> | null | undefined } | null | undefined };

export type PostCommentMutationVariables = Exact<{
  comment: CommentInputType;
}>;


export type PostCommentMutation = { __typename?: 'Mutation', moment?: { __typename?: 'MomentMutation', comment?: { __typename?: 'CommentType', creator: string, createTime?: any | null | undefined, id: string, content: string } | null | undefined } | null | undefined };

export type DeleteAllSocialDataMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllSocialDataMutation = { __typename?: 'Mutation', profile?: { __typename?: 'ProfileMutation', deleteAllData?: number | null | undefined } | null | undefined };

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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangePasswordDocument = gql`
    mutation changePassword($appId: String!, $appSecret: String!, $token: String!, $password: String!) {
  user {
    password(
      appId: $appId
      appSecret: $appSecret
      token: $token
      password: $password
    )
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePasswordGQL extends Apollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> {
    document = ChangePasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GiveItToMeDocument = gql`
    query giveItToMe($content: String!) {
  document {
    giveItToMe(content: $content) {
      id
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveDocumentDocument = gql`
    mutation saveDocument($title: String!, $content: String!, $wordTagLiteStr: String!, $id: String, $docId: String, $url: String) {
  doc {
    save(
      document: {title: $title, content: $content, id: $id, docId: $docId, url: $url}
      wordTagLiteStr: $wordTagLiteStr
    ) {
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserGroupListDocument = gql`
    query userGroupList($pageIndex: Int, $pageSize: Int, $userId: String, $keywords: String, $includeDefault: Boolean) {
  group {
    id
    userGroupList(
      pageIndex: $pageIndex
      pageSize: $pageSize
      userId: $userId
      keywords: $keywords
      includeDefault: $includeDefault
    ) {
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListMomentByGroupDocument = gql`
    query listMomentByGroup($groupId: String!, $typeId: MomentGroupType!, $pageIndex: Int!, $pageSize: Int!) {
  moment {
    listByGroup(
      id: $groupId
      type: $typeId
      pageIndex: $pageIndex
      pageSize: $pageSize
    ) {
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
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
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }