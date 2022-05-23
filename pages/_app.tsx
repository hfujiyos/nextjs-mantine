import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
// import { NotificationsProvider } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

/**
 * ｸｴﾘｸﾗｲｱﾝﾄｲﾝｽﾀﾝｽ生成
 * @return ReactQueryｸﾗｲｱﾝﾄ
 * @description retry: false｜APIﾌｪｯﾁの3回ﾌｪｯﾁﾘﾄﾗｲ機能をOFF
 * @description refetchOnWindowFocus: false｜ﾌﾞﾗｳｻﾞﾌｫｰｶｽ時の再APIﾌｪｯﾁ機能をOFF
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

/**
 * MyAppｺﾝﾎﾟｰﾈﾝﾄ
 * @param Component ｺﾝﾎﾟｰﾈﾝﾄ
 * @param pageProps ﾌﾟﾛｯﾌﾟｽ
 * @return JSXｺﾝﾎﾟｰﾈﾝﾄ（Query Client / ReactQueryDevtools / Mantine / Notifications）
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          // colorScheme: 'light',
          colorScheme: 'dark',
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        {/* <NotificationsProvider limit={2}> */}
        <Component {...pageProps} />
        {/* </NotificationsProvider> */}
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default MyApp
