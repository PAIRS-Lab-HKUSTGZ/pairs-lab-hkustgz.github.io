# PAIRS Lab 成员资料填写指引

这份资料将用于实验室网站的 People 页面和个人 subpage。请按照以下说明填写 `index.md`，准备好头像后，将整个文件夹压缩发回。

## 最终需要提交的文件

```text
your-english-name/
├── index.md
└── portrait.jpg
```

- 请把文件夹改为英文姓名的小写连字符形式，例如 `xin-ouyang`、`yinuo-chen`。
- `index.md` 和 `portrait.jpg` 必须放在同一个文件夹中。
- 不要修改这两个文件名。

## 编辑注意事项

1. 可使用 VS Code、Typora 或任意纯文本编辑器打开 `index.md`。
2. 只填写冒号后面的内容，不要修改字段名、缩进或两个 `---` 分隔线。
3. 请使用英文半角冒号 `:` 和英文空格，不要使用中文全角标点。
4. 不要使用 Tab 键缩进；列表项前保持两个空格和一个短横线。
5. 没有的信息可以留空。可选列表没有内容时保留 `[]` 即可。
6. 所有公开信息请自行确认准确性，链接应能正常打开。

## 字段填写说明

| 字段 | 是否必填 | 填写方法 |
|---|---|---|
| `title` | 是 | 英文姓名，例如 `Yinuo Chen`。 |
| `description` | 建议填写 | 一句英文页面简介，例如 `Yinuo Chen is a Research Assistant at PAIRS Lab, HKUST(GZ).` |
| `group` | 是 | 只能填写 `phd`、`mphil` 或 `ra`。 |
| `weight` | 不用修改 | 用于网站排序，保持 `100`。 |
| `role` | 是 | 填写 `PhD Student`、`MPhil Student` 或 `Research Assistant`。 |
| `position` | 是 | 通常与 `role` 相同。 |
| `affiliation` | 不用修改 | 保持 `PAIRS Lab, HKUST(GZ)`。 |
| `institution` | 建议填写 | 来自或目前就读的学校，例如 `SCUT`、`ZJU`、`HKU`。不要写 `from`，网站会自动添加。 |
| `period` | 建议填写 | 在组时间，例如 `2025–Present`。请使用连接号 `–`；如果已离组可写 `2023–2025`。 |
| `image` | 不用修改 | 保持 `portrait.jpg`。 |
| `links` | 否 | Email、个人网站、Google Scholar、GitHub、ORCID；没有时保持 `[]`。 |
| `research_interests` | 是 | 填写 2–4 个完整研究方向，显示在个人 subpage。 |
| `card_interests` | 是 | 从完整方向中选最有代表性的 1–2 个，显示在 People 页头像卡片。不得超过两个。 |
| 第二个 `---` 后的正文 | 是 | 2–4 句英文个人简介。 |

## 身份填写方式

请根据自己的身份选择一组，三项必须对应。

博士生：

```yaml
group: phd
role: PhD Student
position: PhD Student
```

硕士生：

```yaml
group: mphil
role: MPhil Student
position: MPhil Student
```

研究助理：

```yaml
group: ra
role: Research Assistant
position: Research Assistant
```

## 研究方向填写方式

`research_interests` 填写 2–4 个完整方向：

```yaml
research_interests:
  - title: Long-horizon robotic tasks
  - title: Robot navigation
  - title: World models
  - title: Multimodal large language models
```

`card_interests` 只选择其中 1–2 个简短、最有代表性的方向：

```yaml
card_interests:
  - Robot navigation
  - World models
```

不要在 `card_interests` 中填写三个或更多方向，否则 People 页卡片会过长。

## 个人链接填写方式

没有任何链接时保持：

```yaml
links: []
```

有链接时，将 `links: []` 替换为以下格式，并删除自己没有的项目：

```yaml
links:
  - label: Email
    url: mailto:name@hkust-gz.edu.cn
  - label: Personal site
    url: https://example.com/
  - label: Google Scholar
    url: https://scholar.google.com/...
  - label: GitHub
    url: https://github.com/...
  - label: ORCID
    url: https://orcid.org/...
```

注意：

- Email 地址前必须保留 `mailto:`。
- 网页链接必须包含 `https://`。
- `label` 只使用以上五种固定写法，不要自行改名。
- 没有的链接请直接删除，不要保留示例地址。

## 英文简介写法

正文写在第二个 `---` 的下一行。建议包含：

1. 目前的学校、学位或专业；
2. 在 PAIRS Lab 的身份；
3. 主要研究兴趣；
4. 如有需要，可补充教育经历或研究目标。

参考结构：

```text
Alex Zhang is currently pursuing his/her degree in [Programme] at [University], [City], [Country]. He/She is also serving as a [PhD Student / MPhil Student / Research Assistant] at PAIRS Lab, The Hong Kong University of Science and Technology (Guangzhou). His/Her research interests include [research interests].
```

请把所有方括号内容替换成自己的信息，并根据自己的代词调整 `he/she`、`his/her`。

## 头像要求

- 文件名必须是 `portrait.jpg`，不要使用 `.png`、`.jpeg` 或其他名称。
- 建议使用白色或浅色背景的正面照。
- 建议至少 800×800 px，文件小于 5 MB。
- 网站会自动裁剪成圆形，请保证面部居中，并在头顶、下巴和肩部周围保留适当空间。
- 不要使用模糊截图、多人合照或带明显滤镜的照片。

## 常见错误

- 删除了开头或结尾的 `---`。
- 把 `group` 写成 `PhD`、`Master` 等非规定值。
- `group` 与 `role` / `position` 不对应。
- 在 `institution` 中重复写 `from SCUT`；这里只需填写 `SCUT`。
- `card_interests` 超过两个。
- Email 缺少 `mailto:`，网页链接缺少 `https://`。
- 头像文件名不是精确的 `portrait.jpg`。
- 保留了 `Your Name`、示例链接或其他占位信息。

## 提交前检查

- [ ] 英文姓名、身份、学校和在组时间填写正确。
- [ ] `group` 与 `role` / `position` 完全对应。
- [ ] `research_interests` 有 2–4 项。
- [ ] `card_interests` 有 1–2 项，并且来自完整研究方向。
- [ ] 英文简介已替换为自己的内容。
- [ ] 所有链接真实有效，没有示例网址。
- [ ] 头像已命名为 `portrait.jpg`。
- [ ] `index.md` 与头像位于同一个文件夹。
- [ ] 整个文件夹已压缩为 ZIP。

请勿填写电话号码、证件信息、家庭住址等不适合公开在网站上的信息。
