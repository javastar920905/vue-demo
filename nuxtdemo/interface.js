// import axios from 'axios';

// const ajax = {
//   // 获取i18n种类
//   GET_LANGUAGE_TYPE: '/get/i18n_type',
//   // 获取用户是否已进行实名
//   GET_IS_ORGREALNAME: '/taobao/store/real-name',
//   // 获取机构首页
//   GET_ALL_PEOPLE: '/store/brief',
//   // 获取代理首页
//   GET_ALL_AGENT: '/getagentbaseinfo',
//   // 查看是否已经注册店铺
//   IS_REGISTERED: '/taobao/store/is-registered',
//   GET_COLLECT_COUNT: '/collect/count',
//   // 未读消息数量
//   GET_UNREAD_COUNT: '/msg/msg/unReadMsgCount',
//   // 获取消息
//   GET_NOTIFY_LIST: '/msg/msg/list',
//   // 标记消息已读
//   SETTING_READ: '/msg/msg/readBatch',
//   // 获取需求状态
//   GET_DEMAND_STATUS: '/demand-market/taxorg/get-demand-state/',
//   // 删除消息
//   DELETE_NOTIFY: '/msg/msg/deleteBatch/',
//   // 是否声明
//   WHETHER_STATEMENT: '/taobao/declaration/is-accept-using-declaration',
//   // 同意声明
//   CONFIRM_STATEMENT: '/taobao/declaration/accept-using-declaration',
//   // 获取声明文案
//   GET_STATEMENT: '/taobao/index/content/state-template/protocol'
// };

// const API_PATH_PRE_FIX = 'http://39.108.191.243';

// const API_PATH_PRE_FIX3 = 'http://172.17.6.191';

// // 增加前缀
// let INTERFACE = {};
// for (let key in ajax) {
//   INTERFACE[key] = API_PATH_PRE_FIX + ajax[key];
// }
// const API_PATH_PRE_FIX2 = 'http://172.17.6.191/taobao';

// // 增加前缀
// let INTERFACE2 = {};
// for (let key in ajax) {
//   INTERFACE2[key] = API_PATH_PRE_FIX2 + ajax[key];
// }

// // 增加前缀
// let INTERFACE3 = {};
// for (let key in ajax) {
//   INTERFACE3[key] = API_PATH_PRE_FIX3 + ajax[key];
// }

// // 获取用户是否已进行实名
// function getIsOrgrealname() {
//   return axios.get(INTERFACE.GET_IS_ORGREALNAME)
// }
// /**
//  * 获取 i18n 的种类
//  */
// function getI18nType() {
//   // 这里需要先调用后端保存的语言
//   return axios.get(INTERFACE.GET_LANGUAGE_TYPE);
// }

// /**
//  * 获取i18n 配置json
//  *
//  * @param language
//  * @private
//  */
// function getI18n(language = 'zh') {
//   return axios.get('/static/i18n/' + language + '/index.json').then((data) => {
//     window.I18n = data;
//   });
// }
// // 机构主页
// function getAllPeople() {
//   return axios.get(INTERFACE2.GET_ALL_PEOPLE)
// }
// // 代理人主页
// function getAllAgent() {
//   return axios.get(INTERFACE.GET_ALL_AGENT)
// }
// // 查看是否已经注册店铺
// function isRegistered() {
//   return axios.get(INTERFACE.IS_REGISTERED);
// }
// // 获取收藏与关注量
// function getCollectNum() {
//   return axios.get(INTERFACE2.GET_COLLECT_COUNT)
// }
// // 未读消息列表
// function getUnRead(type) {
//   return axios.get(INTERFACE3.GET_UNREAD_COUNT + '?priority=' + type)
// }
// // 未读消息列表
// function getNotifyList(data) {
//   let str = '';
//   for (var name in data) {
//     if (str === '') {
//       str += name + '=' + data[name]
//     } else {
//       str += '&' + name + '=' + data[name]
//     }
//   }
//   return axios.get(INTERFACE3.GET_NOTIFY_LIST + '?' + str)
// }

// // 设置选中消息为已读
// function setRead(data) {
//   return axios.post(INTERFACE3.SETTING_READ + '/' + data);
// }

// // 获取需求状态
// function getDemandStatus(id) {
//   return axios.get(INTERFACE3.GET_DEMAND_STATUS + id);
// }

// // 删除选中消息
// function deleteNotify(ids) {
//   return axios.post(INTERFACE3.DELETE_NOTIFY + ids);
// }

// function wetherState() {
//   return axios.get(INTERFACE3.WHETHER_STATEMENT);
// }

// function confirmState() {
//   return axios.get(INTERFACE3.CONFIRM_STATEMENT);
// }
// function getStatement() {
//   return axios.get(INTERFACE3.GET_STATEMENT);
// }

// export default {
//   getI18n,
//   getI18nType,
//   getIsOrgrealname,
//   getAllPeople,
//   getAllAgent,
//   isRegistered,
//   getCollectNum,
//   getUnRead,
//   getNotifyList,
//   setRead,
//   getDemandStatus,
//   deleteNotify,
//   wetherState,
//   confirmState,
//   getStatement
// };
