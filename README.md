# Yuhua Zhang | 张玉华

个人主页，展示机器人与灵巧操作项目、教育背景和工作经历。

使用原生 HTML、CSS 和 JavaScript，无需安装依赖或执行构建。

## 本地预览

在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

在浏览器访问 <http://127.0.0.1:8000>，按 `Ctrl+C` 停止服务。

## 文件结构

```text
index.html       页面内容和元信息
css/style.css    桌面、移动端和打印样式
js/main.js       视频预览交互
images/          头像、项目封面、演示视频和网站图标
assets/          学校及公司标志
```

## 更新内容

- 修改个人简介、研究兴趣、联系方式、项目和经历：编辑 `index.html`。
- 调整配色、尺寸与响应式布局：编辑 `css/style.css`。
- 更换图片或视频：放入 `images/` 或 `assets/`，并更新对应的 `src`、`href` 和图片替代文字。
- 项目的 Demo 链接可直接打开视频；如有可公开的源码仓库，可在同一组项目链接中添加 Code 链接。

工作经历仅填写已确认的信息，新增职责和成果时应补充真实内容。

## 视频预览

视频默认显示封面，使用 `preload="none"`，不自动播放。

- 电脑：鼠标移入项目封面时播放，移出时暂停。
- 手机或键盘：使用 Play preview / Pause preview 按钮控制播放。
- 视频滚出屏幕、页面切到后台或键盘焦点离开预览区域时暂停。
- 系统开启减少动态效果时，关闭悬停自动预览，仍可手动播放。
- JavaScript 不可用时，封面和 Demo 链接仍可使用。

## 发布

仓库可作为静态站点发布到 GitHub Pages，发布源使用 `main` 分支的根目录，无需构建命令。
站点地址：<https://wordhood.github.io/>。

发布设置参见 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
