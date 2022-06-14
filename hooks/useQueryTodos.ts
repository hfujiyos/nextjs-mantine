import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { delay } from '../utils/delay'
import { Todo } from '../types'

/**
 * useQueryTodosｶｽﾀﾑﾌｯｸ関数
 * @returns useQuery関数を実行してsupabaseのtodosｸｴﾘ結果ｾｯﾄを返却
 */
export const useQueryTodos = () => {
  /**
   * getTodos関数
   * @returns data｜ｸｴﾘ結果ｾｯﾄ
   * @description supabaseのtodosﾃｰﾌﾞﾙからﾃﾞｰﾀ取得（非同期2秒間待機）
   */
  const getTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: true })
    await delay(2000)
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  /**
   * useQuery関数
   * @param queryKey todos｜ReactQueryのｷｬｯｼｭｷｰを割当
   * @param queryFn getTodos｜getTodos関数を実行
   * @returns ｸｴﾘ結果ｾｯﾄ
   */
  return useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}