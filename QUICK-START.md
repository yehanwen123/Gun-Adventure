# 快速上手指南 —— 给团队成员的初始化说明

欢迎加入 **Gun Adventure** 项目！🎮 本文档将带你完成开发环境的搭建，让你能立即运行游戏并开始贡献代码。

## 1. 安装必要工具

请确保你的电脑上已安装以下软件（如果没有，点击链接下载并安装）：

- **Git**（版本控制）  
  👉 [下载地址](https://git-scm.com/downloads)  
  安装时保持默认选项即可。

- **Node.js**（用于运行后端及工具）  
  👉 [下载地址](https://nodejs.org/)  
  建议下载 **LTS 版本**（长期支持版）。

- **Visual Studio Code**（推荐编辑器）  
  👉 [下载地址](https://code.visualstudio.com/)  
  安装后建议安装插件 **Live Server**（用于快速预览网页）。

## 2. 克隆项目仓库

打开终端（Windows 用户可以打开命令提示符或 PowerShell，Mac 用户打开“终端”），然后执行以下命令：

```bash
# 将仓库克隆到本地（替换成你的仓库地址）
git clone https://github.com/yehanwen123/Gun-Adventure.git

# 进入项目文件夹
cd Gun-Adventure
```

## 3. 配置 Git 用户信息（仅第一次需要）

如果你之前从未使用过 Git，需要告诉 Git 你的名字和邮箱（用于记录谁提交了代码）。在终端中执行（替换成你的名字和 GitHub 邮箱）：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

## 4. 切换到开发分支

我们的主开发分支是 `develop`，所有工作都应基于它。执行：

```bash
git checkout develop
```

## 5. 运行项目原型

### 方法一：使用 VS Code 的 Live Server（最简单）

1. 在 VS Code 中打开项目文件夹（`Gun-Adventure`）。
2. 在左侧文件列表中，找到 `src/index.html`。
3. 右键点击 `index.html`，选择 **Open with Live Server**。
4. 浏览器会自动打开一个页面，地址类似 `http://127.0.0.1:5500/src/index.html`。

### 方法二：直接双击打开 HTML 文件

进入 `src` 文件夹，双击 `index.html` 文件，浏览器会打开页面。  
⚠️ 注意：某些功能可能因浏览器安全限制无法正常工作，推荐使用方法一。

## 6. 验证运行成功

游戏窗口打开后，你应该能看到一个黑色背景的画布。尝试：

- 按下键盘的 **WASD** 或**方向键**，看白色方块是否移动。
- 如果已实现射击功能，点击鼠标左键应发射黄色子弹。

如果以上操作正常，恭喜你！开发环境已搭建成功 🎉

## 7. 接下来做什么？

你已经可以开始开发了！请查看项目中的两个重要文档：

- **`CONTRIBUTING.md`** —— 详细的贡献规范（分支命名、提交格式、PR 流程等）。
- **`SETUP.md`** —— 更详细的环境配置说明（如果需要后端服务等）。

你也可以去 **GitHub Projects 看板** 看看有哪些任务可以认领，或者直接在群里和大家沟通。

## 常见问题

### Q：执行 `git clone` 时提示“Permission denied”或要求输入密码？
A：说明你没有配置 SSH 密钥或使用了 HTTPS 方式。最简单的办法是使用 HTTPS 方式克隆（我们已经提供了 HTTPS 链接），如果要求输入用户名密码，请输入你的 GitHub 用户名和个人访问令牌（Password），而不是登录密码。  
👉 [如何创建个人访问令牌](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### Q：运行 `npm install` 报错？
A：目前前端项目不需要依赖，可以跳过此步。如果你后续需要运行后端服务，请确保 Node.js 版本不低于 v14。

### Q：打开游戏后什么都没有，只有白屏？
A：检查浏览器控制台（F12）是否有报错。可能是文件路径问题，建议用 Live Server 打开。

---

如果在配置过程中遇到任何问题，**先别慌**，截图或复制错误信息发到群里，大家一起解决！💪
