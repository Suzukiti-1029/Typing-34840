# アプリ名

タイピングゲーム

# 概要

タイピングをゲーム感覚で上達することができます！

# 本番環境

https://typing-34840.herokuapp.com/

### ログイン情報(テスト用)

(まだユーザー管理機能が実装できていないので順次載せていきます)

# 制作背景(意図)

タイピングを上達させたい人が、タイピング練習を継続できない点が重要な課題であると考えました。タイピングは、飽きずに継続してやることが上達への道であるので、ネット上にあるタイピングゲームの一角として実装することにしました。

# DEMO

### トップページ

ゲーム画面でスペースキーかエスケープキーを押すと残り時間が３になってゲーム開始が3秒後にスタートします。スタートしたら上の英単語をタイピングしenterかreturnを押して、スコアを稼ぎます。日本語も表示されるので、英単語の勉強にもなると思います。60秒後に、ゲーム終了し、リザルト画面に切り替わります。ここでスペースキーかエスケープキーを押すと残り時間が３になって再度ゲームをすることができます。

# 工夫したポイント

実装にあたって工夫した点は、スコア機能です。間違えてenterかreturnを押すと-20されるようにし、正解したら打った文字の長さ×10の点数が入るようにしました。
これによってゲーム感覚で続けれるようにしました。

# 使用技術(開発環境)

## バックエンド
Ruby, Ruby on Rails

## フロントエンド
HTML, SCSS, JavaScript, Ajax

## データベース
ActiveHash

## Webサーバー(本番環境)
Heroku

## ソース管理
GitHub, GitHub Desktop

## エディタ
Visual Studio Code

# 課題や今後実装したい機能
現状、スコアの保存をすることができません。継続してやるためにはどれくらい上達したかを見れることは重要だと思います。今後は、ユーザー管理機能とともにスコア保存機能も追加実装したいと考えています。

# DB設計

## usersテーブル

| Column             | Type    | Option                   |
| ------------------ | ------- | ------------------------ |
| name               | string  | null: false              |
| email              | string  | null: false, unique:true |
| encrypted_password | string  | null: false              |

### Association
has_many: histories

## historiesテーブル

| Column | Type       | Option            |
| -----  | ---------- | ----------------- |
| score  | integer    | null: false       |
| user   | references | foreign_key: true |

### Association
belongs_to: user

## ActiveHash

- english.rb

問題の英単語を格納

- japanese.rb

問題の英単語の和訳を格納
