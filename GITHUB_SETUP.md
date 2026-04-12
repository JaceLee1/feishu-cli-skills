# GitHub 仓库配置指南

> 将本地技能包同步到 GitHub 仓库：`JaceLee1/feishu-cli-skills`

---

## 📋 步骤

### 步骤 1: 创建 GitHub 仓库

1. 登录 GitHub: https://github.com
2. 点击右上角 **+** → **New repository**
3. 填写仓库信息:
   - Repository name: `feishu-cli-skills`
   - Description: `飞书 CLI 技能包 - 让 AI 成为你的飞书管家`
   - Visibility: Public（或 Private）
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 **Create repository**

### 步骤 2: 关联本地仓库

在 `D:\claude 技能包` 目录执行：

```bash
# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/JaceLee1/feishu-cli-skills.git

# 验证远程仓库
git remote -v

# 推送到 GitHub
git push -u origin master
```

### 步骤 3: 后续同步

```bash
# 修改技能后提交
cd D:\claude 技能包
git add .
git commit -m "更新内容描述"

# 推送到 GitHub
git push origin master
```

---

## 🔧 常见问题

### Q1: 推送失败，提示权限错误？

**解决**: 使用 GitHub Token 或 SSH

**方式一：HTTPS + Token**
```bash
# 使用 Token 推送（推荐）
git remote set-url origin https://<YOUR_TOKEN>@github.com/JaceLee1/feishu-cli-skills.git
git push
```

**方式二：SSH**
```bash
# 生成 SSH Key
ssh-keygen -t ed25519 -C "your-email@example.com"

# 添加 SSH Key 到 GitHub
# GitHub → Settings → SSH and GPG keys → New SSH key

# 切换为 SSH 地址
git remote set-url origin git@github.com:JaceLee1/feishu-cli-skills.git
git push
```

### Q2: 文件太大无法推送？

**解决**:
```bash
# 检查大文件
git ls-files | xargs -I {} git log -1 --format="%H %s" -- {} | sort

# 从 git 历史中移除大文件（如需要）
git filter-branch --tree-filter 'rm -f *.tar.gz' -- --all

# 强制推送
git push -f origin master
```

### Q3: 如何拉取其他地方的更新？

```bash
# 拉取远程更新
cd D:\claude 技能包
git pull origin master

# 如果有冲突，解决后提交
git add .
git commit -m "解决合并冲突"
git push
```

---

## 📊 仓库结构

```
feishu-cli-skills/
├── README.md                        # 项目说明
├── installation-guide.md            # 安装指南
├── usage-guide.md                   # 使用指南
├── feishu-cli-skills-plan.md        # 开发规划
├── feishu-cli-skills-summary.md     # 执行总结
├── sync-skills.bat                  # Windows 同步脚本
├── .gitignore                       # Git 忽略配置
│
└── skills/
    ├── lark-content-factory/        # 内容工厂
    ├── lark-meeting-automation/     # 会议自动化
    ├── lark-doc-enhancer/           # 文档增强
    ├── lark-project-setup/          # 项目 Setup
    └── info-monitor/                # 信息监控
```

---

## 🔗 相关资源

- GitHub 文档：https://docs.github.com/
- Git 下载：https://git-scm.com/
- GitHub Desktop（图形化客户端）：https://desktop.github.com/

---

**仓库地址**: https://github.com/JaceLee1/feishu-cli-skills  
**维护者**: JaceLee1
