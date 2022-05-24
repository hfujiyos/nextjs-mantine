## Next.js プロジェクト作成

### Node.js

- バージョン確認
  ```sh
  $ nodebrew -v
  nodebrew 1.2.0
  $ node -v
  v16.14.2
  $ yarn -v
  1.22.18
  ```

### Next.js

- create-next-app

  ```sh
  $ npx create-next-app nextjs-mantine --ts
  ```

### Prettier & Tailwind CSS

- プロジェクトディレクトリ移動

  ```sh
  $ cd nextjs-mantine
  ```

- .prettierrc

  ```sh
  $ touch .prettierrc
  ```

  ```js
  {
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "printWidth": 80
  }
  ```

- Tailwind CSS

  ```sh
  $ yarn add -D tailwindcss postcss autoprefixer
  $ yarn add -D prettier prettier-plugin-tailwindcss
  $ npx tailwindcss init -p
  ```

- tailwnd.config.js
  Tailwind CSS 3.0 を利用するため content の設定変更
  Mantine UI を共存させるため plugins の設定変更

  ```js
  module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: false,
    },
  }
  ```

- styles/globals.css

  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### ライブラリ追加

- Mantine UI / Supabase / React Query / day.js / yup / axios / zustand

  ```sh
  yarn add dayjs @mantine/core @mantine/hooks @mantine/form @mantine/dates @mantine/next tabler-icons-react
  yarn add @supabase/supabase-js react-query@4.0.0-beta.10 @heroicons/react date-fns yup axios zustand
  <!-- yarn add @mantine/notifications -->
  ```

- .env.local

  ```sh
  $ touch .env.local
  ```

  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  ```

- utils/supabase.ts

  ```sh
  $ mkdir utils
  $ touch utils/supabase.ts
  ```

  ```ts
  import { createClient } from '@supabase/supabase-js'

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
  ```

- 開発サーバー起動

  ```
  $ yarn dev
  ```

### GitHub

- initial commit
  ```
  $ git commit -m "initial commit"
  $ git remote add origin git@github.com:hfujiyos/nextjs-mantine.git
  $ git push -u origin main
  ```

## ディレクトリ構成

- components
  - Layout.tsx
- docdev
- pages
  - \_app.tsx
  - \_document.tsx
  - button.tsx
- styles
  - globals.css
- utils
  - supabase.ts
- .env.local
- .prettierrc
- package.json
- README.md
- tailwind.config.js

## 参考文献

- [Mantine UI ｜ Usage with Next.js](https://mantine.dev/theming/next/)
- [Mantine UI ｜ default theme](https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts)
- [Mantine UI ｜ Shared props](https://mantine.dev/pages/basics/#shared-props)
- [Tailwind CSS ｜ Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
