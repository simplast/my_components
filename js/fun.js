/*
 * @Author: simplastHu 
 * @Date: 2018-06-02 16:44:04 
 * @Last Modified by: simplastHu
 * @Last Modified time: 2018-06-18 10:17:03
 */
// 响应式,设置尺寸
function set_size() {
    if (this.parent != this) {
        var font_size = getComputedStyle(this.parent.document.documentElement)['font-size'];
        $('html').css('font-size', font_size);
    }
    else {
        var whdef = 100 / 1920;// 表示1920的设计图,使用100px的默认值
        var wH = window.parent.innerHeight || window.innerHeight;// 当前窗口的高度
        var wW = window.parent.innerWidth || window.innerWidth;// 当前窗口的宽度
        var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        $('html').css('font-size', rem + "px");

    }
}



// 轮播效果
/**
 * 滚动视窗的容器，需是jq对象
 * 滚动方向 向上"top" 向左"left"
 * num表示在滚动方向上同一时刻有几个列表项，即单排或者多排 ....
 * @param {obj} obj 
 * @param {string} direction 
 * @param {number} num 
 */
function start_scroll(obj, direction, num) {
    var num = num || 1;
    var container = obj.children().eq(0);
    var scroll_list = container.find(">*");
    var ff = 0;

    function get_scroll_list() {
        for (var i = 0; i < repeat_number; i++) {
            var x = scroll_list.get(i);
            if (x) {
                container.append(x.outerHTML);
            }
        }
    }

    function start_move(side) {
        setInterval(function () {
            if (ff < scroll_limit) {
                container.css(side, -ff + 'px');
                ff++;
            }
            else {
                container.css(side, 0);
                ff = 0;
            }
        }, 100)
    }

    switch (direction) {
        case "top":
            var scrol_window_height = obj.height();
            var scroll_limit = container.height();
            var repeat_number = (scrol_window_height * scroll_list.length / scroll_limit) * num;
            repeat_number = Math.ceil(repeat_number);

            if (scrol_window_height < scroll_limit) {
                get_scroll_list();
                start_move(direction);
            }
            break;
        case "left":
            var scrol_window_width = obj.width();
            var scroll_limit = container.width();
            var repeat_number = (scrol_window_width * scroll_list.length / scroll_limit) * num;
            repeat_number = Math.ceil(repeat_number);

            if (scrol_window_width < scroll_limit) {
                get_scroll_list();
                start_move(direction);
            }
            break;

    }

}


// 液晶数字
function set_number(obj, num) {
    var n_to_p = [] //图片路径
    var temp = num + '';
    for (var i = 0; i < temp.length; i++) {
        var fl = temp[i];
        var img = $("<img src=" + n_to_p[fl] + ">");
        obj.append(img);
    }
}