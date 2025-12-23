/**
 * JX3 API TypeScript SDK 使用示例
 */

import { JX3API, SocketEventIds, SocketEventGroups } from './src/index';

// ======================== 初始化 ========================

const api = new JX3API({
  baseURL: 'https://www.jx3api.com',
  token: 'YOUR_API_TOKEN',
  ticket: 'YOUR_TUILAN_TOKEN', // 可选：推栏Token
  timeout: 10000,
});

// ======================== 免费 API 示例 ========================

async function freApiExamples() {
  console.log('\n========== 免费 API 示例 ==========\n');

  try {
    // 获取活动日历
    const calendar = await api.free.getActiveCalendar({
      server: '长安城',
      num: 0, // 0: 当天, 1: 明天, 2: 后天
    });
    console.log('活动日历:', calendar.data);

    // 获取日常任务月历
    const monthCalendar = await api.free.getActiveListCalendar({
      num: 15,
    });
    console.log('月历:', monthCalendar.data);

    // 查询楚天社进度
    const celebs = await api.free.getActiveCelebs({
      name: '楚天社',
    });
    console.log('楚天社进度:', celebs.data);

    // 科举答题查询
    const examAnswer = await api.free.getExamAnswer({
      subject: '古琴',
      limit: 5,
    });
    console.log('科举答案:', examAnswer.data);

    // 查询服务器状态
    const serverStatus = await api.free.getServerStatus({
      server: '长安城',
    });
    console.log('服务器状态:', serverStatus.data);

    // 获取最新新闻
    const news = await api.free.getAllNews({
      limit: 5,
    });
    console.log('最新新闻:', news.data);

  } catch (error) {
    console.error('免费 API 错误:', error);
  }
}

// ======================== 会员 API 示例 ========================

async function vipApiExamples() {
  console.log('\n========== 会员 API 示例 ==========\n');

  try {
    // 查询百战首领
    const monster = await api.vip.getActiveMonster();
    console.log('百战首领:', monster.data);

    // 查询角色详细信息
    const roleDetail = await api.vip.getRoleDetailed({
      token: 'YOUR_API_TOKEN',
      server: '梦江南',
      name: '角色名称',
    });
    console.log('角色信息:', roleDetail.data);

    // 查询奇遇触发记录
    const luckAdventure = await api.vip.getLuckAdventure({
      token: 'YOUR_API_TOKEN',
      server: '梦江南',
      name: '角色名称',
    });
    console.log('奇遇记录:', luckAdventure.data);

    // 查询未完成奇遇
    const luckUnfinished = await api.vip.getLuckUnfinished({
      token: 'YOUR_API_TOKEN',
      server: '梦江南',
      name: '角色名称',
    });
    console.log('未完成奇遇:', luckUnfinished.data);

    // 查询名剑排行
    const arenaAwesome = await api.vip.getArenaAwesome({
      mode: 33, // 3v3 竞技
      limit: 20,
    });
    console.log('名剑排行:', arenaAwesome.data);

    // 查询拍卖记录
    const auction = await api.vip.getAuctionRecords({
      token: 'YOUR_API_TOKEN',
      server: '长安城',
      name: '物品名称',
      limit: 10,
    });
    console.log('拍卖记录:', auction.data);

    // 查询排行榜
    const rank = await api.vip.getRankStatistical({
      token: 'YOUR_API_TOKEN',
      server: '长安城',
      table: '个人',
      name: '名士五十强',
    });
    console.log('排行榜:', rank.data);

  } catch (error) {
    console.error('会员 API 错误:', error);
  }
}

// ======================== 其他 API 示例 ========================

async function otherApiExamples() {
  console.log('\n========== 其他 API 示例 ==========\n');

  try {
    // 成语接龙
    const idiom = await api.other.getIdiomSolitaire({
      name: '望子成龙',
    });
    console.log('成语接龙:', idiom.data);

    // 智障聊天
    const chat = await api.other.getMixedChat({
      name: '萌萌',
      text: '你好呀',
    });
    console.log('聊天回复:', chat.data);

    // 腾讯音乐搜索
    const musicTencent = await api.other.getMusicTencent({
      name: '么么哒',
    });
    console.log('腾讯音乐:', musicTencent.data);

    // 随机骚话
    const saohua = await api.other.getSaohuaRandom();
    console.log('骚话:', saohua.data);

    // 金币价格
    const tradeDemon = await api.other.getTradeDemon({
      server: '长安城',
    });
    console.log('金币价格:', tradeDemon.data);

  } catch (error) {
    console.error('其他 API 错误:', error);
  }
}

// ======================== WebSocket 事件示例 ========================

async function socketExamples() {
  console.log('\n========== WebSocket 事件示例 ==========\n');

  // 初始化 WebSocket
  const socket = api.initSocket({
    url: 'wss://www.jx3api.com/socket',
    token: 'YOUR_API_TOKEN',
    reconnect: true,
    reconnectInterval: 5000,
  });

  try {
    // 连接到服务器
    await socket.connect();
    console.log('WebSocket 连接成功');

    // 监听连接状态
    socket.onConnectionChange((connected) => {
      console.log('连接状态:', connected ? '已连接' : '已断开');
    });

    // 监听错误
    socket.onError((error) => {
      console.error('WebSocket 错误:', error.message);
    });

    // ========== 示例 1: 订阅奇遇事件 ==========
    socket.subscribe(SocketEventIds.LUCK, (data) => {
      console.log('奇遇报时:', data);
      // data 格式: { role: '角色名', server: '区服名', luckName: '奇遇名', ... }
    });

    // ========== 示例 2: 订阅多个事件 ==========
    [SocketEventIds.DILU_SPAWN, SocketEventIds.DILU_CAUGHT].forEach((eventId) => {
      socket.subscribe(eventId, (data) => {
        console.log('的卢事件:', data);
      });
    });

    // ========== 示例 3: 使用预定义的事件组 ==========
    SocketEventGroups.common.forEach((eventId) => {
      socket.subscribe(eventId, (data) => {
        console.log('常用事件:', data);
      });
    });

    // ========== 示例 4: 订阅所有事件 ==========
    socket.subscribeAll((data) => {
      console.log('所有事件:', data);
    });

    // ========== 示例 5: 处理特定类型事件 ==========
    // 奇遇相关
    socket.subscribe(SocketEventIds.LUCK, (data) => {
      console.log(`[奇遇] ${data.role} 在 ${data.server} 触发了 ${data.luckName}`);
    });

    // 烟花事件
    socket.subscribe(SocketEventIds.FIREWORKS, (data) => {
      console.log(`[烟花] ${data.fromRole} 向 ${data.toRole} 赠送了烟花`);
    });

    // 开服报时
    socket.subscribe(SocketEventIds.SERVER_OPEN, (data) => {
      console.log(`[开服] ${data.server} 已开服`);
    });

    // 新闻资讯
    socket.subscribe(SocketEventIds.NEWS, (data) => {
      console.log(`[新闻] ${data.title}`);
    });

    // 关隘首领
    socket.subscribe(SocketEventIds.LEADER, (data) => {
      console.log(`[首领] ${data.server} - ${data.leader}`);
    });

    // 保持连接（这里只是示例，实际应用中应该在需要时断开）
    // 在实际使用中，你可以这样做：
    // setTimeout(() => {
    //   socket.disconnect();
    //   console.log('WebSocket 已断开');
    // }, 60000); // 60秒后断开

  } catch (error) {
    console.error('WebSocket 连接错误:', error);
  }
}

// ======================== 主函数 ========================

async function main() {
  console.log('='.repeat(50));
  console.log('JX3 API TypeScript SDK 使用示例');
  console.log('='.repeat(50));

  // 运行示例（请根据需要注释/取消注释）
  
  // 免费 API 示例
  // await freApiExamples();

  // 会员 API 示例
  // await vipApiExamples();

  // 其他 API 示例
  // await otherApiExamples();

  // WebSocket 事件示例
  // await socketExamples();

  console.log('\n示例代码已准备就绪，请根据需要取消注释相应的示例函数。');
  console.log('在运行前，请确保：');
  console.log('1. 已安装依赖: npm install');
  console.log('2. 已配置有效的 API Token');
  console.log('3. 已编译 TypeScript: npm run build');
}

// 运行示例
// main().catch(console.error);

export {
  freApiExamples,
  vipApiExamples,
  otherApiExamples,
  socketExamples,
};
