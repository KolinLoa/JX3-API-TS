/**
 * JX3 API 类型定义
 */

// API 响应基础结构
export interface ApiResponse<T = any> {
  code: number;
  msg?: string;
  data?: T;
  time?: number;
}

// 请求配置
export interface RequestConfig {
  baseURL: string;
  token: string;
  ticket?: string; // 推栏Token (可选)
  timeout?: number;
}

// 免费 API 相关类型
export interface ActiveCalendarParams {
  server?: string;
  num?: number; // 0: 当天, 1: 明天, 2: 后天
}

export interface ActiveCalendarItem {
  name: string;
  type: string;
  star?: string;
  serverTag?: string;
  [key: string]: any;
}

export interface ActiveListCalendarParams {
  num?: number; // 预测天数，默认15
}

export interface ActiveListCalendarItem {
  date: string;
  class: string[];
  [key: string]: any;
}

export interface ActiveCelebsParams {
  name: string; // "楚天社" | "云从社" | "披风会"
}

export interface ActiveCelebsData {
  name: string;
  level: number;
  nextLevel: number;
  max: number;
  [key: string]: any;
}

export interface ExamAnswerParams {
  subject: string;
  limit?: number;
}

export interface ExamAnswerItem {
  index: number;
  answer: string;
  status: string;
  [key: string]: any;
}

export interface HomeFlowerParams {
  server: string;
  name?: string;
  map?: string;
}

export interface HomeFlowerItem {
  name: string;
  map: string;
  price: number;
  route: string;
  [key: string]: any;
}

export interface HomeFurnitureParams {
  name: string;
}

export interface HomeFurnitureData {
  name: string;
  source: string;
  type: string;
  [key: string]: any;
}

export interface HomeTravelParams {
  name: string;
}

export interface HomeTravelItem {
  name: string;
  type: string;
  [key: string]: any;
}

export interface NewsAllNewsParams {
  limit?: number;
}

export interface NewsAllNewsItem {
  title: string;
  class: string;
  link: string;
  time: string;
  [key: string]: any;
}

export interface NewsAnnounceParams {
  limit?: number;
}

export interface NewsAnnounceItem {
  title: string;
  link: string;
  time: string;
  [key: string]: any;
}

export interface ServerMasterParams {
  name: string;
}

export interface ServerMasterData {
  server: string;
  attach: string[];
  [key: string]: any;
}

export interface ServerCheckParams {
  server?: string;
}

export interface ServerCheckItem {
  server: string;
  status: string;
  [key: string]: any;
}

export interface ServerStatusParams {
  server: string;
}

export interface ServerStatusData {
  server: string;
  status: string;
  [key: string]: any;
}

export interface SkillsRecordsData {
  [key: string]: any;
}

// 会员 API 相关类型
export interface VipParams {
  token: string;
  ticket?: string;
}

export interface ActiveMonsterParams extends VipParams {
}

export interface ActiveMonsterData {
  name: string;
  type: string;
  effect: string[];
  [key: string]: any;
}

export interface AuctionRecordsParams extends VipParams {
  server: string;
  name?: string;
  limit?: number;
}

export interface AuctionRecordsItem {
  itemName: string;
  gold: number;
  roleName: string;
  serverName: string;
  time: string;
  [key: string]: any;
}

export interface DiluRecordsParams extends VipParams {
  server?: string;
}

export interface DiluRecordsItem {
  server: string;
  catcher: string;
  price: number;
  time: string;
  [key: string]: any;
}

export interface FireworksRecordsParams extends VipParams {
  server: string;
  name: string;
}

export interface FireworksRecordsItem {
  fromRole: string;
  toRole: string;
  fireworkName: string;
  time: string;
  [key: string]: any;
}

export interface FireworksStatisticalParams extends VipParams {
  server: string;
  name: string;
  limit?: number;
}

export interface FireworksStatisticalItem {
  role: string;
  count: number;
  time: string;
  [key: string]: any;
}

export interface FireworksCollectParams extends VipParams {
  server: string;
  num?: number;
}

export interface FireworksCollectData {
  all: number;
  send: number;
  receive: number;
  [key: string]: any;
}

export interface FraudDetailedParams extends VipParams {
  uid: number;
}

export interface FraudDetailedItem {
  author: string;
  content: string;
  title: string;
  link: string;
  [key: string]: any;
}

export interface LuckAdventureParams extends VipParams {
  server: string;
  name: string;
}

export interface LuckAdventureItem {
  name: string;
  status: string;
  time: string;
  [key: string]: any;
}

export interface LuckUnfinishedParams extends VipParams {
  server: string;
  name: string;
}

export interface LuckUnfinishedItem {
  name: string;
  [key: string]: any;
}

export interface LuckRecentParams extends VipParams {
  server: string;
}

export interface LuckRecentItem {
  role: string;
  name: string;
  status: string;
  time: string;
  [key: string]: any;
}

export interface LuckStatisticalParams extends VipParams {
  server: string;
  name: string;
  limit?: number;
}

export interface LuckStatisticalItem {
  role: string;
  server: string;
  time: string;
  [key: string]: any;
}

export interface LuckServerStatisticalParams extends VipParams {
  name: string;
  limit?: number;
}

export interface LuckServerStatisticalItem {
  role: string;
  server: string;
  time: string;
  [key: string]: any;
}

export interface LuckCollectParams extends VipParams {
  server: string;
  num?: number;
}

export interface LuckCollectItem {
  name: string;
  count: number;
  lastRole: string;
  lastTime: string;
  [key: string]: any;
}

export interface ArenaRecentParams extends VipParams {
  server: string;
  name: string;
  mode?: string;
}

export interface ArenaRecentData {
  name: string;
  force: string;
  school: string;
  matches: Array<{
    win: boolean;
    time: string;
    opponent: string;
  }>;
  [key: string]: any;
}

export interface ArenaAwesomeParams extends VipParams {
  mode?: number;
  limit?: number;
}

export interface ArenaAwesomeItem {
  rank: number;
  name: string;
  force: string;
  score: number;
  winRate: number;
  [key: string]: any;
}

export interface ArenaSchoolsParams extends VipParams {
  mode?: number;
}

export interface ArenaSchoolsItem {
  school: string;
  matches: number;
  winRate: number;
  [key: string]: any;
}

export interface MemberRecruitParams extends VipParams {
  server: string;
  keyword?: string;
  table?: number;
}

export interface MemberRecruitItem {
  leader: string;
  type: string;
  need: string;
  server: string;
  [key: string]: any;
}

export interface MemberTeacherParams extends VipParams {
  server: string;
  keyword?: string;
}

export interface MemberTeacherItem {
  teacher: string;
  student: string;
  description: string;
  [key: string]: any;
}

export interface MemberStudentParams extends VipParams {
  server: string;
  keyword?: string;
}

export interface MemberStudentItem {
  teacher: string;
  student: string;
  description: string;
  [key: string]: any;
}

export interface RankStatisticalParams extends VipParams {
  server: string;
  table: string;
  name: string;
}

export interface RankStatisticalItem {
  rank: number;
  name: string;
  server: string;
  score: number;
  [key: string]: any;
}

export interface RankServerStatisticalParams extends VipParams {
  table: string;
  name: string;
}

export interface RankServerStatisticalItem {
  rank: number;
  name: string;
  server: string;
  score: number;
  [key: string]: any;
}

export interface RewardStatisticalParams extends VipParams {
  server: string;
  name: string;
  limit?: number;
}

export interface RewardStatisticalItem {
  item: string;
  role: string;
  map: string;
  time: string;
  [key: string]: any;
}

export interface RewardServerStatisticalParams extends VipParams {
  name: string;
  limit?: number;
}

export interface RewardServerStatisticalItem {
  item: string;
  role: string;
  server: string;
  time: string;
  [key: string]: any;
}

export interface RoleDetailedParams extends VipParams {
  server: string;
  name: string;
}

export interface RoleDetailedData {
  name: string;
  server: string;
  force: string;
  school: string;
  team: string;
  level: number;
  [key: string]: any;
}

export interface SaveRoleDetailedParams extends VipParams {
  server: string;
  roleId: string;
}

export interface SaveRoleDetailedData {
  code: number;
  msg: string;
  [key: string]: any;
}

export interface RoleAchievementParams extends VipParams {
  server: string;
  role: string;
  name: string;
}

export interface RoleAchievementData {
  name: string;
  progress: number;
  total: number;
  [key: string]: any;
}

export interface RoleMonsterParams extends VipParams {
  server: string;
  name: string;
}

export interface RoleMonsterData {
  spirit: number;
  endurance: number;
  skills: Array<{
    name: string;
    level: number;
  }>;
  [key: string]: any;
}

export interface SchoolMatrixParams extends VipParams {
  name: string;
}

export interface SchoolMatrixItem {
  level: number;
  description: string;
  effect: string;
  [key: string]: any;
}

export interface SchoolForceParams extends VipParams {
  name: string;
}

export interface SchoolForceItem {
  level: number;
  name: string;
  description: string;
  [key: string]: any;
}

export interface SchoolSkillsParams extends VipParams {
  name: string;
}

export interface SchoolSkillsItem {
  name: string;
  type: string;
  description: string;
  cooldown: number;
  [key: string]: any;
}

export interface SchoolSeniorityParams extends VipParams {
  school: string;
}

export interface SchoolSeniorityItem {
  rank: number;
  name: string;
  server: string;
  seniority: number;
  [key: string]: any;
}

export interface ServerSandParams {
  server: string;
}

export interface ServerSandItem {
  position: string;
  teamName: string;
  teamLeader: string;
  faction: string;
  [key: string]: any;
}

export interface ServerEventData {
  name: string;
  server: string;
  time: string;
  [key: string]: any;
}

export interface ServerAntiviceParams extends VipParams {
}

export interface ServerAntiviceItem {
  server: string;
  map: string;
  time: string;
  [key: string]: any;
}

export interface ServerLeaderParams extends VipParams {
}

export interface ServerLeaderItem {
  server: string;
  leader: string;
  faction: string;
  status: string;
  time: string;
  [key: string]: any;
}

export interface ShowCardParams extends VipParams {
  server: string;
  name: string;
}

export interface ShowCardData {
  imageUrl: string;
  dataId: string;
  [key: string]: any;
}

export interface ShowCacheParams extends VipParams {
  server: string;
  name: string;
}

export interface ShowCacheData {
  imageUrl: string;
  dataId: string;
  [key: string]: any;
}

export interface ShowRandomParams extends VipParams {
  server?: string;
  body?: string;
  force?: string;
}

export interface ShowRandomData {
  imageUrl: string;
  dataId: string;
  [key: string]: any;
}

export interface TiebaItemRecordsParams {
  server?: string;
  name: string;
  limit?: number;
  token: string;
}

export interface TiebaItemRecordsItem {
  title: string;
  content: string;
  replies: number;
  link: string;
  [key: string]: any;
}

export interface TradeRecordsParams {
  server?: string;
  name: string;
  token: string;
}

export interface TradeRecordsData {
  [key: string]: any;
}

export interface TradeDemonParams {
  server?: string;
  limit?: number;
  token: string;
}

export interface TradeDemonItem {
  server: string;
  goldPrice: number;
  demonPrice: number;
  [key: string]: any;
}

// 其他 API 相关类型
export interface TiebaRandomParams {
  class: string;
  server?: string;
  limit?: number;
  token: string;
}

export interface TiebaRandomItem {
  title: string;
  content: string;
  author: string;
  link: string;
  [key: string]: any;
}

export interface IdiomSolitaireParams {
  name: string;
}

export interface IdiomSolitaireItem {
  name: string;
  [key: string]: any;
}

export interface MixedChatParams {
  name: string;
  text: string;
}

export interface MixedChatData {
  name: string;
  reply: string;
  [key: string]: any;
}

export interface MusicParams {
  name: string;
}

export interface MusicItem {
  id: string;
  name: string;
  artist: string;
  [key: string]: any;
}

export interface SaohuaRandomData {
  text: string;
  [key: string]: any;
}

export interface SaohauContentParams {
  num?: number;
}

export interface SaohuaContentItem {
  content: string;
  [key: string]: any;
}

export interface SoundConverterParams {
  text: string;
}

export interface SoundConverterData {
  audioUrl: string;
  [key: string]: any;
}

// WebSocket 事件类型
export interface SocketEventMessage {
  code: number;
  data: any;
  timestamp?: number;
}

export interface SocketEventConfig {
  url: string;
  token: string;
  eventIds?: Array<number | string>; // 订阅的事件 ID
  reconnect?: boolean;
  reconnectInterval?: number;
}

export type SocketEventHandler = (data: any) => void;
export type SocketErrorHandler = (error: Error) => void;
export type SocketConnectionHandler = (connected: boolean) => void;
