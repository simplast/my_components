 $(document).ready(function () {

            // 接收匹配结果，生成联想词条
            function set_li(arr_of_result) {
                $('#result_tips>ul').html("");
                if (arr_of_result.length > 0) {
                    var tar_group = $('.InfoContact >div:not(.searcher_wrapper)');
                    arr_of_result.forEach(function (str) {
                        var temp = $('<li>' + str + '</li>');
                        $('#result_tips>ul').append(temp);
                    });
                    $('#result_tips').show();
                } else {
                    $('#result_tips').hide();
                }
            }

            // 联想词条的点击事件
            function show_result(e, str) {
                var tar_group = $('.InfoContact >div:not(.searcher_wrapper)');
                var str = str || [$(this).text()];
                tar_group.hide();
                tar_group.each(function (key, data) {
                    if ($.inArray($(data).find('h5').text(), str) != -1) {
                        $(data).show('slow');   //出现搜索结果
                        if (str.length === 1) {
                            $('#keyword_wrapper').val(str[0]);  //改变输入框文字
                        }
                    }
                })
                $('#result_tips').hide();   //隐藏提示框
            }

            // 接收用户输入和数据池，返回匹配结果
            function match_key(str, arr) {
                var arr_of_result = [];
                arr.forEach(function (item) {
                    if (item.indexOf(str) != -1) {
                        arr_of_result.push(item);
                    }
                })
                return arr_of_result;
            }

            // 接收图表标题，返回标题数组作为数据池
            function get_arr(obj) {
                var arr = [];
                obj.each(function (key, data) {
                    arr.push(data.innerText);
                })
                return arr;
            }

            // 绑定输入框输入事件
            var binder = {};
            $('#keyword_wrapper').on('input', function (e) {
                var str = $('#keyword_wrapper').val().trim();
                binder.current_arr = match_key(str, get_arr($('.InfoItem_tiele h5')));
                set_li(binder.current_arr);
                $('#result_tips li').click(show_result);
            });

            // 搜索按钮点击事件
            function go(arr_of_result) {
                var str = $('#keyword_wrapper').val().trim();
                if (str) {
                    show_result(0, arr_of_result);
                } else {
                    $('.InfoContact >div:not(.searcher_wrapper)').show();
                }
            }
            $('#btn').click(binder, function (e) {
                go(e.data.current_arr);
            });

            // 点击非输入框区域隐藏提示框
            document.addEventListener('click', function (e) {
                if (e.target != $('#keyword_wrapper').get(0)) {
                    $('#result_tips').hide();   //隐藏提示框
                }
            })
        });