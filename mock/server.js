const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 首页 —— 广告（超值特惠）
let homeAdData = require('./home/ad.js');
router.get('/api/homead', function (ctx, next) {
    ctx.body = homeAdData;
});
// 首页 —— 推荐列表（猜你喜欢）
let homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', function (ctx, next) {
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    ctx.body = homeListData;
});

// 搜索结果 三个参数
let searchData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function (ctx, next) {
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;
    const paramsCategory = params.category;
    const paramsKeyword = params.keyword;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);
    console.log('当前类别：' + paramsCategory);
    console.log('当前关键词：' + paramsKeyword);

    ctx.body = searchData;
});
// 搜索结果 两个参数
router.get('/api/search/:page/:city/:category', function (ctx, next) {
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;
    const paramsCategory = params.category;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);
    console.log('当前类别：' + paramsCategory);

    ctx.body = searchData;
});

//获取用户订单
let orderListData = require('./orderlist/orderlist.js');
router.get('/api/orderlist/:username', function (ctx, next) {
    const params = ctx.params;
    const username = params.username;

    console.log('当前用户：' + username);

    ctx.body = orderListData;
});

// 开始服务并生成路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);