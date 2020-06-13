//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 自定义标准控件。
//// Date: 2020年6月3日
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Header数据定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
var WebAddr = "https://127.0.0.1:8888/"
function Header() {
    this.copy  = "Copyright by ©TCADA in 2020; All rights reserved.";
    this.alink = "https://www.chenxuanwei.com";
    this.about = "./images/header/about.png";    
    this.data  = [
                    ["Homepage",        "http://127.0.0.1:8888/tony.html"],
                    ["Youtube",         "https://www.youtube.com"],
                    ["Google",          "http://www.google.com.au"],
                    ["HW APP",          "https://developer.huawei.com/consumer/cn/"],
                    ["Translate",       "https://translate.google.com/"],
                    ["Maps",            "https://www.google.com.au/maps"],
                    ["Palette",         "http://127.0.0.1:8888/Palette.html"],
                    ["Sudoku",          "http://127.0.0.1:8888/sudoku.html"],
                    ["Math",            "http://127.0.0.1:8888/Math.html"],
                    ["Developer",       "http://127.0.0.1:8888/Developer.html"],
                    ["previous",        "http://127.0.0.1:8888/Tony1.html"]];
}
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// HotSpot数据定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function HotSpot() {
    this.path = "./images/hotspot/";
    this.data = [
        ["Youtube.png",         "https://www.youtube.com/"],
        ["Google.png",          "http://www.google.com.au/"],
        ["Translate.png",       "https://translate.google.com/"],
        ["Map.png",             "https://www.google.com.au/maps/"],
        ["Sina.png",            "https://www.sina.com.cn/"],
        ["Baidu.png",           "http://www.baidu.com/"],
        ["Chenxuanwei.png",     "http://chenxuanwei.com/"],
        ["Gmail.png",           "https://mail.google.com/"],
        ["ANUemail.png",        "https://outlook.office.com/owa"],
        ["126.png",             "http://hw.mail.163.com/#126"]];
}

//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 自定义类库。
//// Copyright by TCADA in 2020
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// desktop initialization
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function initHeader(title) {
    console.log("initHeader()");
    var header = new Header();

    //// 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 BOM重定义 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
    var frame  = new Xwin(title.min, title.max); 
    var width  = frame.getWidth();

    //// 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 draw header 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
    var table = createTable(document.body, 0, 0, width, 25);
    var scale = width / header.data.length;
    for (var index = 0; index < header.data.length; index ++) {
        var td = createTd(table, scale, index);
        createLink(td, link = header.data[index][1], text = header.data[index][0], size = 15);
    }
    
    //// 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵 draw header 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
    var top = parseInt(table.style.top) + parseInt(table.style.height);
    var height = width * title.ratio;

    // 添加容器
    var div = createDiv(document.body, top, 0, width, height);
    //// 画背景图
    createImg(div, title.pic, 0, 0, width, height);
    //// 显示文字说明
    createText(div, title.title,    40, height * 0.30, width * 0.50, title.color, align = "center");
    createText(div, title.subtitle, 20, height * 0.65, width * 0.60, title.color, align = "center");
    createText(div, header.copy,    15, height * 0.95, width * 0.99, title.color, align = "rightBottom");
    
    //// 显示about和prompt
    var about = createLink(div, header.alink);
    createImg(div, file = header.about, top = 6, left = 6, 50, 50);

    var scale = height * 0.45;
    if (title.plink && title.prompt) {
        var prompt = createLink(div, title.plink);
        createImg(div, file = title.prompt, height - scale * 1.3, scale * 2, scale, scale);
    }
    return div;
}

//// 显示Topic Title
Element.prototype.nextTitle = function(ctrl) {
    
    var textColor   = "#263238";
    var titleBorder = "3px solid #37474F";
    var height      = 140;

    var top   = parseInt(this.style.top) + parseInt(this.style.height) + 10;
    var width = parseInt(this.style.width);
 
    /// 添加容器
    var div = createDiv(document.body, top, 0, width, height);
    div.style.border = titleBorder;

    //// 添加图片部分
    var link = createLink(div, link = ctrl.link, text = null, size = 0);
    createImg(link, file = ctrl.pic, top = 10, left = 40, 160, 80);

    //// 添加文字Title
    var title = createDiv(div, 30, 220, width - 220, 30);
    title.style.border = "";
    createText(title, text = ctrl.title, size = 50, top = 0, left = 0, color = textColor, align = "leftTop");

    //// 添加文字Subtitle
    var subtitle = createDiv(div, 110, 40, width - 50, 20);
    subtitle.style.border = "";
    createText(subtitle, text = ctrl.subtitle, size = 15, top = 0, left = 0, color = textColor, align = "leftTop");

    return div;
}

//// 显示Topic Body
Element.prototype.nextBody = function(ctrl, height) {

    var textColor   = "#263238";
    var titleBorder = "3px solid #37474F";

    var top   = parseInt(this.style.top) + parseInt(this.style.height) + 10;
    var width = parseInt(this.style.width);
 
    /// 添加容器
    var div = createDiv(document.body, top, 0, width, height);
    div.style.border = "";
    var width = (parseInt(this.style.width)) / ctrl.length;
    
    for (var index = 0; index < ctrl.length; index ++) {
        var handle = ctrl[index];
        var sub = createDiv(div, 0, width * index, width - 6, height);
        sub.style.border = titleBorder;

        var title = createDiv(sub, 2, 0, width - 10, 20);
        title.style.border = "";
        var text = createText(title, handle.title, size = 16, 0, 10, color = textColor, align = "leftTop");
        text.style.border = "";

        for (var i = 0; i < handle.data.length; i ++) {
            var link = handle.dir + handle.data[i][0];
            var item = createDiv(sub, 40 + 24 * i, 5, width - 10, 24);
            item.style.border = "";
            createLink(item, link = link, text = handle.data[i][1], size = 16);
        }
    }
    return div;
}
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// displayHostspot设计。
Element.prototype.nextHotspot = function(ctrl, height) {

    var top   = parseInt(this.style.top) + parseInt(this.style.height) + 10;
    var width = parseInt(this.style.width);

    var div = createDiv(document.body, top, 0, width, height);

    var scale = width / ctrl.data.length;
    var blankW = scale * 0.1; 
    var blankH = (height - scale * 0.4) * 0.5;

    // 显示图片式链接。
    for (var index = 0; index < ctrl.data.length; index ++) {
        var link = createLink(div, ctrl.data[index][1]);

        createImg(link, file = ctrl.path + ctrl.data[index][0], 
            blankH, blankW + scale * index, scale * 0.8, scale * 0.4);

        }

    return div
}


//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 窗口类. BOM功能
function Xwin(min, max) {
    this.min = min;
    this.max = max;
    //// 获取屏幕内部的宽度和高度
    this.getViewDimention = function() {
        if (window.innerWidth) {
            return {
                w: window.innerWidth,                       h: window.innerHeight
            }
        } else if (document.compatMode == "BackCompat") {
            return {
                w: document.body.clientWidth,               h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,    h: document.documentElement.clientHeight
            }
        }
    };

    //// 获取调整后的屏幕宽度
    this.getWidth = function() {
        var width  = this.getViewDimention().w;

        if (width < this.min) { 
            return this.min;
        } else if (width > max) {
            return this.max;
        } else {
            return width - 5;
        }
    };
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 创建一个通用容器.
function createDiv(parent, top, left, width, height) {
    var div = document.createElement("div");
    parent.appendChild(div);

    div.style.position   = "absolute";
    div.style.background = "#455A64";
    div.style.border     = "2px solid #263238";

    div.style.top    = top + "px";
    div.style.left   = left + "px";
    div.style.width  = width + "px";
    div.style.height = height + "px";

    return div;
}

//// 创建一个表格容器
function createTable(parent, top, left, width, height) {

    var table = document.createElement("table");
    parent.appendChild(table);

    table.style.position   = "absolute";
    table.style.background = "#455A64";
    table.style.fontSize   = "16px";
    table.style.textAlign  = "center";

    table.style.top    = top    + "px";
    table.style.left   = left   + "px";
    table.style.width  = width  + "px";
    table.style.height = height + "px";
    return table;
}

//// 创建一个表格项目的容器
function createTd(parent, scale, index) {
    var td = document.createElement("td");
    parent.appendChild(td);

    td.style.position = "absolute";
    td.style.width    = scale + "px";
    td.style.left     = index * scale + "px";
    return td;
}

//// 创建一个按钮
function createBtn(parent, top, left, width, height, callback, tag, text, background, color, size, border) {
    var btn = document.createElement("button");
    parent.appendChild(btn);
    btn.style.position = "absolute";
    btn.style.top    = top    + "px";
    btn.style.left   = left   + "px";
    btn.style.width  = width  + "px";
    btn.style.height = height + "px";
    btn.style.border = "";
    btn.style.fontSize = size + "px";
    btn.style.color  = color;
    btn.innerHTML    = text;
    btn.style.background = background;
    btn.onmouseover = function(e) {
        this.style.border = border;
    }
    btn.onmouseout = function(e) {
        this.style.border = ""
    }
    btn.onclick = function() {
        this.style.border = "";
        callback(btn, tag);
    }
    return btn;
}


//// 创建一个超连接
function createLink(parent, link, text, size) {
    var a = document.createElement("a");
    parent.appendChild(a);
    a.href = link;
    if (text  && size > 0) {
        a.innerText      = text;
        a.style.fontSize = size + "px";
    }
    return a;    
}

//// 插入一个文本显示框。
function createSpan(parent, top, left, width, height, background) {
    var span = document.createElement("span");
    parent.appendChild(span);
    
    span.style.position   = "absolute";
    span.style.background = background;
    span.style.border     = "2px solid #263238";

    span.style.top    = top + "px";
    span.style.left   = left + "px";
    span.style.width  = width + "px";
    span.style.height = height + "px";

    span.style.fontSize = 20 + "px";

    return span;
}

//// 插入一张图片.
function createImg(parent, file, top, left, width, height) {

    var img = document.createElement("img");
    parent.appendChild(img);

    img.src      = file;

    img.style.position   = "absolute";
    img.style.background = "#455A64";
    img.style.border     = "2px solid #263238";

    img.style.top      = top + "px";
    img.style.left     = left + "px";
    img.style.width    = width + "px";
    img.style.height   = height + "px";

    return parent;
}

//// 插入一段文字.
function createText(parent, text, size, top, left, color, align) {


    var div = document.createElement("div");
    parent.appendChild(div);

    div.innerText = text;
    div.style.position   = "absolute";
    div.style.color      = color;
    div.style.fontSize   = size + "px";
    div.style.fontFamily = "arial";
    var width  = div.getBoundingClientRect().width;
    var height = div.getBoundingClientRect().height;
    switch (align) {
         case "center":
            div.style.top  = top - height / 2 + "px";
            div.style.left = left - width / 2 + "px";
             break;
         case "rightBottom":
            div.style.top  = top - height + "px";
            div.style.left = left - width + "px";
            break;
        default:
            div.style.top  = top  + "px";
            div.style.left = left + "px";
            break;

    }
    div.style.width  = width  + "px";
    div.style.height = height + "px";

    return div;
}
