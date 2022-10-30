! function () {
    var loc = window.location,
        url = loc.href.replace("big5.news.cn/gate/big5/", ""),
        head = null,
        script = document.createElement("script"),
        _url = url.split("?")[0].split("//")[1].split("/")[0].split("www.").reverse()[0], // 获得pure域名
        // _url=loc.host,// 这样会携带www.
        tmpPid = url.match(/\d{5,}/g),
        pid = tmpPid ? tmpPid[0] : null, //pid
        pidLast = pid ? (pid.slice(-2) + "") : null,
        matchTimeReg = new RegExp(/(\/((\d{4,})(\S*\/)))/, "g"),
        switchTimeReg = new RegExp(/((-)|(\/))/, "g");

    if (!url.match(matchTimeReg)) return; // 判断页面是否含有日期，否则不跳转

    var urlTime = url.match(matchTimeReg)[0],
        _urlTime = urlTime.substr(1, urlTime.length - 2).replace(switchTimeReg, ""), // 形如20170505这样的数字
        _tmpTime = _urlTime.slice(0, 4) + "/" + _urlTime.slice(4, 6) + "/" + _urlTime.slice(6, 8), // 形如2017/05/11
        num = (24 * 60 * 60 * 1000), //转换为天
        disDay = ~~((new Date() - new Date(_tmpTime)) / num), //距今时间
        //  src01 = "http://www.xinhuanet.com/global/pageWhiteList/pidContent.js", // 白名单地址1
        src02 = "http://www.xinhuanet.com/global/pageWhiteList/pid", // 白名单地址2
        urls01 = "bj.xinhuanet.com,tj.xinhuanet.com,he.xinhuanet.com,sx.xinhuanet.com,ln.xinhuanet.com,jl.xinhuanet.com,sh.xinhuanet.com,js.xinhuanet.com,zj.xinhuanet.com,ah.xinhuanet.com,fj.xinhuanet.com,jx.xinhuanet.com,sd.xinhuanet.com,ha.xinhuanet.com,hb.xinhuanet.com,hn.xinhuanet.com,gd.xinhuanet.com,gx.xinhuanet.com,hq.xinhuanet.com,cq.xinhuanet.com,sc.xinhuanet.com,gz.xinhuanet.com,yn.xinhuanet.com,tibet.xinhuanet.com,sn.xinhuanet.com,gs.xinhuanet.com,qh.xinhuanet.com,nx.xinhuanet.com,xj.xinhuanet.com,nmg.xinhuanet.com,hlj.xinhuanet.com,bt.xinhuanet.com,wx.xinhuanet.com,csj.xinhuanet.com,tibet.news.cn/english,xizang.news.cn", // 分公司xinhuanet域名
        urls02 = "bj.news.cn,tj.news.cn,he.news.cn,sx.news.cn,ln.news.cn,jl.news.cn,sh.news.cn,js.news.cn,zj.news.cn,ah.news.cn,fj.news.cn,jx.news.cn,sd.news.cn,ha.news.cn,hb.news.cn,hn.news.cn,gd.news.cn,gx.news.cn,hq.news.cn,cq.news.cn,sc.news.cn,gz.news.cn,yn.news.cn,tibet.news.cn,sn.news.cn,gs.news.cn,qh.news.cn,nx.news.cn,xj.news.cn,nmg.news.cn,hlj.news.cn,bt.news.cn,wx.news.cn,csj.news.cn,tibet.news.cn/english,xizang.news.cn", // 分公司news.cn域名
        //  urls03 = "locpg.hk,locpg.gov.cn,www.cidca.gov.cn,www.xiongan.gov.cn,www.emerinfo.cn,zlb.gov.cn,www.cfis.cn,www.en.cfis.cn,www.zgjx.cn,www.chinaja.org.cn,www.qstheory.cn,www.xjwomen.org.cn", // 承建网站域名
        isAllNet_ = (_url == "news.cn" || _url == "www.news.cn" || _url == "www.xinhuanet.com" || _url == "xinhuanet.com" ? true : false), //是否为总网细揽
        isContent_ = (url.indexOf("content_") !== -1 ? true : false), //是否为content_细揽
        isCompanys = (((urls01 + urls02).indexOf(_url) !== -1) && !(_url == "news.cn" || _url == "www.news.cn" || _url == "www.xinhuanet.com" || _url == "xinhuanet.com") ? true : false), //是否为分公司
        isOneYear = (disDay >= 356 ? true : false),
        isTwoYear = ((disDay >= (365 * 2)) ? true : false),
        isCreatWeb = !(isAllNet_ || isCompanys),
        _opt = null;

    console.log("content_类型： " + isContent_, "是否为总网： " + isAllNet_, "是否为分公司： " + isCompanys, "是否为城建网站： " + isCreatWeb, "距今1年： " + isOneYear, "距今2年： " + isTwoYear);
    // console.log(_tmpTime,disDay);


    /*网站白名单，整站不执行跳转*/

    console.log("_url", _url)
    console.log("isAllNet_", isAllNet_)
    if (!pid || url.indexOf("politics") > 0 || url.indexOf("photo") > 0 || url.indexOf("/english") > 0 || url.indexOf("world") > 0 || url.indexOf("/health/xhhkt/") > 0 || url.indexOf("/zgjx") > 0 || url.indexOf("/publish") > 0 || isCreatWeb || url.indexOf("/mrdx") > 0) {
        //if (!pid || url.indexOf("politics") > 0 || url.indexOf("photo") > 0 || url.indexOf("/health/xhhkt/") > 0 || url.indexOf("/zgjx") > 0 || url.indexOf("/publish") > 0 || url.indexOf("index.htm") > 0) {
        return false;
    }

    //  console.log("_url", _url);
    //  console.log(_urlTime);
    //  console.log(isAllNet_, isCompanys, isTwoYear, isOneYear);

    if (isContent_) {
        //
        // console.log(src01+pidLast+".js");
        // console.log("老细揽,直接跳转到别的页面");
        window.location.href = "http://www.xinhuanet.com/webSkipping.htm";
        // script.src=src01;
    } else {
        if (isCompanys) {
            // console.log(src02+pidLast+".js");
            // script.src=src02+pidLast+".js";
            console.log('isCompanys', isCompanys);
            if (isOneYear) {
                script.src = src02 + pidLast + ".js";
            }


        } else {
            console.log('isNotCompanys', isCompanys);
            if (isTwoYear) {
                script.src = src02 + pidLast + ".js";
            }
        }
    }
    script.id = "scriptIdXl";
    head = document.querySelector("head");
    head.appendChild(script);
    script = null;
    window._xlgo_opt = {
        "pid": pid + "",
        "isContent": isContent_,
        "isCompanys": isCompanys,
        "isOneYear": isOneYear,
        "isTwoYear": isTwoYear,
        "oHead": head
    };

    // console.timeEnd();
}(window);

function getLastXl() {
    // console.log(xhPzgeId);
    // return;
    // console.time();
    var sc = document.querySelector("#scriptIdXl"),
        baiList = xhPzgeId.join(","),
        isBai = ((baiList.indexOf(window["_xlgo_opt"]["pid"])) !== -1 ? true : false);
    console.log("isBai", isBai)
    /*var i=0,len=xhPzgeId.length,obj=window["_xlgo_opt"]["pid"]+"";
    for(;i<len;i++){
        if(obj==xhPzgeId[i]){
            console.log(i);
        }
    }
    console.timeEnd();*/
    if (!isBai) {
        // console.log("没 在白名单中");
        window.location.href = "http://www.xinhuanet.com/webSkipping.htm";
    } else {
        // console.log("在白名单中");
        window["_xlgo_opt"]["oHead"].removeChild(sc);
        // delete _xlgo_opt;
        sc = null;
    }
    // console.timeEnd();
}