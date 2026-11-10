# 中文學習樂園：遊戲修改及交接指引

最後更新：2026-11-10

## 1. 正式網站及 Repository

- GitHub Repository：`HFBDGD/chinese-learning-games`
- 正式網站：`https://hfbdgd.github.io/chinese-learning-games/`
- 部署分支：`main`
- GitHub Pages 來源：`main` 分支、`/(root)`
- 主要網站程式：`index.html`
- 說明文件：`README.md`
- 靜態網站標記：`.nojekyll`

## 2. 現時架構（修改前必讀）

現時網站並不是四個獨立遊戲頁面。首頁、四款示範遊戲、兩兄弟進度、錯題簿及家長重設功能，全部放在同一個 `index.html`。

因此：

- 修改舊有獨立遊戲 Repository，不會自動更新中文學習樂園。
- 修改中文學習樂園內的遊戲，現階段需要更新 `HFBDGD/chinese-learning-games/index.html`。
- 不要假設 `cantonese-sentence-puzzle` 或其他舊 Repository 的改動會同步到主網站。
- 未經 Arnold 明確同意，不要刪除、搬走或覆蓋任何舊遊戲 Repository。

## 3. 四款遊戲的程式位置

| 遊戲 | 內部代號 | 題庫位置 | 可以安全修改的內容 |
|---|---|---|---|
| 聽音認字 | `listen` | `questions.listen` | 單字、詞語、選項、答案、圖示及粵語讀音文字 |
| 閱讀理解 | `read` | `questions.read` | 短文、問題、選項、答案及圖示 |
| 重組句子 | `sentence` | `questions.sentence` | 句子題目、選項、答案及圖示 |
| 寫字練習 | `write` | `questions.write` | 練習字、提示及圖示 |

首頁四個遊戲入口使用 `data-game="listen"`、`read`、`sentence`、`write`。題庫在 `const questions` 物件內。

## 4. 每條題目的規則

每條題目必須有永久而且不重複的 `id`。錯題簿使用這個 `id` 記錄錯題。

修改題目時：

- 已經發佈過的題目不要隨便改 `id`，否則現有錯題紀錄會失去對應。
- 新題目必須使用新的獨立 `id`。
- 一般選擇題必須有 `answers` 及 `correct`，而 `correct` 必須完全等於其中一個選項。
- 聽音題另有 `kind`，只可使用 `word` 或 `phrase`。
- 聽音題的 `speak` 是瀏覽器用粵語讀出的文字。
- 寫字題使用 `trace` 顯示要練習的字。
- 所有小朋友看見的文字使用繁體中文，不加入英文提示。

範例：

```js
{
  id: 'read-raincoat-01',
  icon: '🌧️',
  prompt: '今日落雨，小明出門前着上雨衣。小明點樣準備出門？',
  answers: ['帶帽', '着雨衣', '換鞋', '開窗'],
  correct: '着雨衣'
}
```

## 5. 不可以破壞的共用功能

個別遊戲修改時，除非 Arnold 明確要求重構，請保留以下共用部分：

- `STORAGE_KEY` 保持為 `chineseLearningGamesV2`。
- 哥哥使用 `elder`，細佬使用 `younger`。
- 兩人的進度及錯題必須分開。
- 四款遊戲的錯題必須分開。
- 答錯加入錯題簿；錯題重練答啱後移出錯題簿。
- 家長專區保持長按「家長」兩秒開啟，鍵盤 Enter 亦可開啟。
- 家長可以只清錯題、重設指定遊戲或清除指定小朋友全部進度。
- 所有紀錄只放在瀏覽器 `localStorage`，不要加入帳戶、後端、分析工具或 API。
- 不要加入 API Key、Token、小朋友姓名、學校資料或其他私人資料。

## 6. 個別遊戲 Chat 的工作範圍

每個 Chat 開始工作前，先確認今次屬於以下哪一種：

### A. 修改主網站內的示範遊戲

直接修改 `HFBDGD/chinese-learning-games/index.html` 內對應的 `questions.<代號>`，以及該遊戲真正需要的顯示邏輯。不要順手改其他遊戲。

### B. 修改舊有獨立遊戲

先找出該遊戲的正確 Repository，再修改它。完成後必須清楚寫明：

- 改了哪個 Repository。
- 正式網址是甚麼。
- 這次改動有沒有同步到中文學習樂園。
- 如果沒有同步，主網站還需要做甚麼。

### C. 將獨立遊戲接入主網站

不要只更改首頁按鈕。先決定整合方式：

1. 將完整遊戲程式搬入主 Repository；或
2. 由主網站連結到獨立 GitHub Pages 網址。

提出方案後由 Arnold 確認，才改動主網站架構。

## 7. 修改及發佈流程

1. 先讀取 `HFBDGD/chinese-learning-games` 的最新 `main`，不要使用過期副本。
2. 檢查 Repository 現有檔案，保留所有無關內容。
3. 只修改今次指定的遊戲或共用功能。
4. 執行 JavaScript 語法檢查及私隱掃描。
5. 實際測試哥哥及細佬的紀錄互不影響。
6. 故意答錯一題，確認它只進入正確小朋友、正確遊戲的錯題簿。
7. 測試「只做錯題」及答啱後移除錯題。
8. 測試家長專區相應的重設功能。
9. 用平板大小畫面檢查版面，確保大圖示及按鈕容易按。
10. 將修改 commit 到 `main`，不要刪除或覆蓋無關檔案。
11. 等 GitHub Pages 完成部署，再開啟正式網站驗證。

## 8. 每次完成後的交接格式

完成修改的 Chat 必須留下以下資料：

```text
遊戲：
Repository：
修改檔案：
Commit：
正式網址：

完成改動：
- 
- 

保留不變：
- 哥哥／細佬獨立紀錄
- 分開錯題簿
- 家長重設功能

已測試：
- 正常答題
- 錯題加入及移除
- 兩個小朋友資料分開
- 家長重設
- 平板畫面

仍未完成／需要 Arnold 決定：
- 
```

## 9. 可以直接交給個別遊戲 Chat 的開場指示

```text
請先閱讀 `HFBDGD/chinese-learning-games` Repository 內的
`CHINESE-GAMES-HANDOVER.md`，再處理今次遊戲修改。

今次只修改：【填寫遊戲名稱】。
需要調整：【填寫問題及要求】。

先確認這是修改主網站內置示範遊戲，還是另一個獨立遊戲 Repository。
不要刪除或覆蓋無關工作；不要破壞哥哥／細佬獨立進度、分開錯題簿及家長重設功能。
完成後請 commit、驗證正式網站，並按照交接格式留下 Repository、檔案、Commit、網址及測試結果。
```

## 10. 現時已知的獨立遊戲

- `HFBDGD/cantonese-sentence-puzzle`：原有《句子小探險》完整版本。
- `HFBDGD/chinese-learning-games`：目前的中文學習樂園主網站及四款內置示範遊戲。

兩者是不同 Repository。除非任務明確要求同步，修改其中一個不代表另一個已更新。
75:- 不要加入 API Key、Token、小朋友姓名、學校資料或其他私人資料。
