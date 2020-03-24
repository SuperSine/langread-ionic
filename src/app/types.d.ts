export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  BigInt: any,
  Byte: any,
  DateTime: any,
  DateTimeOffset: any,
  Decimal: any,
  Guid: any,
  Long: any,
  Milliseconds: any,
  SByte: any,
  Seconds: any,
  Short: any,
  UInt: any,
  ULong: any,
  Uri: any,
  UShort: any,
};







export type DictResultType = {
   __typename?: 'DictResultType',
  id: Scalars['String'],
  language: Scalars['String'],
  lexicalEntries?: Maybe<Array<Maybe<LexicalEntryType>>>,
  type: Scalars['String'],
  word: Scalars['String'],
};

export type Doc = {
   __typename?: 'Doc',
  add?: Maybe<WordTagDocumentCleanType>,
  delete?: Maybe<Scalars['Int']>,
  save?: Maybe<WordTagDocumentCleanType>,
  update?: Maybe<WordTagDocumentCleanType>,
};


export type DocAddArgs = {
  document: DocumentInputType,
  wordTagLiteStr?: Maybe<Scalars['String']>
};


export type DocDeleteArgs = {
  docId?: Maybe<Scalars['String']>
};


export type DocSaveArgs = {
  document: DocumentInputType,
  wordTagLiteStr?: Maybe<Scalars['String']>
};


export type DocUpdateArgs = {
  docId?: Maybe<Scalars['String']>,
  document: DocumentInputType,
  wordTagLiteStr?: Maybe<Scalars['String']>
};

export type DocumentInputType = {
  title: Scalars['String'],
  content: Scalars['String'],
  id?: Maybe<Scalars['String']>,
  docId?: Maybe<Scalars['String']>,
};

export type DocumentQueryType = {
   __typename?: 'DocumentQueryType',
  get?: Maybe<WordTagDocumentCleanType>,
  giveItToMe?: Maybe<WordTagDocumentCleanType>,
  infoDocuments?: Maybe<InfoDocumentsCleanType>,
  list?: Maybe<Array<Maybe<DocumentType>>>,
  search?: Maybe<Array<Maybe<DocumentType>>>,
};


export type DocumentQueryTypeGetArgs = {
  docId?: Maybe<Scalars['String']>,
  includeWti?: Maybe<Scalars['Boolean']>
};


export type DocumentQueryTypeGiveItToMeArgs = {
  content?: Maybe<Scalars['String']>,
  wordTagLiteStr?: Maybe<Scalars['String']>
};


export type DocumentQueryTypeInfoDocumentsArgs = {
  word?: Maybe<Scalars['String']>,
  lastId?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['String']>
};


export type DocumentQueryTypeListArgs = {
  lastId?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['String']>,
  keywords?: Maybe<Scalars['String']>
};


export type DocumentQueryTypeSearchArgs = {
  keywords?: Maybe<Scalars['String']>,
  lastId?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

export type DocumentType = {
   __typename?: 'DocumentType',
  content: Scalars['String'],
  createDate: Scalars['Date'],
  docId: Scalars['String'],
  id: Scalars['String'],
  status: Scalars['Int'],
  title: Scalars['String'],
  updateDate: Scalars['Date'],
  wordsCount: Scalars['Int'],
};

export type EntryType = {
   __typename?: 'EntryType',
  homographNumber: Scalars['String'],
  senses?: Maybe<Array<Maybe<SenseType>>>,
};


export type InfoCleanType = {
   __typename?: 'InfoCleanType',
  count: Scalars['Int'],
  tag?: Maybe<TagType>,
};

export type InfoDocumentsCleanType = {
   __typename?: 'InfoDocumentsCleanType',
  documents?: Maybe<Array<Maybe<DocumentType>>>,
  wordTagInfo?: Maybe<WordTagInfoCleanType>,
};

export type LexicalEntryType = {
   __typename?: 'LexicalEntryType',
  entries?: Maybe<Array<Maybe<EntryType>>>,
  language: Scalars['String'],
  lexicalCategory: Scalars['String'],
  pronunciations?: Maybe<Array<Maybe<PronunciationType>>>,
  text: Scalars['String'],
};



export type Mutation = {
   __typename?: 'Mutation',
  doc?: Maybe<Doc>,
  tag?: Maybe<TagMutation>,
};

export type PronunciationType = {
   __typename?: 'PronunciationType',
  audioFile?: Maybe<Scalars['String']>,
  dialects?: Maybe<Array<Maybe<Scalars['String']>>>,
  phoneticNotation?: Maybe<Scalars['String']>,
  phoneticSpelling?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  document?: Maybe<DocumentQueryType>,
  tag?: Maybe<TagQuery>,
  timeline?: Maybe<Timeline>,
  wti?: Maybe<WordTagInfo>,
};


export type SearchResultType = {
   __typename?: 'SearchResultType',
  results?: Maybe<Array<Maybe<DictResultType>>>,
};


export type SenseType = {
   __typename?: 'SenseType',
  definitions: Array<Maybe<Scalars['String']>>,
  domains: Array<Maybe<Scalars['String']>>,
  examples: Array<Maybe<Scalars['String']>>,
};


export type TagInput = {
  tagName: Scalars['String'],
  tagFont: Scalars['String'],
  tagColor: Scalars['String'],
};

export type TagMutation = {
   __typename?: 'TagMutation',
  add?: Maybe<TagType>,
  delete?: Maybe<Scalars['Int']>,
  update?: Maybe<Scalars['Int']>,
};


export type TagMutationAddArgs = {
  tag: TagInput
};


export type TagMutationDeleteArgs = {
  tagName: Scalars['String']
};


export type TagMutationUpdateArgs = {
  tagName: Scalars['String'],
  tag: TagInput
};

export type TagQuery = {
   __typename?: 'TagQuery',
  all?: Maybe<Array<Maybe<TagType>>>,
};

export type TagType = {
   __typename?: 'TagType',
  createDate: Scalars['Date'],
  id: Scalars['String'],
  tagColor: Scalars['String'],
  tagFont: Scalars['String'],
  tagName: Scalars['String'],
};

export type Timeline = {
   __typename?: 'Timeline',
  get?: Maybe<TimelineItemsType>,
  search?: Maybe<Array<Maybe<Scalars['String']>>>,
  tagByMonth?: Maybe<TimelineValueByMonthType>,
  wordByMonth?: Maybe<TimelineValueByMonthType>,
};


export type TimelineGetArgs = {
  lastId?: Maybe<Scalars['String']>,
  limitDocs?: Maybe<Scalars['String']>,
  index?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  keywords?: Maybe<Scalars['String']>
};


export type TimelineSearchArgs = {
  keyword?: Maybe<Scalars['String']>
};


export type TimelineTagByMonthArgs = {
  tagName?: Maybe<Scalars['String']>
};


export type TimelineWordByMonthArgs = {
  word?: Maybe<Scalars['String']>
};

export type TimelineItemsType = {
   __typename?: 'TimelineItemsType',
  count: Scalars['Int'],
  lastId: Scalars['String'],
  nextId?: Maybe<Scalars['String']>,
  pageIndex: Scalars['Int'],
  pageSize: Scalars['Int'],
  words?: Maybe<Array<Maybe<Scalars['String']>>>,
  wordTagInfo?: Maybe<WordTagInfoCleanType>,
};

export type TimelineValueByMonthType = {
   __typename?: 'TimelineValueByMonthType',
  count: Scalars['Int'],
  data?: Maybe<Array<Maybe<ValueByMonthType>>>,
  pageIndex: Scalars['Int'],
  pageSize: Scalars['Int'],
};





export type ValueByMonthType = {
   __typename?: 'ValueByMonthType',
  total: Scalars['Int'],
  yearMonth?: Maybe<YearMonthType>,
};

export type WordInfoCleanType = {
   __typename?: 'WordInfoCleanType',
  word: Scalars['String'],
  wordInfos?: Maybe<Array<Maybe<InfoCleanType>>>,
};

export type WordProfileType = {
   __typename?: 'WordProfileType',
  dictResult?: Maybe<SearchResultType>,
  score: Scalars['Float'],
  word: Scalars['String'],
  wordInfo?: Maybe<Array<Maybe<InfoCleanType>>>,
};

export type WordTagDocumentCleanType = {
   __typename?: 'WordTagDocumentCleanType',
  bigWordTagInfo?: Maybe<WordTagInfoCleanType>,
  createTime: Scalars['Date'],
  document?: Maybe<DocumentType>,
  smallWordTagInfo?: Maybe<WordTagInfoCleanType>,
  status: Scalars['Int'],
  updateTime: Scalars['Date'],
};

export type WordTagInfo = {
   __typename?: 'WordTagInfo',
  dict?: Maybe<SearchResultType>,
  get?: Maybe<WordTagInfoCleanType>,
  profile?: Maybe<WordProfileType>,
  topMost?: Maybe<Array<Maybe<WordProfileType>>>,
};


export type WordTagInfoDictArgs = {
  word?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>
};


export type WordTagInfoProfileArgs = {
  word?: Maybe<Scalars['String']>
};


export type WordTagInfoTopMostArgs = {
  top?: Maybe<Scalars['String']>
};

export type WordTagInfoCleanType = {
   __typename?: 'WordTagInfoCleanType',
  createDate: Scalars['Date'],
  tags?: Maybe<Array<Maybe<TagType>>>,
  updateDate: Scalars['Date'],
  wti?: Maybe<Array<Maybe<WordInfoCleanType>>>,
};

export type YearMonthType = {
   __typename?: 'YearMonthType',
  month: Scalars['Int'],
  year: Scalars['Int'],
};
