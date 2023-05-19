export interface GoogleApiDataType {
  kind: string
  url: Url
  queries: Queries
  context: Context
  searchInformation: SearchInformation
  items: Item[]
}

export interface Url {
  type: string
  template: string
}

export interface Queries {
  request: Request[]
  nextPage: NextPage[]
}

export interface Request {
  title: string
  totalResults: string
  searchTerms: string
  count: number
  startIndex: number
  inputEncoding: string
  outputEncoding: string
  safe: string
  cx: string
}

export interface NextPage {
  title: string
  totalResults: string
  searchTerms: string
  count: number
  startIndex: number
  inputEncoding: string
  outputEncoding: string
  safe: string
  cx: string
}

export interface Context {
  title: string
}

export interface SearchInformation {
  searchTime: number
  formattedSearchTime: string
  totalResults: string
  formattedTotalResults: string
}

export interface Item {
  kind: string
  title: string
  htmlTitle: string
  link: string
  displayLink: string
  snippet: string
  htmlSnippet: string
  formattedUrl: string
  htmlFormattedUrl: string
  pagemap: Pagemap
  cacheId?: string
  mime?: string
  fileFormat?: string
  image?: ItemImage
}

export interface ItemImage {
  contextLink: string;
}

export interface Pagemap {
  cse_thumbnail?: CseThumbnail[]
  imageobject?: Imageobject[]
  person?: Person[]
  metatags: Metatag[]
  videoobject?: Videoobject[]
  cse_image?: CseImage[]
  webpage?: Webpage[]
  listitem?: Listitem[]
}

export interface CseThumbnail {
  src: string
  width: string
  height: string
}

export interface Imageobject {
  width?: string
  url: string
  height?: string
  contenturl?: string
  author?: string
}

export interface Person {
  name: string
  url: string
}

export interface Metatag {
  "og:image"?: string
  "twitter:app:url:iphone"?: string
  "twitter:app:id:googleplay"?: string
  "theme-color"?: string
  "og:image:width"?: string
  "twitter:card"?: string
  "og:site_name"?: string
  "twitter:url"?: string
  "twitter:app:url:ipad"?: string
  "al:android:package"?: string
  "twitter:app:name:googleplay"?: string
  title?: string
  "al:ios:url"?: string
  "twitter:app:id:iphone"?: string
  "og:description"?: string
  "al:ios:app_store_id"?: string
  "twitter:image"?: string
  "twitter:player"?: string
  "twitter:player:height"?: string
  "twitter:site"?: string
  "og:video:type"?: string
  "og:video:height"?: string
  "og:video:url"?: string
  "og:type"?: string
  "twitter:title"?: string
  "al:ios:app_name"?: string
  "og:title"?: string
  "og:image:height"?: string
  "twitter:app:id:ipad"?: string
  "al:web:url"?: string
  "og:video:secure_url"?: string
  "og:video:tag"?: string
  "og:video:width"?: string
  "al:android:url"?: string
  "fb:app_id"?: string
  "twitter:app:url:googleplay"?: string
  "twitter:app:name:ipad"?: string
  "twitter:description"?: string
  "og:url"?: string
  "twitter:player:width"?: string
  "al:android:app_name"?: string
  "twitter:app:name:iphone"?: string
  pagetype?: string
  "apple-mobile-web-app-title"?: string
  "parsely-author"?: string
  section?: string
  "phx:content-item-id"?: string
  "phx:content-object-type"?: string
  "parsely-type"?: string
  "phx:site-keyword"?: string
  "dcterms.datecopyrighted"?: string
  "twitter:domain"?: string
  author?: string
  published?: string
  "article:author"?: string
  tags?: string
  "parsely-pub-date"?: string
  "facebook-domain-verification"?: string
  "parsely-tags"?: string
  "item-id"?: string
  mobileoptimized?: string
  "sailthru.image.full"?: string
  "sailthru.author"?: string
  "format-detection"?: string
  "sailthru.tags"?: string
  "parsely-link"?: string
  "sailthru.title"?: string
  "parsely-image-url"?: string
  "parsely-section"?: string
  "sailthru.date"?: string
  "parsely-post-id"?: string
  handheldfriendly?: string
  "parsely-title"?: string
  "phx:exclusive-content-type"?: string
  "pinterest-rich-pin"?: string
  referrer?: string
  "sailthru.description"?: string
  "apple-mobile-web-app-status-bar-style"?: string
  viewport?: string
  "apple-mobile-web-app-capable"?: string
  moddate?: string
  creationdate?: string
  creator?: string
  producer?: string
  lifecycle?: string
  bu?: string
  segment?: string
  hp_design_version?: string
  company_code?: string
  page_content?: string
  hp_inav_version?: string
  web_section_id?: string
  target_country?: string
  "dcterms.title"?: string
  version?: string
  "dcterms.type"?: string
  "dcterms.subject"?: string
  "dcterms.created"?: string
  "dcterms.dateaccepted"?: string
  "og:locale"?: string
}

export interface Videoobject {
  identifier: string
  embedurl: string
  playertype: string
  isfamilyfriendly: string
  uploaddate: string
  requiressubscription: string
  description: string
  url: string
  duration: string
  name: string
  width: string
  regionsallowed: string
  genre: string
  interactioncount: string
  datepublished: string
  thumbnailurl: string
  height: string
}

export interface CseImage {
  src: string
}

export interface Webpage {
  name: string
}

export interface Listitem {
  position: string
}
