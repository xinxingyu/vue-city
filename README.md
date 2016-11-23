## 城市选择器
<p>
    <img height="18" src="https://img.shields.io/badge/UI-v5.0-ff69b4.svg">
    <img height="18" src="https://img.shields.io/badge/npm-v0.2.2-blue.svg">
</p>
> author: 辛星宇  

### 展示
<p>
	<img width="300px" src="https://github.com/xinxingyu/vue-city/blob/master/static/img/intro1.jpg">
	<img width="300px" style="margin-left:20px;" src="https://github.com/xinxingyu/vue-city/blob/master/static/img/intro2.jpg">
<p>

### 安装

`npm install vue-city --save`

### 使用DEMO

```shell
	git clone .......
	cd vue-city
	npm install
	npm run dev
```
> ES6方式

```html
	<div id="app">
		<div class="choice" @click="choiceCity()">{{youChoiceCityName}}</div>
	    <div class="choice" @click="choiceCity2()">{{youChoiceCityName2}}</div>
	    <div id="app">
	        <city
	            :is-show.sync='city.isShow'
	            :on-choose='city.onChoose'
	            :city-data='city.cityData'
	            :local-city='city.localCity'
	            :star-city='city.starCity'
	            ></city>
	        <city
				:simple='true'
	            :is-show.sync='city2.isShow'
	            :on-choose='city2.onChoose'
	            :city-data='city2.cityData'
	            :local-city='city2.localCity'
	            :star-city='city2.starCity'
	            ></city>
	    </div>
	</div>
```

```javascript
	import city from 'vue-city';

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
        ready(){
            let _this = this;
            this.getCityInfo();
            this.city.onChoose = function(res){
                //ToDo: 选完城市后......
                console.log(res);
                _this.youChoiceCityName = '你选的城市是：' + res.cityName;
            }
			this.city2.onChoose = function(res){
                //ToDo: 选完城市后......
                console.log(res);
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
                    }
                ];
                this.city.localCity = {
                    cityId: 301,
                    cityName: "保山",
                    citySpell: "BAOSHAN",
                    cityFirstLetter: "B",
                }
				this.city2.cityData = [{
					cityId: 290,
					cityName: "阿坝州",
				},
				{
					cityId: 290,
					cityName: "阿坝州2",
				}]
            },
            choiceCity () {
                this.city.isShow = true;
            },
			choiceCity2 () {
				this.city2.isShow = true;
			}
        }
    }
```

### API
* 属性说明

|属性|说明|类型|默认值|是否必传|
|---|----|---|-----|-------|
|simple|是否开启简单模式|Boolean|默认false|否|
|city-data|城市列表数据|Array|数据格式参考`附录`|是|
|local-city|当前城市</br>(根据 lat, lng 参数从接口获取)|Object|数据格式参考`附录`|是|
|star-city|热门城市</br>|Object|数据格式参考`附录`|否|
|on-choose|选中某个城市后的 handle</br>返回一个 Object 对象|Function|-|是|

> 附录

* city-data数据格式:
```javascript
    let cityData = [
        {
    		cityId: 1,
    		cityName: "北京",
    		citySpell: "BEIJING",
    		cityFirstLetter: "B"
    	},
    	{
    		cityId: 4,
    		cityName: "上海",
    		citySpell: "SHANGHAI",
    		cityFirstLetter: "S"
    	},
    	{
    		cityId: 5,
    		cityName: "杭州",
    		citySpell: "HANGZHOU",
    		cityFirstLetter: "H"
    	}]
```

* local-city数据格式:
```javascript
    let localCity = {
		cityId: 1,
		cityName: "北京",
		citySpell: "BEIJING",
		cityFirstLetter: "B"
	   }
```

* star-city数据格式:
```javascript
    let starCity = [
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
        }
    ]
```

### 版本升级
#### 0.2.0
* 基本功能实现
