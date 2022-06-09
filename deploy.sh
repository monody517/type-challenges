#!/usr/bin/env sh
###
 # @Author: wenpei 2737716714@qq.com
 # @Date: 2022-06-07 11:50:23
 # @LastEditors: wenpei 2737716714@qq.com
 # @LastEditTime: 2022-06-09 11:52:21
 # @FilePath: /type-challenges/deploy.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m 'type-challenges'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push
