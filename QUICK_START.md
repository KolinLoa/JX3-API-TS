# JX3 API TypeScript SDK - 快速使用指南

## 📦 项目结构

```
src/
├── api/
│   ├── free/index.ts      # 免费 API (13个接口)
│   ├── vip/index.ts       # 会员 API (48个接口)
│   └── other/index.ts     # 其他 API (12个接口)
├── socket/
│   └── index.ts           # WebSocket 事件 (26种事件)
├── types/
│   └── index.ts           # 完整的 TypeScript 类型定义
├── utils/
│   └── HttpClient.ts      # HTTP 请求客户端
└── index.ts               # 主入口

配置文件：
├── tsconfig.json          # TypeScript 配置
├── package.json           # npm 包配置
├── README.md              # 详细文档
├── QUICK_START.md         # 本文件
├── .gitignore             # Git 忽略文件
└── example.ts             # 完整使用示例
```

## 🚀 5分钟快速开始

### 1. 安装

```bash
npm install
npm run build
```

### 2. 基础初始化

```typescript
import { JX3API } from './src/index';

const api = new JX3API({
  baseURL: 'https://www.jx3api.com',
  token: 'YOUR_API_TOKEN', // 替换为你的 Token
});
```

### 3. 调用 API

#### 免费 API 示例

```typescript
// 获取活动日历
const calendar = await api.free.getActiveCalendar({
  server: '长安城',
});

// 科举答题
const answers = await api.free.getExamAnswer({
  subject: '古琴',
  limit: 5,
});

// 服务器状态
const status = await api.free.getServerStatus({
  server: '长安城',
});
```

#### 会员 API 示例

```typescript
// 角色信息
const character = await api.vip.getRoleDetailed({
  server: '梦江南',
  name: '角色名',
});

// 奇遇记录
const adventures = await api.vip.getLuckAdventure({
  server: '梦江南',
  name: '角色名',
});

// 排行榜
const ranking = await api.vip.getRankStatistical({
  server: '长安城',
  table: '个人',
  name: '名士五十强',
});
```

#### 其他 API 示例

```typescript
// 成语接龙
const result = await api.other.getIdiomSolitaire({
  name: '望子成龙',
});

// 聊天机器人
const chat = await api.other.getMixedChat({
  name: '萌萌',
  text: '你好',
});

// 音乐搜索
const music = await api.other.getMusicTencent({
  name: '么么哒',
});
```

### 4. WebSocket 事件推送

```typescript
import { SocketEventIds, SocketEventGroups } from './src/index';

// 初始化
const socket = api.initSocket({
  url: 'wss://www.jx3api.com/socket',
  token: 'YOUR_API_TOKEN',
});

// 连接
await socket.connect();

// 监听奇遇
socket.subscribe(SocketEventIds.LUCK, (data) => {
  console.log(`奇遇: ${data.role} 在 ${data.server} 触发了 ${data.luckName}`);
});

// 监听烟花
socket.subscribe(SocketEventIds.FIREWORKS, (data) => {
  console.log(`烟花: ${data.fromRole} -> ${data.toRole}`);
});

// 监听开服
socket.subscribe(SocketEventIds.SERVER_OPEN, (data) => {
  console.log(`开服: ${data.server}`);
});

// 订阅多个事件
SocketEventGroups.common.forEach((eventId) => {
  socket.subscribe(eventId, (data) => {
    console.log('事件:', data);
  });
});
```

## 📚 API 分类详表

### 免费 API (13个)

| 方法 | 描述 |
|------|------|
| `getActiveCalendar()` | 今天/明天/后天活动 |
| `getActiveListCalendar()` | 日常任务月历 |
| `getActiveCelebs()` | 楚天社/云从社进度 |
| `getExamAnswer()` | 科举答题 |
| `getHomeFlower()` | 家园鲜花 |
| `getHomeFurniture()` | 家园装饰 |
| `getHomeTravel()` | 器物图谱 |
| `getAllNews()` | 新闻资讯 |
| `getAnnounce()` | 维护公告 |
| `getServerMaster()` | 搜索区服 |
| `getServerCheck()` | 开服检查 |
| `getServerStatus()` | 服务器状态 |
| `getSkillsRecords()` | 技改记录 |

### 会员 API (48个)

**活动/拍卖相关:** `getActiveMonster()` `getAuctionRecords()` `getDiluRecords()`

**烟花相关:** `getFireworksRecords()` `getFireworksStatistical()` `getFireworksCollect()`

**骗子/奇遇相关:** `getFraudDetailed()` `getLuckAdventure()` `getLuckUnfinished()` `getLuckRecent()` `getLuckStatistical()` `getLuckServerStatistical()` `getLuckCollect()`

**竞技相关:** `getArenaRecent()` `getArenaAwesome()` `getArenaSchools()`

**成员相关:** `getMemberRecruit()` `getMemberTeacher()` `getMemberStudent()`

**排行榜:** `getRankStatistical()` `getRankServerStatistical()`

**掉落相关:** `getRewardStatistical()` `getRewardServerStatistical()`

**角色相关:** `getRoleDetailed()` `saveRoleDetailed()` `getRoleAchievement()` `getRoleMonster()`

**心法相关:** `getSchoolMatrix()` `getSchoolForce()` `getSchoolSkills()` `getSchoolSeniority()`

**服务器相关:** `getServerSand()` `getServerEvent()` `getServerAntivice()` `getServerLeader()`

**名片相关:** `getShowCard()` `getShowCache()` `getShowRandom()`

### 其他 API (12个)

**贴吧/交易:** `getTiebaItemRecords()` `getTiebaRandom()` `getTradeRecords()` `getTradeDemon()`

**娱乐:** `getIdiomSolitaire()` `getMixedChat()` `getMusicTencent()` `getMusicNetease()` `getMusicKugou()`

**骚话/语音:** `getSaohuaRandom()` `getSaohuaContent()` `getSoundConverter()`

## 🔌 WebSocket 事件速查

### 常用事件

```typescript
SocketEventIds.LUCK        // 奇遇报时 (1001)
SocketEventIds.FIREWORKS   // 烟花报时 (1007)
SocketEventIds.DILU_SPAWN  // 的卢出现 (1002)
SocketEventIds.DILU_CAUGHT // 的卢被捕 (1003)
SocketEventIds.SERVER_OPEN // 开服报时 (2001)
SocketEventIds.NEWS        // 新闻资讯 (2002)
SocketEventIds.LEADER      // 关隘首领 (2005)
```

### 预定义事件组

```typescript
SocketEventGroups.common    // 常用事件组合
SocketEventGroups.luck      // 所有奇遇事件
SocketEventGroups.dilu      // 所有的卢事件
SocketEventGroups.fireworks // 烟花相关
SocketEventGroups.frontier  // 前线战况
SocketEventGroups.server    // 服务器事件
SocketEventGroups.gang      // 帮会事件
SocketEventGroups.news      // 新闻事件
```

## 💡 常见用法

### 错误处理

```typescript
try {
  const result = await api.free.getActiveCalendar({ server: '长安城' });
  if (result.code === 200) {
    console.log('成功:', result.data);
  } else {
    console.error('失败:', result.msg);
  }
} catch (error) {
  console.error('异常:', error);
}
```

### 动态更新 Token

```typescript
api.setToken('NEW_TOKEN');
api.setTicket('NEW_TICKET');
```

### WebSocket 事件监听完整示例

```typescript
const socket = api.initSocket({
  url: 'wss://www.jx3api.com/socket',
  token: 'YOUR_TOKEN',
});

await socket.connect();

// 监听连接状态
socket.onConnectionChange((connected) => {
  console.log('连接:', connected ? '成功' : '断开');
});

// 监听错误
socket.onError((error) => {
  console.error('错误:', error.message);
});

// 订阅事件
socket.subscribe(SocketEventIds.LUCK, (data) => {
  // 处理奇遇事件
});

// 取消订阅
socket.unsubscribe(SocketEventIds.LUCK);

// 断开连接
socket.disconnect();
```

## 🔧 开发命令

```bash
# 开发模式（监听文件变化）
npm run dev

# 编译 TypeScript
npm run build

# 类型检查
npm run type-check

# 清理编译输出
npm run clean
```

## 📖 完整示例

详见 `example.ts` 文件，包含所有 API 的使用示例。

## ✅ 检查清单

- [ ] 安装依赖: `npm install`
- [ ] 配置 Token: 在初始化时传入有效的 API Token
- [ ] 编译项目: `npm run build`
- [ ] 查看示例: `example.ts`
- [ ] 根据需要导入使用相应的 API 类

## 🎯 下一步

1. 查看 `README.md` 了解完整文档
2. 查看 `example.ts` 了解所有使用示例
3. 根据你的业务需求调用相应的 API
4. WebSocket 事件可用于实时数据推送和监听

## 🤝 支持

如有问题，请参考 API 文档或查看示例代码。

---

**提示**: 记得替换 `YOUR_API_TOKEN` 为你的实际 API Token！
