## Center

### [Center usage](https://mantine.dev/core/center/)

- 中央寄せ

  ```ts
  <Center>
    <Button mt='md'>Click</Button>
  </Center>
  ```

## Group

### [Group usage](https://mantine.dev/core/group/)

- props:my 横並び → md マージン 16px

  ```ts
  <Group my='md'>
    <Button color='indigo'>1</Button>
    <Button color='teal'>2</Button>
    <Button color='orange'>3</Button>
  </Group>
  ```

- props:my 横並び → md マージン 16px
- props:position 横整列 → center センタリング

  ```ts
  <Group my='md' position='center'></Group>
  ```

- props:my 横並び → md マージン 16px
- props:position 横整列 → apart 等間隔

  ```ts
  <Group my='md' position='apart'></Group>
  ```

- props:my 横並び → md マージン 16px
- props:grow 同比率引き伸ばし

  ```ts
  <Group my='md' grow></Group>
  ```

- props:direction グルーピング方向 → 縦方向に変換
- props:my 横並び → md マージン 16px
- props:position 横整列 → right 右寄せ

  ```ts
  <Group direction='column' my='md' position='right'>
  ```

- props:my 横並び → md マージン 16px
- props:align 縦整列 → start 上寄せ

  ```ts
  <Group my='md' align='start'>
  ```

## 参考文献

- [Center usage](https://mantine.dev/core/center/)
- [Group usage](https://mantine.dev/core/group/)
