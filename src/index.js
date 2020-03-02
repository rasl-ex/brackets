  module.exports = function check(str, bracketsConfig) {
      for (let i = 0; i < bracketsConfig.length;) {
          let config = bracketsConfig[i].join('');
          if (str.includes(config)) {
              str = str.replace(config, '');
              i = 0;
          } else {
              i++;
          }
      }

      return str.length != 0 ? false : true;
  }