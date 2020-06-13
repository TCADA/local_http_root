//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 调色板函数。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Title数据定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function Title() {
    this.pic        = "./images/header/Header.png";     // 图片名链接
    this.ratio      = 0.1667;                           // 图片宽度：高度
    this.title      = "调色板应用";                       // 应用主名称
    this.subtitle   = "⏤⏤2020年6月";                   // 应用说明
    this.color      = "#FFFFFF";                        // 显示文字颜色
    this.min        = 700;                              // 桌面最小宽度
    this.max        = 1400                              // 桌面最大宽度
    this.plink      = "file:./Sudoku.html";             // 推荐应用链接，可选
    this.prompt     = "./images/header/New.png";        // 推荐应用图片，可选
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 各种标准色定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
colorSet = [
            ["black",   ["#000000"]],
            ["white",   ["#FFFFFF"]],
            ["red",     ["#FFEEEE","#FFCCC2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71C1C","#FFBAB0","#FF5252","#FF1744","#D50000"]],
            ["pink",    ["#FCE4EC","#F80ED0","#F41F01","#F05292","#EC401A","#E91E63","#D01B60","#C2185B","#AD1457","#800C4F","#FFB0AB","#FF43B1","#F50057","#C51162"]],
            ["purple",  ["#F3E5F5","#E1BCE7","#CE93D8","#BA68C8","#AB47BC","#9C27D3","#8E24AA","#7B1FA2","#6A1D9A","#4A148C","#EA80FC","#E040FB","#D500F9","#AA00FF"]],
            ["modena",  ["#EDE7F6","#D1C4E9","#B39CC0","#9575CD","#7E57C2","#673AB7","#5E3581","#512DA3","#4527A0","#311B92","#B3BBFF","#7C4DFF","#651FFF","#6200CA"]],
            ["powder",  ["#E8EAF5","#C5CAE9","#9FABDA","#7980CB","#5C6BC0","#3F5185","#3949A8","#303F9F","#283593","#1A237E","#8C9EFF","#5360FE","#305AFE","#304FFE"]],
            ["blue",    ["#E3F2FD","#CCDEFB","#90CAF5","#54B5F6","#42A5F5","#2196F3","#1E88E5","#1976C2","#1545C0","#0047AE","#B2D1FF","#448AFF","#2979FF","#2962FF"]],
            ["canal",   ["#E1F5FE","#B3E5FC","#B1D4FA","#4FC3F7","#29B6F5","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B","#B0D8FF","#40C4FF","#00B0FF","#0091EA"]],
            ["cyan",    ["#E0F7FA","#B2EBF2","#B0DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00638F","#006064","#84FFFF","#18FFFF","#00E5FF","#00B3D4"]],
            ["teal",    ["#E0F2F1","#B2DFDB","#B0CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40","#A7FFEB","#64FFDA","#1DE986","#00BFA5"]],
            ["green",   ["#E8F5E9","#C8E6C9","#A5D6A7","#81C784","#66B86A","#4CAF50","#43AD47","#388E3C","#2E7D32","#185E20","#B9F6CA","#69F0AE","#00E676","#00C853"]],
            ["pale",    ["#F1F8E9","#DCEDC8","#C5E1A5","#AED5B1","#9CCC65","#8BC34A","#7CB342","#689F38","#55882F","#33691E","#CCFF90","#B2FF59","#76FF03","#64DD17"]],
            ["stone",   ["#F9FBE7","#F0F4C3","#E6EE9C","#DCE775","#D4E157","#CDDC39","#C0CA33","#AFB42B","#9E9D24","#827717","#F4FF81","#EEFF41","#C6FF00","#AEEA00"]],
            ["yellow",  ["#FFFDE7","#FFF9C4","#FFF176","#FFF176","#FFEE58","#FFEB3B","#FDDB35","#FBC02D","#F9AB25","#F57F17","#FFFFBD","#FFFF00","#FFEA00","#FFD600"]],
            ["amber",   ["#FFF8E1","#FFECB3","#FFE082","#FFD54F","#FFCA2B","#FFC107","#FFB300","#FFA000","#FF8F00","#FF6F00","#FFE57F","#FFD740","#FFC400","#FFAB00"]],
            ["orange",  ["#FFF3E0","#FFE0B2","#FFCC80","#FFB74D","#FFA726","#FF9B00","#FB8C00","#F57C00","#EF6C00","#E65100","#FFD180","#FFAB40","#FF9100","#FF6D00"]],
            ["drange",  ["#FBE9E7","#FFCCBC","#FFAB91","#FF8A65","#FF7D43","#FF5722","#F4511E","#E64A19","#D84315","#BF360C","#FF9E80","#FF6E40","#FF3000","#D02C00"]],
            ["brown",   ["#EFEDE9","#D7CCCB","#BCAAA4","#A1887F","#8D6E63","#795548","#6D4C41","#5D4037","#4E342E","#3E2723"]],
            ["grey",    ["#FAFAFA","#F5F5F5","#EEEEEE","#EDEDED","#BDBDBD","#9E9E9E","#757575","#616161","#424242","#212121"]],
            ["ashes",   ["#ECEFF1","#CFD8DC","#B0BEC5","#90A4AE","#78909C","#607D8B","#546E7A","#455A64","#37474F","#263238"]]];
    
var resultBox = null;
var resultTxt = null;

Element.prototype.palette = function(height) 
{
    var defaultColor = "#FFD600";
    var top   = parseInt(this.style.top) + parseInt(this.style.height) + 10;
    var width = parseInt(this.style.width) + 2;
    var div = createDiv(document.body, top, 0, width, height + 2);
   
    var left = (width - 800) / 2;
    resultBox = createDiv(div, 85, left + 25,  150, 150);
    poolBox   = createDiv(div,  0, left + 200, 600, height);
    resultTxt = createText(div, text = defaultColor, size = 32, 330, left + 100, color = defaultColor, align = "center")
    resultBox.style.background = defaultColor;
    var h = height/colorSet.length;

    for (var row = 0; row < colorSet.length; row ++) {
        createText(poolBox, colorSet[row][0], size = 15, h * row + h, left = 80, color = "black", align = "rightBottom");
        var colors = colorSet[row][1];
        var w      = 520 / colors.length;
        
        for (var col = 0; col < colors.length; col ++) {
            createBtn(poolBox, top = h * row, left = 82 + w * col, width = w, h, 
                    callback = btnClicked, tag = colors[col], text = "", background = colors[col], size = 0, border = "");
        }
    }

    return div;
}

function btnClicked(btn, color) {
    resultBox.style.background = color;
    resultTxt.innerText        = color;
    resultTxt.style.color      = color;
}
