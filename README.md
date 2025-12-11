# ランディングページ テンプレート

「かながわみんなのSDGs」サイトをベースにしたランディングページテンプレートです。
SCSS化＋HTMLパーツ化により、新規サイトへの展開が容易になっています。

---

## ディレクトリ構成

```
template/
├── index.html              # サンプルHTMLファイル
├── README.md               # このファイル
├── css/                    # コンパイル済みCSS（出力先）
├── scss/                   # SCSSソースファイル
│   ├── style.scss          # メインSCSSファイル（これをコンパイル）
│   ├── _variables.scss     # 変数設定（カラー、フォント等）
│   ├── _mixins.scss        # ミックスイン・関数
│   ├── base/               # ベーススタイル
│   │   ├── _reset.scss
│   │   └── _base.scss
│   ├── layout/             # レイアウト
│   │   ├── _header.scss
│   │   └── _footer.scss
│   ├── components/         # コンポーネント
│   │   ├── _hero.scss
│   │   ├── _section.scss
│   │   ├── _accordion.scss
│   │   ├── _buttons.scss
│   │   ├── _table.scss
│   │   └── _cards.scss
│   └── utilities/          # ユーティリティ
│       ├── _animations.scss
│       └── _helpers.scss
├── html-parts/             # HTMLパーツファイル
│   ├── _head.html          # <head>内の設定（CDN読み込み含む）
│   ├── _header.html        # ヘッダー・ナビ
│   ├── _hero.html          # メインビジュアル
│   ├── _section-basic.html # 基本セクション
│   ├── _section-cards.html # カードセクション
│   ├── _section-accordion.html # アコーディオン
│   ├── _section-detail.html    # 詳細セクション
│   ├── _section-links.html     # リンクセクション
│   ├── _footer.html        # フッター
│   └── _scripts.html       # スクリプト読み込み
├── js/                     # カスタムJavaScript
│   ├── common.js           # 共通スクリプト
│   └── script.js           # メインスクリプト
└── images/                 # 画像（要配置）
```

> **Note:** 外部ライブラリ（jQuery、Swiper、Slick等）は全てCDNから読み込むため、
> `slick/` フォルダやライブラリファイルのコピーは不要です。

---

## 使い方

### 1. 新規プロジェクトの作成

1. `template` フォルダを丸ごとコピー
2. 新しいプロジェクト名にリネーム
3. `images/` フォルダに画像を配置（ロゴ、メインビジュアル等）

> **Note:** jQuery、Swiper、Slick等の外部ライブラリは全てCDNから読み込むため、
> ローカルへのコピーは不要です。

### 2. SCSS変数のカスタマイズ

`scss/_variables.scss` を編集して、サイトのカラーやフォントを変更します。

```scss
// カラー設定の例
$color-primary: #00347c;          // プライマリカラー
$color-accent: #ed6a02;           // アクセントカラー
$color-bg-main: #fefaef;          // 背景色

// フォント設定の例
$font-family-base: 'Noto Sans JP', sans-serif;
$font-family-heading: 'Zen Maru Gothic', sans-serif;
```

### 3. SCSSのコンパイル

#### 方法A: Dart Sassを使用（推奨）

```bash
# Dart Sassのインストール（初回のみ）
npm install -g sass

# コンパイル
sass scss/style.scss css/style.css

# 監視モード（変更を自動検出）
sass --watch scss/style.scss:css/style.css
```

#### 方法B: VSCode拡張を使用

1. 「Live Sass Compiler」拡張をインストール
2. VSCode下部の「Watch Sass」をクリック

### 4. HTMLの編集

`html-parts/` 内のパーツを参考に、`index.html` を編集します。

---

## HTMLパーツの説明

| ファイル | 用途 |
|---------|------|
| `_head.html` | metaタグ、CSS読み込み、Analytics設定 |
| `_header.html` | ロゴ、ナビゲーション、ハンバーガーメニュー |
| `_hero.html` | メインビジュアル（3パターン対応） |
| `_section-basic.html` | タイトル＋テキスト＋ボタンの基本セクション |
| `_section-cards.html` | 2カラムカード表示 |
| `_section-accordion.html` | アコーディオン＋テーブル |
| `_section-detail.html` | ボーダーボックス内詳細表示 |
| `_section-links.html` | PDF/外部リンクボタン群 |
| `_footer.html` | フッターロゴ、コピーライト |
| `_scripts.html` | JavaScript読み込み |

---

## SCSSファイルの説明

### _variables.scss（カスタマイズ必須）

| 変数カテゴリ | 主な変数 |
|-------------|---------|
| カラー | `$color-primary`, `$color-accent`, `$color-bg-main` |
| フォント | `$font-family-base`, `$font-size-md` |
| レイアウト | `$content-width-md`, `$header-height-pc` |
| ブレークポイント | `$breakpoint-sm: 750px` |
| アニメーション | `$transition-base`, `$easing-default` |

### _mixins.scss

よく使うスタイルパターンをミックスインとして定義しています。

```scss
// 使用例
.my-button {
  @include button-primary;   // プライマリボタンスタイル
}

.my-section {
  @include pc {              // PC用スタイル
    width: 1000px;
  }
  @include sp {              // スマホ用スタイル
    width: 100%;
  }
}
```

---

## 新規サイト作成チェックリスト

### 必須変更項目

- [ ] サイトタイトル（`<title>`, OGP）
- [ ] サイト説明文（`<meta name="description">`）
- [ ] OGP画像 (`images/icons/og.png`)
- [ ] ファビコン (`images/icons/favicon.png`)
- [ ] Google Analytics ID
- [ ] ロゴ画像
- [ ] カラー設定（`_variables.scss`）

### 推奨変更項目

- [ ] フォント設定
- [ ] ナビゲーション項目
- [ ] メインビジュアル画像
- [ ] セクション構成

---

## コンポーネント使用例

### 基本ボタン

```html
<div class="about5 about5-1">
  <a href="https://example.com" target="_blank">
    <span>ボタンテキスト</span>
  </a>
</div>
```

### CTAボタン

```html
<div class="vote-cta">
  <a href="https://example.com" target="_blank">
    <span class="vote-cta-text">CTAボタン</span>
  </a>
</div>
```

### アコーディオン

```html
<div class="accordion-block">
  <div class="accordion-title">タイトル</div>
  <div class="accordion-content">
    <p>コンテンツ</p>
  </div>
</div>
```

### マーカーテキスト

```html
<span class="blue-marker">青マーカー</span>
<span class="pink-marker">ピンク強調</span>
```

---

## 対応ブラウザ

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- iOS Safari
- Android Chrome

---

## 依存ライブラリ（CDN読み込み）

全てのライブラリはCDNから読み込まれるため、ローカルへのインストールは不要です。

| ライブラリ | バージョン | CDN | 用途 |
|-----------|----------|-----|------|
| jQuery | 3.7.1 | Google CDN | DOM操作 |
| Swiper | 11.x | jsDelivr | メインスライダー |
| Slick Carousel | 1.9.0 | cdnjs | カルーセル |
| jQuery.BgSwitcher | 0.4.3 | cdnjs | 背景画像切り替え |
| simplyScroll | 2.1.1 | cdnjs | ループスクロール |
| Google Fonts | - | Google | Webフォント |
| YakuHanJP | 3.4.1 | jsDelivr | 約物半角化 |

### CDN URL一覧

```html
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<!-- Swiper -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Slick Carousel -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>

<!-- jQuery Plugins -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.BgSwitcher/0.4.3/jquery.bgswitcher.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-simplyscroll/2.1.1/jquery.simplyscroll.min.js"></script>
```

---

## トラブルシューティング

### SCSSがコンパイルできない

Dart Sassを使用してください。LibSassは非推奨です。

```bash
npm install -g sass
```

### モバイルでハンバーガーメニューが動かない

`js/script.js` に以下のコードが含まれているか確認してください：

```javascript
$('.openbtn').on('click', function(){
  $(this).toggleClass('active');
  $('#g-nav').toggleClass('panelactive');
});
```

### アニメーションが動かない

`js/common.js` の `fadeAnime()` 関数が正しく読み込まれているか確認してください。

---

## Git運用

### リポジトリ情報

- **リポジトリ**: https://github.com/h-nada/dms
- **SSHホスト**: `github.com-nada`（`~/.ssh/config` で設定済み）
- **SSHキー**: `~/.ssh/id_ed25519_nada`

### 基本操作

```bash
# 変更状況の確認
git status

# 変更をステージング
git add -A

# コミット
git commit -m "変更内容の説明"

# プッシュ
git push origin main

# リモートの変更を取得
git pull origin main
```

### 注意事項

- このリポジトリは `h-nada` アカウント専用のSSH設定を使用しています
- リモートURLは `git@github.com-nada:h-nada/dms.git` 形式です
- `.gitignore` により `.DS_Store` 等は自動的に除外されます

---

## ライセンス

このテンプレートは社内利用を目的としています。

---

## 更新履歴

| 日付 | バージョン | 内容 |
|------|----------|------|
| 2025-12-11 | 1.5.0 | お問い合わせセクション・フッター・カラー設定改善 |
| 2025-12-11 | 1.4.0 | 固定人物画像のスクロール連動表示・加入者の声セクション改善 |
| 2025-12-11 | 1.3.0 | 活動内容セクションのMasonryレイアウト化・デザイン改善 |
| 2025-12-11 | 1.2.0 | 各セクションのレイアウト調整・デザイン改善 |
| 2025-12-10 | 1.1.0 | ヒーローセクションのレイアウト調整 |
| 2025-12-10 | 1.0.0 | 初版作成 |

### v1.5.0 変更内容（2025-12-11）

**サイト全体のカラー変更**

- プライマリカラーを水色（`#4AADD3`）→ 紺色（`#00367f`）に変更
- `$color-primary`、`$color-secondary`、`$color-text-link` を一括変更

**お問い合わせセクション（`.contact-section`）**

- `.contact-section__header` の `margin-bottom` を `3rem` → `5rem` に変更
- `.contact-wards` の `margin-bottom` を `4rem` → `5rem` に変更
- `.contact-wards__qr` の `margin-bottom` を `0.5rem` → `0.6rem` に変更
- `.contact-wards__dept` の `margin-bottom` を `0.3rem` → `0` に変更
- 各区のQRコード画像を `01_kawasaki_qr.png` 〜 `07_asao_qr.png` に差し替え

**総合お問い合わせ（`.contact-main`）のデザイン刷新**

- 左右2カラムレイアウトに変更（左: 紺色背景、右: 白背景）
- 左側に「川崎市全町内会連合会のHPから検索できます！」のテキスト
- 黄色（`#FFD54F`）で強調表示
- URLリンクを追加（`http://map.kawa-zencho.com`）
- 右側にQRコード、組織名、電話番号、注釈を配置
- QRコード画像を `08_rengo.png` に差し替え
- 枠線・背景色を紺色（`#00367f`）に統一

**フッター（`.footer__w`）**

- `.footer_logo img` に白背景・パディング・角丸を追加（ロゴ周囲のみ白）
- ロゴ画像を `logo_dummy.png` に差し替え
- ロゴサイズを60%に縮小（PC: 168px、SP: 36%）
- `.footer_logo` の padding を `70px 0 60px` に変更
- `.footer__w p` の padding を `0 0 30px 0` に変更

**ページトップボタン（`.btn_pagetop`）**

- SVGアイコン `pagetop.svg` を新規作成（紺色線・白塗り）
- サイズを50%に縮小（PC: 50px、SP: 6vw）
- 固定人物画像と同じタイミングでフェードイン・アウト表示

---

### v1.4.0 変更内容（2025-12-11）

**固定人物画像のスクロール連動表示（`.fixed-persons`）**

- 新規SCSSコンポーネント `_fixed-persons.scss` を追加
- 活動内容セクション到達時にフェードインで表示
- `position: fixed` で画面左右に固定表示
- 上スクロールでトリガー位置を過ぎるとフェードアウト
- モバイル（750px以下）では非表示
- `pointer-events: none` でコンテンツ操作を妨げない

**加入者の声セクション（`.voice-item`）の改善**

- 質問者画像（`.voice-item__person-left`）を削除
- 見出し1文字目（`.q-mark`）のフォントサイズを拡大（120% → 180%）
- 回答者画像を `kaito01.png` 〜 `kaito03.png` に差し替え
- 回答者画像を円形表示（`border-radius: 50%`）に変更
- 円サイズ: PC 130px / SP 100px
- `object-fit: contain` で画像全体を円内に表示
- 吹き出し幅を調整（`max-width: calc(100% - 160px)`）

**CTAメッセージセクション（`.cta-message`）**

- 「町」の強調タグ（`<strong>`）を削除

---

### v1.3.0 変更内容（2025-12-11）

**セクションヘッダーのデザイン変更（`.activity-section__header`, `.voice-section__header`）**

- Check!バッジの背景色を黒 → 赤（`#E53935`）に変更
- Check!バッジのフォントサイズを拡大（`$font-size-sm` → `$font-size-lg`）
- h2タイトルのフォントサイズを拡大（`$font-size-2xl` → `$font-size-4xl`）
- 下線の太さを `3px` → `4px` に変更

**活動内容リード文（`.activity-section__lead`）**

- フォントサイズを拡大（`$font-size-xl` → `$font-size-2xl`）
- margin-bottomを `4rem` → `8rem` に拡大

**活動内容セクションのMasonryレイアウト化（`.activity-grid`）**

- 従来の `.activity-cards` を `.activity-grid` に変更
- CSS Gridによる2列×4行の明示的レイアウトを実装
- カード3（災害に強いまちづくり）とカード6（補足テキスト）を2行分の高さに設定
- PCでは下辺が揃うレイアウト、SPでは順番通りの1カラム表示

**活動カードのデザイン調整**

- イラスト画像を `katsudo01.png` 〜 `katsudo05.png` に変更
- イラストサイズを `70px` → `120px` に拡大
- カード内の余白を調整（gap: `1rem` → `2rem`、padding: `1.5rem 2rem`）
- イラストを縦中央配置（`align-items: center`）

**補足テキストカード（`.activity-grid__item--summary`）**

- 破線枠のオレンジボックスとしてデザイン
- テキストの改行を調整してコンパクト化
- 外側のpaddingを削除して他のカードと同じサイズ感に統一

---

### v1.2.0 変更内容（2025-12-11）

**ヒーローセクション（`.hero`）**

- 背景の高さを `600px` → `620px` に変更（+20px）

**加入者の声セクション（`.voice-section-wrapper`）**

- 波線とタイトルの間隔を拡大
  - PC: 上部パディング `4rem` → `12rem`
  - SP: 上部パディング `3rem` → `8rem`

**CTAメッセージセクション（`.cta-message`）**

- 波線との間隔を拡大
  - PC: 下部パディング `6rem` → `12rem`
  - SP: 下部パディング `4rem` → `8rem`

**町内会・自治会とはセクション（`.about-section`）のデザイン刷新**

- 背景画像を `machi_bg.png` に変更（街並みイラスト）
- 枠線を削除
- 内部に白い半透明エリア（`rgba(255,255,255,0.7)`）を追加
- 外枠と内部枠のマージン: PC `40px` / SP `20px`
- 内部枠のpadding: `40px`
- 見出しアイコンを絵文字から `yubi_icon.png` 画像に変更
- タイトルをセンター配置、フォントサイズ拡大（PC: `4.5rem`）
- 本文フォントサイズを `$font-size-2xl` に拡大

**HTML変更**

- 加入者の声セクション内の不要なブロックを削除
  - 補足テキスト（「このようにさまざまな方々が...」）
  - QRコード案内（「町内会・自治会特設ページ」ボタン）

---

### v1.1.0 変更内容（2025-12-10）

**ヒーローセクション（`.hero`）のレイアウト修正**

- 背景の高さを `550px` → `600px` に変更
- タイトル（`.hero__title`）のフォントサイズを拡大
  - PC: `5rem` → `6rem`
  - SP: `2.8rem` → `3.2rem`
- キャッチコピー（`.hero__catchcopy`）のフォントサイズを拡大
  - PC: `$font-size-lg` → `$font-size-xl`
  - SP: `$font-size-sm` → `$font-size-md`
- 人物画像（`.hero__persons`）の配置を改善
  - `position: absolute` で背景の下辺に固定
  - `bottom: -10px` で下のセクションとフチが自然に同化
  - `z-index: 10` で前面に表示
  - 人物画像の高さ: PC `520px` / SP `260px`
