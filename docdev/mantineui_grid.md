## Grid

### [Grid usage](https://mantine.dev/core/grid/)

- 1row = 12grid = 12span ｜ Bootstrap のように１行を１２グリッドで構成

  ```ts
  <Grid my='md'>
    <Grid.Col span={4}>1</Grid.Col>
    <Grid.Col span={8}>2</Grid.Col>
  </Grid>
  ```

- justify ｜ﾌﾚｯｸｽ方向(横)
- align ｜反ﾌﾚｯｸｽ方向(縦)

  ```ts
  <Grid my='md' justify='center' align='flex-end'>
    <Grid.Col span={3}>1</Grid.Col>
    <Grid.Col span={3}>2</Grid.Col>
  </Grid>
  ```

- grow ｜同比率引き伸ばし（12span なくとも引き伸ばし）

  ```ts
  <Grid my='md' grow>
    <Grid.Col span={3}>1</Grid.Col>
    <Grid.Col span={3}>2</Grid.Col>
  </Grid>
  ```

- offset ｜指定 span 空白差込

  ```ts
  <Grid my='md' grow>
    <Grid.Col span={3}>1</Grid.Col>
    <Grid.Col span={3}>2</Grid.Col>
    <Grid.Col span={3} offset={3}>
      4
    </Grid.Col>
  </Grid>
  ```

### [Responsive styles](https://mantine.dev/theming/responsive/)

レスポンシブデザインとなるブレークポイントの Props を確認します

| Breakpoint | Viewport width |
| ---------- | -------------- |
| xs         | 576px          |
| sm         | 768px          |
| md         | 992px          |
| lg         | 1200px         |
| xl         | 1400px         |

- breakpoint
  ```ts
  <Grid my='md'>
    <Grid.Col
      className='bg-blue-500 text-center font-bold text-gray-100'
      md={6} //md=992px超であればspan{6}を設定（暗黙的に992px以下でspan{12}となる）
      lg={3} //lg=1200px超であればspan{3}を設定
    >
      14
    </Grid.Col>
  </Grid>
  ```

## 参考文献

- [Grid usage](https://mantine.dev/core/grid/)
- [Responsive styles](https://mantine.dev/theming/responsive/)
