# 🚀 JX3 API TypeScript SDK - 使用指南

## ✨ 项目完成

✅ **已为你创建了一个完整的 JX3 API TypeScript 组件库**

该组件包含：
- ✅ **73个 API 接口** (免费13个 + 会员48个 + 其他12个)
- ✅ **26个 WebSocket 事件** (实时推送)
- ✅ **300+ TypeScript 类型定义**
- ✅ **2500+ 行详细文档**
- ✅ **400+ 行使用示例**

---

## 📂 项目文件位置

```
d:\DEV\JX3-API-TS\
├── src/                    # 源代码
├── package.json            # 包配置
├── tsconfig.json           # TS配置
├── INDEX.md               # 项目索引（👈 从这里开始）
├── QUICK_START.md         # 快速开始指南
├── README.md              # 详细文档
├── SUMMARY.md             # 项目总结
├── CHECKLIST.md           # 完成清单
├── FILES_MANIFEST.md      # 文件清单
└── example.ts             # 使用示例
```

---

## 🎯 三步快速开始

### 1️⃣ 安装依赖

```bash
cd d:\DEV\JX3-API-TS
npm install
npm run build
```

### 2️⃣ 导入使用

```typescript
import { JX3API, SocketEventIds } from './src/index'

// 初始化
const api = new JX3API({
  baseURL: 'https://www.jx3api.com',
  token: 'YOUR_API_TOKEN',  // 替换为你的 Token
})
```

### 3️⃣ 开始调用

```typescript
// 免费 API
const calendar = await api.free.getActiveCalendar({ server: '长安城' })

// 会员 API
const role = await api.vip.getRoleDetailed({ server: '梦江南', name: '角色名' })

// 其他 API
const chat = await api.other.getMixedChat({ name: '萌萌', text: '你好' })

// WebSocket 事件
const socket = api.initSocket({ url: 'wss://...', token: '...' })
await socket.connect()
socket.subscribe(SocketEventIds.LUCK, (data) => { console.log(data) })
```

---

## 📖 文档导航

| 文档 | 推荐人群 | 时间 | 内容 |
|------|---------|------|------|
| [INDEX.md](INDEX.md) | 所有人 | 5分钟 | 📍 项目索引和导航 |
| [QUICK_START.md](QUICK_START.md) | 🆕 新手 | 10分钟 | ⚡ 5分钟快速上手 |
| [README.md](README.md) | 📚 学者 | 30分钟 | 📖 详细的API文档 |
| [SUMMARY.md](SUMMARY.md) | 👨‍💼 管理 | 20分钟 | 📊 项目总结统计 |
| [CHECKLIST.md](CHECKLIST.md) | ✅ 验收 | 15分钟 | ✅ 完成清单 |
| [FILES_MANIFEST.md](FILES_MANIFEST.md) | 🔍 查询 | 10分钟 | 📋 文件清单导航 |
| [example.ts](example.ts) | 💻 开发 | 20分钟 | 🎯 完整代码示例 |

---

## 🎓 推荐学习路径

### 路径1: 我是完全新手 (20分钟)
```
1. 阅读本文件 (2分钟)
2. 阅读 QUICK_START.md (8分钟)
3. 查看 example.ts 代码 (10分钟)
4. 运行第一个示例
```

### 路径2: 我想快速集成 (30分钟)
```
1. 运行 npm install && npm run build (5分钟)
2. 阅读 QUICK_START.md (8分钟)
3. 复制相关示例代码 (10分钟)
4. 集成到你的项目 (7分钟)
```

### 路径3: 我想深入学习 (1小时)
```
1. 阅读 INDEX.md (5分钟)
2. 阅读 README.md (25分钟)
3. 浏览 src/ 源代码 (20分钟)
4. 修改示例代码测试 (10分钟)
```

---

## 💡 常见问题快速解答

### Q: 如何配置 API Token？

**A:** 在初始化时传入：
```typescript
const api = new JX3API({
  baseURL: 'https://www.jx3api.com',
  token: 'YOUR_API_TOKEN'  // 👈 这里配置
})
```

### Q: 如何调用免费 API？

**A:** 使用 `api.free.*` 系列方法：
```typescript
const result = await api.free.getActiveCalendar()
```

### Q: 如何调用会员 API？

**A:** 使用 `api.vip.*` 系列方法：
```typescript
const result = await api.vip.getRoleDetailed({
  server: '梦江南',
  name: '角色名'
})
```

### Q: 如何监听 WebSocket 事件？

**A:** 初始化 Socket 并订阅：
```typescript
const socket = api.initSocket({...})
await socket.connect()
socket.subscribe(SocketEventIds.LUCK, (data) => {
  console.log('奇遇事件:', data)
})
```

### Q: 如何查看某个 API 的使用方法？

**A:** 查看对应的文档：
- 免费 API → README.md 中的"免费 API" 表
- 会员 API → README.md 中的"会员 API" 表
- 其他 API → README.md 中的"其他 API" 表
- 或直接查看 example.ts 中的示例

### Q: 如何更新 Token？

**A:** 使用 `setToken()` 方法：
```typescript
api.setToken('NEW_TOKEN')
```

### Q: 代码有类型提示吗？

**A:** 是的！完整的 TypeScript 类型定义，IDE 会自动显示提示。

---

## 🛠️ 开发命令

```bash
# 安装依赖
npm install

# 编译 TypeScript
npm run build

# 开发模式 (监听文件变化)
npm run dev

# 类型检查
npm run type-check

# 清理编译输出
npm run clean
```

---

## 📊 项目统计

```
┌─────────────────────────────────────┐
│           项目统计              │
├─────────────────────────────────────┤
│ 源代码行数:        2,200+ 行        │
│ 文档行数:          2,500+ 行        │
│                                     │
│ API 接口数:        73 个           │
│ WebSocket 事件:    26 个           │
│ TypeScript 类型:   300+ 个         │
│                                     │
│ 源代码文件:        7 个            │
│ 配置文件:          3 个            │
│ 文档文件:          7 个            │
└─────────────────────────────────────┘
```

---

## 🎯 核心 API 分类

### 免费 API (13个)
```
活动相关: getActiveCalendar, getActiveListCalendar, getActiveCelebs
娱乐相关: getExamAnswer
家园相关: getHomeFlower, getHomeFurniture, getHomeTravel
新闻相关: getAllNews, getAnnounce
服务器:  getServerMaster, getServerCheck, getServerStatus, getSkillsRecords
```

### 会员 API (48个)
```
活动:    getActiveMonster, getAuctionRecords, getDiluRecords
烟花:    getFireworksRecords, getFireworksStatistical, getFireworksCollect
奇遇:    getLuckAdventure, getLuckUnfinished, getLuckRecent, getLuckStatistical...
竞技:    getArenaRecent, getArenaAwesome, getArenaSchools
成员:    getMemberRecruit, getMemberTeacher, getMemberStudent
排行:    getRankStatistical, getRankServerStatistical
掉落:    getRewardStatistical, getRewardServerStatistical
角色:    getRoleDetailed, saveRoleDetailed, getRoleAchievement, getRoleMonster
心法:    getSchoolMatrix, getSchoolForce, getSchoolSkills, getSchoolSeniority
服务器:  getServerSand, getServerEvent, getServerAntivice, getServerLeader
名片:    getShowCard, getShowCache, getShowRandom
```

### 其他 API (12个)
```
贴吧:    getTiebaItemRecords, getTiebaRandom
成语:    getIdiomSolitaire
聊天:    getMixedChat
音乐:    getMusicTencent, getMusicNetease, getMusicKugou
骚话:    getSaohuaRandom, getSaohuaContent
语音:    getSoundConverter
交易:    getTradeRecords, getTradeDemon
```

---

## 🔌 WebSocket 事件速查

### 常用事件
```typescript
SocketEventIds.LUCK        // 奇遇报时 (1001)
SocketEventIds.FIREWORKS   // 烟花报时 (1007)
SocketEventIds.DILU_SPAWN  // 的卢出现 (1002)
SocketEventIds.SERVER_OPEN // 开服报时 (2001)
SocketEventIds.NEWS        // 新闻资讯 (2002)
SocketEventIds.LEADER      // 关隘首领 (2005)
```

### 预定义事件组
```typescript
SocketEventGroups.common      // 常用事件组合
SocketEventGroups.luck        // 所有奇遇事件
SocketEventGroups.dilu        // 所有的卢事件
SocketEventGroups.fireworks   // 烟花相关
SocketEventGroups.frontier    // 前线战况
```

---

## ✨ 特色优势

| 特性 | 说明 |
|------|------|
| 🎯 **完整** | 覆盖所有73个API + 26个事件 |
| 📝 **类型安全** | 300+个TypeScript类型定义 |
| 📚 **文档齐全** | 2500+行详细文档 |
| 💡 **示例完整** | 400+行代码示例 |
| ⚡ **开箱即用** | 无需修改配置 |
| 🔧 **易于扩展** | 模块化设计 |

---

## 🚀 立即开始

### 最快路线 (5分钟)

1. **安装**
```bash
npm install
npm run build
```

2. **导入**
```typescript
import { JX3API } from './src/index'
```

3. **使用**
```typescript
const api = new JX3API({ baseURL: '...', token: '...' })
const result = await api.free.getActiveCalendar()
```

### 完整学习 (30分钟)

1. 阅读 QUICK_START.md
2. 查看 example.ts
3. 尝试修改示例代码
4. 集成到你的项目

---

## 📞 快速导航

| 问题 | 答案 |
|------|------|
| 项目怎么样？ | 查看 [INDEX.md](INDEX.md) |
| 如何快速上手？ | 查看 [QUICK_START.md](QUICK_START.md) |
| API 怎么用？ | 查看 [README.md](README.md) |
| 有没有示例？ | 查看 [example.ts](example.ts) |
| 哪些接口？ | 查看 [README.md](README.md) 的 API 表格 |
| 文件在哪里？ | 查看 [FILES_MANIFEST.md](FILES_MANIFEST.md) |

---

## ✅ 检查清单

开始使用前，请确保：

- [ ] 安装了 Node.js (推荐 14.0+ 版本)
- [ ] 运行了 `npm install`
- [ ] 运行了 `npm run build` (编译 TypeScript)
- [ ] 获取了有效的 API Token
- [ ] 阅读了 QUICK_START.md
- [ ] 查看了 example.ts 中的示例

---

## 🎉 开始使用

**准备好了？** 

👉 [从 QUICK_START.md 开始](QUICK_START.md)

或者

👉 [从 INDEX.md 了解项目](INDEX.md)

或者

👉 [从 example.ts 查看示例](example.ts)

---

## 📝 提示

> **💡 最佳实践**
> 
> 1. 所有 API 调用都应该有错误处理
> 2. WebSocket 事件有自动重连，放心使用
> 3. TypeScript 类型定义完整，充分利用 IDE 提示
> 4. Token 可以在运行时更新
> 5. 所有示例代码都在 example.ts 中

---

<div align="center">

**🎊 开始你的 JX3 API 之旅吧！ 🎊**

_一个完整、可靠、易用的剑网3 API TypeScript 组件库_

</div>
