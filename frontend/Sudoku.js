//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// Sudoku Game
//// Author： TCADA2008@gmail.com
//// Date:    2020年6月
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Title definition.
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function Title() {
    this.pic        = "./images/header/Sudoku.png";   // 图片名链接
    this.ratio      = 0.1;                            // 图片宽度：高度
    this.title      = "Sudoku Game";                  // 应用主名称
    this.subtitle   = "June. 2020";                   // 应用说明
    this.color      = "#F4511E";                      // 显示文字颜色
    this.min        = 600;                            // 桌面最小宽度
    this.max        = 1400                            // 桌面最大宽度
    //this.plink      = "file:./Sudoku.html";         // 推荐应用链接，可选
    //this.prompt     = "./images/header/new.png";    // 推荐应用图片，可选
}
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Local shared Data Definition
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
src = [
            0,0,0,0,1,8,6,0,4,
            0,9,0,0,0,7,1,0,0,
            0,0,7,0,0,0,0,8,9,
            6,0,0,0,4,0,3,0,0,
            4,3,0,6,0,0,0,9,0,
            5,0,9,2,0,0,0,0,0,
            7,0,0,0,0,4,8,0,0,
            0,0,0,0,7,0,9,0,2,
            0,6,0,8,3,0,0,4,7];
data    = [];
dataBtn = [];
selectedBtn   = null;
selectedIndex = 0;

funcCode  = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "⤴️"];
errorCode = ["⓪","①","②","③","④","⑤","⑥","⑦","⑧","⑨"];
bkgroundBody     = ["#4DB6AC", "#9575CD"];
bkgroundSelected = "#FF6D00";
bkgroundFunc     = "#004D40";

highlightBorder    = "4px solid  #D50000";

textColorStd        = "#263238";
textColorHightLight = "#D02C00";
textColorNewAdd     = "#FFFFFF";

Element.prototype.sudoku = function(height) {

    var top   = parseInt(this.style.top) + parseInt(this.style.height) + 10;
    var width = parseInt(this.style.width) + 2;

    var div = createDiv(document.body, top, 0, width, height + 2);
   
    var left = (width - 600) / 2;
    // 初始化应用桌面
    var menu = createDiv(div, 0,   left,      500, 66);
    var body = createDiv(div, 68,  left + 70, 362, 360);
    var func = createDiv(div, 432, left,     500, 66);
    initBody(parent = body);
    initMenu(parent = menu);
    initFunc(parent = func);


    return div;
}
//// main part initialization
function initBody(parent) {
    //// initial button area
    var width = parseInt(parent.style.width) / 9;
    for (index = 0; index < src.length; index ++) {
        cord  = index2Cord(index);
        background = index2Background(index);
        dataBtn.push(createBtn(parent, top = width * cord.row, left = width * cord.col, width = width, height = width, 
                callback = bodyClicked, tag = index,
                text = "", background = background, color = textColorStd, size = 20, border = highlightBorder));
    }

    for (index = 0; index < src.length; index ++) {
        data.push(src[index]);
    }
    displayDigits(0);

    window.onkeypress = function(event) {
        if (event.keyCode < 48 || event.keyCode > 57 || this.selectedBtn == null || this.src[this.selectedIndex] > 0) {
            return;
        } else {
            data[this.selectedIndex] = event.key;
            displayDigits(event.key);        
        }
    }
}

//// function part initialization
function initFunc(parent) {
    parent.style.border = "";

    side = parseInt(parent.style.width) / funcCode.length;
    width = side * 0.8;
    blank = (side - width) / 2;
    for (var index = 0; index < funcCode.length; index ++) {
        createBtn(parent, top = 0, left = blank + side * index, width = width, height = width, callback = funcClicked, tag = index + 1,
            text = funcCode[index], background = bkgroundFunc, color = textColorStd, size = 28, border = highlightBorder);
    }
}

//// menu part initialization
function initMenu(parent) {
    title  = ["New", "Retry", "AI"];
    attribute = [true, false, true];
    side   = parseInt(parent.style.width) / title.length;
    h      = parseInt(parent.style.height);
    width  = side * 0.8;
    blank  = (side - width) / 2;
    menuBackground = "#BDBDBD";
    disableBackground = "#546E7A";

    for (var index = 0; index < title.length; index ++) {
        btn = createBtn(parent, top = h * 0.2, left = blank + side * index, width = width, height = h * 0.6, callback = menuClicked, tag = index,
                text = title[index], background = menuBackground, color = textColorStd, size = 20, border = highlightBorder);
        btn.style.borderRadius = width * 0.25 + "px";
        
        if (attribute[index]) {
            btn.setAttribute("disabled", true);
            btn.style.background = disableBackground;
        }
    }
}

//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// Call back functional
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// Button's in main part was clicked.
function bodyClicked(btn, index) {
    var background = index2Background(selectedIndex);
    
    if (selectedBtn == btn) { // 第二次点击同一按钮，则取消选择

        selectedBtn.style.background = background;
        selectedBtn = null;
        selectedIndex = 0;

    } else if (selectedBtn == null) { // 第一次点击按钮

        btn.style.background = bkgroundSelected;
        selectedBtn   = btn;
        selectedIndex = index;

    } else { // 选择不同的按钮

        selectedBtn.style.background = background;
        btn.style.background = bkgroundSelected;
        selectedBtn   = btn;
        selectedIndex = index;

    }
    displayDigits(data[index]);
}

//// Buttons in functional area was clicked.
function funcClicked(btn, key) {
    if (selectedBtn == null) { // the data not to be selected at moment.
        return;
    } else if  (key == 10) { // delete was clicked
        data[selectedIndex] = 0;
    } else {
        data[selectedIndex] = key;
    }
    displayDigits(data[selectedIndex]);
}

//// Buttons in Menu area was clicked.
function menuClicked(btn, index) {
    switch(index) {
        case 0: // new game, not provided yet.
            break;
        case 1: // Retry Game.
            for (var i = 0; i < data.length; i ++) {
                data[i] = src[i];
            }
            displayDigits(0);
            break;
        case 2: // AI game, not provided yet.
            break;
    }
}

//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// cordination transformation functional。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
function index2Cord(index) {
    var row = parseInt(index / 9);
    var col = parseInt(index % 9);
    var gx = parseInt(row / 3);
    var gy = parseInt(col / 3);
    var box = gx * 3 + gy;
    return {row:row, col:col, gx:gx, gy:gy, box:box}
}

function index2Background(index) {
    var cord = index2Cord(index);
    return bkgroundBody[(cord.gx + cord.gy) % 2];
}



//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// main part button operational functions。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
function displayDigits(key) {
    for (var i = 0; i < src.length; i ++) {
        
        //// adjust display digit
        if (data[i] == 0) {
            dataBtn[i].innerText = ""
        } else if (hasError(i)) {
            dataBtn[i].innerText = errorCode[data[i]];
        } else {
            dataBtn[i].innerText = data[i];
        }
        //// adjust text color
        if (data[i] == 0) {
            dataBtn[i].style.color = textColorNewAdd;
        } else if (data[i] == key) {
            dataBtn[i].style.color = textColorHightLight;
        } else if (src[i] > 0) {
            dataBtn[i].style.color = textColorStd;
        } else {
            dataBtn[i].style.color = textColorNewAdd;
        }
    }
}

//// check if the Data[index] has error。
function hasError(index) {
    cord = index2Cord(index);
    temp = data[index];
    data[index] = 0;
    
    var dataRow = getSameRow(cord.row);
    var dataCol = getSameCol(cord.col);
    var dataBox = getSameBox(cord.gx, cord.gy);

    var dataAll = union(dataRow, dataCol);
    var dataAll = union(dataAll, dataBox);

    data[index] = temp;
    return !notIn(temp, dataAll);
}

//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// function for set theory
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
function getSameRow(row) {
    answer = [];

    for (col = 0; col < 9; col ++) {

        digit = data[row * 9 + col];
        if (digit > 0 && !(digit in answer)) {
            answer.push(digit);
        }
    }

    return answer;
}

function getSameCol(col) {
    answer = [];

    for (row = 0; row < 9; row ++) {

        digit = data[row * 9 + col];
        if (digit > 0 && !(digit in answer)) {
            answer.push(digit);
        }
    }

    return answer;
}
function getSameBox(gx, gy) {
    answer = [];

    for (row = 0; row < 3; row ++) {
        for (col = 0; col < 3; col ++) {
            
            digit = data[(gx * 3 + row) * 9 + gy * 3 + col];
            if (digit > 0 && !(digit in answer)) {
                answer.push(digit);
            }
        }
    }

    return answer;
}

function union(data1, data2) {
    answer = [];

    for (var i = 0; i < data1.length; i ++) {

        if (notIn(data1[i], answer)) {
            answer.push(data1[i]);
        }
    }

    for (var i = 0; i < data2.length; i ++) {

        if (notIn(data2[i], answer)) {
            answer.push(data2[i]);
        }
    }

    return answer;
}

function notIn(key, list) {
    for (var index = 0; index < list.length; index ++) {
        if (key == list[index]) {
            return false;
        }
    }
    return true;
}






