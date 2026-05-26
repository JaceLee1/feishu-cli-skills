---
name: wechat-radar
description: 微信群聊情报看板与本地消息雷达使用指南。用于理解、安装、运行和维护 joeseesun/wechat-radar 项目；当用户需要把微信群消息、话题、链接、@我消息、高信号人物聚合成本地情报看板，或询问“微信雷达”“微信群情报”“微信消息看板”“WeChat Radar”时使用。
---

# WeChat Radar Skill

> 来源项目：<https://github.com/joeseesun/wechat-radar>
>
> 本 Skill 是对上游项目的能力封装与使用说明，不包含真实微信数据、数据库、会话、密钥或个人隐私内容。

## 这个技能做什么

WeChat Radar 是一个本地优先的微信群聊情报看板。它把微信群消息、跨群话题、文章/工具链接、@我的消息、活跃群日报和高信号人物聚合成一个可按日期查看的工作台。

适合场景：

- 群太多，想快速看今天哪些消息值得处理。
- 想把微信群里的文章、工具、机会线索去重整理。
- 想按日期生成跨群话题雷达。
- 想把单个群的聊天摘要复制给 AI 继续分析。
- 想在本地 SQLite 保留和检索微信历史消息。

## 重要边界

- 只建议用于本地、只读、历史聊天检索与聚合。
- 不建议用于朋友圈、点赞、评论、发消息、加好友、改资料等写入或社交操作。
- 建议使用注册半年以上的小号或测试号，不建议直接使用主力微信号。
- 已知上游 README 提到测试微信版本为 `4.1.9.58`，更高版本需谨慎验证。
- 不要把真实聊天数据库、截图、会话、微信密钥提交到 GitHub。

## 前置条件

- macOS，并已登录微信 4.x。
- Node.js 20+。
- pnpm。
- wx-cli 可用，并且 daemon 正在运行。
- 可选：Codex CLI，用于更好的话题/链接摘要。

检查命令：

```bash
node --version
pnpm --version
wx --version
wx daemon status
codex --version
```

## 推荐安装方式

```bash
git clone https://github.com/joeseesun/wechat-radar.git
cd wechat-radar
pnpm install
pnpm rebuild better-sqlite3
pnpm dev
```

打开：

```text
http://localhost:3000
```

首次进入会跳转到 `/setup`，按页面提示配置微信名、隐私确认，也可先启用 demo 数据体验。

## 数据位置

默认运行数据位于：

```text
~/.wechat-radar/
```

常见文件：

- `~/.wechat-radar/radar.db`：SQLite 主数据库。
- `~/.wechat-radar/config.json`：本地配置。
- `~/.wechat-radar/backups/`：可选备份。

## 常用配置

复制环境变量模板：

```bash
cp .env.example .env.local
```

常见配置项：

```bash
WECHAT_RADAR_DATA_DIR=~/.wechat-radar
WECHAT_RADAR_MY_NAMES=张三,San Zhang,zhangsan
WECHAT_RADAR_DEMO=0
WECHAT_RADAR_CODEX_MODEL=
```

## 使用工作流

1. 进入首页，选择日期或时间范围。
2. 点击“重扫”同步当前范围消息。
3. 点击“全量同步”拉取更长历史。
4. 打开“话题雷达”查看跨群主题。
5. 打开“链接情报”查看文章和工具资源。
6. 在活跃群列表点击“日报”查看单群日报。
7. 将日报或链接情报复制给 AI，继续做选题、机会、任务、资料整理。

## 可交给 AI 的请求示例

- “把今天所有 Codex 相关话题整理成一篇博客大纲。”
- “复制这个群日报，帮我提炼值得回复的机会。”
- “把链接情报里的工具做成一张试用优先级表。”
- “根据今天微信群高频话题，生成朋友圈和小红书选题。”

## 常见问题

| 问题 | 处理方式 |
| --- | --- |
| `wx daemon 未运行` | 先运行 `wx daemon start`，再刷新页面。 |
| `better-sqlite3` native 模块报错 | 运行 `pnpm rebuild better-sqlite3`。 |
| 首页没有数据 | 先完成 `/setup`，确认 `wx sessions --json` 有输出，然后点击“重扫”。 |
| 话题雷达为空 | 打开对应日期会自动构建；也可以点击“构建话题”。需要本机可运行 `codex`。 |

## 安全自检

在保存、分享、上传任何内容前检查：

- 没有真实聊天数据库。
- 没有微信账号、密钥、会话、cookie。
- 没有群成员隐私截图。
- 没有 `.env.local`、`radar.db`、备份数据库。
- 没有把本地 `~/.wechat-radar/` 提交到仓库。

## 上游资源

- 项目仓库：<https://github.com/joeseesun/wechat-radar>
- wx-cli 依赖：<https://github.com/jackwener/wx-cli>
- License：MIT
