# Mantine UI

## Props

### [Shared props](https://mantine.dev/pages/basics/#shared-props)

Maintine UI のいずれの UI でも使用できる「共通 Props」を確認します

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

## Theme

### [Theme object](https://mantine.dev/theming/extend-theme/)

Mantine UI では、デフォルト Theme が初期設定されています。

- theme 使用例

  ```ts
  import { Button, Code, Title, MantineProvider } from '@mantine/core'

  function Demo() {
    return (
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          fontFamily: 'Verdana, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
      >
        <Title order={3}>Greycliff CF or sans-serif title</Title>
        <Button>Verdana button</Button>
        <Code>Monaco, Courier Code</Code>
      </MantineProvider>
    )
  }
  ```

### [GitHub default theme](https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts)

デフォルト Theme でどんな設定がされているかは、GitHub のコードを見て確認します。

GitHub を確認すると、Props で radius に"sm"を渡す時、実際に何 px に対応しているか確認できます。"sm"を設定した場合は 4px であることも確認できます

- GitHub default theme ｜ radius

  ```ts
      radius: {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 32,
      },
  ```

## 参考文献

- [Mantine UI ｜ Usage with Next.js](https://mantine.dev/theming/next/)
- [Mantine UI ｜ Shared props](https://mantine.dev/pages/basics/#shared-props)
- [Mantine UI ｜ default theme](https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts)
