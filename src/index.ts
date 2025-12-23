/**
 * JX3 API 主入口
 * 提供统一的 API 调用接口
 */

import { FreeAPI } from './api/free';
import { VipAPI } from './api/vip';
import { OtherAPI } from './api/other';
import { SocketClient } from './socket';
import { HttpClient } from './utils/HttpClient';
import { RequestConfig, SocketEventConfig } from './types';

export class JX3API {
  private httpClient: HttpClient;
  
  public free: FreeAPI;
  public vip: VipAPI;
  public other: OtherAPI;
  public socket: SocketClient | null = null;

  constructor(requestConfig: RequestConfig) {
    // 验证必要参数
    if (!requestConfig.token) {
      throw new Error('Token is required');
    }
    if (!requestConfig.baseURL) {
      throw new Error('baseURL is required');
    }

    // 初始化 HTTP 客户端
    this.httpClient = new HttpClient(requestConfig);

    // 初始化各个 API 模块
    this.free = new FreeAPI(this.httpClient);
    this.vip = new VipAPI(this.httpClient);
    this.other = new OtherAPI(this.httpClient);
  }

  /**
   * 初始化 WebSocket 事件模块
   */
  initSocket(socketConfig: SocketEventConfig): SocketClient {
    if (!socketConfig.url) {
      throw new Error('Socket URL is required');
    }
    this.socket = new SocketClient(socketConfig);
    return this.socket;
  }

  /**
   * 更新 Token
   */
  setToken(token: string): void {
    this.httpClient.setToken(token);
  }

  /**
   * 更新推栏 Token (用于需要推栏验证的 API)
   */
  setTicket(ticket: string): void {
    this.httpClient.setTicket(ticket);
  }

  /**
   * 获取 HTTP 客户端（用于自定义请求）
   */
  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  /**
   * 获取 WebSocket 客户端
   */
  getSocketClient(): SocketClient | null {
    return this.socket;
  }
}

export * from './types';
export { FreeAPI } from './api/free';
export { VipAPI } from './api/vip';
export { OtherAPI } from './api/other';
export { SocketClient, SocketEventIds, SocketEventGroups } from './socket';
export { HttpClient } from './utils/HttpClient';
