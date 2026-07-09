# 競艇AI予想サイト 公開用フォルダ

このフォルダは、GitHub + Netlify で公開するための最小構成です。

## 中身

```text
netlify_site
├─ index.html
├─ netlify.toml
├─ README.md
└─ toda_20260709_demo
   └─ index.html
```

## 公開の考え方

- `index.html` がトップページ
- `toda_20260709_demo/index.html` が戸田の予想ページ
- Netlifyでは、この `netlify_site` フォルダを公開対象にする

## Netlify設定

Netlifyで設定する場合:

- Build command: 空欄でOK
- Publish directory: `.`  

GitHubリポジトリのルートにこのフォルダの中身を置く場合は、Publish directory は `.` でOKです。

もしリポジトリ直下に `netlify_site` フォルダごと置く場合は、Publish directory を `netlify_site` にしてください。

## 注意

この公開用フォルダには、Python取得スクリプト、マスターデータ、ログ、ローカルパスを含めない方針です。

自動取得・予想生成は今後、別途以下のどちらかで動かす想定です。

1. 自宅PCで実行してJSON/HTMLを更新
2. VPSで実行してNetlify側へ反映

