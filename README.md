# 飞书 CLI 技能仓库

> 让 AI 成为你的飞书管家 —— 一键完成会议自动化、内容创作、项目初始化等重复工作

**仓库**: https://github.com/JaceLee1/feishu-cli-skills  
**版本**: 1.0.0  
**许可证**: MIT

---

## 📦 技能包内容

### 核心 Skills

| Skill | 功能 | 典型场景 |
|-------|------|----------|
| lark-content-factory | 内容工厂 | 会议纪要→多格式输出 |
| lark-meeting-automation | 会议自动化 | 会前安排 + 会后纪要 |
| lark-doc-enhancer | 文档增强 | 智能添加 Callout/表格/画板 |
| lark-project-setup | 项目 Setup | 一键创建项目环境 |
| info-monitor | 信息监控 | 监控飞书消息/文档变更 |

### 文档

| 文档 | 说明 |
|------|------|
| README.md | 本文件（快速开始） |
| installation-guide.md | 详细安装指南 |
| usage-guide.md | 使用指南 |
| feishu-cli-skills-plan.md | 完整开发规划 |
| feishu-cli-skills-summary.md | 执行总结 |

---

## 🚀 快速开始

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/JaceLee1/feishu-cli-skills.git
cd feishu-cli-skills

# 2. 安装 lark-cli
npm install -g @larksuite/cli

# 3. 配置飞书应用
lark-cli config init
lark-cli auth login

# 4. 安装 AI Agent（Claude Code）
npm install -g @anthropic-ai/claude-code

# 5. 链接 Skills（软链接方式）
# Windows (管理员 PowerShell)
New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-content-factory" -Target "D:\claude 技能包\skills\lark-content-factory"
New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-meeting-automation" -Target "D:\claude 技能包\skills\lark-meeting-automation"
New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-doc-enhancer" -Target "D:\claude 技能包\skills\lark-doc-enhancer"
New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-project-setup" -Target "D:\claude 技能包\skills\lark-project-setup"
New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\info-monitor" -Target "D:\claude 技能包\skills\info-monitor"

# macOS/Linux
ln -s /path/to/feishu-cli-skills/skills/* ~/.openclaw/workspace/skills/
```

### 快速测试

```bash
# 启动 Claude Code
claude

# 测试命令
用户：帮我创建一个飞书文档，标题是"技能包测试"
用户：帮我安排一个会议，参会人有张三和李四
用户：帮我创建新项目"电商平台重构"
```

---

## 📊 性能提升

| 操作 | 手动时间 | AI 时间 | 节省 |
|------|----------|---------|------|
| 会议纪要 | 60 分钟 | 5 分钟 | 92% |
| 项目 Setup | 100 分钟 | 2 分钟 | 98% |
| 文档增强 | 30 分钟 | 3 分钟 | 90% |
| 会议安排 | 45 分钟 | 5 分钟 | 89% |

---

## 📖 详细文档

- **安装指南**: [installation-guide.md](installation-guide.md)
- **使用指南**: [usage-guide.md](usage-guide.md)
- **开发规划**: [feishu-cli-skills-plan.md](feishu-cli-skills-plan.md)
- **执行总结**: [feishu-cli-skills-summary.md](feishu-cli-skills-summary.md)

---

## 🔄 同步更新

```bash
# 拉取最新技能包
cd feishu-cli-skills
git pull origin main

# Skills 会自动同步（因为是软链接）
```

---

## 🔗 相关资源

- [飞书开放平台](https://open.feishu.cn/)
- [lark-cli GitHub](https://github.com/larksuite/cli)
- [飞书 API 文档](https://open.feishu.cn/document/)
- [Claude Code](https://claude.ai/code)

---

## 📝 更新日志

### v1.0.0 (2026-04-12)

**新增**:
- lark-content-factory v1.0
- lark-meeting-automation v1.0
- lark-doc-enhancer v1.0
- lark-project-setup v1.0
- info-monitor v1.0

**文档**:
- 完整使用手册
- 安装指南
- 常见问题解答

---

**维护者**: JaceLee1  
**GitHub**: https://github.com/JaceLee1
