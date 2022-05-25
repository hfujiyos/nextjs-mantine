# Mantine UI

## [Mantine UI](https://mantine.dev/pages/basics/#shared-props)

### Shared props

Maintine UI いずれの UI でも使用できる共通 Props を確認します

- `className` - ルート要素にクラスを追加します。
- `style` - ルート要素にスタイルを追加します。
- Margin props:
  - `m` - `margin`ルート要素にプロパティを設定します。
  - `my` - ルート要素のセット`margin-top`と`margin-bottom`プロパティ。
  - `mx` - ルート要素のセット`margin-right`と`margin-left`プロパティ。
  - `mt` - `margin-top`ルート要素にプロパティを設定します。
  - `mb` - `margin-bottom`ルート要素にプロパティを設定します。
  - `ml` - `margin-left`ルート要素にプロパティを設定します。
  - `mr` - `margin-right`ルート要素にプロパティを設定します。
- Padding props:
  - `p` - `padding`ルート要素にプロパティを設定します
  - `py` - ルート要素のセット`padding-top`と`padding-bottom`プロパティ
  - `px` - ルート要素のセット`padding-right`と`padding-left`プロパティ
  - `pt` - `padding-top`ルート要素にプロパティを設定します
  - `pb` - `padding-bottom`ルート要素にプロパティを設定します
  - `pl` - `padding-left`ルート要素にプロパティを設定します
  - `pr` - `padding-right`ルート要素にプロパティを設定します

## Button

### [Button usage](https://mantine.dev/core/button/)

- ボタン使用例

  ```js
  import { Button } from '@mantine/core'

  function Demo() {
    return (
      <Button className='my-button' style={{ backgroundColor: '#fff' }} mx={20}>
        My button
      </Button>
    )
  }
  ```

- Props or Styles API
  Props あるいは CSS でスタイリングする。下記はいずれも 16px のマージントップが設定される
  ```js
  //Props mt
  <Button mt={16}>Click</Button>
  //Props mt & Theme md
  <Button mt="md">Click</Button>
  //Styles API classname & Tailwind CSS
  <Button classname="mt-4"></Button>
  ```

### [Button props](https://mantine.dev/core/button/?t=props)

ボタン Props の使用可能データ型

| Name（プロップス名） | Type（使用可能データ型）                  | 説明                               |
| -------------------- | ----------------------------------------- | ---------------------------------- |
| children             | ReactNode                                 | ボタンラベル                       |
| color                | MantineColor                              | テーマのボタンの色                 |
| compact              | boolean                                   | 垂直方向と水平方向の間隔を狭めます |
| radius               | number / "xs" / "sm" / "md" / "lg" / "xl" | 境界線のサイズ                     |

### [Button api](https://mantine.dev/core/button/?t=styles)

### [GitHub default theme](https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts)

UI フレームワークの中でどんな処理をしているかは、GitHub のコードを見て確認します。

GitHub を確認すると、Props で radius に"sm"を渡す時、実際に何 px に対応しているか確認できます。"sm"を設定した場合は 4px であることを確認できます

- GitHub default theme | radius

  ```js
      radius: {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 32,
      },
  ```

## Group

### [Group usage](https://mantine.dev/core/group/)

- props:my 横並び → md マージン 16px

  ```js
  <Group my='md'></Group>
  ```

- props:my 横並び → md マージン 16px
- props:position 横整列 → center センタリング

  ```js
  <Group my='md' position='center'></Group>
  ```

- props:my 横並び → md マージン 16px
- props:position 横整列 → apart 等間隔

  ```js
  <Group my='md' position='apart'></Group>
  ```

- props:my 横並び → md マージン 16px
- props:grow 同比率引き伸ばし

  ```js
  <Group my='md' grow></Group>
  ```

- props:direction グルーピング方向 → 縦方向に変換
- props:my 横並び → md マージン 16px
- props:position 横整列 → right 右寄せ

  ```js
  <Group direction='column' my='md' position='right'>
  ```

- props:my 横並び → md マージン 16px
- props:align 縦整列 → start 上寄せ

  ```js
  <Group my='md' align='start'>
  ```

## Center

### [Center usage](https://mantine.dev/core/center/)

- 中央寄せ

  ```js
  <Center>
    <Button mt='md'>Click</Button>
  </Center>
  ```

## 参考文献

- [Mantine UI ｜ Usage with Next.js](https://mantine.dev/theming/next/)
- [Mantine UI ｜ default theme](https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts)
- [Mantine UI ｜ Shared props](https://mantine.dev/pages/basics/#shared-props)
