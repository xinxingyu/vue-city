<template>
    <div id="app">
		<div class="choice" @click="choiceCity()">{{youChoiceCityName}}</div>
	    <div class="choice" @click="choiceCity2()">{{youChoiceCityName2}}</div>
        <city
            :is-show.sync='city.isShow'
            :on-choose='city.onChoose'
            :city-data='city.cityData'
            :local-city='city.localCity'
            :star-city='city.starCity'
			:close="close"
            ></city>
        <city
			:simple='true'
            :is-show.sync='city2.isShow'
            :on-choose='city2.onChoose'
            :city-data='city2.cityData'
            :local-city='city2.localCity'
            :star-city='city2.starCity'
			:close="close"
            ></city>
    </div>
</template>

<script>
    import city from './components';
    // import city from '../lib/components/index.js';
    // import * as defed from 'defed-vue-components'

    export default {
        data(){
            return {
                youChoiceCityName: '请选择城市...',
                youChoiceCityName2: '请选择城市...',
                city: {
                    isShow: false,
                    cityData: [],
                    onChoose: null,
                    localCity: {},
                    starCity: []
                },
                city2: {
                    isShow: false,
                    cityData: [],
                    onChoose: null,
                    localCity: {},
                    starCity: []
                },
            }
        },
        components: {
            city,
        },
        mounted(){
            let _this = this;
            this.getCityInfo();
            this.city.onChoose = function(res){
                //ToDo: 选完城市后......
                console.log(res);
				_this.city.isShow = false;
                _this.youChoiceCityName = '你选的城市是：' + res.cityName;
            }
            this.city2.onChoose = function(res){
                //ToDo: 选完城市后......
                console.log(res);
				_this.city2.isShow = false;
                _this.youChoiceCityName2 = '你选的城市是：' + res.cityName;
            }
        },
        methods: {
            getCityInfo: function(){
                this.city.starCity = [
                    {
                       cityId: 301,
                       cityName: "保山",
                       citySpell: "BAOSHAN",
                       cityFirstLetter: "B",
                    },
                    {
                        cityId: 167,
                        cityName: "日照",
                        citySpell: "RIZHAO",
                        cityFirstLetter: "R",
                    },
                ]

                this.city.cityData = [
                    {
                        cityId: 290,
                        cityName: "阿坝州",
                        citySpell: "ABAZHOU",
                        cityFirstLetter: "A",
                    }, {
                        cityId: 348,
                        cityName: "阿克苏地区",
                        citySpell: "AKESUDIQU",
                        cityFirstLetter: "A",
                    }, {
                        cityId: 348,
                        cityName: "阿克苏地区",
                        citySpell: "AKESUDIQU",
                        cityFirstLetter: "A",
                    }, {
                        cityId: 356,
                        cityName: "阿拉尔",
                        citySpell: "ALAER",
                        cityFirstLetter: "A",
                    },{
                        cityId: 170,
                        cityName: "宝鸡",
                        citySpell: "BAOJI",
                        cityFirstLetter: "B"
                    }, {
                        cityId: 301,
                        cityName: "保山",
                        citySpell: "BAOSHAN",
                        cityFirstLetter: "B",
                    },
                    {
                        cityId: 59,
                        cityName: "沧州",
                        citySpell: "CANGZHOU",
                        cityFirstLetter: "C",
                    },
                    {
                        cityId: 25,
                        cityName: "长春",
                        citySpell: "CHANGCHUN",
                        cityFirstLetter: "C",
                    },
                    {
                        cityId: 106,
                        cityName: "常德",
                        citySpell: "CHANGDE",
                        cityFirstLetter: "C",
                    },
                    {
                        cityId: 163,
                        cityName: "丹东",
                        citySpell: "DANDONG",
                        cityFirstLetter: "D",
                    },
                    {
                        cityId: 270,
                        cityName: "儋州",
                        citySpell: "DANZHOU",
                        cityFirstLetter: "D",
                    },
                    {
                        cityId: 43,
                        cityName: "鄂尔多斯",
                        citySpell: "EERDUOSI",
                        cityFirstLetter: "E",
                    },
                    {
                        cityId: 235,
                        cityName: "恩施州",
                        citySpell: "ENSHIZHOU",
                        cityFirstLetter: "E",
                    },
                    {
                        cityId: 230,
                        cityName: "鄂州",
                        citySpell: "EZHOU",
                        cityFirstLetter: "E",
                    },
                    {
                        cityId: 260,
                        cityName: "防城港",
                        citySpell: "FANGCHENGGANG",
                        cityFirstLetter: "F",
                    },
                    {
                        cityId: 36,
                        cityName: "佛山",
                        citySpell: "FOSHAN",
                        cityFirstLetter: "F",
                    },
                    {
                        cityId: 333,
                        cityName: "甘南州",
                        citySpell: "GANNANZHOU",
                        cityFirstLetter: "G",
                    },
                    {
                        cityId: 102,
                        cityName: "赣州",
                        citySpell: "GANZHOU",
                        cityFirstLetter: "G",
                    },
                    {
                        cityId: 16,
                        cityName: "哈尔滨",
                        citySpell: "HAERBIN",
                        cityFirstLetter: "H",
                    },
                    {
                        cityId: 339,
                        cityName: "海北州",
                        citySpell: "HAIBEIZHOU",
                        cityFirstLetter: "H",
                    },
                    {
                        cityId: 338,
                        cityName: "海东地区",
                        citySpell: "HAIDONGDIQU",
                        cityFirstLetter: "H",
                    },
                    {
                        cityId: 215,
                        cityName: "佳木斯",
                        citySpell: "JIAMUSI",
                        cityFirstLetter: "J",
                    },
                    {
                        cityId: 221,
                        cityName: "吉安",
                        citySpell: "JIAN",
                        cityFirstLetter: "J",
                    },
                    {
                        cityId: 110,
                        cityName: "开封",
                        citySpell: "KAIFENG",
                        cityFirstLetter: "K",
                    },
                    {
                        cityId: 179,
                        cityName: "喀什地区",
                        citySpell: "KASHIDIQU",
                        cityFirstLetter: "K",
                    },
                    {
                        cityId: 180,
                        cityName: "克拉玛依",
                        citySpell: "KELAMAYI",
                        cityFirstLetter: "K",
                    },
                    {
                        cityId: 266,
                        cityName: "来宾",
                        citySpell: "LAIBIN",
                        cityFirstLetter: "L",
                    },
                    {
                        cityId: 122,
                        cityName: "莱芜",
                        citySpell: "LAIWU",
                        cityFirstLetter: "L",
                    },
                    {
                        cityId: 99,
                        cityName: "马鞍山",
                        citySpell: "MAANSHAN",
                        cityFirstLetter: "M",
                    },
                    {
                        cityId: 53,
                        cityName: "南充",
                        citySpell: "NANCHONG",
                        cityFirstLetter: "N",
                    },
                    {
                        cityId: 11,
                        cityName: "南京",
                        citySpell: "NANJING",
                        cityFirstLetter: "N",
                    },
                    {
                        cityId: 165,
                        cityName: "盘锦",
                        citySpell: "PANJIN",
                        cityFirstLetter: "P",
                    },
                    {
                        cityId: 298,
                        cityName: "黔东南州",
                        citySpell: "QIANDONGNANZHOU",
                        cityFirstLetter: "Q",
                    },
                    {
                        cityId: 167,
                        cityName: "日照",
                        citySpell: "RIZHAO",
                        cityFirstLetter: "R",
                    },
                    {
                        cityId: 249,
                        cityName: "三门峡",
                        citySpell: "SANMENXIA",
                        cityFirstLetter: "S",
                    },
                    {
                        cityId: 225,
                        cityName: "三明",
                        citySpell: "SANMING",
                        cityFirstLetter: "S",
                    },
                    {
                        cityId: 37,
                        cityName: "三亚",
                        citySpell: "SANYA",
                        cityFirstLetter: "S",
                    },
                    {
                        cityId: 185,
                        cityName: "宿州",
                        citySpell: "SUZHOU",
                        cityFirstLetter: "S",
                    },
                    {
                        cityId: 354,
                        cityName: "塔城地区",
                        citySpell: "TACHENGDIQU",
                        cityFirstLetter: "T",
                    },
                    {
                        cityId: 121,
                        cityName: "泰安",
                        citySpell: "TAIAN",
                        cityFirstLetter: "T",
                    },
                    {
                        cityId: 81,
                        cityName: "潍坊",
                        citySpell: "WEIFANG",
                        cityFirstLetter: "W",
                    },
                    {
                        cityId: 42,
                        cityName: "威海",
                        citySpell: "WEIHAI",
                        cityFirstLetter: "W",
                    },
                    {
                        cityId: 32,
                        cityName: "厦门",
                        citySpell: "XIAMEN",
                        cityFirstLetter: "X",
                    },
                    {
                        cityId: 49,
                        cityName: "银川",
                        citySpell: "YINCHUAN",
                        cityFirstLetter: "Y",
                    },
                    {
                        cityId: 76,
                        cityName: "营口",
                        citySpell: "YINGKOU",
                        cityFirstLetter: "Y",
                    },
                    {
                        cityId: 168,
                        cityName: "枣庄",
                        citySpell: "ZAOZHUANG",
                        cityFirstLetter: "Z",
                    },
                    {
                        cityId: 241,
                        cityName: "张家界",
                        citySpell: "ZHANGJIAJIE",
                        cityFirstLetter: "Z",
                    },
                    {
                        cityId: 78,
                        cityName: "张家口",
                        citySpell: "ZHANGJIAKOU",
                        cityFirstLetter: "Z",
                    },
                    {
                        cityId: 326,
                        cityName: "张掖",
                        citySpell: "ZHANGYE",
                        cityFirstLetter: "Z",
                    },
                    {
                        cityId: 142,
                        cityName: "漳州",
                        citySpell: "ZHANGZHOU",
                        cityFirstLetter: "Z",
                    }
                ];
                this.city.localCity = {
                    cityId: 301,
                    cityName: "保山",
                    citySpell: "BAOSHAN",
                    cityFirstLetter: "B",
                }

				this.city2.cityData = [
					{
                        cityId: 290,
                        cityName: "阿坝州",
                    }, {
                        cityId: 348,
                        cityName: "阿克苏地区",
                    }, {
                        cityId: 348,
                        cityName: "阿克苏地区",
                    }, {
                        cityId: 356,
                        cityName: "阿拉尔",
                    },{
                        cityId: 170,
                        cityName: "宝鸡",
                    }, {
                        cityId: 301,
                        cityName: "保山",
                    },
                    {
                        cityId: 59,
                        cityName: "沧州",
                    },
                    {
                        cityId: 25,
                        cityName: "长春",
                    },
                    {
                        cityId: 106,
                        cityName: "常德",
                    },
                    {
                        cityId: 163,
                        cityName: "丹东",
                    },
                    {
                        cityId: 270,
                        cityName: "儋州",
                    },
                    {
                        cityId: 43,
                        cityName: "鄂尔多斯",
                    },
                    {
                        cityId: 235,
                        cityName: "恩施州",
                    },
                    {
                        cityId: 230,
                        cityName: "鄂州",
                    },
                    {
                        cityId: 260,
                        cityName: "防城港",
                    },
                    {
                        cityId: 36,
                        cityName: "佛山",
                    },
                    {
                        cityId: 333,
                        cityName: "甘南州",
                    },
                    {
                        cityId: 102,
                        cityName: "赣州",
                    },
                    {
                        cityId: 16,
                        cityName: "哈尔滨",
                    },
                    {
                        cityId: 339,
                        cityName: "海北州",
                    },
                    {
                        cityId: 338,
                        cityName: "海东地区",
                    },
                    {
                        cityId: 215,
                        cityName: "佳木斯",
                    },
                    {
                        cityId: 221,
                        cityName: "吉安",
                    },
                    {
                        cityId: 110,
                        cityName: "开封",
                    },
                    {
                        cityId: 179,
                        cityName: "喀什地区",
                    },
                    {
                        cityId: 180,
                        cityName: "克拉玛依",
                    },
                    {
                        cityId: 266,
                        cityName: "来宾",
                    },
                    {
                        cityId: 122,
                        cityName: "莱芜",
                    },
                    {
                        cityId: 99,
                        cityName: "马鞍山",
                    },
                    {
                        cityId: 53,
                        cityName: "南充",
                    },
                    {
                        cityId: 11,
                        cityName: "南京",
                    },
                    {
                        cityId: 165,
                        cityName: "盘锦",
                    },
                    {
                        cityId: 298,
                        cityName: "黔东南州",
                    },
                    {
                        cityId: 167,
                        cityName: "日照",
                    },
				]
				this.city2.localCity = {
                    cityId: 301,
                    cityName: "保山",
                }
				this.city2.starCity = [{
                    cityId: 301,
                    cityName: "保山",
                },
				{
                    cityId: 301,
                    cityName: "保山2",
                }]
            },
            choiceCity: function(){
                this.city.isShow = true;
            },
			choiceCity2 () {
				this.city2.isShow = true;
			},
			close(){
				this.city.isShow = false;
				this.city2.isShow = false;
			}
        }
    }
</script>

<style lang="less">
    html{
        font-size: 100%;
        background: #fff;
    }
    body{
        padding: 0.2rem 0.1rem!important;
        box-sizing: border-box;
    }
    .choice{
        font-size: 0.14rem;
        padding: 10px;
        border-radius: 3px;
        background: #fff;
        margin-bottom: 10px;
        border: solid 1px #e5e5e5;
        background: rgba(237, 85, 101, 0.8)!important;
        color: #fff;
    }
</style>
