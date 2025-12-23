# JX3 API TypeScript SDK

一个强大的剑网3 (JX3) API TypeScript 调用组件，提供免费、会员、其他API模块以及WebSocket事件推送功能。

## 特性

✨ **完整的 API 支持**
- 📚 免费 API：活动日历、科举答题、家园系统、新闻公告等
- 👑 会员 API：奇遇、拍卖、排行榜、角色信息、名剑战绩等
- 🎭 其他 API：成语接龙、聊天、音乐搜索、交易行情等

🔌 **WebSocket 事件推送**
- 实时奇遇报时
- 烟花、的卢、扶摇等事件
- 前线战况、帮会宣战等阵营事件
- 开服报时、新闻资讯等服务器事件

🏗️ **开发友好**
- 完整的 TypeScript 类型定义
- 模块化设计，易于扩展
- 自动重连机制
- 错误处理和日志支持

## 安装

```bash
npm install jx3-api-ts
```

或使用 yarn:

```bash
yarn add jx3-api-ts
```

## 快速开始

### 基础初始化

```typescript
import { JX3API } from 'jx3-api-ts';

const api = new JX3API({
  baseURL: 'https://www.jx3api.com',
  token: 'YOUR_API_TOKEN',
  ticket: 'YOUR_TUILAN_TOKEN', // 可选
  timeout: 10000,
});
```

### 调用免费 API

```typescript
// 获取活动日历
const calendar = await api.free.getActiveCalendar({
  server: '长安城',
  num: 0, // 0: 当天, 1: 明天, 2: 后天
});

// 科举答题查询
const examAnswer = await api.free.getExamAnswer({
  subject: '古琴',
  limit: 5,
});

// 查询服务器状态
const serverStatus = await api.free.getServerStatus({
  server: '长安城',
});
```

### 调用会员 API

```typescript
// 查询角色详细信息
const roleDetail = await api.vip.getRoleDetailed({
  server: '梦江南',
  name: '角色名称',
});

// 查询奇遇触发记录
const luckAdventure = await api.vip.getLuckAdventure({
  server: '梦江南',
  name: '角色名称',
});

// 查询名剑排行
const arenaAwesome = await api.vip.getArenaAwesome({
  mode: 33, // 3v3 竞技
  limit: 20,
});
```

### 调用其他 API

```typescript
// 成语接龙
const idiom = await api.other.getIdiomSolitaire({
  name: '望子成龙',
});

// 智障聊天
const chat = await api.other.getMixedChat({
  name: '萌萌',
  text: '你好呀',
});

// 音乐搜索
const music = await api.other.getMusicTencent({
  name: '么么哒',
});
```

### WebSocket 事件推送

```typescript
import { SocketEventIds, SocketEventGroups } from 'jx3-api-ts';

// 初始化 WebSocket
const socket = api.initSocket({
  url: 'wss://www.jx3api.com/socket',
  token: 'YOUR_API_TOKEN',
  reconnect: true,
  reconnectInterval: 5000,
});

// 连接
await socket.connect();

// 监听连接状态
socket.onConnectionChange((connected) => {
  console.log('连接状态:', connected ? '已连接' : '已断开');
});

// 监听错误
socket.onError((error) => {
  console.error('WebSocket 错误:', error.message);
});

// 订阅奇遇事件
socket.subscribe(SocketEventIds.LUCK, (data) => {
  console.log(`[奇遇] ${data.role} 在 ${data.server} 触发了 ${data.luckName}`);
});

// 订阅烟花事件
socket.subscribe(SocketEventIds.FIREWORKS, (data) => {
  console.log(`[烟花] ${data.fromRole} 向 ${data.toRole} 赠送了烟花`);
});

// 订阅所有常用事件
SocketEventGroups.common.forEach((eventId) => {
  socket.subscribe(eventId, (data) => {
    console.log('事件数据:', data);
  });
});

// 订阅所有事件
socket.subscribeAll((data) => {
  console.log('所有事件:', data);
});

// 断开连接
socket.disconnect();
```

## API 分类

### 免费 API (FreeAPI)

| 方法 | 功能 | 描述 |
|------|------|------|
| `getActiveCalendar()` | 活动日历 | 查询当天/明天/后天的活动 |
| `getActiveListCalendar()` | 活动月历 | 预测未来日期的日常任务 |
| `getActiveCelebs()` | 行侠事件 | 查询楚天社/云从社进度 |
| `getExamAnswer()` | 科举答题 | 查询科举考试答案 |
| `getHomeFlower()` | 家园鲜花 | 查询鲜花价格和采集线路 |
| `getHomeFurniture()` | 家园装饰 | 查询装饰物品信息 |
| `getHomeTravel()` | 器物图谱 | 查询地图装饰产出 |
| `getAllNews()` | 新闻资讯 | 获取官方最新新闻 |
| `getAnnounce()` | 维护公告 | 获取官方公告 |
| `getServerMaster()` | 搜索区服 | 查询主次服务器 |
| `getServerCheck()` | 开服检查 | 查询服务器开服状态 |
| `getServerStatus()` | 查看状态 | 查询服务器当前状态 |
| `getSkillsRecords()` | 技改记录 | 查询技能修改历史 |

### 会员 API (VipAPI)

| 方法 | 功能 |
|------|------|
| `getActiveMonster()` | 百战首领 |
| `getAuctionRecords()` | 阵营拍卖 |
| `getDiluRecords()` | 的卢记录 |
| `getFireworksRecords()` | 烟花记录 |
| `getFireworksStatistical()` | 烟花统计 |
| `getFireworksCollect()` | 烟花汇总 |
| `getFraudDetailed()` | 骗子查询 |
| `getLuckAdventure()` | 角色奇遇 |
| `getLuckUnfinished()` | 未做奇遇 |
| `getLuckRecent()` | 近期奇遇 |
| `getLuckStatistical()` | 奇遇统计 |
| `getLuckServerStatistical()` | 全服统计 |
| `getLuckCollect()` | 奇遇汇总 |
| `getArenaRecent()` | 名剑战绩 |
| `getArenaAwesome()` | 名剑排行 |
| `getArenaSchools()` | 名剑统计 |
| `getMemberRecruit()` | 团队招募 |
| `getMemberTeacher()` | 师傅列表 |
| `getMemberStudent()` | 徒弟列表 |
| `getRankStatistical()` | 本服榜单 |
| `getRankServerStatistical()` | 全服榜单 |
| `getRewardStatistical()` | 掉落统计 |
| `getRewardServerStatistical()` | 全服掉落 |
| `getRoleDetailed()` | 角色信息 |
| `saveRoleDetailed()` | 角色更新 |
| `getRoleAchievement()` | 成就百科 |
| `getRoleMonster()` | 角色百战 |
| `getSchoolMatrix()` | 心法阵眼 |
| `getSchoolForce()` | 奇穴详情 |
| `getSchoolSkills()` | 技能详情 |
| `getSchoolSeniority()` | 资历排行 |
| `getServerSand()` | 阵营沙盘 |
| `getServerEvent()` | 阵营事件 |
| `getServerAntivice()` | 诛恶事件 |
| `getServerLeader()` | 关隘首领 |
| `getShowCard()` | 角色名片 |
| `getShowCache()` | 名片缓存 |
| `getShowRandom()` | 随机名片 |

### 其他 API (OtherAPI)

| 方法 | 功能 |
|------|------|
| `getTiebaItemRecords()` | 贴吧物价 |
| `getTiebaRandom()` | 八卦帖子 |
| `getIdiomSolitaire()` | 成语接龙 |
| `getMixedChat()` | 智障聊天 |
| `getMusicTencent()` | 腾讯点歌 |
| `getMusicNetease()` | 网易点歌 |
| `getMusicKugou()` | 酷狗点歌 |
| `getSaohuaRandom()` | 世界骚话 |
| `getSaohuaContent()` | 舔狗日记 |
| `getSoundConverter()` | 阿里语音 |
| `getTradeRecords()` | 黑市物价 |
| `getTradeDemon()` | 金币价格 |

### WebSocket 事件

所有支持的事件ID：

```typescript
SocketEventIds = {
  LUCK: 1001,                    // 奇遇报时
  DILU_SPAWN: 1002,              // 的卢出现
  DILU_CAUGHT: 1003,             // 的卢被捕
  FUYAO_SPAWN: 1004,             // 扶摇出现
  FUYAO_FLYING: 1005,            // 扶摇飞行
  FUYAO_LANDING: 1006,           // 扶摇着陆
  FIREWORKS: 1007,               // 烟花报时
  XUANJING: 1008,                // 玄晶报时
  ZHUIHUN: 1009,                 // 追魂点名
  ANTIVICE: 1010,                // 诛恶事件
  DILU_EVENT_SPAWN: 1012,        // 的卢事件
  DILU_EVENT_CAUGHT: 1013,       // 的卢被捕事件
  DILU_EVENT_AUCTION: 1014,      // 的卢拍卖
  FRONTIER_STATUS_1: 1101,       // 前线战况 1
  // ... 1102-1107
  GANG_DECLARE_1: 1108,          // 帮会宣战 1
  GANG_DECLARE_2: 1109,          // 帮会宣战 2
  TERRITORY_DECLARE_1: 1110,     // 领地宣战 1
  TERRITORY_DECLARE_2: 1111,     // 领地宣战 2
  SERVER_OPEN: 2001,             // 开服报时
  NEWS: 2002,                    // 新闻资讯
  UPDATE: 2003,                  // 游戏更新
  GOSSIP: 2004,                  // 八卦速报
  LEADER: 2005,                  // 关隘首领
  YUNSONG: 2006,                 // 云丛预告
}
```

预定义事件组：

```typescript
SocketEventGroups = {
  luck: [1001],                  // 奇遇相关
  dilu: [1002, 1003],            // 的卢相关
  fuyao: [1004, 1005, 1006],     // 扶摇相关
  fireworks: [1007],             // 烟花相关
  frontier: [1101-1107],         // 前线战况
  server: [2001, 2002, 2003],    // 服务器事件
  gang: [1108, 1109],            // 帮会事件
  news: [2002, 2003, 2004],      // 新闻事件
  common: [常用事件],            // 常用事件组合
}
```

## 配置选项

### RequestConfig

```typescript
interface RequestConfig {
  baseURL: string;       // API 服务器地址
  token: string;         // API Token（必需）
  ticket?: string;       // 推栏 Token（可选）
  timeout?: number;      // 请求超时时间，默认 10000ms
}
```

### SocketEventConfig

```typescript
interface SocketEventConfig {
  url: string;                // WebSocket 服务器地址（必需）
  token: string;              // API Token（必需）
  eventIds?: number[];        // 要订阅的事件 ID（可选）
  reconnect?: boolean;        // 是否自动重连，默认 true
  reconnectInterval?: number; // 重连间隔，默认 5000ms
}
```

## 错误处理

```typescript
try {
  const result = await api.free.getActiveCalendar({
    server: '长安城',
  });
  
  if (result.code === 200) {
    console.log('请求成功:', result.data);
  } else {
    console.log('API 返回错误:', result.msg);
  }
} catch (error) {
  console.error('请求失败:', error);
}
```

## 高级用法

### 更新 Token

```typescript
// 运行时更新 API Token
api.setToken('NEW_TOKEN');

// 运行时更新推栏 Token
api.setTicket('NEW_TICKET');
```

### 直接使用 HttpClient

```typescript
const httpClient = api.getHttpClient();

// 发送自定义 GET 请求
const result = await httpClient.get('/custom/endpoint', {
  param1: 'value1',
  param2: 'value2',
});

// 发送自定义 POST 请求
const postResult = await httpClient.post('/custom/endpoint', {
  data1: 'value1',
}, {
  param1: 'value1',
});
```

### 直接使用 SocketClient

```typescript
const socket = api.getSocketClient();

// 检查连接状态
if (socket?.isConnected()) {
  console.log('已连接');
}

// 取消订阅
socket?.unsubscribe(SocketEventIds.LUCK);

// 取消所有订阅
socket?.unsubscribe(SocketEventIds.LUCK);
```

## 项目结构

```
src/
├── api/
│   ├── free/          # 免费 API 模块
│   ├── vip/           # 会员 API 模块
│   └── other/         # 其他 API 模块
├── socket/            # WebSocket 事件模块
├── types/             # TypeScript 类型定义
├── utils/             # 工具类
│   └── HttpClient.ts
└── index.ts           # 主入口
```

## 生成编译

```bash
# 开发模式（监听文件变化）
npm run dev

# 生产构建
npm run build

# 类型检查
npm run type-check

# 清理构建文件
npm run clean
```

## 许可证

MIT

## 贡献

欢迎提出问题和拉取请求！

## 变更日志

### v1.0.0
- 初始版本发布
- 支持所有免费、会员、其他 API
- 完整的 WebSocket 事件推送支持
- 完整的 TypeScript 类型定义
