import yaml from 'js-yaml' // npm install js-yaml
import {CheckType} from "@/utils/checkType";

type k = string | number | symbol
type Json = Record<k, unknown> | Array<unknown>

export function querySystem() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    return '手机端'
  } else {
    return 'PC端'
  }
}

// yaml 转 json
export function yamlToJson(yamlStr: string) {
  const jsonStrEct = yaml.load(yamlStr);
  const jsonStr = JSON.stringify(jsonStrEct);
  return jsonStr
}

// json 转 yaml
export function jsonToYaml(jsonObj: any, depth = 0, inArray: boolean) {
  const indent = '  ';
  let s = '';
  const isArray = Array.isArray(jsonObj);
  for (const i in jsonObj) {
    s += (inArray ? '' : indent.repeat(depth)) + (isArray ? '- ' : `${i}: `);
    inArray = false;
    const val = jsonObj[i];
    switch (typeof val) {
      case 'string':
        const l = val.split('\n');
        const d = '\n' + indent.repeat(depth + 1);
        s += l.length > 1
          ? `|${l[0][0] === ' ' ? `${indent.length * (depth + 1)}-` : ''}${d}${l.join(d)}`
          : '`~!@#%&:,?\'"{}[]|-'.includes(val[0]) ? `"${val.replaceAll('"', '\\"')}"` : val;
        s += '\n';
        break;
      case 'number':
      case 'boolean':
        s += `${val}`;
        s += '\n';
        break;
      default:
        s += isArray ? '' : '\n';
        s += jsonToYaml(val, depth + 1, isArray);
    }
  }
  return s;
}

// 把字符串按长度截取分行在html中展示 配合css：white-space: pre-line 使用
export function splitText(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  }

  let result = '';
  let i = 0;

  while (i < str.length) {
    result += str.slice(i, i + maxLength) + '\n';
    i += maxLength;
  }

  return result.trim();
}

/**
 * @name: 时间戳转换为时间
 * @param timeStamp 1706754185
 * @param fmt       yyyy-MM-dd hh:mm:ss
 * @return {string} 2024-1-17 10:12:39
 */
export function timeStampToFmtTime(timeStamp: any, fmt: any) {
  const date = new Date(timeStamp * 1000); // 将时间戳转换为毫秒并创建一个 Date 对象
  let obj: Record<string, number> = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + ''))
  }
  for (const k in obj) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (String(obj[k])) : (('00' + obj[k]).substr(('' + obj[k]).length)))
  }
  return fmt
}

/**
 * @name: 日期格式化
 * @param {Date} date   new Date()
 * @param {string} fmt  yyyy-MM-dd hh:mm:ss
 * @return {string}     2024-1-17 10:12:39
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
