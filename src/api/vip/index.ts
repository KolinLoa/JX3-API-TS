/**
 * 会员 API 模块
 * 包含：百战首领、拍卖记录、奇遇、排行榜、角色信息等会员接口
 */

import { HttpClient } from '../../utils/HttpClient';
import {
  ApiResponse,
  ActiveMonsterParams,
  ActiveMonsterData,
  AuctionRecordsParams,
  AuctionRecordsItem,
  DiluRecordsParams,
  DiluRecordsItem,
  FireworksRecordsParams,
  FireworksRecordsItem,
  FireworksStatisticalParams,
  FireworksStatisticalItem,
  FireworksCollectParams,
  FireworksCollectData,
  FraudDetailedParams,
  FraudDetailedItem,
  LuckAdventureParams,
  LuckAdventureItem,
  LuckUnfinishedParams,
  LuckUnfinishedItem,
  LuckRecentParams,
  LuckRecentItem,
  LuckStatisticalParams,
  LuckStatisticalItem,
  LuckServerStatisticalParams,
  LuckServerStatisticalItem,
  LuckCollectParams,
  LuckCollectItem,
  ArenaRecentParams,
  ArenaRecentData,
  ArenaAwesomeParams,
  ArenaAwesomeItem,
  ArenaSchoolsParams,
  ArenaSchoolsItem,
  MemberRecruitParams,
  MemberRecruitItem,
  MemberTeacherParams,
  MemberTeacherItem,
  MemberStudentParams,
  MemberStudentItem,
  RankStatisticalParams,
  RankStatisticalItem,
  RankServerStatisticalParams,
  RankServerStatisticalItem,
  RewardStatisticalParams,
  RewardStatisticalItem,
  RewardServerStatisticalParams,
  RewardServerStatisticalItem,
  RoleDetailedParams,
  RoleDetailedData,
  SaveRoleDetailedParams,
  SaveRoleDetailedData,
  RoleAchievementParams,
  RoleAchievementData,
  RoleMonsterParams,
  RoleMonsterData,
  SchoolMatrixParams,
  SchoolMatrixItem,
  SchoolForceParams,
  SchoolForceItem,
  SchoolSkillsParams,
  SchoolSkillsItem,
  SchoolSeniorityParams,
  SchoolSeniorityItem,
  ServerSandParams,
  ServerSandItem,
  ServerEventData,
  ServerAntiviceParams,
  ServerAntiviceItem,
  ServerLeaderParams,
  ServerLeaderItem,
  ShowCardParams,
  ShowCardData,
  ShowCacheParams,
  ShowCacheData,
  ShowRandomParams,
  ShowRandomData,
} from '../../types';

export class VipAPI {
  constructor(private httpClient: HttpClient) {}

  // ======================== 活动相关 ========================

  /**
   * 获取本周百战异闻录刷新的首领及其特殊效果
   * @example
   * const result = await vipAPI.getActiveMonster();
   */
  async getActiveMonster(params: Partial<ActiveMonsterParams> = {}): Promise<ApiResponse<ActiveMonsterData>> {
    return this.httpClient.get('/data/active/monster', params);
  }

  // ======================== 拍卖相关 ========================

  /**
   * 查询阵营拍卖的记录
   * @example
   * const result = await vipAPI.getAuctionRecords({ server: '长安城', name: '物品名' });
   */
  async getAuctionRecords(params: AuctionRecordsParams): Promise<ApiResponse<AuctionRecordsItem[]>> {
    return this.httpClient.get('/data/auction/records', params);
  }

  // ======================== 的卢相关 ========================

  /**
   * 查询的卢马的刷新、捕获及拍卖记录
   * @example
   * const result = await vipAPI.getDiluRecords({ server: '长安城' });
   */
  async getDiluRecords(params: DiluRecordsParams): Promise<ApiResponse<DiluRecordsItem[]>> {
    return this.httpClient.get('/data/dilu/records', params);
  }

  // ======================== 烟花相关 ========================

  /**
   * 查询烟花赠送与接收的历史记录
   * @example
   * const result = await vipAPI.getFireworksRecords({ server: '唯我独尊', name: '角色名' });
   */
  async getFireworksRecords(params: FireworksRecordsParams): Promise<ApiResponse<FireworksRecordsItem[]>> {
    return this.httpClient.get('/data/fireworks/records', params);
  }

  /**
   * 统计指定烟花的赠送与接收记录
   * @example
   * const result = await vipAPI.getFireworksStatistical({ server: '唯我独尊', name: '烟花名' });
   */
  async getFireworksStatistical(params: FireworksStatisticalParams): Promise<ApiResponse<FireworksStatisticalItem[]>> {
    return this.httpClient.get('/data/fireworks/statistical', params);
  }

  /**
   * 汇总指定服务器的烟花赠送与接收记录
   * @example
   * const result = await vipAPI.getFireworksCollect({ server: '唯我独尊' });
   */
  async getFireworksCollect(params: FireworksCollectParams): Promise<ApiResponse<FireworksCollectData>> {
    return this.httpClient.get('/data/fireworks/collect', params);
  }

  // ======================== 骗子相关 ========================

  /**
   * 通过QQ号搜索其在贴吧上的行骗记录
   * @example
   * const result = await vipAPI.getFraudDetailed({ uid: 570790267 });
   */
  async getFraudDetailed(params: FraudDetailedParams): Promise<ApiResponse<FraudDetailedItem[]>> {
    return this.httpClient.get('/data/fraud/detailed', params);
  }

  // ======================== 奇遇相关 ========================

  /**
   * 查询指定角色的奇遇触发记录
   * @example
   * const result = await vipAPI.getLuckAdventure({ server: '梦江南', name: '角色名' });
   */
  async getLuckAdventure(params: LuckAdventureParams): Promise<ApiResponse<LuckAdventureItem[]>> {
    return this.httpClient.get('/data/luck/adventure', params);
  }

  /**
   * 查询指定角色的未触发奇遇列表
   * @example
   * const result = await vipAPI.getLuckUnfinished({ server: '梦江南', name: '角色名' });
   */
  async getLuckUnfinished(params: LuckUnfinishedParams): Promise<ApiResponse<LuckUnfinishedItem[]>> {
    return this.httpClient.get('/data/luck/unfinished', params);
  }

  /**
   * 查询指定区服中近期触发的奇遇记录
   * @example
   * const result = await vipAPI.getLuckRecent({ server: '梦江南' });
   */
  async getLuckRecent(params: LuckRecentParams): Promise<ApiResponse<LuckRecentItem[]>> {
    return this.httpClient.get('/data/luck/recent', params);
  }

  /**
   * 查询指定奇遇在近期的触发统计信息
   * @example
   * const result = await vipAPI.getLuckStatistical({ server: '长安城', name: '奇遇名' });
   */
  async getLuckStatistical(params: LuckStatisticalParams): Promise<ApiResponse<LuckStatisticalItem[]>> {
    return this.httpClient.get('/data/luck/statistical', params);
  }

  /**
   * 统计全服指定奇遇的近期触发记录
   * @example
   * const result = await vipAPI.getLuckServerStatistical({ name: '阴阳两界' });
   */
  async getLuckServerStatistical(params: LuckServerStatisticalParams): Promise<ApiResponse<LuckServerStatisticalItem[]>> {
    return this.httpClient.get('/data/luck/server/statistical', params);
  }

  /**
   * 统计指定区服内奇遇的近期触发角色记录
   * @example
   * const result = await vipAPI.getLuckCollect({ server: '梦江南' });
   */
  async getLuckCollect(params: LuckCollectParams): Promise<ApiResponse<LuckCollectItem[]>> {
    return this.httpClient.get('/data/luck/collect', params);
  }

  // ======================== 名剑战绩相关 ========================

  /**
   * 查询角色近期的名剑战绩记录
   * @example
   * const result = await vipAPI.getArenaRecent({ server: '梦江南', name: '角色名' });
   */
  async getArenaRecent(params: ArenaRecentParams): Promise<ApiResponse<ArenaRecentData>> {
    return this.httpClient.get('/data/arena/recent', params);
  }

  /**
   * 查询名剑大会的排行榜信息
   * @example
   * const result = await vipAPI.getArenaAwesome({ mode: 33, limit: 20 });
   */
  async getArenaAwesome(params: Partial<ArenaAwesomeParams> = {}): Promise<ApiResponse<ArenaAwesomeItem[]>> {
    return this.httpClient.get('/data/arena/awesome', params);
  }

  /**
   * 统计角色近期的名剑战绩数据
   * @example
   * const result = await vipAPI.getArenaSchools({ mode: 33 });
   */
  async getArenaSchools(params: Partial<ArenaSchoolsParams> = {}): Promise<ApiResponse<ArenaSchoolsItem[]>> {
    return this.httpClient.get('/data/arena/schools', params);
  }

  // ======================== 成员相关 ========================

  /**
   * 查询指定区服的团队招募信息
   * @example
   * const result = await vipAPI.getMemberRecruit({ server: '梦江南' });
   */
  async getMemberRecruit(params: MemberRecruitParams): Promise<ApiResponse<MemberRecruitItem[]>> {
    return this.httpClient.get('/data/member/recruit', params);
  }

  /**
   * 查询师徒系统的师傅信息
   * @example
   * const result = await vipAPI.getMemberTeacher({ server: '长安城' });
   */
  async getMemberTeacher(params: MemberTeacherParams): Promise<ApiResponse<MemberTeacherItem[]>> {
    return this.httpClient.get('/data/member/teacher', params);
  }

  /**
   * 查询师徒系统的徒弟信息
   * @example
   * const result = await vipAPI.getMemberStudent({ server: '长安城' });
   */
  async getMemberStudent(params: MemberStudentParams): Promise<ApiResponse<MemberStudentItem[]>> {
    return this.httpClient.get('/data/member/student', params);
  }

  // ======================== 排行榜相关 ========================

  /**
   * 查询客户端战功榜和风云录
   * @example
   * const result = await vipAPI.getRankStatistical({ server: '长安城', table: '个人', name: '名士五十强' });
   */
  async getRankStatistical(params: RankStatisticalParams): Promise<ApiResponse<RankStatisticalItem[]>> {
    return this.httpClient.get('/data/rank/statistical', params);
  }

  /**
   * 查询全服客户端战功榜和风云录
   * @example
   * const result = await vipAPI.getRankServerStatistical({ table: '个人', name: '名士五十强' });
   */
  async getRankServerStatistical(params: RankServerStatisticalParams): Promise<ApiResponse<RankServerStatisticalItem[]>> {
    return this.httpClient.get('/data/rank/server/statistical', params);
  }

  // ======================== 掉落统计相关 ========================

  /**
   * 统计副本掉落的贵重物品记录
   * @example
   * const result = await vipAPI.getRewardStatistical({ server: '长安城', name: '物品名' });
   */
  async getRewardStatistical(params: RewardStatisticalParams): Promise<ApiResponse<RewardStatisticalItem[]>> {
    return this.httpClient.get('/data/reward/statistical', params);
  }

  /**
   * 统计当前赛季副本中掉落的特殊物品信息
   * @example
   * const result = await vipAPI.getRewardServerStatistical({ name: '太一玄晶' });
   */
  async getRewardServerStatistical(params: RewardServerStatisticalParams): Promise<ApiResponse<RewardServerStatisticalItem[]>> {
    return this.httpClient.get('/data/reward/server/statistical', params);
  }

  // ======================== 角色信息相关 ========================

  /**
   * 查询指定角色的详细信息
   * @example
   * const result = await vipAPI.getRoleDetailed({ server: '唯我独尊', name: '角色名' });
   */
  async getRoleDetailed(params: RoleDetailedParams): Promise<ApiResponse<RoleDetailedData>> {
    return this.httpClient.get('/data/role/detailed', params);
  }

  /**
   * 保存或更新指定角色的详细信息
   * @example
   * const result = await vipAPI.saveRoleDetailed({ server: '唯我独尊', roleId: '角色ID' });
   */
  async saveRoleDetailed(params: SaveRoleDetailedParams): Promise<ApiResponse<SaveRoleDetailedData>> {
    return this.httpClient.post('/save/role/detailed', params);
  }

  /**
   * 查询指定角色的成就完成进度
   * @example
   * const result = await vipAPI.getRoleAchievement({ server: '唯我独尊', role: '角色名', name: '成就名' });
   */
  async getRoleAchievement(params: RoleAchievementParams): Promise<ApiResponse<RoleAchievementData>> {
    return this.httpClient.get('/data/role/achievement', params);
  }

  /**
   * 查询指定角色的游戏精力、耐力以及技能等级
   * @example
   * const result = await vipAPI.getRoleMonster({ server: '唯我独尊', name: '角色名' });
   */
  async getRoleMonster(params: RoleMonsterParams): Promise<ApiResponse<RoleMonsterData>> {
    return this.httpClient.get('/data/role/monster', params);
  }

  // ======================== 心法相关 ========================

  /**
   * 查询指定心法的阵眼效果
   * @example
   * const result = await vipAPI.getSchoolMatrix({ name: '花间游' });
   */
  async getSchoolMatrix(params: SchoolMatrixParams): Promise<ApiResponse<SchoolMatrixItem[]>> {
    return this.httpClient.get('/data/school/matrix', params);
  }

  /**
   * 查询指定心法的奇穴详细效果
   * @example
   * const result = await vipAPI.getSchoolForce({ name: '花间游' });
   */
  async getSchoolForce(params: SchoolForceParams): Promise<ApiResponse<SchoolForceItem[]>> {
    return this.httpClient.get('/data/school/force', params);
  }

  /**
   * 查询指定心法的技能详细信息
   * @example
   * const result = await vipAPI.getSchoolSkills({ name: '花间游' });
   */
  async getSchoolSkills(params: SchoolSkillsParams): Promise<ApiResponse<SchoolSkillsItem[]>> {
    return this.httpClient.get('/data/school/skills', params);
  }

  /**
   * 查询指定心法的资历排行榜
   * @example
   * const result = await vipAPI.getSchoolSeniority({ school: '蓬莱' });
   */
  async getSchoolSeniority(params: SchoolSeniorityParams): Promise<ApiResponse<SchoolSeniorityItem[]>> {
    return this.httpClient.get('/data/school/seniority', params);
  }

  // ======================== 服务器信息相关 ========================

  /**
   * 查询指定服务器的阵营沙盘据点信息
   * @example
   * const result = await vipAPI.getServerSand({ server: '长安城' });
   */
  async getServerSand(params: ServerSandParams): Promise<ApiResponse<ServerSandItem[]>> {
    return this.httpClient.get('/data/server/sand', params);
  }

  /**
   * 查询跨服阵营事件
   * @example
   * const result = await vipAPI.getServerEvent();
   */
  async getServerEvent(): Promise<ApiResponse<ServerEventData[]>> {
    return this.httpClient.get('/data/server/event');
  }

  /**
   * 查询诛恶事件
   * @example
   * const result = await vipAPI.getServerAntivice();
   */
  async getServerAntivice(params: Partial<ServerAntiviceParams> = {}): Promise<ApiResponse<ServerAntiviceItem[]>> {
    return this.httpClient.get('/data/server/antivice', params);
  }

  /**
   * 查询各服务器的关隘首领刷新记录
   * @example
   * const result = await vipAPI.getServerLeader();
   */
  async getServerLeader(params: Partial<ServerLeaderParams> = {}): Promise<ApiResponse<ServerLeaderItem[]>> {
    return this.httpClient.get('/data/server/leader', params);
  }

  // ======================== 角色名片相关 ========================

  /**
   * 查询指定角色的名片墙信息
   * @example
   * const result = await vipAPI.getShowCard({ server: '唯我独尊', name: '角色名' });
   */
  async getShowCard(params: ShowCardParams): Promise<ApiResponse<ShowCardData>> {
    return this.httpClient.get('/data/show/card', params);
  }

  /**
   * 查询指定角色的名片墙信息（从缓存）
   * @example
   * const result = await vipAPI.getShowCache({ server: '唯我独尊', name: '角色名' });
   */
  async getShowCache(params: ShowCacheParams): Promise<ApiResponse<ShowCacheData>> {
    return this.httpClient.get('/data/show/cache', params);
  }

  /**
   * 随机读取一张符合条件的角色名片
   * @example
   * const result = await vipAPI.getShowRandom({ server: '唯我独尊' });
   */
  async getShowRandom(params: Partial<ShowRandomParams> = {}): Promise<ApiResponse<ShowRandomData>> {
    return this.httpClient.get('/data/show/random', params);
  }
}
