export const NICK_NAME_TYPE = {
  ENGLISH_NICK_NAME: 'ENGLISH_NICK_NAME',
  CHINESE_NICK_NAME: 'CHINESE_NICK_NAME'
};

// 获取指定范围内的随机数
const randomAccess = (min, max) => {
  return Math.floor(Math.random() * (min - max) + max);
};

// 解码
const decodeUnicode = str => {
  //Unicode显示方式是\u4e00
  str = '\\u' + str;
  str = str.replace(/\\/g, '%');
  //转换中文
  str = unescape(str);
  //将其他受影响的转换回原来
  str = str.replace(/%/g, '\\');
  return str;
};

export const getRandomNickname = (nickNameType, nameLength) => {
  let name = '';
  let alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  for (let i = 0; i < nameLength; i++) {
    switch (nickNameType) {
      case NICK_NAME_TYPE.CHINESE_NICK_NAME:
        let unicodeNum = randomAccess(0x4e00, 0x9fa5).toString(16);
        name += decodeUnicode(unicodeNum);
        break;

      default:
        let index = randomAccess(0, 25);
        name += alphabet[index];
        break;
    }
  }
  return name;
};
