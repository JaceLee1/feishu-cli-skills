# WeChat Radar Skill

这是对 [joeseesun/wechat-radar](https://github.com/joeseesun/wechat-radar) 的本地 Skill 封装说明，用于把 WeChat Radar 作为可复用能力沉淀到个人 GitHub Skill 仓库中。

## 能力定位

WeChat Radar 是一个本地优先的微信群聊情报看板，核心价值是把 noisy group chats 转成 daily intelligence dashboard。

它可以帮助你：

- 按日期查看微信群消息情报。
- 聚合跨群话题。
- 去重整理文章和工具链接。
- 查看 @ 我的消息。
- 生成单群日报。
- 将微信群信息复制给 AI 做二次分析。

## 推荐调用方式

你可以这样对 AI 说：

```text
用 wechat-radar 帮我分析怎么搭建微信群情报看板
```

```text
帮我根据 WeChat Radar 的说明，列一份本地安装步骤
```

```text
我想把微信群消息做成每日情报工作台，调用 wechat-radar 这个 skill
```

## 上游项目

- GitHub：<https://github.com/joeseesun/wechat-radar>
- License：MIT

## 安全提醒

不要上传真实微信聊天数据库、截图、密钥、会话、cookie、`.env.local` 或 `~/.wechat-radar/` 目录内容。

建议先用测试号、小号、demo 数据验证，不建议直接使用主力微信号。
