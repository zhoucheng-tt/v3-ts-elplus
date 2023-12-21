/**
 * @name: deploy name
 * @description:
 */
export function six3LetterVerify(rule: any, value: string, callback: Function) {
  const reg = /^[a-z0-9-]{0,63}$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('请按规范输入!'));
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
 * @name: 2-32个英文字母和数字，暂不支持特殊符号。
 * @description:
 */
export function twoTo32Verify(rule: any, value: string, callback: Function) {
  const reg = /^[\u4E00-\u9FA5A-Za-z0-9]{2,32}$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('请输入2-32个字符 可包含中文字母数字!'));
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
 * @name: 6-32个英文字母和数字，暂不支持特殊符号。
 * @description:
 */
export function nameVerify(rule: any, value: string, callback: Function) {
  const reg = /^[A-Za-z0-9]{6,32}$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('请输入6-32个英文字母和数字，暂不支持特殊符号!'));
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
 * @name: 密码长度在8到32之间且需包含至少一个大写字符，一个小写字符和一个数字。
 * @description:
 */
export function serectVerify(rule: any, value: string, callback: Function) {
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,32}$/;
  if (value) {
    if (reg.test(value)) {
      // 校验通过
      return callback();
    } else {
      // 校验未通过
      return callback(new Error('长度在8到32之间,需含至少一个大写一个小写字符和一个数字'));
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
