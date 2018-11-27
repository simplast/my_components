function get_api(obj) {
    obj.get("/get_all_counts", function (req, res) {
        var data = {
            all: 5555,
            counts_video: 3345,
            counts_noise: 1222,
            counts_car: 1111,
            counts_tower: 333,
            counts_lifter: 444,
            counts_real_name: 555,
        }
        res.status(200), res.json(data);
    });

    obj.get("/filter_project", function (req, res) {
        var data = [{
            x: 113.528908, //经度
            y: 22.242704, //纬度
            title: "环宇城二期（一标段）住宅塔楼工程", //项目名
            status: "在建", //项目状态
            area: "香洲区", //所属地区
            mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
            far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
            id: 1 //唯一标识
        }];
        res.status(200), res.json(data);
    });

    obj.get("/get_project_details", function (req, res) {
        var data = {
            status: "在建",
            normal_info: {
                sgxkz: '（湘）JZ安许证字【2008】000111-10（10）',
                xmmc: '环宇城二期（一标段）住宅塔楼工程',
                gcdd: '香洲区前河北路88号',
                xmlx: '土建项目',
                gcmj: '127980.75㎡',
                gczj: '60400万元',
            },
            fwzt_info: {
                jsdw: '广逸房地产开发（珠海）有限公司',
                sgdw: '湖南长大建设集团股份有限公司',
                jldw: '中海监理有限公司',
                sjdw: '无',
                kcdw: '奥意建筑工程设计有限公司',
            },
            manager_info: {
                xmjl: '周游',
                aqy_1: '俊杰',
                aqy_2: '王峰',
                aqy_3: '霆锋',
                zjlgcs: '冠希',
                aqjlgcs: '博智'
            }
        }
        res.status(200), res.json(data);
    });

    obj.get("/get_24hours_noise", function (req, res) {
        var data = [
            10,
            20,
            30,
            10,
            50,
            60,
            70,
            10,
            80,
            90,
            20,
            60,
            80,
            80,
            10,
            0,
            20,
            70,
            90,
            20,
            50,
            90,
            40,
            60
        ];
        res.status(200), res.json(data);
    });
    obj.get("/get_24hours_dust", function (req, res) {
        console.log(req.query);
        var data = [
            110,
            20,
            30,
            10,
            50,
            60,
            70,
            60,
            80,
            90,
            20,
            60,
            80,
            40,
            50,
            60,
            70,
            20,
            33,
            55,
            66,
            77,
            37,
            90
        ];
        res.status(200), res.json(data);
    });
    obj.get("/get_overproof_calendar", function (req, res) {
        console.log(req.query);
        var data = [
            '2018-11-01',
            '2018-11-03',
            '2018-11-05',
            '2018-11-07',
            '2018-11-10',
            '2018-11-11',
            '2018-11-19',
            '2018-11-20',
            '2018-11-24',
            '2018-11-28',
            '2018-11-30',
        ];
        res.status(200), res.json(data);
    });
    obj.get("/get_noisedust", function (req, res) {
        var data = {
            current_noise: 66,
            current_dust: 77
        };
        res.status(200), res.json(data);
    });
    obj.get("/get_noise", function (req, res) {

        var data = {
            noise: 54, //单位是db
            dust: 155 //单位是ug/m3
        };
        res.status(200), res.json(data);
    });
    obj.get("/get_car", function (req, res) {
        var data = {
            video: [
                "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8",
                "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8",
                "",
                ""
            ],
            plate: [{
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                }
            ]
        };
        res.status(200), res.json(data);
    });

    obj.get("/get_weather", function (req, res) {
        var data = {
            weather_img: '',
            weather_name: '大雨',
            temperature: "29℃",
            PM25: 20,
        }
        res.status(200), res.json(data);
    });
    obj.get("/get_item", function (req, res) {


        var data = {
            video: [{
                    name: "神秘位置摄像头一",
                    url: "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8"
                },
                {
                    name: "神秘位置摄像头二",
                    url: "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8"
                },
                {
                    name: "大门口摄像头",
                    url: "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8"
                },
                {
                    name: "侧翼摄像头",
                    url: "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8"
                }
            ]
        };
        setTimeout(function () {
            res.status(200), res.json(data);
        }, 5000);
    });
    obj.get("/project_data", function (req, res) {
        var data = {
            projects: [{
                    x: 113.538908, //经度
                    y: 22.242704, //纬度
                    title: "1环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "在建", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: ['https://tse3.mm.bing.net/th?id=OIP.xXS6BxyOEL9L3dc5a1pn2QHaLH&pid=Api&w=2574&h=3861&rs=1&p=0'],
                    id: 1 //唯一标识
                }, {
                    x: 113.528908, //经度
                    y: 22.232704, //纬度
                    title: "2环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "未开工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 2 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.252704, //纬度
                    title: "3环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 3 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.352704, //纬度
                    title: "4环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 4 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.252704, //纬度
                    title: "5环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 5 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.32704, //纬度
                    title: "6环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 6 //唯一标识
                },
                {
                    x: 113.558908, //经度
                    y: 22.292704, //纬度
                    title: "7环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 7 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.252704, //纬度
                    title: "8环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 8 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.252704, //纬度
                    title: "9环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 9 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.252704, //纬度
                    title: "10环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 9 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.252704, //纬度
                    title: "11环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 9 //唯一标识
                },
                {
                    x: 113.548908, //经度
                    y: 22.252704, //纬度
                    title: "12环宇城二期（一标段）住宅塔楼工程", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 9 //唯一标识
                },
                {
                    x: 113.598908, //经度
                    y: 22.272704, //纬度
                    title: "13测试项目", //项目名
                    status: "竣工", //项目状态
                    area: "香洲区", //所属地区
                    mear_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test12.jpg", //近景实拍图
                    far_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test13.jpg", //远景实拍图地址
                    ohter_img: [],
                    id: 9 //唯一标识
                },

            ],
            statistics: {
                zjxm: 1, //在建项目个数
                wkgxm: 1, //未开工项目个数
                jgxm: 1 //竣工项目个数
            }
        };

        res.status(200), res.json(data);
    });
    obj.get("/get_plate_search_data", function (req, res) {
        console.log(req.query);
        var data = {
            all_plate_counts: 666, //车牌搜索结果的总量
            plate: [{
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                }


            ]
        }

        res.status(200), res.json(data);
    });
    obj.get("/get_plate_default_data", function (req, res) {
        var data = {
            video: [
                "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8",
                "http://157.122.146.228:7086/live/cameraid/1000017%240/substream/1.m3u8",
                "",
                ""
            ],
            today_counts: 888, //今日出入数量
            all_plate_counts: 666, //车牌搜索结果的总量
            plate: [{
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
                    plate_number: "粤C34737",
                    color: "黄色",
                    type: "未知车辆",
                    time: "2018-11-05 17:07:58"
                },
                {
                    big_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test3.png",
                    small_img: "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test4.png",
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
    obj.get("/get_tower_name", function (req, res) {
        var data = [{
                name: "塔吊一号",
                tower_code: 1213213
            },
            {
                name: "塔吊二号",
                tower_code: 2222
            },
            {
                name: "塔吊3号",
                tower_code: 3333
            },
            {
                name: "塔吊4号",
                tower_code: 444
            },
            {
                name: "塔吊5号",
                tower_code: 5555
            }
        ];
        setTimeout(() => {
            res.status(200), res.json(data);
        }, 1000);
    });
    obj.get("/get_default_tower_current", function (req, res) {

        var data = {
            code: 0, //code参数是layui配置，误删
            data: [{
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
    obj.get("/get_select_tower_current", function (req, res) {
        var data = {
            code: 0, //code参数是layui配置，误删
            data: [{
                    start_time: "09:57:30",
                    end_time: "09:57:30",
                    power: "123123.5",
                    weight: "1860.00",
                    start_height: "49.90",
                    end_height: "50.36"
                },
                {
                    start_time: "13:57:30",
                    end_time: "09:57:30",
                    power: "31231.5",
                    weight: "31231.00",
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
    obj.get("/get_history_tower_data", function (req, res) {

        var data = {
            code: 0, //code参数是layui配置，误删
            count: 22,
            data: [{
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                }
            ]
        };
        res.status(200), res.json(data);
    });
    obj.get("/get_today_tower_details", function (req, res) {
        var data = {
            code: 0, //code参数是layui配置，误删
            count: 22, //count为数据总条数，用于前台计算分页功能
            data: [{
                    weight: "112.5",
                    rotation: "123.00",
                    range: "250.00",
                    height: "213",
                    power: "5.21",
                    rotation_limit: "正常",
                    range_limit: "正常",
                    overload: "正常",
                    updata_time: "2017-08-20 17:59:54",
                    driver: "赵四"

                },
                {
                    weight: "112.5",
                    rotation: "123.00",
                    range: "250.00",
                    height: "213",
                    power: "5.21",
                    rotation_limit: "正常",
                    range_limit: "正常",
                    overload: "正常",
                    updata_time: "2017-08-20 17:59:54",
                    driver: "真·尼古拉斯巴基斯·坦赵四"
                },
                {
                    weight: "112.5",
                    rotation: "123.00",
                    range: "250.00",
                    height: "213",
                    power: "5.21",
                    rotation_limit: "正常",
                    range_limit: "正常",
                    overload: "正常",
                    updata_time: "2017-08-20 17:59:54",
                    driver: "真·尼古拉斯巴基斯·坦赵四"
                },
                {
                    weight: "112.5",
                    rotation: "123.00",
                    range: "250.00",
                    height: "213",
                    power: "5.21",
                    rotation_limit: "正常",
                    range_limit: "正常",
                    overload: "正常",
                    updata_time: "2017-08-20 17:59:54",
                    driver: "真·尼古拉斯巴基斯·坦赵四"
                },
                {
                    weight: "112.5",
                    rotation: "123.00",
                    range: "250.00",
                    height: "213",
                    power: "5.21",
                    rotation_limit: "正常",
                    range_limit: "正常",
                    overload: "正常",
                    updata_time: "2017-08-20 17:59:54",
                    driver: "真·尼古拉斯巴基斯·坦赵四"
                },
                {
                    weight: "112.5",
                    rotation: "123.00",
                    range: "250.00",
                    height: "213",
                    power: "5.21",
                    rotation_limit: "正常",
                    range_limit: "正常",
                    overload: "正常",
                    updata_time: "2017-08-20 17:59:54",
                    driver: "真·尼古拉斯巴基斯·坦赵四"
                }
            ]
        };
        res.status(200), res.json(data);
    });
    obj.get("/get_select_tower", function (req, res) {
        var data = {
            code: 0, //code参数是layui配置，误删
            count: 100, //count为数据总条数，用于前台计算分页功能
            data: [{
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                },
                {
                    weight: "123",
                    power: "112.5",
                    start_rotation: "123.00",
                    end_rotation: "250.00",
                    start_range: "4",
                    end_range: "9",
                    start_height: "0.55",
                    end_height: "0.55",
                    start_time: "0.55",
                    end_time: "0.55",
                    operator: "真·尼古拉斯巴基斯·坦赵四",
                    record_code: 213132
                }
            ]
        };
        res.status(200), res.json(data);
    });
}

exports.get_api = get_api;