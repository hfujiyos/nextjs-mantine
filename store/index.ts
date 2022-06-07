import create from 'zustand'
import { Session } from '@supabase/supabase-js'

/**
 * State型定義
 * @param session ｾｯｼｮﾝ
 * @param setSession ｾｯｼｮﾝ設定関数
 */
type State = {
  session: Session | null
  setSession: (payload: Session | null) => void
}

/**
 * useStore関数
 * @param session ｾｯｼｮﾝ
 * @param setSession ｾｯｼｮﾝ設定関数
 * @return useStore関数
 */
const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
}))
export default useStore
