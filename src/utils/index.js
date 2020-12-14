/*
 * @Author: PT
 * @Date: 2020-06-01 09:15:11
 * @LastEditors: PT
 * @LastEditTime: 2020-12-11 17:19:16
 * @Description: 公共方法
 */ 
import moment from 'moment'
const formatDate = (idate, format = 'YYYY-MM-DD HH:mm:ss') => {
  idate = idate === null ? undefined : idate
  return moment(idate).format(format)

}
export default {
  formatDate
}