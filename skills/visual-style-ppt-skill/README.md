# visual-style-ppt-skill

来源仓库：<https://github.com/irenerachel/visual-style-ppt-skill>

本机已完整安装到：

```text
/Users/qh/Workspace/.agents/skills/visual-style-ppt-skill
```

本 Skill 用于风格驱动的图片版 PPT 工作流：从文档、文章、视觉参考或已保存风格出发，生成 `outline.md`、`prompts.md`，再通过 Image 2 生成逐页幻灯片图片，并最终组装为图片版 PPTX。

## 当前备份说明

由于当前本机 GitHub HTTPS/SSH 推送凭据不可用，本次先在你的 `feishu-cli-skills` 仓库建立 Skill 入口说明。完整文件已安装在本机 Workspace Skill 目录，可在具备 GitHub 推送凭据后直接同步：

```bash
cp -R /Users/qh/Workspace/.agents/skills/visual-style-ppt-skill ./skills/visual-style-ppt-skill
git add skills/visual-style-ppt-skill
git commit -m "Add visual style PPT skill"
git push
```

## 包含能力

- Image 2-only 图片生成规则
- 文档转图片版 PPT
- 风格提炼与风格库管理
- 图片版 PPTX 组装规则
- 默认科技杂志风格
- 法式编辑商业风格
- 冲击网格编辑风格

## 重要约束

- 最终幻灯片图片必须由 Image 2 生成
- 不用 HTML/CSS/SVG/浏览器截图作为最终视觉生成方式
- 多页 PPT 需先生成 `outline.md` 和 `prompts.md`，确认后再出图
- PPTX 是图片容器，不追求可编辑元素
