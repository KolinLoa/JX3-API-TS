/**
 * 免费 API 模块
 * 包含：活动日历、活动月历、行侠事件、科举答题、家园等免费接口
 */

import { HttpClient } from '../../utils/HttpClient';
import {
  ApiResponse,
  ActiveCalendarParams,
  ActiveCalendarItem,
  ActiveListCalendarParams,
  ActiveListCalendarItem,
  ActiveCelebsParams,
  ActiveCelebsData,
  ExamAnswerParams,
  ExamAnswerItem,
  HomeFlowerParams,
  HomeFlowerItem,
  HomeFurnitureParams,
  HomeFurnitureData,
  HomeTravelParams,
  HomeTravelItem,
  NewsAllNewsParams,
  NewsAllNewsItem,
  NewsAnnounceParams,
  NewsAnnounceItem,
  ServerMasterParams,
  ServerMasterData,
  ServerCheckParams,
  ServerCheckItem,
  ServerStatusParams,
  ServerStatusData,
  SkillsRecordsData,
} from '../../types';

export class FreeAPI {
  constructor(private httpClient: HttpClient) {}

  /**
   * 查询今天、明天、后天和日常任务的相关活动
   * @example
   * const result = await freeAPI.getActiveCalendar({ server: '长安城' });
   */
  async getActiveCalendar(params: ActiveCalendarParams = {}): Promise<ApiResponse<ActiveCalendarItem[]>> {
    return this.httpClient.get('/data/active/calendar', params);
  }

  /**
   * 预测每天的日常任务，可指定时间范围
   * @example
   * const result = await freeAPI.getActiveListCalendar({ num: 15 });
   */
  async getActiveListCalendar(params: ActiveListCalendarParams = {}): Promise<ApiResponse<ActiveListCalendarItem[]>> {
    return this.httpClient.get('/data/active/list/calendar', params);
  }

  /**
   * 查询楚天社或云从社的进度
   * @example
   * const result = await freeAPI.getActiveCelebs({ name: '楚天社' });
   */
  async getActiveCelebs(params: ActiveCelebsParams): Promise<ApiResponse<ActiveCelebsData>> {
    return this.httpClient.get('/data/active/celebs', params);
  }

  /**
   * 科举考试答案查询，支持模糊查询和拼音首字母查询
   * @example
   * const result = await freeAPI.getExamAnswer({ subject: '古琴有几根弦', limit: 1 });
   */
  async getExamAnswer(params: ExamAnswerParams): Promise<ApiResponse<ExamAnswerItem[]>> {
    return this.httpClient.get('/data/exam/answer', params);
  }

  /**
   * 查询家园特定鲜花的最高价格及采集线路
   * @example
   * const result = await freeAPI.getHomeFlower({ server: '梦江南', name: '采集鲜花名称' });
   */
  async getHomeFlower(params: HomeFlowerParams): Promise<ApiResponse<HomeFlowerItem[]>> {
    return this.httpClient.get('/data/home/flower', params);
  }

  /**
   * 查询家园特定装饰的详细信息
   * @example
   * const result = await freeAPI.getHomeFurniture({ name: '龙门香梦' });
   */
  async getHomeFurniture(params: HomeFurnitureParams): Promise<ApiResponse<HomeFurnitureData>> {
    return this.httpClient.get('/data/home/furniture', params);
  }

  /**
   * 查询指定地图的装饰物品产出信息
   * @example
   * const result = await freeAPI.getHomeTravel({ name: '万花' });
   */
  async getHomeTravel(params: HomeTravelParams): Promise<ApiResponse<HomeTravelItem[]>> {
    return this.httpClient.get('/data/home/travel', params);
  }

  /**
   * 获取官方最新公告及新闻内容
   * @example
   * const result = await freeAPI.getAllNews({ limit: 10 });
   */
  async getAllNews(params: NewsAllNewsParams = {}): Promise<ApiResponse<NewsAllNewsItem[]>> {
    return this.httpClient.get('/data/news/allnews', params);
  }

  /**
   * 获取官方最新维护公告
   * @example
   * const result = await freeAPI.getAnnounce({ limit: 10 });
   */
  async getAnnounce(params: NewsAnnounceParams = {}): Promise<ApiResponse<NewsAnnounceItem[]>> {
    return this.httpClient.get('/data/news/announce', params);
  }

  /**
   * 根据区服简称搜索主服务器及其附属服务器
   * @example
   * const result = await freeAPI.getServerMaster({ name: '双梦镇' });
   */
  async getServerMaster(params: ServerMasterParams): Promise<ApiResponse<ServerMasterData>> {
    return this.httpClient.get('/data/server/master', params);
  }

  /**
   * 查询指定服务器的当前状态（开服/维护）
   * @example
   * const result = await freeAPI.getServerCheck({ server: '长安城' });
   */
  async getServerCheck(params: ServerCheckParams = {}): Promise<ApiResponse<ServerCheckItem[]>> {
    return this.httpClient.get('/data/server/check', params);
  }

  /**
   * 查询指定服务器的当前状态（维护/正常/繁忙/爆满）
   * @example
   * const result = await freeAPI.getServerStatus({ server: '长安城' });
   */
  async getServerStatus(params: ServerStatusParams): Promise<ApiResponse<ServerStatusData>> {
    return this.httpClient.get('/data/server/status', params);
  }

  /**
   * 查询技能的历史修改记录
   * @example
   * const result = await freeAPI.getSkillsRecords();
   */
  async getSkillsRecords(): Promise<ApiResponse<SkillsRecordsData>> {
    return this.httpClient.get('/data/skills/records');
  }
}
