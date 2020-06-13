//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 热点区域的处理。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
var width = getWidth();
var school = document.getElementById("school");

//// 获取热键信息 
function getSchoolInfo(index) {
    var home = "/Users/tony/mHW/images/school/";
    var http = [
                "https://www.cggs.act.edu.au/",
                "https://www.anu.edu.au/", 
                "http://www.forrestps.act.edu.au/",
                "https://www.bupt.edu.cn/",
                "https://www.ivyschools.com/"],
                
        png = [
                "CGGS.png",
                "ANU.png",
                "Forrest.png",
                "Bupt.png",
                "Ivy.png"];

    if (index >= http.length || index >= png.length) { index = 0;  }
    return {href: http[index], img: home + png[index]}

}

function newSchool(index, top) {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.style.position = "absolute";
    div.style.top = top + index * 60 + "px";
    div.style.width = "200px";
    div.style.height = "50px";
    div.style.background = "#78909C";
    div.style.left = 20 + "px";


    var a = document.createElement("a");
    a.href = getSchoolInfo(index).href;
    div.appendChild(a);
    
    var img = document.createElement("img");
    img.src = getSchoolInfo(index).img;
    img.style.width  = "200px";
    img.style.height = "50px";
    a.appendChild(img); 
    return div;
}

for (var index = 0; index < 5; index ++) {
    newSchool(index, parseInt(imgTitle.height) + 130);
}

var hr = document.getElementsByTagName("hr")[1];
hr.style.top = parseInt(imgTitle.height) + 420 + "px";



