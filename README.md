## React.js プロジェクト作成

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

ターミナルから yarn で Next.js プロジェクトを作成
この時、nextjs-mantine プロジェクトフォルダが作成されて環境構築される

- create-next-app

  ```sh
  $ npx create-next-app nextjs-mantine --ts
  ```

### Prettier & Tailwind CSS

プロジェクトフォルダを VSCode で開く

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
  $ git@github.com:hfujiyos/nextjs-mantine.git
  $ git push -u origin main
  ```

## ディレクトリ構成

- docdev
- styles
  - globals.css
- utils
  - supabase.ts
- .env.local
- .prettierrc
- package.json
- README.md
- tailwind.config.js
