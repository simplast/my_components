function get_api(obj) {
    obj.get("/building_counts", function(req, res) {
        console.log(req.baseUrl);
        var data = {
            zjxm: 213, //在建项目个数
            wkgxm: 444, //未开工项目个数
            jgxm: 122 //竣工项目个数
        };
        res.status(200), res.json(data);
    });
    obj.get("/get_item", function(req, res) {
        console.log(req.baseUrl);
        var data = {
            video_url:'http://www.runoob.com/try/demo_source/movie.mp4'
        };
        res.status(200), res.json(data);
    });
    obj.get("/project_data", function (req, res) {
        var data = [];
        switch (req.query.area) {
            case "xzq":
                var data = [
                    {
                        x: 113.528908, //经度
                        y: 22.242704, //纬度
                        title: "环宇城二期（一标段）住宅塔楼工程", //项目名
                        status: "在建", //项目状态
                        area: "香洲区", //所属地区
                        mear_img:
                            "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test1.png", //近景实拍图
                        far_img:
                            "http://127.0.0.1:5500/ZhuHai/ZH10-30new/images/test2.png", //远景实拍图地址
                        id: 1 //唯一标识
                    }
                ];
                break;
            case "hqxq":
                var data = [
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
                ];
                break;
        }

        res.status(200), res.json(data);
    });
}

exports.get_api = get_api;
