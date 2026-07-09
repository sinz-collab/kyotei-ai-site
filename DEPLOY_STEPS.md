# GitHub + Netlify 公開手順

## 1. GitHubで新しいリポジトリを作る

1. GitHubにログイン
2. 右上の `+` から `New repository`
3. Repository name を入力
   - 例: `kyotei-ai-site`
4. Public / Private はどちらでもよい
   - 最初は Private 推奨
5. `Create repository`

## 2. ファイルをアップロードする

GitHub画面でアップロードする場合:

1. 作成したリポジトリを開く
2. `uploading an existing file` を選択
3. この `netlify_site` フォルダの中身をアップロード

アップロードするもの:

```text
index.html
netlify.toml
README.md
DEPLOY_STEPS.md
toda_20260709_demo/index.html
```

注意:

`netlify_site` フォルダ自体ではなく、中身をアップロードするのが一番簡単です。

## 3. Netlifyで公開する

1. Netlifyにログイン
2. `Add new site`
3. `Import an existing project`
4. GitHubを選択
5. 作成したリポジトリを選択
6. Build settings を確認

設定:

```text
Build command: 空欄
Publish directory: .
```

7. `Deploy site`

## 4. 公開URLを確認

デプロイ完了後、NetlifyがURLを発行する。

例:

```text
https://xxxxxx.netlify.app/
```

このURLでトップページが表示されれば成功。

## 5. 更新方法

サイトを更新したい場合:

1. ローカルでHTMLを更新
2. GitHubへ再アップロード
3. Netlifyが自動で再公開

## 6. 今後の自動化

将来的には以下の形にする。

```text
Python取得・予想
↓
HTML / JSON生成
↓
GitHubへ反映
↓
Netlifyが自動公開
```

まずは手動アップロードで公開確認し、そのあと自動更新へ進める。

