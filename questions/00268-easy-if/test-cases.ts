/*
 * @Author: wenpei 2737716714@qq.com
 * @Date: 2022-06-07 10:48:24
 * @LastEditors: wenpei 2737716714@qq.com
 * @LastEditTime: 2022-06-09 11:29:57
 * @FilePath: /type-challenges/questions/00268-easy-if/test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
