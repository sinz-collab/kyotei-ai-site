# Toda Engine v4 COMPLETE UPLOAD

戸田AIマスター `Toda_AI_MASTER_v3_1_COMPLETE_ONE_FILE` の運用方針を、SINZ EDGEのサイト表示と朝予想生成へ接続する完成パッケージです。

## 構成
- `toda_engine_v4.js`: 事前確率、展開シナリオ、SAB、直前補正
- `toda_engine_adapter_v4.js`: 現行戸田JSONからv4予想を生成
- `toda_site_integration_v4.js`: 現行app.jsを変更せず戸田だけv4へ切替
- `index.html`: 上記3スクリプトを読み込む完成版
- `tools/generate_toda_predictions_v4.py`: 朝の公開JSONへ予想を書き込むPython版
- `tests/`: Node/Pythonテスト
- `UPLOAD_GUIDE.md`: スマホGitHubからのアップロード手順

## 固定原則
- オッズは確率に使わない
- 展示ST単独補正は禁止
- 基礎能力、当地、平均ST、コース適性、モーター、節間、潮風波、展示、オリ展示、実進入、展開連動を段階統合
- 補正後は1着・2着・3着率を各100%へ再正規化
- 戸田以外の会場ロジックは変更しない
