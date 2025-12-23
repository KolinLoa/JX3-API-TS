import { ApiResponse, RequestConfig } from '../types';

/**
 * HTTP 请求工具类
 */
export class HttpClient {
  private baseURL: string;
  private token: string;
  private ticket?: string;
  private timeout: number;

  constructor(config: RequestConfig) {
    this.baseURL = config.baseURL;
    this.token = config.token;
    this.ticket = config.ticket;
    this.timeout = config.timeout || 10000;
  }

  /**
   * 发送 GET 请求
   */
  async get<T = any>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>('GET', endpoint, undefined, params);
  }

  /**
   * 发送 POST 请求
   */
  async post<T = any>(endpoint: string, data?: Record<string, any>, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>('POST', endpoint, data, params);
  }

  /**
   * 通用请求方法
   */
  private async request<T = any>(
    method: 'GET' | 'POST',
    endpoint: string,
    body?: Record<string, any>,
    params?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    try {
      // 构建URL
      let url = `${this.baseURL}${endpoint}`;
      
      // 构建请求参数
      const requestParams = {
        ...params,
        token: this.token,
        ...(this.ticket && { ticket: this.ticket }),
      };

      // 如果是GET请求，拼接查询字符串
      if (method === 'GET') {
        const queryString = this.buildQueryString(requestParams);
        if (queryString) {
          url += `?${queryString}`;
        }
      }

      // 发送请求
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          token: this.token,
        },
        body: method === 'POST' ? JSON.stringify({ ...requestParams, ...body }) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // 处理响应
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json() as ApiResponse<T>;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Request failed: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * 构建查询字符串
   */
  private buildQueryString(params: Record<string, any>): string {
    return Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');
  }

  /**
   * 更新Token
   */
  setToken(token: string): void {
    this.token = token;
  }

  /**
   * 更新推栏Token
   */
  setTicket(ticket: string): void {
    this.ticket = ticket;
  }

  /**
   * 更新基础URL
   */
  setBaseURL(baseURL: string): void {
    this.baseURL = baseURL;
  }
}
