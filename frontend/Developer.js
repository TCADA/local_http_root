//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 主程序。
//// 本文件从2020年6月11日开始纳入到Git的文件版本管理。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////


//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Title数据定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function Title() {
    this.pic        = "./images/Developer/Developer.png";               // 图片名链接
    this.ratio      = 0.1852;                                           // 图片宽度：高度
    this.title      = "Software Development";                           // 应用主名称
    this.subtitle   = "tcada: u6508004@alumni.anu.edu.au;Fx12345";      // 应用说明
    this.color      = "#FFFFFF";                                        // 显示文字颜色
    this.min        = 700;                                              // 桌面最小宽度
    this.max        = 1400;                                             // 桌面最大宽度
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Google API
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function GoogleHeader() {
    this.title    = "Google API";
    this.subtitle = "Meet your Development challenges head on with Google services.";
    this.pic      = "./images/Developer/GoogleAPI.png";
    this.link     = "https://www.jianshu.com/p/cb02e9016293";
}

function GoogleDoc1() {
    this.title = "参考资料链接";
    this.dir   = "https://";
    this.data = [
                ["www.youtube.com/watch?v=UrrWxyq1Z48", "1. Python Google Map API"],
                ["developers.google.com/apis-explorer", "2. Google API官网"],
                ["www.jianshu.com/p/cb02e9016293",      "3. Google API中文指南"],
                ["cloud.google.com",                    "4. Google Cloud"]];
}
function GoogleDoc2() {
    this.title = "实用工具";
    this.dir   = "https://";
    this.data = [ 
                ["snippet-generator.app",               "1. 代码片段生成器"],
                ["logomakr.com/",                       "2. LOGO 制作网站"],
                ["github.com/",                         "3. Github官网"]];
}


//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Huawei API
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function HWHeader() {
    this.title    = "Huawei API";
    this.subtitle = "Educational testing service in Chatswood, New South Wale";
    this.pic      = "./images/Developer/HuaweiAPI.png";
    this.link     = "https://developer.huawei.com/consumer/cn/";
}

function HWDoc() {
    this.title = "参考资料和工具链接";
    this.dir   = "";
    this.data = [
                ["https://www.youtube.com/watch?v=PG_tJW_F-Yg", "1. 用 Android Studio 开发简单 APP"],
                ["https://www.w3cschool.cn/java/",              "2. Java教程"],
                ["https://www.youtube.com/watch?v=2zGjWXdVOOU", "4. 安卓UI设计规范"],
                ["http://www.yibanquan.com.cn/",                 "5. 软件著作权申请"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 网站开发
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function XCHeader() {
    this.title    = "网站开发";
    this.subtitle = "Keep going, and if you're not there yet, you were closer than yesterday.";
    this.pic      = "./images/Developer/Chenxuanwei.png";
    this.link     = "https://chenxuanwei.com/";
}

function XCDoc1() {
    this.title = "自定义JS控件";
    this.dir   = "http:./JS/";
    this.data = [
                ["HelloWorld.html", "Hello Word"],
                ["Input.html",      "Input"], 
                ["Color.html",      "变换颜色"],
                ["Button.html",     "按钮控件"],
                ["Animate.html",    "动画控件"],
                ["Keyboard.html",   "键盘控制"],
                ["Scrach.html",     "刮刮乐"],
                ["Clock.html",      "时钟功能"],
                ["Timer.html",      "定时器"],
                ["Timeline.html",   "时间线"]];
        }

function XCDoc2() {
    this.title = "自定义Jason控件";
    this.dir   = "http:./JSon/";
    this.data = [
        ["Json.html",       "JSON定义"],
        ["Test.java",       "Java测试代码"]];
}


//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 网站开发Java Script
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function JSHeader() {
    this.title    = "JS前端学习资料";
    this.subtitle = "web前端,网页制作,javascript（JS）基础入门及系列教程";
    this.pic      = "./images/Developer/JSFront.png";
    this.link     = "https://zhuanlan.zhihu.com/p/38404087";
}

function JSDoc1() {
    this.title = "1. JS实用资料";
    this.dir   = "";
    this.data = [
                ["https://www.w3school.com.cn/js/index.asp",  "01. W3School JS教程"]];
}

function JSDoc2() {
    this.title = "1. JS入门与基础";
    this.dir   = "https://www.youtube.com/watch?v=";
    this.data = [
                ["VQB1pJKQSus&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=1",  "01. Web前端发展史"],
                ["v6ofH3LEYq4&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=2",  "02. JS介绍入门"],
                ["JZvgMHqiT4U&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=3",  "03. 运算符"],
                ["e8Kus1nC-Rg&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=4",  "04. 控制语句"],
                ["k1SKee6QNOg&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=5",  "05. 初始引入值"],
                ["JxZp4MpRlAI&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=6",  "06. 类型转换"],
                ["3WSITnb0S68&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=7",  "07. 函数（上）"],
                ["33fhbNdyVYc&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=8",  "08. 函数（下）"],
                ["Yas_MUY9ND4&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=9",  "09. 预编译（上）"],
                ["9eM6Lj-48qA&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=10", "10. 预编译（下）"]];
}

function JSDoc3() {
    this.title = "2. JS进阶";
    this.dir   = "https://www.youtube.com/watch?v=";
    this.data = [
                ["3z8NXtaH9mg&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=11", "11. 作用域"],
                ["WZaOl9W7kl8&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=12", "12. 立即执行函数"],
                ["g61LhnDSt7g&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=13", "13. 闭包"],
                ["WnYqOlOH5do&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=14", "14. 包装类（上）"],
                ["-vL7SoyGC64&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=15", "15. 包装类（下）"],
                ["6G3yZcpzhuM&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=16", "16. 原型链（上）"],
                ["962RG-5daj4&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=17", "17. 原型链（下）"],
                ["RNL1t20-ah8&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=18", "18. 继承（上）"],
                ["fn8Wq1vEFHE&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=19", "19. 继承（下）"],
                ["GafujjYqXyA&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=20", "20. 习题（上）"],
                ["a3zTHbnK0vc&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=21", "21. 习题（下）"],
                ["PwlOMqouL8E&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=22", "22. 克隆"],
                ["kkxO-KvqMHU&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=23", "23. 数组"],
                ["xnoljANHbCU&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=24", "24. 类数组"],
                ["2y3MgWE7eRU&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=25", "25. 数组去重（上）"],
                ["AmBKUd6fo9Q&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=26", "26. 数组去重（下）"],
                ["A60qlD7Hj20&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=27", "27. ES5"]];
}

function JSDoc4() {
    this.title = "3. DOM，BOM and JSON";
    this.dir   = "https://www.youtube.com/watch?v=";
    this.data = [
                ["D4PjakOM7fA&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=28", "28. Dom初探"],
                ["MynljviEhwA&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=29", "29. 节点类型"],
                ["sMHMUvxrsco&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=30", "30. 继承树（上）"],
                ["heV8fA4izrs&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=31", "31. 继承树（下）"],
                ["tRbj4KrCXxE&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=32", "32. 定时器（上）"],
                ["Gw21UMq2CIU&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=33", "33. 定时器（下）"],
                ["ulMXKJUkFh4&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=34", "34. CSS（上）"],
                ["TsrzY7WS72o&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=35", "35. CSS（下）"],
                ["HsiU-Jh3sio&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=36", "36. 事件"],
                ["n8oy3YHKQww&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=37", "37. 封装兼容性"],
                ["mIq-2s_k1t4&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=38", "38. 事件分类"],
                ["qcBiES5g-oc&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=39", "39. 时间线（上）"],
                ["Sh4uoY634TQ&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=40", "40. 时间线（下）"],
                ["SMKNAFl5xyk&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=41", "41. 正则表达式（上）"],
                ["3NEQBSCE6Eo&list=PL9nxfq1tlKKnmrO_xsXkBHNFUuZ-02268&index=42", "42. 正则表达式（下）"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 网站开发JSON & AJAX
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function AJAXHeader() {
    this.title    = "JSON & AJAX";
    this.subtitle = "尚硅谷JavaWeb之JSON&Ajax";
    this.pic      = "./images/Developer/Atguigu.png";
    this.link     = "https://www.w3school.com.cn/ajax/index.asp";
}

function AJAXDoc1() {
    this.title = "1. JS实用资料";
    this.dir   = "https://www.youtube.com/watch?v=";
    this.data = [
                ["FWpcI7_3x1Q&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=246&t=0s",  "01. 什么是JSON"],
                ["RLToxZyJ0iE&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=245",       "02. JSON的定义"],
                ["KTBsV165_D0&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=246",       "03. JS中的JSON的转换方法"],
                ["RHS7IKUkB0c&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=247",       "04. JavaBean与json"],
                ["ttj-JQS6zio&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=248",       "05. List与json"],
                ["HrgUZsK36l0&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=249",       "06. Map与json"],
                ["f0YGtREBGqw&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=250",       "07. 什么是AJAX请求"]];
}

function AJAXDoc2() {
    this.title = "1. JS入门与基础";
    this.dir   = "https://www.youtube.com/watch?v=";
    this.data = [
                ["o4UhToIjre0&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=251",       "08. 原生JS的AJAX请求示例"],
                ["-P77APN_JKQ&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=252",       "09. AJAX请求的特点"],
                ["2GMC2dfeWdA&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=253",       "10. jQuery的ajax方法"],
                ["qYFUhZmp0Pc&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=254",       "11. jQuery的get和post方法"],
                ["fdc37Rz_7_E&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=255",       "12. jQuery的getJSON方法"],
                ["SU7K3sPrRjw&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=256",       "13. jQuery的serialize方法"],
                ["zV_b-4EiNhI&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=257",       "14. 请求验证用户名是否可用"]];
}

function AJAXDoc3() {
    this.title = "2. JS进阶";
    this.dir   = "https://www.youtube.com/watch?v=";
    this.data = [
        ["9UZiWe1oX64&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=258",       "15. 请求修改添加商品到购物车"],
        ["E9lxQ_cVWxo&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=259",       "16. i18n国际化"],
        ["qi90D8eq1RM&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=260",       "17. i18n国际化三要素"],
        ["po07bNUFXVE&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=261",       "18. i18n国际化基础"],
        ["MhRjrypnC2Q&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=262",       "19. 请求头实现"],
        ["PRz-UBgqnoM&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=263",       "20. 语言类型选择"],
        ["xC_dHdPHuVo&list=PLmOn9nNkQxJGJVS8ZqBcbjkxPh0OuaW2E&index=264",       "21. JSTL标签库fmt"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 网站开发Visual Studio Code
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function VSCHeader() {
    this.title    = "Visio Studio Code";
    this.subtitle = "Free. Built on open source. Runs everywhere.";
    this.pic      = "./images/Developer/Vscode.png";
    this.link     = "https://code.visualstudio.com/";
}

function VSCDoc1() {
    this.title = "1. VSCode 入门教程";
    this.dir   = "https://www.youtube.com/watch?v=";
    this.data = [
                ["HfHsX2yxfNg&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=1",   "01. VSCode入门课程介绍"],
                ["8QOxxs6XJoM&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=4",   "04. 安装VSCode"],
                ["ybcoXlTrmmM&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=11",  "12. 搭建Git环境"],
                ["bK7dr7eG6KM&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=14",  "15. VSCode中使用Git-1"],
                ["okSG4I99XuY&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=15",  "16. VSCode中使用Git-2"],
                ["vmii_pB44gs&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=17",  "18. 搭建Node.js开发环境"],
                ["2Q_FeLtgXcI&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=20",  "21. VSCode调试程序"],
                ["4Jqnf-E9VSY&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=23",  "24. 介绍launch.json"],
                ["Fv_0UDflXbk&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=24",  "25. 调试技巧"],
                ["MWjDx_bFsAI&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=29",  "30. VSCode扩展"],
                ["tkmHvPAK6Ik&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=30",  "31. Command Palette"],
                ["j2u-quDMWWk&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=31",  "32. Settings"],
                ["rbWDQPvM-jQ&list=PLNEp_Xli9W_lUQTtRYG7883bGah63UkNB&index=35",  "33. User Snippets"]];
}

function VSCDoc2() {
    this.title = "2. 经验总结";
    this.dir   = "";
    this.data = [
                ["http:./Document/Study/Notes/Git常用命令.pdf",        "02. Git常用命令"]];


}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
////  学习资料
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function StudyHeader() {
    this.title    = "以学愈愚";
    this.subtitle = "贵有恒何必三更眠五更起，最无益只怕一日曝十日寒。";
    this.pic      = "./images/Developer/Study.png";
    this.link     = "http:./Document/Novel/称傲牛熊市的秘密.pdf";
}

function StudyOther() {
    this.title = "1. 杂书";
    this.dir   = "http:./document/Study/Others/";
    this.data = [
                ["2018教育调研报告.pdf",                         "2018教育调研报告"],
                ["OMAHA白皮书.pdf",                             "OMAHA白皮书"],
                ["称傲牛熊市的秘密.pdf",                            "称傲牛熊市的秘密"],
                ["美国陷阱.pdf",                                    "美国陷阱"],
                ["自由在高处.pdf",                                  "自由在高处"]];
}

function StudyProgram() {
    this.title = "2. 编程语言";
    this.dir   = "http:./document/Study/Program/";
    this.data = [
                ["你不知道的JS_上.pdf",                       "你不知道的JS（上）"],
                ["你不知道的JS_中.pdf",                       "你不知道的JS（中）"],
                ["你不知道的JS_下.pdf",                       "你不知道的JS（下）"],
                ["Java教程.pdf",                            "Java教程"],
                ["Python教程.pdf",                          "Python教程"],
                ["Scratch.pdf",                             "Scratch"],
                ["tkinter教程.pdf",                         "tkinter教程"],
                ["计算器算法说明.pdf",                        "计算器算法说明"],
                ["谭浩强(C语言).pdf",                         "谭浩强(C语言)"]]
}

function StudyAI() {
    this.title = "3. DA与AI";
    this.dir   = "http:./document/Study/AI/";
    this.data = [
                ["mada.pdf",                                    "MADA program"],
                ["Path2DA.pdf",                                 "Path 2 Data Analytics"],
                ["Pattern_recoginition.pdf",                    "Pattern Recoginition"],
                ["人工智能.pdf",                                "Aritificial Intelligence"],
                ["信息檢索導論.pdf",                            "Information Retrieve"],
                ["数据挖掘概念与技术.pdf",                      "Data Mining"],
                ["机器学习.pdf",                                "Machine Learning"],
                ["神經網絡與深度學習.pdf",                         "Nerual Network"]];
}
