/*
 * @Author: wenpei 2737716714@qq.com
 * @Date: 2022-06-09 11:58:32
 * @LastEditors: wenpei 2737716714@qq.com
 * @LastEditTime: 2022-06-09 12:08:31
 * @FilePath: /type-challenges/questions/00533-easy-concat/template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Concat<T extends any[], U extends any[]> = [...T,...U]
