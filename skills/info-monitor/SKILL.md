---
name: info-monitor
description: 资讯监控系统使用与定制。使用 Node.js 构建的自动化资讯监控系统，支持28个网站监控、关键词过滤、历史记录保存和飞书推送。使用本技能当需要：(1)获取最新财经/科技/半导体/AI等行业资讯；(2)定制监控网站和关键词；(3)运行或调试监控脚本；(4)整合飞书推送功能。技能包含完整的监控脚本、网站配置、历史记录系统和飞书通知接口。

---

# 资讯监控系统使用指南

## 系统概述

资讯监控系统是一个基于 Node.js 的自动化资讯抓取工具，用于持续监控配置的网站并推送相关内容。

## 系统位置

```
C:\Users\zmy19\.openclaw\workspace\info-monitor\
```

## 核心文件

### 主程序
- **monitor.js** - 主监控脚本，包含定时检查、内容解析和历史记录功能
- **test.js** - 测试脚本，用于验证抓取功能
- **sites.js** - 网站配置文件，定义28个监控网站

### 配置文件
- **.env** - 环境变量配置（检查间隔、飞书凭证等）
- **data/history.json** - 历史记录文件

### 模块文件
- **feishu.js** - 飞书通知模块（文档更新和消息推送）

## 启动系统

```bash
cd C:\Users\zmy19\.openclaw\workspace\info-monitor
npm start
```

## 当前配置

### 监控网站（28个）

**财经类 (5个)**：财联社、第一财经、证券时报网、上海证券报、财新网

**科技类 (5个)**：36氪、虎嗅网、极客公园、界面新闻、志 puzzel

**半导体/硬科技 (3个)**：半导体行业观察、集微网、芯智闻

**AI/大模型 (3个)**：AI科技评论、量子位、新智元

**创业/投资 (3个)**：投资界、猎云网、创客汇

**国际资讯 (3个)**：财联社国际、华尔街见闻、彭博

**行业深度 (2个)**：36氪 Pro、虎嗅 Pro

**社交媒体 (2个)**：雪球、微博热门

**视频类 (2个)**：B站科技区、抖音科技

### 关键词覆盖
科技、AI、大模型、互联网、半导体、芯片、新能源、金融、股市、基金、创业、融资、投资、VC、PE、国际、热点、数码、科普等

### 检查间隔
5分钟（可在 .env 中调整）

## 日常使用

### 获取最新财经资讯
系统每5分钟自动检查配置的网站，发现包含关键词的新内容时会：
1. 保存到 `data/history.json`
2. （可选）推送到飞书文档和群组

### 查看监控结果
```bash
# 查看最新10条记录
Get-Content data\history.json | ConvertFrom-Json | Select-Object -ExpandProperty items | Select-Object -First 10
```

### 调整监控网站
编辑 `sites.js`，添加/修改网站配置：
```javascript
{
    name: '网站名称',
    url: 'https://example.com',
    type: 'news',
    keywords: ['关键词1', '关键词2']
}
```

### 修改检查频率
编辑 `.env`：
```
CHECK_INTERVAL=10  # 10分钟检查一次
UPDATE_THRESHOLD_HOURS=24  # 只保留24小时内内容
```

### 启用飞书推送
1. 在 `.env` 中填写真实凭证：
   - `FEISHU_APP_ID=your_app_id`
   - `FEISHU_APP_SECRET=your_app_secret`
   - `FEISHU_DOC_TOKEN=your_doc_token`

2. 取消 `monitor.js` 中 `pushToFeishu` 的注释

## 故障排查

### 网站无法访问
- 检查网络连接
- 确认网站 URL 是否有效
- 查看错误日志中的具体错误信息

### 解析失败
- 检查网站 HTML 结构是否变化
- 调整 `parseWebsite()` 函数的选择器
- 在 `sites.js` 中添加特定网站的解析逻辑

### 内存不足
- 减少监控网站数量
- 调整 `UPDATE_THRESHOLD_HOURS` 缩短保留时间
- 增加系统内存

## 集成到工作流

### 获取今日财经资讯
```javascript
// 在任何 Node.js 脚本中
const { loadHistory } = require('./info-monitor/monitor');
const history = loadHistory();
const todayItems = history.items.filter(item => 
    new Date(item.timestamp).toISOString().startsWith(new Date().toISOString().split('T')[0])
);
```

### 定时运行
使用 Windows 任务计划程序或 cron 定期执行：
```bash
node monitor.js
```

### 扩展监控
- 添加新的网站到 `sites.js`
- 根据需要添加特定网站的解析逻辑
- 配置更精准的关键词

## 飞书推送配置（可选）

系统支持推送内容到飞书文档和群组：

### 推送到飞书文档
- 更新 `feishu.js` 中的 `docToken`
- 调用 `pushToFeishuDoc(items)` 函数

### 推送到飞书群组
- 在 `.env` 中配置 `FEISHU_WEBHOOK_URL`
- 调用 `pushToFeishuWebhook(items)` 函数

## 参考资源

- 监控脚本 `scripts/monitor.js`
- 网站配置 `references/sites.js`
- 飞书集成 `scripts/feishu.js`
