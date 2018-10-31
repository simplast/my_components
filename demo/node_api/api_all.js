function get_api(obj) {
    // 地图模式下，绘制右下角3个圆形图接口
    obj.get("/general_situation", function(req, res) {
        var questions = {
            zjxm: 213, //在建项目个数
            wkgxm: 444, //未开工项目个数
            jgxm: 122 //竣工项目个数
        };

        res.status(200), res.json(questions);
    });
}


exports.get_api = get_api;