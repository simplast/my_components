$(document).ready(function() {
    //以下为左侧菜单相关
    // 左侧菜单列表测试数据。请保持格式一致
    var menu_info = [
        {
            level_1: "一级菜单1"
        },
        {
            level_1: "一级菜单2",
            level_2: [
                {
                    name: "二级菜单1"
                },
                {
                    name: "二级菜单2"
                }
            ]
        },
        {
            level_1: "一级菜单2",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13"
                    ]
                }
            ]
        },
        {
            level_1: "一级菜单3",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13"
                    ]
                }
            ]
        },
        {
            level_1: "一级菜单4",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13"
                    ]
                }
            ]
        },
        {
            level_1: "一级菜单5",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13"
                    ]
                }
            ]
        },
        {
            level_1: "一级菜单6",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13"
                    ]
                }
            ]
        },
        {
            level_1: "一级菜单7",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13"
                    ]
                }
            ]
        },
        {
            level_1: "一级菜单8",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13",
                        "三级菜单14"
                    ]
                }
            ]
        },
        {
            level_1: "一级菜单9",
            level_2: [
                {
                    name: "二级菜单1",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10"
                    ]
                },
                {
                    name: "二级菜单2",
                    level_3: [
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13",
                        "三级菜单14",
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13",
                        "三级菜单14",
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13",
                        "三级菜单14",
                        "三级菜单1",
                        "三级菜单2",
                        "三级菜单3",
                        "三级菜单4",
                        "三级菜单5",
                        "三级菜单6",
                        "三级菜单7",
                        "三级菜单8",
                        "三级菜单9",
                        "三级菜单10",
                        "三级菜单11",
                        "三级菜单12",
                        "三级菜单13",
                        "三级菜单14"
                    ]
                }
            ]
        }
    ];
    var menu_wrapper = $("ul.ul_level_1");

    var Multi_menu = function(menu_info, menu_wrapper) {
        var menu_info = menu_info || [];
        var le = menu_info.length;

        function get_template(text) {
            return $("<li title='" + text + "'><span>" + text + "</span></li>");
        }

        function is_in_screen(ele) {
            return ele.getBoundingClientRect().top > window.innerHeight; // 元素在当前屏下面
        }

        while (le--) {
            var data = menu_info[le];
            var template_1 = get_template(data.level_1);
            template_1.find("span").click(function() {
                //点击展开二级菜单
                $(this).toggleClass("active");
                $(this)
                    .next(".ul_level_2")
                    .slideToggle(200);
            });
            if (data.hasOwnProperty("level_2") && data.level_2.length) {
                template_1.addClass("has_level_2");
                var level_wrapper1 = $("<ul class='ul_level_2'></ul>");
                data.level_2.forEach(function(obj) {
                    var o_li = get_template(obj.name);
                    o_li.hover(
                        function() {
                            // 鼠标悬浮二级菜单后设置三级菜单位置
                            var o_ul = $(this).find("ul");
                            var H = $(this).offset().top;
                            if (H + o_ul.height() > window.innerHeight) {
                                o_ul.css({
                                    bottom: "4px",
                                    top: "auto"
                                });
                            } else {
                                o_ul.css({
                                    top: H - 56 + "px",
                                    bottom: "auto"
                                });
                            }
                            o_ul.fadeIn(50);
                        },
                        function() {
                            var o_ul = $(this).find("ul");
                            o_ul.fadeOut(150);
                        }
                    );
                    level_wrapper1.append(o_li);
                    if (obj.hasOwnProperty("level_3") && obj.level_3.length) {
                        o_li.addClass("has_level_3");
                        var level_wrapper3 = $("<ul class='ul_level_3'></ul>");
                        obj.level_3.forEach(function(obj, i) {
                            var t = (i + 1) / 14; // 13个菜单为一组
                            if (parseInt(t) === t) {
                                o_li.append(level_wrapper3); //添加三级菜单
                                var left_value = 166 + t * 190;
                                level_wrapper3 = $(
                                    "<ul class='ul_level_3'></ul>"
                                );
                                level_wrapper3.css({
                                    left: left_value + "px",
                                    height: "480px"
                                });
                            }
                            level_wrapper3.append(get_template(obj));
                        });
                        o_li.append(level_wrapper3); //添加三级菜单
                    }
                });
                template_1.append(level_wrapper1); //添加二级菜单
            }
            menu_wrapper.prepend(template_1); //添加一级菜单
        }
    };
    Multi_menu(menu_info, menu_wrapper);
    // 设置滚动条
    var has_scroll_bar = false;
    var outer_h = $("#scroll_control").height();
    $(".has_level_2").click(function(e) {
        e.preventDefault();
        setTimeout(function() {
            var inner_h = $(".ul_level_1").height();
            if (!has_scroll_bar && outer_h < inner_h + 6) {
                has_scroll_bar = true;
                $("#scroll_control").niceScroll({
                    cursorcolor: "rgba(35, 99, 140, 0.88)",
                    zIndex: 1,
                    cursorwidth: "6px",
                    background: "rgba(250,250,250,0.68)",
                    cursorborderradius: 15,
                    cursorborder: "1px solid #1b5173",
                    hidecursordelay: 800
                });
                $("#scroll_control")
                    .getNiceScroll()
                    .resize();
            }
            if (has_scroll_bar) {
                $("#scroll_control")
                    .getNiceScroll()
                    .resize();
            }
        }, 202);
    });
});
