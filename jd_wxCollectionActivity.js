/*
https://lzkj-isv.isvjcloud.com/wxgame/activity/8530275?activityId=

TG https://t.me/duckjobs

不能并发

JD_CART_REMOVESIZE || 20; // 运行一次取消多全部已关注的商品。数字0表示不取关任何商品
JD_CART_REMOVEALL || true;    //是否清空，如果为false，则上面设置了多少就只删除多少条
7 7 7 7 * jd_wxCollectionActivity.js
*/
const $ = new Env('加购物车抽奖');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', message = '' ;
let activityIdList = [
    'effebcba68144f20ad2b04368d832be6', 
    '17d39c7a4d3d401299505fc848570700', 
    '3b3b7e66e212481984ff1d28435e61d7', 
    '119bc80e9bbd41d0bfbeb0c40cd5a789', 
    '2d0f7fe090e64c6fba31f514ab605c9f', 
    'acab138142c0479fa31fce54a585162c', 
    '3bcdcb229d844ae6b93efe60201d6d38', 
    '1a293403e1b14c819c4825a2bd71c4b2', 
    '1c7be1930f3f4daf8e7dbe63b5b854b8', 
    '04ce5a271883493f87b2dba044b4977c', 
"5409c2b9f6db4591964b712a5ecde939",
"b8713653b084497590c7a333f3a21237",
"3a541178cda644849987889842892ddf",
"bdacfcba95964d04b3e1cf0cb0e186dd",
"2701356dd9f943598d23f8bdcd4066f3",
"bf4fbe2513d54218b7591b083d2e8d93",
"665a70c8ea9d4f49b5bbb62ac313144d",
"4dd8af017ff64e0893d12c54dd602575",
"effebcba68144f20ad2b04368d832be6",
"870ae58047b54b97ab530a934dd04c93",
"73c44e20d81b4fbdaac305afc8c6b752",
"870ae58047b54b97ab530a934dd04c93",
"e1f28a9341724b40ae5a54e036892ba4",
"f7a697297e2e49ef9f13f82612eb3ad4",
"e0c65cb138434f608287d66909cd54c6",
"b6370fed040e472092a5c9efe6ed8dde",
"1deb2cfcca024e49a631f8c38d0932bd",
"93b564966bd842d388026d73dc6a300d",
"a4a52d3fa3d44d87ab1362f28479c25f",
"5218b8cd32d6450ca4c274d16c712fd8",
"3d39b3223a51428da696c0494119451f",
"e17704051f464befabfe05223a889462",
"2344971a8957480fa2af6fe5c5b4115d",
"21e09fbb587c4dfd92431c9739486308",
"fe3071e007fa4661b56a0ce8fed68c6d",
"8a0ad3fc74cd4292afb4bff13e7d8b06",
"12d1661235b549e295000e153e9a3a6e",
"c9c10f1346ae4a62b91d64a424c7bcbd",
"88afd889f39f4024904aae5b5f3fc87d",
"5d80cbd733bb4376ab00d6aa16a76c3e",
"dd2652f44b6a4ad691d273014715c24c",
"24e8dd5d0d2843049c3ee4a0aa458d3c",
"cddba69152894bc586daadaa1c76da49",
"a57870570c8a4654853e8e35e98f6f7a",
"e720561dbcbc47c583a21de653e66cc3",
"2d0f7fe090e64c6fba31f514ab605c9f",
"2dcbf3eeed4e438ab99e204add6429a2",
"35e50a1c2d674d9c80c8f713be5e623e",
"4d4d17632b994c2ab9831442047b1fea",
"5cdb40f4a5814b04b421b7b336c495eb",
"cd3a1e8b2ac94fcfbb21b605803b9020",
"adad061d7ddc4e55af4059255fac4f9e",
"8d207ae60ea944cc911bace506fa742c",
"543c2077cb7e4b1ba59edcf34311a208",
"de50659b20bc4dfe957d473ce799f22c",
"4d63ebec326844e68bafd8f74b953c56",
"3ca8ece6e5424b3a8da015e61659a9d6",
"0935160f681f4e9ca12d4a0780917a92",
"6f8f465e485a47c4b6ab12e111de4226",
"d993362b18414eaab9e6992b80fa62d3",
"1a293403e1b14c819c4825a2bd71c4b2",
"8d32d7717a1941ad887cff22230aada4",
"786c332c5c114ec28a950704c2b58ab7",
"07f38a11528c443181f069ef16be5e6e",
"c506b38e84cc4e06b24bb6ef0c023249",
"6e831b6583d04d498296e86b8966a5ca",
"a14958b3b1b4438aadb1beb0bf160ef0",
"a1ff0b367a9f4148ac19557cf112084b",
"7aba2d4a5a034ab2a0434ed690b22dd5",
"2ba9f8db763842b990f220a0875c989d",
"842d9cf2b51c4aa19ec59e6f37d75d2b",
"f71f790dca0e471dac4d52d42c668d2d",
"70c29ebb6071446293c2544d88f2ecae",
"4375cb1b57ca48ca83bbcdfca28fe377",
"ecf679fd851443a88763ea8aed7fc0b8",
"6818e794a8d143328a819e0a22aced29",
"1a293403e1b14c819c4825a2bd71c4b2",
"e11c896abebd4dbabcc6623694ce29cf",
"17b9ad9eb3524b7aa5f04c7fc08aff0f",
"bd0ad185c9394d8db9596d1b0fb315b7",
"04ce5a271883493f87b2dba044b4977c",
"26c88fc3d0024b77a783d033d7e7520f",
"17b123ab47c04000a0d7797e12165450",
"ef524a4743f84770a63c07a05f1625a9",
"7abe0c11d93c42e8b71e24bf3e1da43c",
"a5d4d61193b64fa8a9aa3ebf94721333",
"23dd764e4157493787a7768d1dc1bcca",
"d325f01ef533489e9425bee08f19a006",
"d77c4a24865b4617be5b1d38f3297241",
"70c29ebb6071446293c2544d88f2ecae",
"fefc33e136044de086ff19bb7b231d5c",
"f9a90dc70d0b491ea16cdfb118a64e99",
"bbaa3a5c5c8d4225a4127110e596313c",
"b2e13a45c6d7432482b3eb5c75158761",
"a05d7aecdd1647508fe68145029b67bb",
"58db299d800c49909962c13f42ae5565",
"5a69a34a834042a7b5cc8e84bd9410e4",
"41c46b17f2924aada81d4299128fb4e9",
"731b7dd27c9048419deba4819ee61656",
"ed58ad6664104f57870044dd0f14d732",
"8a4d0274d2234f89b679df7e0354868b",
"82b2e9dd9e8f405c8c7b2cb4d6c412a9",
"66f87d0f04f04138a6e64425852e70cd",
"ce1a3bb8336b45569dbcefb539d0c525",
"f0ffa62f09f6447b8fcfddaeafd15810",
"c0c2a97214c7468c936220d01d74e556",
"ea646b954b4b49e6a6e9d9a14ee80794",
"a3c755063ee04bbfb59e82d54f159d8e",
"bfc9ebda6e584a36bb339a1edd8538d2",
"3069cd3fa7474166abd58c072232677c",
"b8ff407e33be47959784f5d52a9464a8",
"58db299d800c49909962c13f42ae5565",

]
let lz_cookie = {}

if (process.env.ACTIVITY_ID && process.env.ACTIVITY_ID != "") {
    activityId = process.env.ACTIVITY_ID;
}

if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => !!item);
}
let doPush = process.env.DoPush || false; // 设置为 false 每次推送, true 跑完了推送
let removeSize = process.env.JD_CART_REMOVESIZE || 20; // 运行一次取消多全部已关注的商品。数字0表示不取关任何商品
let isRemoveAll = process.env.JD_CART_REMOVEALL || true;    //是否清空，如果为false，则上面设置了多少就只删除多少条
$.keywords = process.env.JD_CART_KEYWORDS || []
$.keywordsNum = 0;
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    // activityIdList = await getActivityIdList('https://raw.githubusercontent.com/FKPYW/dongge/master/code/wxCollectionActivity.json')
    for(let a in activityIdList){
        activityId = activityIdList[a];
        console.log("开起第 "+ a +" 个活动，活动id："+activityId)
        for (let i = 0; i < cookiesArr.length; i++) {
            if (cookiesArr[i]) {
                cookie = cookiesArr[i]
                originCookie = cookiesArr[i]
                newCookie = ''
                $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
                $.index = i + 1;
                $.isLogin = true;
                $.nickName = '';
                await checkCookie();
                console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
                if (!$.isLogin) {
                    $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
                    if ($.isNode()) {
                        await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                    }
                    continue
                }
                authorCodeList = [
                    '',
                ]
                $.bean = 0;
                $.ADID = getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 1);
                $.UUID = getUUID('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
                $.authorCode = authorCodeList[random(0, authorCodeList.length)]
                $.authorNum = `${random(1000000, 9999999)}`
                $.activityId = activityId
                $.activityUrl = `https://lzkj-isv.isvjcloud.com/wxCollectionActivity/activity2/${$.authorNum}?activityId=${$.activityId}&shareUuid=${encodeURIComponent($.authorCode)}&adsource=null&sid=&un_area=`
                $.drawInfoName = false
                $.getPrize = null;
                await addCart();
                if($.drawInfoName === false || $.getPrize === null){
                    break
                } else if($.getPrize != null && !$.getPrize.includes("京豆")){
                    break
                }
                await $.wait(2000)
                await requireConfig();
                do {
                    await getCart_xh();
                    $.keywordsNum = 0
                    if($.beforeRemove !== "0"){
                        await cartFilter_xh(venderCart);
                        if(parseInt($.beforeRemove) !== $.keywordsNum) await removeCart();
                        else {
                            console.log('由于购物车内的商品均包含关键字，本次执行将不删除购物车数据')
                            break;
                        }
                    } else break;
                } while(isRemoveAll && $.keywordsNum !== $.beforeRemove)
                if ($.bean > 0) {
                    message += `\n【京东账号${$.index}】${$.nickName || $.UserName} \n       └ 获得 ${$.bean} 京豆。`
                }
            }
        }
        await $.wait(3000)
    }
    if (message !== '') {
        if ($.isNode()) {
            await notify.sendNotify($.name, message, '', `\n`);
        } else {
            $.msg($.name, '有点儿收获', message);
        }
    }
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


async function addCart() {
    $.token = null;
    $.secretPin = null;
    $.venderId = null;
    await getFirstLZCK()
    await getToken();
    await task('customer/getSimpleActInfoVo', `activityId=${$.activityId}`, 1)
    if ($.token) {
        await getMyPing();
        if ($.secretPin) {
            await task('common/accessLogWithAD', `venderId=${$.venderId}&code=6&pin=${encodeURIComponent($.secretPin)}&activityId=${$.activityId}&pageUrl=${$.activityUrl}&subType=app&adSource=tg_xuanFuTuBiao`, 1);
            // await task('wxActionCommon/getUserInfo', `pin=${encodeURIComponent($.secretPin)}`, 1)
            await task('activityContent', `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}`)
            if ($.activityContent.drawInfo.name.includes("京豆")) {
                $.log("-> 加入购物车")
                for(let i in $.activityContent.cpvos){
                    await $.wait(1000)
                    await task('addCart', `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}&productId=${$.activityContent.cpvos[i].skuId}`)
                }
                $.log("-> 抽奖")
                await $.wait(1000)
                await task('getPrize', `activityId=${$.activityId}&pin=${encodeURIComponent($.secretPin)}`)
            } else {
                $.log("未能成功获取到活动信息")
            }
        } else {
            $.log("没有成功获取到用户信息")
        }
    } else {
        $.log("没有成功获取到用户鉴权信息")
    }
}

function task(function_id, body, isCommon = 0) {
    return new Promise(resolve => {
        $.post(taskUrl(function_id, body, isCommon), async (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {

                    if (data) {
                        data = JSON.parse(data);
                        if (resp['headers']['set-cookie']) {
                            cookie = `${originCookie};`
                            for (let sk of resp['headers']['set-cookie']) {
                                lz_cookie[sk.split(";")[0].substr(0, sk.split(";")[0].indexOf("="))] = sk.split(";")[0].substr(sk.split(";")[0].indexOf("=") + 1)
                            }
                            for (const vo of Object.keys(lz_cookie)) {
                                cookie += vo + '=' + lz_cookie[vo] + ';'
                            }
                        }
                        if (data.result) {
                            switch (function_id) {
                                case 'customer/getSimpleActInfoVo':
                                    $.jdActivityId = data.data.jdActivityId;
                                    $.venderId = data.data.venderId;
                                    $.activityShopId = data.data.venderId;
                                    break;
                                case 'activityContent':
                                    $.activityContent = data.data;
                                    $.drawInfoName = $.activityContent.drawInfo.name.includes("京豆")
                                    break;
                                case 'addCart':
                                    console.log(data.data)
                                    break
                                case 'getPrize':
                                    console.log(data.data.name)
                                    $.getPrize = data.data.name;
                                    if (doPush === true) {
                                        if (data.data.name) {
                                            message += data.data.name + " "
                                        }
                                    } else {
                                        // await notify.sendNotify($.name, data.data.name, '', `\n`);
                                    }
                                    break
                                default:
                                    $.log(JSON.stringify(data))
                                    break;
                            }
                        }
                    } else {
                        // $.log("京东没有返回数据")
                    }
                }
            } catch (error) {
                $.log(error)
            } finally {
                resolve();
            }
        })
    })
}
function taskUrl(function_id, body, isCommon) {
    return {
        url: isCommon ? `https://lzkj-isv.isvjcloud.com/${function_id}` : `https://lzkj-isv.isvjcloud.com/wxCollectionActivity/${function_id}`,
        headers: {
            Host: 'lzkj-isv.isvjcloud.com',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            Origin: 'https://lzkj-isv.isvjcloud.comm',
            'User-Agent': `jdapp;iPhone;9.5.4;13.6;${$.UUID};network/wifi;ADID/${$.ADID};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
            Connection: 'keep-alive',
            Referer: $.activityUrl,
            Cookie: cookie
        },
        body: body

    }
}

function getMyPing() {
    let opt = {
        url: `https://lzkj-isv.isvjcloud.com/customer/getMyPing`,
        headers: {
            Host: 'lzkj-isv.isvjcloud.com',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            Origin: 'https://lzkj-isv.isvjcloud.com',
            'User-Agent': `jdapp;iPhone;9.5.4;13.6;${$.UUID};network/wifi;ADID/${$.ADID};model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
            Connection: 'keep-alive',
            Referer: $.activityUrl,
            Cookie: cookie,
        },
        body: `userId=${$.activityShopId}&token=${$.token}&fromType=APP&riskType=1`
    }
    return new Promise(resolve => {
        $.post(opt, (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {
                    if (resp['headers']['set-cookie']) {
                        cookie = `${originCookie};`
                        for (let sk of resp['headers']['set-cookie']) {
                            lz_cookie[sk.split(";")[0].substr(0, sk.split(";")[0].indexOf("="))] = sk.split(";")[0].substr(sk.split(";")[0].indexOf("=") + 1)
                        }
                        for (const vo of Object.keys(lz_cookie)) {
                            cookie += vo + '=' + lz_cookie[vo] + ';'
                        }
                    }
                    if (data) {
                        data = JSON.parse(data)
                        if (data.result) {
                            $.log(`你好：${data.data.nickname}`)
                            $.pin = data.data.nickname;
                            $.secretPin = data.data.secretPin;
                        } else {
                            $.log(data.errorMessage)
                        }
                    } else {
                        $.log("京东返回了空数据")
                    }
                }
            } catch (error) {
                $.log(error)
            } finally {
                resolve();
            }

        })
    })
}
function getFirstLZCK() {
    return new Promise(resolve => {
        $.get({ url: $.activityUrl }, (err, resp, data) => {
            try {
                if (err) {
                    console.log(err)
                } else {
                    if (resp['headers']['set-cookie']) {
                        cookie = `${originCookie};`
                        for (let sk of resp['headers']['set-cookie']) {
                            lz_cookie[sk.split(";")[0].substr(0, sk.split(";")[0].indexOf("="))] = sk.split(";")[0].substr(sk.split(";")[0].indexOf("=") + 1)
                        }
                        for (const vo of Object.keys(lz_cookie)) {
                            cookie += vo + '=' + lz_cookie[vo] + ';'
                        }
                    }
                }
            } catch (error) {
                console.log(error)
            } finally {
                resolve();
            }
        })
    })
}
function getToken() {
    let opt = {
        url: `https://api.m.jd.com/client.action?functionId=isvObfuscator`,
        headers: {
            Host: 'api.m.jd.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: '*/*',
            Connection: 'keep-alive',
            Cookie: cookie,
            'User-Agent': 'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)',
            'Accept-Language': 'zh-Hans-CN;q=1',
            'Accept-Encoding': 'gzip, deflate, br',
        },
        body: `body=%7B%22url%22%3A%20%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=72124265217d48b7955781024d65bbc4&client=apple&clientVersion=9.4.0&st=1621796702000&sv=120&sign=14f7faa31356c74e9f4289972db4b988`
    }
    return new Promise(resolve => {
        $.post(opt, (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.code === "0") {
                            $.token = data.token
                        }
                    } else {
                        $.log("京东返回了空数据")
                    }
                }
            } catch (error) {
                $.log(error)
            } finally {
                resolve();
            }
        })
    })
}
function random(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}
function strToJson(str){
	var json = eval('(' + str + ')');
	return json;
}
function requireConfig(){
    return new Promise(resolve => {
        if($.isNode() && process.env.JD_CART){
            if(process.env.JD_CART_KEYWORDS){
                $.keywords = process.env.JD_CART_KEYWORDS.split('@')
            }
        }
        resolve()
    })
}
function getCart_xh(){
    console.log('正在获取购物车数据...')
    return new Promise((resolve) => {
        const option = {
            url: 'https://p.m.jd.com/cart/cart.action?fromnav=1&sceneval=2',
            headers: {
                "Cookie": cookie,
                "User-Agent": "jdapp;JD4iPhone/167724 (iPhone; iOS 15.0; Scale/3.00)",
            },
        }
        $.get(option, async(err, resp, data) => {
            try{
                data = strToJson(getSubstr(data, "window.cartData = ", "window._PFM_TIMING"));
                $.areaId = data.areaId;   // locationId的传值
                $.traceId = data.traceId; // traceid的传值
                venderCart = data.cart.venderCart;
                postBody = 'pingouchannel=0&commlist=';
                $.beforeRemove = data.cartJson.num
                console.log(`获取到购物车数据 ${$.beforeRemove} 条`)
            } catch(e){
                $.logErr(e, resp);
            } finally{
                resolve(data);
            }
        });
    })
}
function cartFilter_xh(cartData){
    console.log("正在整理数据...")
    let pid;
    $.pushed = 0
    for(let cartJson of cartData){
        if($.pushed === removeSize) break;
        for(let sortedItem of cartJson.sortedItems){
            if($.pushed === removeSize) break;
            pid = typeof (sortedItem.polyItem.promotion) !== "undefined" ? sortedItem.polyItem.promotion.pid : ""
            for(let product of sortedItem.polyItem.products){
                if($.pushed === removeSize) break;
                let mainSkuName = product.mainSku.name
                $.isKeyword = false
                $.isPush = true
                for(let keyword of $.keywords){
                    if(mainSkuName.indexOf(keyword) !== -1){
                        $.keywordsNum += 1
                        $.isPush = false
                        $.keyword = keyword;
                        break;
                    } else $.isPush = true
                }
                if($.isPush){
                    let skuUuid = product.skuUuid;
                    let mainSkuId = product.mainSku.id
                    if(pid === "") postBody += `${mainSkuId},,1,${mainSkuId},1,,0,skuUuid:${skuUuid}@@useUuid:0$`
                    else postBody += `${mainSkuId},,1,${mainSkuId},11,${pid},0,skuUuid:${skuUuid}@@useUuid:0$`
                    $.pushed += 1;
                } else {
                    console.log(`\n${mainSkuName}`)
                    console.log(`商品已被过滤，原因：包含关键字 ${$.keyword}`)
                    $.isKeyword = true
                }
            }
        }
    }
    postBody += `&type=0&checked=0&locationid=${$.areaId}&templete=1&reg=1&scene=0&version=20190418&traceid=${$.traceId}&tabMenuType=1&sceneval=2`
}
function removeCart(){
    console.log('正在删除购物车数据...')
    return new Promise((resolve) => {
        const option = {
            url: 'https://wq.jd.com/deal/mshopcart/rmvCmdy?sceneval=2&g_login_type=1&g_ty=ajax',
            body: postBody,
            headers: {
                "Cookie": cookie,
                "User-Agent": "jdapp;JD4iPhone/167724 (iPhone; iOS 15.0; Scale/3.00)",
                "referer": "https://p.m.jd.com/",
                "origin": "https://p.m.jd.com/"
            },
        }
        $.post(option, async(err, resp, data) => {
            try{
                data = JSON.parse(data);
                $.afterRemove = data.cartJson.num
                if($.afterRemove < $.beforeRemove){
                    console.log(`删除成功，当前购物车剩余数据 ${$.afterRemove} 条\n`)
                    $.beforeRemove = $.afterRemove
                } else {
                    console.log('删除失败')
                    console.log(data.errMsg)
                    isRemoveAll = false;
                }
            } catch(e){
                $.logErr(e, resp);
            } finally{
                resolve(data);
            }
        });
    })
}
function getSubstr(str, leftStr, rightStr){
    let left = str.indexOf(leftStr);
    let right = str.indexOf(rightStr, left);
    if(left < 0 || right < left) return '';
    return str.substring(left + leftStr.length, right);
}
function getActivityIdList(url) {
    return new Promise(resolve => {
        const options = {
            url: `${url}?${new Date()}`, "timeout": 10000, headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
            }
        };
        $.get(options, async (err, resp, data) => {
            try {
                if (err) {
                    $.log(err)
                } else {
                if (data) data = JSON.parse(data)
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}
function getUUID(format = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', UpperCase = 0) {
    return format.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        if (UpperCase) {
            uuid = v.toString(36).toUpperCase();
        } else {
            uuid = v.toString(36)
        }
        return uuid;
    });
}
function checkCookie() {
    const options = {
        url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
        headers: {
            "Host": "me-api.jd.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Cookie": cookie,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1",
            "Accept-Language": "zh-cn",
            "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
            "Accept-Encoding": "gzip, deflate, br",
        }
    };
    return new Promise(resolve => {
        $.get(options, (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.retcode === "1001") {
                            $.isLogin = false; //cookie过期
                            return;
                        }
                        if (data.retcode === "0" && data.data.hasOwnProperty("userInfo")) {
                            $.nickName = data.data.userInfo.baseInfo.nickname;
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}
// prettier-ignore
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
