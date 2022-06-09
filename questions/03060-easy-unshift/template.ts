/*
 * @Author: wenpei 2737716714@qq.com
 * @Date: 2022-06-09 11:58:32
 * @LastEditors: wenpei 2737716714@qq.com
 * @LastEditTime: 2022-06-09 15:05:50
 * @FilePath: /type-challenges/questions/03060-easy-unshift/template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Unshift<T extends any[], U> = [U,...T]
