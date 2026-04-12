# 飞书 CLI 技能包 - 详细安装指南

> 本指南帮助你从零开始安装和配置飞书 CLI 技能包

---

## 目录

1. [环境准备](#1-环境准备)
2. [安装 lark-cli](#2-安装-lark-cli)
3. [配置飞书应用](#3-配置飞书应用)
4. [安装 AI Agent](#4-安装-ai-agent)
5. [安装技能包](#5-安装技能包)
6. [验证安装](#6-验证安装)
7. [跨电脑同步](#7-跨电脑同步)
8. [故障排查](#8-故障排查)

---

## 1. 环境准备

### 系统要求

| 组件 | 要求 | 检查方法 |
|------|------|----------|
| 操作系统 | Windows 10+/macOS 12+/Linux | `uname -a` |
| Node.js | 18.0 或更高 | `node --version` |
| npm | 9.0 或更高 | `npm --version` |
| 飞书账号 | 企业版账号 | - |

### 安装 Node.js（如未安装）

**Windows**:
```powershell
# 下载安装包
https://nodejs.org/zh-cn/download/

# 选择 LTS 版本，运行安装包
```

**macOS**:
```bash
# 使用 Homebrew
brew install node@18
```

**Linux**:
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```

---

## 2. 安装 lark-cli

### 2.1 使用 npm 安装（推荐）

```bash
# 全局安装
npm install -g @larksuite/cli

# 验证安装
lark-cli --version

# 查看帮助
lark-cli --help
```

### 2.2 升级 lark-cli

```bash
# 升级到最新版本
npm update -g @larksuite/cli

# 安装特定版本
npm install -g @larksuite/cli@0.10.0
```

### 2.3 常见问题

**问题**: 安装时提示权限错误

**解决**:
```bash
# macOS/Linux
sudo npm install -g @larksuite/cli --unsafe-perm

# Windows
# 以管理员身份运行 PowerShell
```

---

## 3. 配置飞书应用

### 3.1 创建飞书企业自建应用

1. 登录 [飞书开放平台](https://open.feishu.cn/)
2. 进入「企业自建应用」→「创建应用」
3. 填写应用信息：
   - 应用名称：`Feishu CLI Skills`
   - 应用图标：可选
4. 点击「创建」

### 3.2 开通 API 权限

在应用管理页面，开通以下权限：

| 模块 | 权限 | Scope |
|------|------|-------|
| 飞书文档 | 读 + 写 | `docx:write` |
| 飞书知识库 | 读 + 写 | `wiki:write` |
| 多维表格 | 读 + 写 | `bitable:write` |
| 日历 | 读 + 写 | `calendar:write` |
| 即时通讯 | 读 + 写 | `im:message`, `im:chat` |
| 任务 | 读 + 写 | `task:write` |
| 通讯录 | 只读 | `contact:readonly` |
| 视频会议 | 只读 | `vc:readonly` |

### 3.3 获取凭证

1. 进入「凭证管理」
2. 记录以下信息：
   - App ID
   - App Secret

### 3.4 配置 lark-cli

```bash
# 初始化配置（按提示输入）
lark-cli config init

# 输入 App ID 和 App Secret
# 配置将保存到 ~/.lark-cli/config.json
```

### 3.5 登录授权

```bash
# 执行登录
lark-cli auth login

# 浏览器会打开授权页面，点击「同意授权」

# 验证登录状态
lark-cli auth status
```

### 3.6 测试连接

```bash
# 运行健康检查
lark-cli doctor

# 测试创建文档
lark-cli docs +create --title "测试文档" --markdown "# Hello World"
```

---

## 4. 安装 AI Agent

### 4.1 Claude Code（推荐）

```bash
# 安装
npm install -g @anthropic-ai/claude-code

# 配置 API Key
claude config

# 或使用环境变量
export ANTHROPIC_API_KEY=sk-xxxxx

# 测试
claude --version
```

### 4.2 Kimi Code（国内替代）

```bash
# 安装
npm install -g @moonshotai/kimi-code

# 配置
kimi config
```

### 4.3 其他支持的 Agent

| Agent | 安装命令 | 备注 |
|-------|----------|------|
| Qwen Code | `npm install -g @qwen-code/qwen-code` | 通义千问 |
| OpenClaw | `npm install -g openclaw` | 开源方案 |

---

## 5. 安装技能包

### 5.1 下载技能包

**方式一：从飞书云文档下载**

1. 打开飞书云文档链接（待上传后补充）
2. 下载 `feishu-cli-skills-package.zip`
3. 解压到本地

**方式二：从 Git 仓库克隆**

```bash
git clone <你的仓库地址>
cd feishu-cli-skills-package
```

**方式三：直接复制已有文件**

如果你已经有文件，直接复制：
```bash
# 从当前目录复制
cp -r C:/Users/zmy19/feishu-cli-skills-package/skills ~/feishu-skills/
```

### 5.2 安装到 AI Agent

**Claude Code**:
```bash
# 复制 Skill 文件到工作目录
cp -r skills/* ~/.openclaw/workspace/skills/

# 或创建软链接（推荐，便于同步更新）
# Windows (管理员 PowerShell)
New-Item -ItemType SymbolicLink -Path "~\.openclaw\workspace\skills\lark-content-factory" -Target "C:\Users\zmy19\feishu-cli-skills-package\skills\lark-content-factory"

# macOS/Linux
ln -s /path/to/skills/lark-content-factory ~/.openclaw/workspace/skills/
```

**其他 Agent**:
```bash
# 参考各 Agent 的文档
# 一般位置：~/.agent-name/skills/ 或 %APPDATA%/agent-name/skills/
```

### 5.3 验证 Skill 安装

```bash
# 启动 Claude Code
claude

# 输入测试命令
帮我创建一个飞书文档，标题是"技能包测试"
```

---

## 6. 验证安装

### 6.1 基础测试

```bash
# 测试 1: lark-cli 基础功能
lark-cli docs +search --query "测试"

# 测试 2: AI Agent 连接
claude "你好，请做个自我介绍"

# 测试 3: Skill 调用
claude "帮我创建一个项目知识库，名称是'测试项目'"
```

### 6.2 Skill 功能测试

#### 测试 lark-content-factory

```
输入：帮我创建一个会议纪要文档，主题是"项目启动会"

期望输出：
- 创建飞书文档
- 包含会议纪要模板结构
- 返回文档链接
```

#### 测试 lark-meeting-automation

```
输入：帮我安排一个会议，参会人有张三和李四

期望输出：
- 查询参会人空闲时间
- 推荐时间段
- 创建日程
```

#### 测试 lark-doc-enhancer

```
输入：帮我优化这个文档（提供文档链接）

期望输出：
- 读取文档内容
- 添加 Callout、表格等增强元素
- 返回增强报告
```

#### 测试 lark-project-setup

```
输入：帮我创建新项目"电商平台重构"

期望输出：
- 创建知识库
- 创建多维表格
- 创建项目群
- 返回初始化报告
```

---

## 7. 跨电脑同步

### 方案一：飞书云文档同步（推荐）

**步骤**:

1. **上传到飞书云空间**
   ```bash
   # 在电脑 A 上
   # 将技能包上传到飞书云空间
   # 飞书 → 云空间 → 新建文件夹 → 上传文件
   ```

2. **在另一台电脑下载**
   ```bash
   # 在电脑 B 上
   # 打开飞书云空间
   # 下载技能包到本地
   # 执行安装步骤
   ```

3. **保持同步**
   - 定期检查和更新
   - 使用版本管理

### 方案二：Git 同步

**步骤**:

1. **创建 Git 仓库**
   ```bash
   # 在电脑 A 上
   cd feishu-cli-skills-package
   git init
   git add .
   git commit -m "Initial commit"
   
   # 推送到远程仓库（GitHub/Gitee）
   git remote add origin <你的仓库>
   git push -u origin main
   ```

2. **在另一台电脑克隆**
   ```bash
   # 在电脑 B 上
   git clone <你的仓库>
   cd feishu-cli-skills-package
   
   # 安装 Skill
   cp -r skills/* ~/.openclaw/workspace/skills/
   ```

3. **更新流程**
   ```bash
   # 电脑 A 更新后推送
   git add .
   git commit -m "更新内容"
   git push
   
   # 电脑 B 拉取更新
   git pull
   cp -r skills/* ~/.openclaw/workspace/skills/
   ```

### 方案三：同步盘同步

**支持的同步盘**:
- iCloud Drive
- OneDrive
- Dropbox
- 坚果云

**步骤**:

1. **将技能包放在同步目录**
   ```bash
   # 移动技能包到同步目录
   mv feishu-cli-skills-package ~/OneDrive/
   ```

2. **创建软链接**
   ```bash
   # Windows (管理员 PowerShell)
   New-Item -ItemType SymbolicLink -Path "~\.openclaw\workspace\skills" -Target "C:\Users\zmy19\OneDrive\feishu-cli-skills-package\skills"
   
   # macOS/Linux
   ln -s ~/OneDrive/feishu-cli-skills-package/skills ~/.openclaw/workspace/skills
   ```

### 方案对比

| 方案 | 优点 | 缺点 | 推荐场景 |
|------|------|------|----------|
| 飞书云文档 | 无需额外工具，可直接查看 | 手动下载更新 | 文档查阅 |
| Git | 版本管理，可追溯 | 需要 Git 知识 | 开发协作 |
| 同步盘 | 自动同步，无感更新 | 依赖第三方服务 | 个人多设备 |

---

## 8. 故障排查

### 8.1 lark-cli 问题

**问题**: `lark-cli: command not found`

**解决**:
```bash
# 检查 npm 全局路径
npm config get prefix

# 将全局路径添加到 PATH
# Windows: 添加到系统环境变量
# macOS/Linux: 添加到 ~/.bashrc 或 ~/.zshrc
export PATH=$(npm config get prefix)/bin:$PATH
```

**问题**: 认证失败

**解决**:
```bash
# 清除缓存
lark-cli auth logout

# 重新登录
lark-cli auth login

# 检查应用权限配置
# 飞书开放平台 → 应用管理 → 权限管理
```

### 8.2 AI Agent 问题

**问题**: AI 无法调用 Skill

**解决**:
```bash
# 1. 检查 Skill 文件位置
ls ~/.openclaw/workspace/skills/

# 2. 检查 Skill 格式
cat ~/.openclaw/workspace/skills/<skill>/SKILL.md

# 3. 重启 AI Agent
# 4. 在对话中明确提及 Skill 名称
```

**问题**: API 调用超时

**解决**:
```bash
# 检查网络连接
ping open.feishu.cn

# 使用国内镜像（如有）
# 检查防火墙设置
```

### 8.3 Skill 问题

**问题**: 文档创建失败

**解决**:
```bash
# 1. 检查文档标题是否重复
# 2. 检查父文件夹是否存在
# 3. 检查 Markdown 语法
# 4. 查看详细错误日志
lark-cli docs +create --verbose
```

**问题**: 权限不足

**解决**:
```bash
# 1. 检查飞书应用权限
# 飞书开放平台 → 应用管理 → 权限管理

# 2. 补充缺失权限后重新授权
lark-cli auth logout
lark-cli auth login
```

### 8.4 获取帮助

**官方渠道**:
- lark-cli GitHub Issues: https://github.com/larksuite/cli/issues
- 飞书开放平台文档：https://open.feishu.cn/document/

**社区渠道**:
- 飞书开发者社区
- AI Agent 相关社区

---

## 附录 A: 配置文件位置

| 文件 | Windows | macOS/Linux |
|------|---------|-------------|
| lark-cli 配置 | `%USERPROFILE%\.lark-cli\config.json` | `~/.lark-cli/config.json` |
| Claude Code 配置 | `%APPDATA%\ClaudeCode` | `~/.claude-code/` |
| Skill 文件 | `%APPDATA%\ClaudeCode\workspace\skills` | `~/.openclaw/workspace/skills/` |

---

## 附录 B: 常用命令速查

```bash
# lark-cli 基础命令
lark-cli --help                     # 查看帮助
lark-cli docs +create               # 创建文档
lark-cli docs +fetch --doc <url>    # 读取文档
lark-cli calendar +agenda           # 查看日程
lark-cli contact +search-user       # 搜索用户
lark-cli api GET /open-apis/...     # 通用 API 调用

# 认证相关
lark-cli config init                # 初始化配置
lark-cli auth login                 # 登录
lark-cli auth logout                # 登出
lark-cli auth status                # 查看状态

# 诊断
lark-cli doctor                     # 健康检查
```

---

**文档版本**: 1.0.0  
**最后更新**: 2026-04-12  
**维护者**: [你的名字]
