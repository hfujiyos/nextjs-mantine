# Icon

## Icon

### heroicon

- https://heroicons.com/
- サイトにあるアイコンの svg/jsx のコードをコピーして svg タグ利用できる
  ```ts
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    stroke-width='2'
  >
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
    />
  </svg>
  ```

### tabler-icons-react

- https://tabler-icons-react.vercel.app/
- サイトにあるアイコンの react のコードをコピーして import 利用できる

  ```ts
  import { Anchor } from 'tabler-icons-react'

  export default function Example() {
    return <Anchor size={30} strokeWidth={1.5} color={'#57862d'} />
  }
  ```

## 参考文献

- [heroicon](https://heroicons.com/)
- [tabler-icons-react](https://tabler-icons-react.vercel.app/)
