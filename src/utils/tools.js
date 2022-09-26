export default {
    formatJSON (array, key) {
        return array.filter(item => {
            if (item[key]) {
                item[key] = item[key].split(',')
            }
            return item
        })
    },

    jsonToArr (str) {    //把数据转换成字符串
        return JSON.parse(str)
    },
    strToArr (str) {
        return str.split(',')   // 把字符串用逗号隔开把它再变成数组
    },
    replaceToSpace (str) {    // 把逗号用正则变成空格
        return str.replace(/,/g, '')
    },
    trimSpace (str) {
        return str.replace(/\s+/g, '')
    },

    //--------------------------

    throttle (fn, delay) {
     var t = null,
		begin = new Date().getTime();

		return function () {
			var _self = this,
          args = arguments,
          cur = new Date().getTime();

      clearTimeout(t);

      if (cur - begin >= delay) {
      	fn.apply(_self, args);
      	begin = cur;
      } else {
      	t = setTimeout(function () {
          fn.apply(_self, args);
      	}, delay);
        }
    }
    }
}