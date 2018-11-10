function get_api(obj) {
    obj.get("/filter_project", function(req, res) {
        console.log(req);
        var data = [
            {
                x: 113.528908, //经度
                y: 22.242704, //纬度
                title: "环宇城二期（一标段）住宅塔楼工程", //项目名
                status: "在建", //项目状态
                area: "香洲区", //所属地区
                mear_img:
                    "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                far_img:
                    "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                id: 1 //唯一标识
            }
        ];
        res.status(200), res.json(data);
    });
    obj.get("/get_item", function(req, res) {
        console.log(req.baseUrl);
        var data = {
            video: [
                {
                    name: "神秘位置摄像头一",
                    url: "http://www.runoob.com/try/demo_source/movie.mp4"
                },
                {
                    name: "神秘位置摄像头二",
                    url: "http://www.runoob.com/try/demo_source/mov_bbb.mp4"
                },
                {
                    name: "大门口摄像头",
                    url: "http://www.runoob.com/try/demo_source/mov_bbb.mp4"
                },
                {
                    name: "侧翼摄像头",
                    url: "http://www.runoob.com/try/demo_source/mov_bbb.mp4"
                }
            ]
        };
        setTimeout(function() {
            res.status(200), res.json(data);
        }, 5000);
    });
    obj.get("/project_data", function(req, res) {
        var data = {};
        switch (req.query.area) {
            case "xzq":
                var data = {
                    projects: [
                        {
                            x: 113.528908, //经度
                            y: 22.242704, //纬度
                            title: "环宇城二期（一标段）住宅塔楼工程", //项目名
                            status: "在建", //项目状态
                            area: "香洲区", //所属地区
                            mear_img:
                                "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                            far_img:
                                "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                            id: 1 //唯一标识
                        }
                    ],
                    statistics: {
                        zjxm: 213, //在建项目个数
                        wkgxm: 444, //未开工项目个数
                        jgxm: 122 //竣工项目个数
                    }
                };
                break;
            case "hqxq":
                var data = {
                    projects: [
                        {
                            x: 113.538392, //经度
                            y: 22.166726, //纬度
                            title: "铁建大厦项目主体工程", //项目名
                            area: "横琴新区", //所属地区
                            status: "在建", //项目状态
                            mear_img:
                                "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test1.png", //近景实拍图
                            far_img:
                                "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test2.png", //远景实拍图地址
                            id: 2 //唯一标识
                        }
                    ],
                    statistics: {
                        zjxm: 1213, //在建项目个数
                        wkgxm: 2444, //未开工项目个数
                        jgxm: 1322 //竣工项目个数
                    }
                };
                break;
        }

        res.status(200), res.json(data);
    });
    obj.get("/week_data", function(req, res) {
        var data = {
            video: [
                "http://www.runoob.com/try/demo_source/movie.mp4",
                "http://www.runoob.com/try/demo_source/mov_bbb.mp4",
                "",
                ""
            ],
            today_counts: 1231,
            plate: [
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img:
                        "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                }
            ],
            charts: {
                week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                date: [
                    "11-05",
                    "11-06",
                    "11-07",
                    "11-08",
                    "11-09",
                    "11-10",
                    "11-11"
                ],
                data: [55, 66, 33, 22, 77, 88, 101]
            }
        };
        res.status(200), res.json(data);
    });
    obj.get("/get_today_tower_data", function (req, res) {
        console.log(req.query);
        var data = {
            code: 0,  //code参数是layui配置，误删
            data: [
                {
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "112.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
                {
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "112.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
                {
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "112.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
                {
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "112.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
                {
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "112.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
                {
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "112.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
                {
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "112.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
            ]
        };
        res.status(200), res.json(data);
    });
}

exports.get_api = get_api;
