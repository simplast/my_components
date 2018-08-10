var app = new Vue({
    el: "#app",
    data: {
        f: 0,
        products: [
            {
                name: "iphone7",
                price: 6188,
                num: 1,
                status: 0,
            },
            {
                name: "iPad Pro",
                price: 5888,
                num: 1,
                status: 0,
            },
            {
                name: "MacBook Pro",
                price: 21488,
                num: 1,
                status: 0,
            },
            {
                name: "MacBook Pro",
                price: 21488,
                num: 1,
                status: 0,
            },
        ]
    },
    methods: {
        recounts: function (n, p) {
            p.num += n;
            if (p.num < 1) {
                p.num = 1;
            }
        },
        removeSelf: function (index) {
            this.products.splice(index, 1);
        },
        chooseAll: function () {
            for (var x = 0; x < this.products.length; x++) {
                this.products[x].status = this.f;
            }
        },
        
    },
    computed: {
        total: function () {
            var temp = 0;
            for (var x = 0; x < this.products.length; x++) {
                temp += this.products[x].price * this.products[x].num * this.products[x].status;
            }
            return temp.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        },
    }




})
