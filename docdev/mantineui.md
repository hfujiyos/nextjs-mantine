# Mantine UI

Mantine UI を Next.js で使用する手順

## インストール

- instal @manine/next

  ```sh
  yarn add @mantine/next

  npm install @mantine/next
  ```

## セッティング

- pages/\_document.tsx の作成
  Mantine UI を Next.js の SSR（ｻｰﾊﾞｰｻｲﾄﾞﾚﾝﾀﾞﾘﾝｸﾞ）に対応するためのｸﾗｽｺﾝﾎﾟｰﾈﾝﾄ

  ```tsx
  import { createGetInitialProps } from '@mantine/next'
  import Document, { Head, Html, Main, NextScript } from 'next/document'

  const getInitialProps = createGetInitialProps()

  export default class _Document extends Document {
    static getInitialProps = getInitialProps

    render() {
      return (
        <Html>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  ```

- pages/\_app.tsx の修正
  Mantine UI を利用するため MantineProvider で囲う

  ```tsx
  import { AppProps } from 'next/app'
  import Head from 'next/head'
  import { MantineProvider } from '@mantine/core'

  export default function App(props: AppProps) {
    const { Component, pageProps } = props

    return (
      <>
        <Head>
          <title>Page title</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>

        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </>
    )
  }
  ```

## 参考文献

- [Mantine UI ｜ Usage with Next.js](https://mantine.dev/theming/next/)
- [Mantine UI ｜ default theme](https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts)
- [Mantine UI ｜ Shared props](https://mantine.dev/pages/basics/#shared-props)
