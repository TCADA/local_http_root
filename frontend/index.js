//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 主程序。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Title数据定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function Title() {
    this.pic        = "./images/header/Header.png";     // 图片名链接
    this.ratio      = 0.1667;                           // 图片宽度：高度
    this.title      = "欢迎进入Tony Chen的世界";          // 应用主名称
    this.subtitle   = "⏤⏤2020年6月";                   // 应用说明
    this.color      = "#FFFFFF";                        // 显示文字颜色
    this.min        = 700;                              // 桌面最小宽度
    this.max        = 1400                              // 桌面最大宽度
    this.plink      = "file:./Sudoku.html";             // 推荐应用链接，可选
    this.prompt     = "./images/header/New.png";        // 推荐应用图片，可选
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// XNumber设计。
var result = null;
var ctrlData = [
        ["Prime Number",    "输入数字，判断该数字是否为质数,"],
        ["Triangle Number", "输入数字，计算从1到该数字的Triangle Number:"],
        ["Square Number",   "输入数字，计算从1到该数字的square Number:"],
        ["Cubic Number",    "输入数字，计算从1到该数字的cubic Number: "],
        ["Fibonacci",       "输入数字，计算从1到该数字的Fibonacci 数列："]];

function displayNumeric(previous, height) {
    bkgroundResult = "#2E7D32";
    bkgroundMenu   = "#185E20";
    textColorMenu   = "#FFFFFF";
    borderMouseOver = "3px solid red";

    var top   = parseInt(previous.style.top) + parseInt(previous.style.height) + 10;
    var width = parseInt(previous.style.width);
    
    /// 添加容器
    var div = createDiv(document.body, top, 0, width, height);
                
    //// 插入显示按钮
    result = createSpan(div, height * 0.2, left = width * 0.02, width * 0.96, height * 0.75, background = bkgroundResult);
    scale = width / ctrlData.length;
    console.log("scale =" + scale);
    //// 插入功能按钮
    for (var index = 0; index < ctrlData.length; index ++) {
        
        btn = createBtn(div, height * 0.05, left = scale * (index + 0.1), scale * 0.8, height * 0.1,
                    callback = menuClicked, tag = index, text = ctrlData[index][0],
                    background = bkgroundMenu, color = textColorMenu, size = 12, border = borderMouseOver);
        btn.style.borderRadius = scale * 0.24 + "px";
    }
    
    return div;
}

//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 按钮被点击后的操作。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
function menuClicked(btn, index) {
    console.log("menuClicked = " + index + ", input :" + ctrlData[index][1]);
    var number = parseInt(window.prompt(ctrlData[index][1]));
    console.log("number =" + number);

    switch (ctrlData[index][0]) {
        case "Prime Number":        
            result.innerText = numberPrime(number);
            break;
        case "Triangle Number":     
            result.innerText = numberTriangle(number);
            break;
        case "Square Number":       
            result.innerText = numberSquare(number);
            break;
        case "Cubic Number":        
            result.innerText = numberCubic(number);
            break;
        case "Fibonacci":           
            result.innerText = numberFibonacci(number);
            break;
    }
}

///// 判断是否是质数 
function numberPrime(number) {
    
        if (number < 2 || number > 10000 || !number) {
            return number + " has to be in (2 ~ 10000)!"; 
        }
   
        var max = parseInt(number / 2) + 1;
        var factories = [];
    
        for (var index = 2; index < max; index ++) {
            if (number % index == 0) {
                factories.push(index);
            }
        }
    
        if (factories.length > 0) {
            return number + " is a composite number, which have factories: [ " + list2String(factories) + " ]";
        } else {
            return number + " is a prime number!";
        }
}
  
///// 计算triangle number;
function numberTriangle(number) {
    
        if (number < 1 || number > 10000 || !number) {
            return number + " has to be in (1 ~ 10000)!"; 
        }

        var answer = [];
        var tNumber = 0;

        for (var index = 1; index <= number; index ++) {
            tNumber += index;
            if (tNumber <= number) {
                answer.push(tNumber);
            }
        }
    
        return "Triangle Numbers of (1 ~ " + number + " ) are: " + list2String(answer);
 }

///// 计算square number;
function numberSquare(number) {
    
        if (number < 1 || number > 10000 || !number) {
            return number + " has to be in (1 ~ 10000)!"; 
        }

        var answer = [];
        var max    = parseInt(Math.sqrt(number));
    
        for (var index = 1; index <= max; index ++) {
            var sNumber = index * index;
            if (sNumber <= number) {
                answer.push(sNumber);
            }
        }
    
        return "Square Numbers of (1 ~ " + number + " ) are: " + list2String(answer);
}

///// 计算cubic number;
function numberCubic(number) {

        if (number < 1 || number > 10000 || !number) {
            return number + " has to be in (1 ~ 10000)!"; 
        }

        var answer = [];
        var max = parseInt(Math.sqrt(number));

        for (var index = 1; index <= max; index ++) {
            var sNumber = index * index * index;
            if (sNumber <= number) {
                answer.push(sNumber);
            }
        }
        return "Cubic Numbers of (1 ~ " + number + " ) are: " + list2String(answer);
        
}

///// 计算Fibonacci seriels number;
function numberFibonacci(number) {

        if (number < 1 || number > 10000 || !number) {
            return number + " has to be in (1 ~ 10000)!"; 
        }
        
        var answer = [1, 1];
        var first = answer[0];
        var second = answer[1];

        while (first + second <= number) {
            answer.push(first + second);
            first  = answer[answer.length - 2];
            second = answer[answer.length - 1];
        }

        return "Fibonacci Seriel of (1 ~ " + number + " ) are: " + list2String(answer);
}

//// 数组转字符串
function list2String(list) {
   
    var output = "";
   
    for (var index = 0; index < list.length - 1; index ++) {
            output += list[index] + ", ";
    }
   
    return (output + list[list.length - 1]);
}


