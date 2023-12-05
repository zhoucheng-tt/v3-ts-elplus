/**
 * @name: 1-12个字符 可包含中文字母数字
 * @description:
 */
export function roleNameVerify(rule: any, value: string, callback: Function) {
  const reg = /^[\u4E00-\u9FA5A-Za-z0-9]{1,12}$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('请输入1-12个字符 可包含中文字母数字'));
    }
  } else {
    if (rule.required) {
      // 必填
      return callback('请输入!');
    } else {
      //  非必填
      return callback();
    }
  }
}

/**
 * @name: 6-14个英文字母和数字，暂不支持特殊符号。
 * @description:
 */
export function nameVerify(rule: any, value: string, callback: Function) {
  const reg = /^[A-Za-z0-9]{6,14}$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('请输入6-14个英文字母和数字，暂不支持特殊符号!'));
    }
  } else {
    if (rule.required) {
      // 必填
      return callback('请输入!');
    } else {
      //  非必填
      return callback();
    }
  }
}

/**
 * @name: 6-16位英文字母、数字或特殊符号
 * @description:
 */
export function serectVerify(rule: any, value: string, callback: Function) {
  const reg = /^[A-Za-z0-9`~!@#$%^&*(),./<>?;':"{}|]{6,16}$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('请输入6-16位英文字母、数字或英文特殊符号!'));
    }
  } else {
    if (rule.required) {
      // 必填
      return callback('请输入!');
    } else {
      //  非必填
      return callback();
    }
  }
}

/**
 * @name: 手机号校验
 * @description:
 */
export function phoneVerify(rule: any, value: string, callback: Function) {
  const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}(,1[3|4|5|6|7|8|9][0-9]\d{8})*$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('手机号码输入格式不正确!'));
    }
  } else {
    if (rule.required) {
      // 必填
      return callback('请输入手机号码!');
    } else {
      //  非必填
      return callback();
    }
  }
}

/**
 * @name: 邮箱校验
 * @description:
 */
export function emailVerify(rule: any, value: string, callback: Function) {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('邮箱输入格式不正确!'));
    }
  } else {
    if (rule.required) {
      // 必填
      return callback('请输入正确的邮箱!');
    } else {
      //  非必填
      return callback();
    }
  }
}

/**
 * @name:
 * @description: 不能含有汉字
 */
export function notContainChinese(rule: any, value: string, callback: Function) {
  const reg = /[\u4E00-\u9FA5]/g
  if (value) {
    // 已输入
    if (!reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('不能含有汉字'));
    }
  } else {
    // 未输入
    if (rule.required) {
      // 必填
      return callback('请输入!');
    } else {
      // 非必填
      return callback();
    }
  }
}

/**
 * @name:
 * @description: 只能是数字
 */
export function isNumber(rule: any, value: string, callback: Function) {
  if (value) {
    // 已输入
    if (!isNaN(Number(value))) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('只能是数字'));
    }
  } else {
    // 未输入
    if (rule.required) {
      // 必填
      return callback(new Error('请输入'));
    } else {
      // 非必填
      return callback();
    }
  }
}

import {CheckType} from "@/utils/checkType";

type k = string | number | symbol
type Json = Record<k, unknown> | Array<unknown>

/**
 * @name: 日期格式化
 * @description:
 * @param {Date} date
 * @param {string} fmt
 * @return {string} {*}
 */
export function formatDate(date: Date, fmt: string): string {
  if (!CheckType.isDate(date)) date = new Date(date)
  const o: Record<string, number> = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + ''))
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (String(o[k])) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/**
 * @name: 深拷贝
 * @description:
 * @param {type} v any 被拷贝的数据
 * @return {type} any 返回拷贝后的数据
 */
export function deepClone<T>(v: T): T {
  if (!CheckType.isObject(v) && !CheckType.isArray(v)) {
    return v
  }
  let result: Json = {}
  CheckType.isObject(v) ? result = {} : result = []
  for (const key in <Json>v) {
    result[key] = deepClone((v as Json)[key])
  }
  return result as T
}

/**
 * @name: 返回一个防抖函数(抖动结束后执行)
 * @description: 例: this.handlerOption = debounce(this.optionHandler, 100)
 * @param {type} fn Function 函数
 * @param {type} delay Number 防抖时间
 * @return type Function 返回一个防抖函数
 */
export function debounce<T extends Function>(fn: T, delay: number) {
  let timer: NodeJS.Timeout | null = null
  return function () {
    // @ts-ignore
    const self = this
    const args = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(self, args)
    }, delay)
  }
}

/**
 * @description: 返回一个防抖函数(抖动前执行，抖动重置等待时间)
 */
export function preDebounce<T extends Function>(fn: T, delay: number) {
  let timer: NodeJS.Timeout | null = null
  let tag = true
  return function () {
    // @ts-ignore
    const self = this
    if (tag) {
      fn.apply(self, arguments)
      tag = false
    }
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      tag = true
    }, delay)
  }
}

/**
 * @description: 返回一个节流函数(delay毫秒内最多执行一次)
 */
export function throttle<T extends Function>(fn: T, delay: number) {
  let tag = true
  return function () {
    if (!tag) return
    // @ts-ignore
    const self = this
    fn.apply(self, arguments)
    tag = false
    setTimeout(function () {
      tag = true
    }, delay)
  }
}

// 获取hash内存储的信息
export function getHashParams() {
  let hash = window.location.hash.substring(1),
    hashJson = {}
  if (hash == '') return {}
  hash.split('&').forEach(item => {
    let data = item.split("=")
    hashJson[data[0]] = data[1]
  })
  return hashJson
}

/**
 * @description: 生成指定位数随机ID，默认21位
 */
export const nanoid = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce(((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"), "");
