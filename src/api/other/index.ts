/**
 * 其他 API 模块
 * 包含：八卦帖子、成语接龙、聊天、音乐、骚话等其他接口
 */

import { HttpClient } from '../../utils/HttpClient';
import {
  ApiResponse,
  TiebaRandomParams,
  TiebaRandomItem,
  IdiomSolitaireParams,
  IdiomSolitaireItem,
  MixedChatParams,
  MixedChatData,
  MusicParams,
  MusicItem,
  SaohuaRandomData,
  SaohauContentParams,
  SaohuaContentItem,
  SoundConverterParams,
  SoundConverterData,
  TiebaItemRecordsParams,
  TiebaItemRecordsItem,
  TradeRecordsParams,
  TradeRecordsData,
  TradeDemonParams,
  TradeDemonItem,
} from '../../types';

export class OtherAPI {
  constructor(private httpClient: HttpClient) {}

  // ======================== 贴吧相关 ========================

  /**
   * 查询指定物品的贴吧物价记录
   * @example
   * const result = await otherAPI.getTiebaItemRecords({ server: '长安城', name: '物品名' });
   */
  async getTiebaItemRecords(params: TiebaItemRecordsParams): Promise<ApiResponse<TiebaItemRecordsItem[]>> {
    return this.httpClient.get('/data/tieba/item/records', params);
  }

  /**
   * 随机搜索指定分类的贴吧帖子
   * @example
   * const result = await otherAPI.getTiebaRandom({ class: '616' });
   */
  async getTiebaRandom(params: TiebaRandomParams): Promise<ApiResponse<TiebaRandomItem[]>> {
    return this.httpClient.get('/data/tieba/random', params);
  }

  // ======================== 成语相关 ========================

  /**
   * 成语接龙
   * @example
   * const result = await otherAPI.getIdiomSolitaire({ name: '望子成龙' });
   */
  async getIdiomSolitaire(params: IdiomSolitaireParams): Promise<ApiResponse<IdiomSolitaireItem[]>> {
    return this.httpClient.get('/data/idiom/solitaire', params);
  }

  // ======================== 聊天相关 ========================

  /**
   * 与指定名称的智能聊天机器人进行互动
   * @example
   * const result = await otherAPI.getMixedChat({ name: '萌萌', text: '你好吗' });
   */
  async getMixedChat(params: MixedChatParams): Promise<ApiResponse<MixedChatData>> {
    return this.httpClient.get('/data/mixed/chat', params);
  }

  // ======================== 音乐相关 ========================

  /**
   * 通过腾讯音乐平台搜索指定歌曲
   * @example
   * const result = await otherAPI.getMusicTencent({ name: '么么哒' });
   */
  async getMusicTencent(params: MusicParams): Promise<ApiResponse<MusicItem[]>> {
    return this.httpClient.get('/data/music/tencent', params);
  }

  /**
   * 通过网易云音乐平台搜索指定歌曲
   * @example
   * const result = await otherAPI.getMusicNetease({ name: '么么哒' });
   */
  async getMusicNetease(params: MusicParams): Promise<ApiResponse<MusicItem[]>> {
    return this.httpClient.get('/data/music/netease', params);
  }

  /**
   * 通过酷狗音乐平台搜索指定歌曲
   * @example
   * const result = await otherAPI.getMusicKugou({ name: '么么哒' });
   */
  async getMusicKugou(params: MusicParams): Promise<ApiResponse<MusicItem[]>> {
    return this.httpClient.get('/data/music/kugou', params);
  }

  // ======================== 骚话相关 ========================

  /**
   * 随机获取一条与万花门派相关的骚话
   * @example
   * const result = await otherAPI.getSaohuaRandom();
   */
  async getSaohuaRandom(): Promise<ApiResponse<SaohuaRandomData>> {
    return this.httpClient.get('/data/saohua/random');
  }

  /**
   * 获取舔狗日记
   * @example
   * const result = await otherAPI.getSaohuaContent();
   */
  async getSaohuaContent(params: Partial<SaohauContentParams> = {}): Promise<ApiResponse<SaohuaContentItem[]>> {
    return this.httpClient.get('/data/saohua/content', params);
  }

  // ======================== 语音相关 ========================

  /**
   * 阿里语音合成
   * @example
   * const result = await otherAPI.getSoundConverter({ text: '你好' });
   */
  async getSoundConverter(params: SoundConverterParams): Promise<ApiResponse<SoundConverterData>> {
    return this.httpClient.get('/data/sound/converter', params);
  }

  // ======================== 交易相关 ========================

  /**
   * 统计指定物品的黑市价格信息
   * @example
   * const result = await otherAPI.getTradeRecords({ server: '梦江南', name: '物品名' });
   */
  async getTradeRecords(params: TradeRecordsParams): Promise<ApiResponse<TradeRecordsData>> {
    return this.httpClient.get('/data/trade/records', params);
  }

  /**
   * 获取金币价格比例信息
   * @example
   * const result = await otherAPI.getTradeDemon({ server: '长安城' });
   */
  async getTradeDemon(params: Partial<TradeDemonParams> = {}): Promise<ApiResponse<TradeDemonItem[]>> {
    return this.httpClient.get('/data/trade/demon', params);
  }
}
