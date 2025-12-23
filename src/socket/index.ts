/**
 * WebSocket 事件模块
 * 用于处理 JX3 API 事件推送
 *
 * 支持的事件：
 * - 1001: 奇遇报时
 * - 1002-1003: 马驹事件
 * - 1004-1006: 扶摇事件
 * - 1007: 烟花报时
 * - 1008: 玄晶报时
 * - 1009: 追魂点名
 * - 1010: 诛恶事件
 * - 1012-1014: 的卢事件
 * - 1101-1107: 前线战况
 * - 1108-1109: 帮会宣战
 * - 1110-1111: 领地宣战
 * - 2001: 开服报时
 * - 2002: 新闻资讯
 * - 2003: 游戏更新
 * - 2004: 八卦速报
 * - 2005: 关隘首领
 * - 2006: 云丛预告
 */

import {
  SocketEventMessage,
  SocketEventConfig,
  SocketEventHandler,
  SocketErrorHandler,
  SocketConnectionHandler,
} from '../types';

export type SocketEventType = 'luck' | 'dilu' | 'fireworks' | 'dueling' | 'server' | 'news' | 'all';

export interface EventSubscription {
  eventId: number | string;
  handler: SocketEventHandler;
}

export class SocketClient {
  private ws: WebSocket | null = null;
  private config: SocketEventConfig;
  private subscriptions: Map<string, SocketEventHandler[]> = new Map();
  private connectionHandlers: SocketConnectionHandler[] = [];
  private errorHandlers: SocketErrorHandler[] = [];
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private isManualClose = false;

  constructor(config: SocketEventConfig) {
    this.config = {
      reconnect: true,
      reconnectInterval: 5000,
      ...config,
    };
  }

  /**
   * 连接到 WebSocket 服务器
   */
  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.isManualClose = false;
        this.ws = new WebSocket(this.config.url);

        this.ws.onopen = () => {
          this.handleConnect();
          resolve();
        };

        this.ws.onmessage = (event) => {
          this.handleMessage(event.data);
        };

        this.ws.onerror = (event) => {
          const error = new Error('WebSocket connection error');
          this.handleError(error);
          reject(error);
        };

        this.ws.onclose = () => {
          this.handleDisconnect();
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * 断开连接
   */
  disconnect(): void {
    this.isManualClose = true;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  /**
   * 订阅事件
   */
  subscribe(eventId: number | string, handler: SocketEventHandler): void {
    const eventKey = String(eventId);
    if (!this.subscriptions.has(eventKey)) {
      this.subscriptions.set(eventKey, []);
    }
    this.subscriptions.get(eventKey)!.push(handler);
  }

  /**
   * 取消订阅事件
   */
  unsubscribe(eventId: number | string, handler?: SocketEventHandler): void {
    const eventKey = String(eventId);
    if (!handler) {
      this.subscriptions.delete(eventKey);
      return;
    }

    const handlers = this.subscriptions.get(eventKey);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  /**
   * 订阅所有事件
   */
  subscribeAll(handler: SocketEventHandler): void {
    this.subscribe('*', handler);
  }

  /**
   * 监听连接状态变化
   */
  onConnectionChange(handler: SocketConnectionHandler): void {
    this.connectionHandlers.push(handler);
  }

  /**
   * 监听错误
   */
  onError(handler: SocketErrorHandler): void {
    this.errorHandlers.push(handler);
  }

  /**
   * 处理连接建立
   */
  private handleConnect(): void {
    console.log('WebSocket connected');
    this.connectionHandlers.forEach((handler) => handler(true));
  }

  /**
   * 处理收到消息
   */
  private handleMessage(data: string): void {
    try {
      const message: SocketEventMessage = JSON.parse(data);

      // 触发所有事件的处理器
      const allHandlers = this.subscriptions.get('*') || [];
      allHandlers.forEach((handler) => {
        try {
          handler(message.data);
        } catch (error) {
          console.error('Handler error:', error);
          this.handleError(error as Error);
        }
      });

      // 触发特定事件的处理器
      const eventKey = String(message.code);
      const handlers = this.subscriptions.get(eventKey) || [];
      handlers.forEach((handler) => {
        try {
          handler(message.data);
        } catch (error) {
          console.error('Handler error:', error);
          this.handleError(error as Error);
        }
      });
    } catch (error) {
      console.error('Message parse error:', error);
      this.handleError(error as Error);
    }
  }

  /**
   * 处理错误
   */
  private handleError(error: Error): void {
    this.errorHandlers.forEach((handler) => {
      try {
        handler(error);
      } catch (e) {
        console.error('Error handler error:', e);
      }
    });
  }

  /**
   * 处理断开连接
   */
  private handleDisconnect(): void {
    console.log('WebSocket disconnected');
    this.connectionHandlers.forEach((handler) => handler(false));

    // 自动重连
    if (this.config.reconnect && !this.isManualClose) {
      this.reconnectTimer = setTimeout(() => {
        console.log('Attempting to reconnect...');
        this.connect().catch((error) => {
          console.error('Reconnection failed:', error);
          this.handleError(error);
        });
      }, this.config.reconnectInterval);
    }
  }

  /**
   * 获取连接状态
   */
  isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  /**
   * 获取连接状态值
   */
  getReadyState(): number | null {
    return this.ws?.readyState ?? null;
  }
}

/**
 * 事件 ID 常量
 */
export const SocketEventIds = {
  // 奇遇相关
  LUCK: 1001,

  // 马驹事件
  DILU_SPAWN: 1002,
  DILU_CAUGHT: 1003,

  // 扶摇事件
  FUYAO_SPAWN: 1004,
  FUYAO_FLYING: 1005,
  FUYAO_LANDING: 1006,

  // 烟花
  FIREWORKS: 1007,

  // 玄晶
  XUANJING: 1008,

  // 追魂
  ZHUIHUN: 1009,

  // 诛恶
  ANTIVICE: 1010,

  // 的卢事件
  DILU_EVENT_SPAWN: 1012,
  DILU_EVENT_CAUGHT: 1013,
  DILU_EVENT_AUCTION: 1014,

  // 前线战况
  FRONTIER_STATUS_1: 1101,
  FRONTIER_STATUS_2: 1102,
  FRONTIER_STATUS_3: 1103,
  FRONTIER_STATUS_4: 1104,
  FRONTIER_STATUS_5: 1105,
  FRONTIER_STATUS_6: 1106,
  FRONTIER_STATUS_7: 1107,

  // 帮会宣战
  GANG_DECLARE_1: 1108,
  GANG_DECLARE_2: 1109,

  // 领地宣战
  TERRITORY_DECLARE_1: 1110,
  TERRITORY_DECLARE_2: 1111,

  // 开服报时
  SERVER_OPEN: 2001,

  // 新闻资讯
  NEWS: 2002,

  // 游戏更新
  UPDATE: 2003,

  // 八卦速报
  GOSSIP: 2004,

  // 关隘首领
  LEADER: 2005,

  // 云丛预告
  YUNSONG: 2006,
} as const;

/**
 * 预定义的事件订阅组合
 */
export const SocketEventGroups = {
  // 所有奇遇相关事件
  luck: [SocketEventIds.LUCK],

  // 所有的卢相关事件
  dilu: [SocketEventIds.DILU_SPAWN, SocketEventIds.DILU_CAUGHT],

  // 所有扶摇相关事件
  fuyao: [SocketEventIds.FUYAO_SPAWN, SocketEventIds.FUYAO_FLYING, SocketEventIds.FUYAO_LANDING],

  // 所有烟花事件
  fireworks: [SocketEventIds.FIREWORKS],

  // 所有前线战况事件
  frontier: [
    SocketEventIds.FRONTIER_STATUS_1,
    SocketEventIds.FRONTIER_STATUS_2,
    SocketEventIds.FRONTIER_STATUS_3,
    SocketEventIds.FRONTIER_STATUS_4,
    SocketEventIds.FRONTIER_STATUS_5,
    SocketEventIds.FRONTIER_STATUS_6,
    SocketEventIds.FRONTIER_STATUS_7,
  ],

  // 所有服务器状态事件
  server: [SocketEventIds.SERVER_OPEN, SocketEventIds.NEWS, SocketEventIds.UPDATE],

  // 所有帮会相关事件
  gang: [SocketEventIds.GANG_DECLARE_1, SocketEventIds.GANG_DECLARE_2],

  // 所有新闻事件
  news: [SocketEventIds.NEWS, SocketEventIds.UPDATE, SocketEventIds.GOSSIP],

  // 常用事件
  common: [
    SocketEventIds.LUCK,
    SocketEventIds.DILU_SPAWN,
    SocketEventIds.DILU_CAUGHT,
    SocketEventIds.FIREWORKS,
    SocketEventIds.SERVER_OPEN,
    SocketEventIds.NEWS,
    SocketEventIds.LEADER,
  ],
} as const;
