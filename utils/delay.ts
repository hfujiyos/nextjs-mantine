/**
 * delay関数
 * @param ms 待機する時間
 * @returns 待機時間後にresolve関数を実行して、PromiseのStateをispendingからfullfilledに変更
 * @description APIﾚｽﾎﾟﾝｽを意図的に遅らせる関数
 */
export const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}