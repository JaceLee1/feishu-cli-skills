# 技能包配置说明

> 配置 AI Agent 从 `D:\claude 技能包` 加载 Skills

---

## 📁 技能包位置

**主目录**: `D:\claude 技能包\`  
**Skills 目录**: `D:\claude 技能包\skills\`

---

## 🔧 配置方法

### 方法一：软链接（推荐）

**Windows（管理员 PowerShell）**:

```powershell
# 为每个 Skill 创建软链接
New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-content-factory" -Target "D:\claude 技能包\skills\lark-content-factory"

New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-meeting-automation" -Target "D:\claude 技能包\skills\lark-meeting-automation"

New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-doc-enhancer" -Target "D:\claude 技能包\skills\lark-doc-enhancer"

New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\lark-project-setup" -Target "D:\claude 技能包\skills\lark-project-setup"

New-Item -ItemType SymbolicLink -Path "C:\Users\你的用户名\.openclaw\workspace\skills\info-monitor" -Target "D:\claude 技能包\skills\info-monitor"
```

**优点**:
- Skills 更新后自动生效
- 无需手动同步
- 双目录保持一致

---

### 方法二：运行同步脚本

**Windows**:

```bash
# 双击运行或在命令行执行
D:\claude 技能包\sync-skills.bat
```

**说明**:
- 脚本会将 `D:\claude 技能包\skills` 复制到 `C:\Users\你的用户名\.openclaw\workspace\skills\`
- 每次修改 Skills 后需要重新运行

---

### 方法三：手动复制

```bash
# 手动复制 Skills
xcopy "D:\claude 技能包\skills\*" "C:\Users\你的用户名\.openclaw\workspace\skills\" /E /I /Y
```

---

## ✅ 验证配置

```bash
# 1. 启动 Claude Code
claude

# 2. 测试 Skill
用户：帮我创建一个飞书文档，标题是"技能包测试"

# 3. 检查 Skill 是否生效
用户：你加载了哪些 Skills？
```

---

## 🔄 更新流程

### 从 GitHub 拉取更新

```bash
# 1. 进入技能包目录
cd D:\claude 技能包

# 2. 拉取更新
git pull origin master

# 3. 如果使用软链接，自动生效
# 如果使用同步脚本，运行一次 sync-skills.bat
```

### 本地修改后同步

```bash
# 1. 修改 Skills（在 D:\claude 技能包\skills\ 目录）

# 2. 提交到 Git
cd D:\claude 技能包
git add .
git commit -m "修改内容描述"

# 3. 推送到 GitHub（如需要）
git push origin master

# 4. 在另一台电脑拉取
# 另一台电脑执行 git pull
```

---

## 📂 目录结构

```
D:\claude 技能包\
├── skills/                          # Skills 目录（核心）
│   ├── lark-content-factory/
│   ├── lark-meeting-automation/
│   ├── lark-doc-enhancer/
│   ├── lark-project-setup/
│   └── info-monitor/
│
├── README.md                        # 项目说明
├── installation-guide.md            # 安装指南
├── usage-guide.md                   # 使用指南
├── sync-skills.bat                  # 同步脚本
├── GITHUB_SETUP.md                  # GitHub 配置
└── CONFIG.md                        # 本文件
```

---

## 🔧 故障排查

### 问题：软链接创建失败

**解决**:
```powershell
# 以管理员身份运行 PowerShell
# 检查开发者模式是否开启
# Windows 设置 → 更新和安全 → 对于开发人员 → 开发者模式
```

### 问题：同步脚本报错

**解决**:
```
1. 检查路径是否正确
2. 检查是否有写入权限
3. 关闭占用文件的程序
```

### 问题：Skill 不生效

**解决**:
```
1. 检查 Skill 文件是否存在
2. 检查 SKILL.md 格式是否正确
3. 重启 Claude Code
4. 在对话中明确引用 Skill 名称
```

---

**最后更新**: 2026-04-12  
**维护者**: JaceLee1
