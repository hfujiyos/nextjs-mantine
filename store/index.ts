import create from 'zustand'  //React向け軽量ｽﾃｰﾄ管理ﾗｲﾌﾞﾗﾘ（Contextを使用しない）
import { Session } from '@supabase/supabase-js'

/**
 * State型定義
 * @param session ｾｯｼｮﾝ｜Session型またはnull型
 * @param setSession ｾｯｼｮﾝ設定関数｜Session型の更新関数（ﾍﾟｲﾛｰﾄﾞをSession型またはnull型として、返り値void）
 */
type State = {
  session: Session | null
  setSession: (payload: Session | null) => void
}

/**
 * useStore関数
 * @param session ｾｯｼｮﾝ｜初期値をnull
 * @param setSession ｾｯｼｮﾝ設定関数｜更新ﾛｼﾞｯｸ（受け取ったﾍﾟｲﾛｰﾄﾞをsessionに格納する）
 * @return useStore関数
 */
const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
}))
export default useStore
