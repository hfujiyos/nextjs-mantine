import type { NextPage } from 'next'
import { useEffect } from 'react'
import { supabase } from '../utils/supabase'
import useStore from '../store'
import { Auth } from '../components/Auth'
import { DashBoard } from '../components/DashBoard'

/**
 * Home画面ｺﾝﾎﾟｰﾈﾝﾄ
 * @returns sessionがあればDashBoardｺﾝﾎﾟｰﾈﾝﾄ、sessionがなければAuthｺﾝﾎﾟｰﾈﾝﾄ
 */
const Home: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)

  /**
   * ｷｬｯｼｭ最新化関数
   * @description ﾏｳﾝﾄ時/ﾛｸﾞｲﾝ時/ﾛｸﾞｱｳﾄ時に、supabaseｾｯｼｮﾝを取得してzustandｾｯｼｮﾝに格納
   */
  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])

  // ﾋﾞｭｰ分岐
  return <>{session ? <DashBoard /> : <Auth />}</>
}

export default Home