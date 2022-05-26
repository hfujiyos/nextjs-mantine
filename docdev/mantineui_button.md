# Mantine UI

## Button

### [Button usage](https://mantine.dev/core/button/)

- ボタン使用例

  ```ts
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
  ```ts
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

## 参考文献

- [Button usage](https://mantine.dev/core/button/)
- [Button props](https://mantine.dev/core/button/?t=props)
- [Button api](https://mantine.dev/core/button/?t=styles)
