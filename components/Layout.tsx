import { FC, ReactNode } from 'react'
import Head from 'next/head'

/**
 * Props型定義
 * @param title ﾍｯﾀﾞｰﾀｲﾄﾙ
 * @param children 内包ｺﾝﾎﾟｰﾈﾝﾄ
 */
type Props = {
  title: string
  children: ReactNode
}

/**
 * Layout関数ｺﾝﾎﾟｰﾈﾝﾄ（LV4-UIｺﾝﾎﾟｰﾈﾝﾄ）
 * @param children 内包する子ｺﾝﾎﾟｰﾈﾝﾄ
 * @param title ﾍｯﾀﾞｰﾀｲﾄﾙ
 * @return ﾚｲｱｳﾄﾋﾞｭｰ
 */
export const Layout: FC<Props> = ({ children, title = 'Mantine' }) => {
  return (
    <div className='flex min-h-screen'>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className='flex flex-1 flex-col justify-center p-4'>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
