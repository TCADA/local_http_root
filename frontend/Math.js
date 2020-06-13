//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// Mathematics
//// Author： TCADA2008@gmail.com
//// Date:    2020年6月
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// Title definition.
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function Title() {
    this.pic        = "./images/Mathematics/Maths.png"; // 图片名链接
    this.ratio      = 0.1667;                           // 图片宽度：高度
    this.title      = "Mathematics";                    // 应用主名称
    this.subtitle   = "June. 2020";                     // 应用说明
    this.color      = "#FFFFFF";                        // 显示文字颜色
    this.min        = 600;                              // 桌面最小宽度
    this.max        = 1400                              // 桌面最大宽度
    this.plink      = "file:./Sudoku.html";             // 推荐应用链接，可选
    this.prompt     = "./images/header/New.png";        // 推荐应用图片，可选
}

//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////
//// 数据定义； 采用类封装方式。
//// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴////

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// SmartDragon定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function SmartDragonHeader() {
    this.title    = "Smart Dragon";
    this.subtitle = "Educational testing service in Chatswood, New South Wale";
    this.pic      = "./images/Mathematics/SmartDragon.png";
    this.link     = "https://www.school-network.net/";
}

function SmartDragon1() {
    this.title = "1. 星期六课程MO (Junior High)";
    this.dir   = "http:./document/Mathematics/SmartDragon/MO/";
    this.data = [
                ["MO_JH_07.pdf", "07. The third Dimention"],
                ["MO_JH_08.pdf", "08. Algebra Moves East"],
                ["MO_JH_09.pdf", "09. Sequences and Series"],
                ["MO_JH_10.pdf", "10. Cubics"],
                ["MO_JH_11.pdf", "11. Unreal Numbers"]];
}


function SmartDragon2() {
    this.title = "2. 星期三课程Enrichment";
    this.dir   = "http:./document/Mathematics/SmartDragon/Enrichment/"
    this.data  = [
                ["MEE__T2W01.pdf",   "Term 2 Week 01. Fractional Indice"],
                ["MEE__T2W02.pdf",   "Term 2 Week 02. Algebraic Expression"],
                ["MEE__T2W03.pdf",   "Term 2 Week 03. Rearrange Formula"],
                ["MEE__T2W04.pdf",   "Term 2 Week 04. Quadratic Expression"],
                ["MEE__T2W05.pdf",   "Term 2 Week 05. Polynomials"],
                ["MEE__T2W06.pdf",   "Term 2 Week 05. Monic Quadratic Equations"],
                ["MEE__T2W07.pdf",   "Term 2 Week 05. Soving Quadratic Equations"]];
}


//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// APMO定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function APMOHeader() {
    this.title    = "Asian Pacific Mathematics Olympiad";
    this.subtitle = "Discovering, encouraging and challenging mathematically gifted high-school students";
    this.pic      = "./images/Mathematics/APMO.png";
    this.link     = "http://www.apmo-official.org/";
}

function APMO1() {
    this.title = "1. 历年真题";
    this.dir   = "http:./document/Mathematics/APMO/";
    this.data = [
                ["‎apmo2019.pdf", "2019年APMO真题"],
                ["‎apmo2018.pdf", "2018年APMO真题"],
                ["‎apmo2017.pdf", "2017年APMO真题"],
                ["apmo2016.pdf", "2016年APMO真题"],
                ["apmo2015.pdf", "2015年APMO真题"],
                ["apmo2014.pdf", "2014年APMO真题"],
                ["apmo2013.pdf", "2013年APMO真题"]];
}
function APMO2() {
    this.title = "2. （2005 ～ 2012）";
    this.dir   = "http:./document/Mathematics/APMO/";
    this.data = [
                ["apmo2012.pdf", "2012年APMO真题"],
                ["apmo2011.pdf", "2011年APMO真题"],
                ["apmo2010.pdf", "2010年APMO真题"],
                ["apmo2009.pdf", "2009年APMO真题"],
                ["apmo2008.pdf", "2008年APMO真题"],
                ["apmo2007.pdf", "2007年APMO真题"],
                ["apmo2006.pdf", "2006年APMO真题"],
                ["apmo2005.pdf", "2005年APMO真题"]];
}
function APMO3() {
    this.title = "3. （1997 ～ 2004）";
    this.dir   = "http:./document/Mathematics/APMO/";
    this.data = [
                ["apmo2004.pdf", "2004年APMO真题"],
                ["apmo2003.pdf", "2003年APMO真题"],
                ["apmo2002.pdf", "2002年APMO真题"],
                ["apmo2001.pdf", "2001年APMO真题"],
                ["apmo2000.pdf", "2000年APMO真题"],
                ["apmo1999.pdf", "1999年APMO真题"],
                ["apmo1998.pdf", "1998年APMO真题"],
                ["apmo1997.pdf", "1997年APMO真题"]];
}
function APMO4() {
    this.title = "4. （1989 ～ 1996）";
    this.dir   = "http:./document/Mathematics/APMO/";
    this.data = [
                ["apmo1996.pdf", "1996年APMO真题"],
                ["apmo1995.pdf", "1995年APMO真题"],
                ["apmo1994.pdf", "1994年APMO真题"],
                ["apmo1993.pdf", "1993年APMO真题"],
                ["apmo1992.pdf", "1992年APMO真题"],
                ["apmo1991.pdf", "1991年APMO真题"],
                ["apmo1990.pdf", "1990年APMO真题"],
                ["apmo1989.pdf", "1989年APMO真题"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// APSMO定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function APSMOHeader() {
    this.title    = "Olympiad";
    this.subtitle = "Exploring Maths Through Problem Solving.";
    this.pic      = "./images/Mathematics/APSMO.png";
    this.link     = "https://www.apsmo.edu.au/";
}

function APSMO() {
    this.title = "APSMO往年真题（2019）";
    this.dir   = "http:./document/Mathematics/Olympiad/";
    this.data  = [
                ["Olympiad_2019_XC.pdf", "2019年Olympiad真题及答案"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// AMT定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function AMTHeader() {
    this.title    = "Australian Maths Trust";
    this.subtitle = "Solve problems, Create the future.";
    this.pic      = "./images/Mathematics/AMT.png";
    this.link     = "https://www.amt.edu.au/";
}

function AMCMP() {
    this.title = "1. AMC Middle Primary";
    this.dir   = "http:./document/Mathematics/AMT/AMC/MP/";
    this.data = [
                ["Answer_Sheet.pdf", "空白答题卷例子"],
                ["03-MP-2019.pdf",   "2019年Middle Primary真题"],
                ["03-MP-2018.pdf",   "2018年Middle Primary真题"],
                ["03-MP-2017.pdf",   "2017年Middle Primary真题"],
                ["03-MP-2016.pdf",   "2016年Middle Primary真题"],
                ["03-MP-2015.pdf",   "2015年Middle Primary真题"],
                ["03-MP-2014.pdf",   "2014年Middle Primary真题"],
                ["03-MP-2013.pdf",   "2013年Middle Primary真题"],
                ["03-MP-2012.pdf",   "2012年Middle Primary真题"],
                ["03-MP-2011.pdf",   "2011年Middle Primary真题"],
                ["03-MP-2010.pdf",   "2010年Middle Primary真题"],
                ["03-MP-2009.pdf",   "2009年Middle Primary真题"],
                ["03-MP-2008.pdf",   "2008年Middle Primary真题"],
                ["03-MP-2007.pdf",   "2007年Middle Primary真题"],
                ["03-MP-2006.pdf",   "2006年Middle Primary真题"],
                ["03-MP-2005.pdf",   "2005年Middle Primary真题"],
                ["03-MP-2004.pdf",   "2004年Middle Primary真题"]];
}

function AMCUP() {
    this.title = "2. AMC Upper Primary";
    this.dir   = "http:./document/Mathematics/AMT/AMC/UP/";

    this.data = [        
                ["05-UP-2019.pdf",   "2019年Upper Primary真题"],
                ["05-UP-2018.pdf",   "2018年Upper Primary真题"],
                ["05-UP-2017.pdf",   "2017年Upper Primary真题"],
                ["05-UP-2016.pdf",   "2016年Upper Primary真题"],
                ["05-UP-2015.pdf",   "2015年Upper Primary真题"],
                ["05-UP-2013.pdf",   "2013年Upper Primary真题"],
                ["05-UP-2012.pdf",   "2012年Upper Primary真题"],
                ["05-UP-2011.pdf",   "2011年Upper Primary真题"],
                ["05-UP-2010.pdf",   "2010年Upper Primary真题"],
                ["05-UP-2009.pdf",   "2009年Upper Primary真题"],
                ["05-UP-2008.pdf",   "2008年Upper Primary真题"],
                ["05-UP-2007.pdf",   "2007年Upper Primary真题"],
                ["05-UP-2006.pdf",   "2006年Upper Primary真题"],
                ["05-UP-2005.pdf",   "2005年Upper Primary真题"],
                ["05-UP-2004.pdf",   "2004年Upper Primary真题"]]   
}

function AMCJunior() {
    this.title = "3. AMC Junior";
    this.dir   = "http:./document/Mathematics/AMT/AMC/Junior/";

    this.data = [
                ["JU-2019.pdf",   "2019年Junior真题"],
                ["JU-2018.pdf",   "2018年Junior真题"],
                ["JU-2017.pdf",   "2017年Junior真题"],
                ["JU-2016.pdf",   "2016年Junior真题"],
                ["JU-2015.pdf",   "2015年Junior真题"]];
    }

function AMCIM() {
    this.title = "4. AMC Intermediate";
    this.dir   = "http:./document/Mathematics/AMT/AMC/Intermediate/";
    this.data  = [
                ["IM-2019.pdf",   "2019年Intermediate真题"],
                ["IM-2018.pdf",   "2018年Intermediate真题"],
                ["IM-2017.pdf",   "2017年Intermediate真题"],
                ["IM-2016.pdf",   "2016年Intermediate真题"],
                ["IM-2015.pdf",   "2015年Intermediate真题"]];
}

function AMCSenior() {
    this.title = "5. AMC Senior";
    this.dir   = "http:./document/Mathematics/AMT/AMC/Senior/";
    this.data = [
                ["SE-2019.pdf",   "2019年Senior真题"],
                ["SE-2018.pdf",   "2018年Senior真题"],
                ["SE-2017.pdf",   "2017年Senior真题"],
                ["SE-2016.pdf",   "2016年Senior真题"],
                ["SE-2015.pdf",   "2015年Senior真题"]];
}

function MCYAUP() {
    this.title = "1. MCYA Upper Primary";
    this.dir   = "http:./document/Mathematics/AMT/MCYA/UP/";
    this.data = [
                ["MCYA_UP_2019.pdf",     "2019年MCYA Upper Primary真题"],
                ["MCYA_UP_2020.pdf",     "2020年MCYA Upper Primary真题"],
                ["MCYA_UP_2020_XC.pdf",  "2020年MCYA Upper Primary作业"]];
}

function MCYAJunior() {
    this.title = "2. MCYA Junior";
    this.dir   = "http:./document/Mathematics/AMT/MCYA/Junior/";
    this.data = [
                ["MCYA_J_2020_XC.pdf",   "2019年MCYA Junior作业"]];
}

function Remanujan() {
    this.title = "1. Remanujan";
    this.dir   = "http:./document/Mathematics/AMT/MCYA/Remanujan/";
    this.data = [
                ["Ramunujian.pdf",       "Remanujan学生用书"],
                ["Ramanujan2019.pdf",    "2019年Remanujan真题"]];
}

function Newton() {
    this.title = "2. Newton";
    this.dir   = "http:./document/Mathematics/AMT/MCYA/Newton/";
    this. data = [
                ["Newton.pdf",       "Newton学生用书"]];
}

function Dirichlet() {
    this.title = "3. Dirichlet";
    this.dir   = "http:./document/Mathematics/AMT/MCYA/Dirichlet/";
    this.data = [
                ["Dirichlet.pdf",            "Dirichlet学生用书"],
                ["Dirichlet2009.pdf",        "2009年Dirichlet真题"],
                ["Dirichlet2018.pdf",        "2018年Dirichlet真题"],
                ["Dirichlet2020.pdf",        "2020年Dirichlet真题"],
                ["Dirichlet2020Q1.pdf",      "2020年Dirichlet作业Q1"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// UKMT定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function UKMTHeader() {
    this.title    = "United Kingdom Mathematics Trust";
    this.subtitle = "Advancing the education of young people in mathematics.";
    this.pic      = "./images/Mathematics/UKMT.png";
    this.link     = "https://www.ukmt.org.uk/";
}

function UKMTJMC() {
    this.title = "1. Junior Mathematical Challenge";
    this.dir   = "http:./document/Mathematics/UKMT/Junior/Challenge/";
    this.data = [
                ["JU_MC_2019.pdf",   "2019年UKMT Junior Challenge"],
                ["JU_MC_2018.pdf",   "2018年UKMT Junior Challenge"],
                ["JU_MC_2017.pdf",   "2017年UKMT Junior Challenge"],
                ["JU_MC_2016.pdf",   "2016年UKMT Junior Challenge"],
                ["JU_MC_2015.pdf",   "2015年UKMT Junior Challenge"],
                ["JU_MC_2014.pdf",   "2014年UKMT Junior Challenge"],
                ["JU_MC_2013.pdf",   "2013年UKMT Junior Challenge"],
                ["JU_MC_2012.pdf",   "2012年UKMT Junior Challenge"],
                ["JU_MC_2011.pdf",   "2011年UKMT Junior Challenge"]];
}

function UKMTJMK() {
    this.title = "2. Junior Mathematical Kangaroo";
    this.dir   = "http:./document/Mathematics/UKMT/Junior/Kangaroo/";
    this.data = [
                ["JU_KAN_2019.pdf",   "2019年UKMT Junior Kangaroo"],
                ["JU_KAN_2018.pdf",   "2018年UKMT Junior Kangaroo"],
                ["JU_KAN_2017.pdf",   "2017年UKMT Junior Kangaroo"],
                ["JU_KAN_2016.pdf",   "2016年UKMT Junior Kangaroo"],
                ["JU_KAN_2015.pdf",   "2015年UKMT Junior Kangaroo"]];
}

function UKMTJMO() {
    this.title = "3. Junior Mathematical Olympiad";
    this.dir   = "http:./document/Mathematics/UKMT/Junior/Olympiad/";
    this.data = [
                ["JU_Olympiad_2019.pdf",   "2019年UKMT Junior Olympiad"],
                ["JU_Olympiad_2018.pdf",   "2018年UKMT Junior Olympiad"],
                ["JU_Olympiad_2017.pdf",   "2017年UKMT Junior Olympiad"],
                ["JU_Olympiad_2016.pdf",   "2016年UKMT Junior Olympiad"],
                ["JU_Olympiad_2015.pdf",   "2015年UKMT Junior Olympiad"],
                ["JU_Olympiad_2014.pdf",   "2014年UKMT Junior Olympiad"],
                ["JU_Olympiad_2013.pdf",   "2013年UKMT Junior Olympiad"],
                ["JU_Olympiad_2012.pdf",   "2012年UKMT Junior Olympiad"],
                ["JU_Olympiad_2011.pdf",   "2011年UKMT Junior Olympiad"],
                ["JU_Olympiad_2010.pdf",   "2010年UKMT Junior Olympiad"]];
}

//// 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵////
function UKMTIMC() {
    this.title = "1. Intermediate Mathematical Challenge";
    this.dir   = "http:./document/Mathematics/UKMT/Intermediate/Challenge/";
    this.data = [
                ["IMC_2021.pdf",   "2021年UKMT Intermediate Challenge"],
                ["IMC_2020.pdf",   "2020年UKMT Intermediate Challenge"],
                ["IMC_2019.pdf",   "2019年UKMT Intermediate Challenge"],
                ["IMC_2018.pdf",   "2018年UKMT Intermediate Challenge"],
                ["IMC_2017.pdf",   "2017年UKMT Intermediate Challenge"],
                ["IMC_2016.pdf",   "2016年UKMT Intermediate Challenge"],
                ["IMC_2015.pdf",   "2015年UKMT Intermediate Challenge"],
                ["IMC_2014.pdf",   "2014年UKMT Intermediate Challenge"],
                ["IMC_2013.pdf",   "2013年UKMT Intermediate Challenge"],
                ["IMC_2012.pdf",   "2012年UKMT Intermediate Challenge"],
                ["IMC_2011.pdf",   "2011年UKMT Intermediate Challenge"],
                ["IMC_2010.pdf",   "2010年UKMT Intermediate Challenge"]];
}

function UKMTIMKG() {
    this.title = "2. Intermediate Kangaroo Grey";
    this.dir   = "http:./document/Mathematics/UKMT/Intermediate/Kangaroo/Grey/";
    this.data = [
                ["Grey-2019.pdf",   "2019年UKMT Intermediate Kangaroo Grey"],
                ["Grey-2018.pdf",   "2018年UKMT Intermediate Kangaroo Grey"],
                ["Grey-2017.pdf",   "2017年UKMT Intermediate Kangaroo Grey"],
                ["Grey-2016.pdf",   "2016年UKMT Intermediate Kangaroo Grey"],
                ["Grey-2015.pdf",   "2015年UKMT Intermediate Kangaroo Grey"]];
}

function UKMTIMKP() {
    this.title = "3. Intermediate Kangaroo Pink";
    this.dir   = "http:./document/Mathematics/UKMT/Intermediate/Kangaroo/Pink/";
    this.data = [
                ["Pink-2019.pdf",   "2019年UKMT Intermediate Kangaroo Pink"],
                ["Pink-2018.pdf",   "2018年UKMT Intermediate Kangaroo Pink"],
                ["Pink-2017.pdf",   "2017年UKMT Intermediate Kangaroo Pink"],
                ["Pink-2016.pdf",   "2016年UKMT Intermediate Kangaroo Pink"],
                ["Pink-2015.pdf",   "2015年UKMT Intermediate Kangaroo Pink"]];
}

function UKMTIMOC() {
    this.title = "4. Intermediate Olympiad Cayley";
    this.dir   = "http:./document/Mathematics/UKMT/Intermediate/Olympiad/Cayley/";
    this.data = [
                ["Cayley-2019.pdf",   "2019年UKMT Intermediate Olympiad Cayley"],
                ["Cayley-2018.pdf",   "2018年UKMT Intermediate Olympiad Cayley"],
                ["Cayley-2017.pdf",   "2017年UKMT Intermediate Olympiad Cayley"],
                ["Cayley-2016.pdf",   "2016年UKMT Intermediate Olympiad Cayley"],
                ["Cayley-2015.pdf",   "2015年UKMT Intermediate Olympiad Cayley"]];
}

function UKMTIMOH() {
    this.title = "5. Intermediate Olympiad Hamilton";
    this.dir   = "http:./document/Mathematics/UKMT/Intermediate/Olympiad/Hamilton/";
    this.data = [
                ["Hamilton-2019.pdf",   "2019年UKMT Intermediate Olympiad Hamilton"],
                ["Hamilton-2018.pdf",   "2018年UKMT Intermediate Olympiad Hamilton"],
                ["Hamilton-2017.pdf",   "2017年UKMT Intermediate Olympiad Hamilton"],
                ["Hamilton-2016.pdf",   "2016年UKMT Intermediate Olympiad Hamilton"],
                ["Hamilton-2015.pdf",   "2015年UKMT Intermediate Olympiad Hamilton"]];
}

function UKMTIMOM() {
    this.title = "6. Intermediate Olympiad Maclaurin";
    this.dir   = "http:./document/Mathematics/UKMT/Intermediate/Olympiad/Maclaurin/";
    this.data = [
                ["Maclaurin-2019.pdf",   "2019年UKMT Intermediate Olympiad Maclaurin"],
                ["Maclaurin-2018.pdf",   "2018年UKMT Intermediate Olympiad Maclaurin"],
                ["Maclaurin-2017.pdf",   "2017年UKMT Intermediate Olympiad Maclaurin"],
                ["Maclaurin-2016.pdf",   "2016年UKMT Intermediate Olympiad Maclaurin"],
                ["Maclaurin-2015.pdf",   "2015年UKMT Intermediate Olympiad Maclaurin"]];
}

//// 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵////
function UKMTSC() {
    this.title = "1. Senior Mathematics Challenge";
    this.dir   = "http:./document/Mathematics/UKMT/Senior/Challenge/";
    this.data = [
                ["SMC_2019.pdf",         "2019年UKMT Senior Mathematic Challenge"],
                ["SMC_2018.pdf",         "2018年UKMT Senior Mathematic Challenge"],
                ["SMC_2017.pdf",         "2017年UKMT Senior Mathematic Challenge"],
                ["SMC_2016.pdf",         "2016年UKMT Senior Mathematic Challenge"],
                ["SMC_2015.pdf",         "2015年UKMT Senior Mathematic Challenge"],
                ["SMC_2014.pdf",         "2014年UKMT Senior Mathematic Challenge"],
                ["SMC_2013.pdf",         "2013年UKMT Senior Mathematic Challenge"],
                ["SMC_2012.pdf",         "2012年UKMT Senior Mathematic Challenge"],
                ["SMC_2011.pdf",         "2011年UKMT Senior Mathematic Challenge"],
                ["SMC_2010.pdf",         "2010年UKMT Senior Mathematic Challenge"]];
}

function UKMTSG() {
    this.title = "2. Senior Mathematics for Girls";
    this.dir   = "http:./document/Mathematics/UKMT/Senior/girls/";
    this.data = [
                ["ukmog-2019.pdf",         "2019年UKMT Olympiad for Girls"],
                ["ukmog-2018.pdf",         "2018年UKMT Olympiad for Girls"],
                ["ukmog-2017.pdf",         "2017年UKMT Olympiad for Girls"],
                ["ukmog-2016.pdf",         "2016年UKMT Olympiad for Girls"],
                ["ukmog-2015.pdf",         "2015年UKMT Olympiad for Girls"],
                ["ukmog-2014.pdf",         "2014年UKMT Olympiad for Girls"],
                ["ukmog-2013.pdf",         "2013年UKMT Olympiad for Girls"],
                ["ukmog-2012.pdf",         "2012年UKMT Olympiad for Girls"],
                ["ukmog-2011.pdf",         "2011年UKMT Olympiad for Girls"]];
}

function UKMTSK() {
    this.title = "3. Senior Mathematics Kangaroo";
    this.dir   = "http:./document/Mathematics/UKMT/Senior/Kangaroo/";
    this.data = [
                ["SK_2019.pdf",         "2019年UKMT Senior Kangaroo"],
                ["SK_2018.pdf",         "2018年UKMT Senior Kangaroo"],
                ["SK_2017.pdf",         "2017年UKMT Senior Kangaroo"],
                ["SK_2016.pdf",         "2016年UKMT Senior Kangaroo"],
                ["SK_2015.pdf",         "2015年UKMT Senior Kangaroo"]];
}

function UKMTSO1() {
    this.title = "1. Senior Olympiad Round 1";
    this.dir   = "http:./document/Mathematics/UKMT/Senior/Olympiad_1/";
    this.data = [
                ["SO1_2019.pdf",         "2019年UKMT Olympiad Round 1"],
                ["SO1_2018.pdf",         "2018年UKMT Olympiad Round 1"],
                ["SO1_2017.pdf",         "2017年UKMT Olympiad Round 1"],
                ["SO1_2016.pdf",         "2016年UKMT Olympiad Round 1"],
                ["SO1_2015.pdf",         "2015年UKMT Olympiad Round 1"],
                ["SO1_2014.pdf",         "2014年UKMT Olympiad Round 1"],
                ["SO1_2013.pdf",         "2013年UKMT Olympiad Round 1"],
                ["SO1_2012.pdf",         "2012年UKMT Olympiad Round 1"],
                ["SO1_2011.pdf",         "2011年UKMT Olympiad Round 1"],
                ["SO1_2010.pdf",         "2010年UKMT Olympiad Round 1"],
                ["SO1_2009.pdf",         "2009年UKMT Olympiad Round 1"],
                ["SO1_2008.pdf",         "2008年UKMT Olympiad Round 1"],
                ["SO1_2007.pdf",         "2007年UKMT Olympiad Round 1"],
                ["SO1_2006.pdf",         "2006年UKMT Olympiad Round 1"],
                ["SO1_2005.pdf",         "2005年UKMT Olympiad Round 1"],
                ["SO1_2004.pdf",         "2004年UKMT Olympiad Round 1"],
                ["SO1_2003.pdf",         "2003年UKMT Olympiad Round 1"],
                ["SO1_2002.pdf",         "2002年UKMT Olympiad Round 1"],
                ["SO1_2001.pdf",         "2001年UKMT Olympiad Round 1"],
                ["SO1_2000.pdf",         "2000年UKMT Olympiad Round 1"]];
}

function UKMTSO2() {
    this.title = "2. Senior Olympiad Round 2";
    this.dir   = "http:./document/Mathematics/UKMT/Senior/Olympiad_2/";
    this.data = [
                ["SO1_2020.pdf",         "2020年UKMT Olympiad Round 2"],
                ["SO1_2019.pdf",         "2019年UKMT Olympiad Round 2"],
                ["SO1_2018.pdf",         "2018年UKMT Olympiad Round 2"],
                ["SO1_2017.pdf",         "2017年UKMT Olympiad Round 2"],
                ["SO1_2016.pdf",         "2016年UKMT Olympiad Round 2"],
                ["SO1_2015.pdf",         "2015年UKMT Olympiad Round 2"],
                ["SO1_2014.pdf",         "2014年UKMT Olympiad Round 2"],
                ["SO1_2013.pdf",         "2013年UKMT Olympiad Round 2"],
                ["SO1_2012.pdf",         "2012年UKMT Olympiad Round 2"],
                ["SO1_2011.pdf",         "2011年UKMT Olympiad Round 2"],
                ["SO1_2010.pdf",         "2010年UKMT Olympiad Round 2"],
                ["SO1_2009.pdf",         "2009年UKMT Olympiad Round 2"],
                ["SO1_2008.pdf",         "2008年UKMT Olympiad Round 2"],
                ["SO1_2007.pdf",         "2007年UKMT Olympiad Round 2"],
                ["SO1_2006.pdf",         "2006年UKMT Olympiad Round 2"],
                ["SO1_2005.pdf",         "2005年UKMT Olympiad Round 2"],
                ["SO1_2004.pdf",         "2004年UKMT Olympiad Round 2"],
                ["SO1_2003.pdf",         "2003年UKMT Olympiad Round 2"],
                ["SO1_2002.pdf",         "2002年UKMT Olympiad Round 2"],
                ["SO1_2001.pdf",         "2001年UKMT Olympiad Round 2"],
                ["SO1_2000.pdf",         "2000年UKMT Olympiad Round 2"]];
}

function UKMTTCN() {
    this.title = "1. Team Challenge National";
    this.dir   = "http:./document/Mathematics/UKMT/Team/Challenge/National/";
    this.data = [
                ["TMCN_2019.pdf",         "2019年UKMT Team Challenge National Final"],
                ["TMCN_2018.pdf",         "2018年UKMT Team Challenge National Final"],
                ["TMCN_2017.pdf",         "2017年UKMT Team Challenge National Final"],
                ["TMCN_2016.pdf",         "2016年UKMT Team Challenge National Final"],
                ["TMCN_2015.pdf",         "2015年UKMT Team Challenge National Final"],
                ["TMCN_2014.pdf",         "2014年UKMT Team Challenge National Final"],
                ["TMCN_2013.pdf",         "2013年UKMT Team Challenge National Final"]];
}

function UKMTTCR() {
    this.title = "2. Team Challenge Regional";
    this.dir   = "http:./document/Mathematics/UKMT/Team/Challenge/Regional/";
    this.data = [
                ["TMCR_2019.pdf",         "2019年UKMT Team Challenge Regional Final"],
                ["TMCR_2018.pdf",         "2018年UKMT Team Challenge Regional Final"],
                ["TMCR_2017.pdf",         "2017年UKMT Team Challenge Regional Final"],
                ["TMCR_2016.pdf",         "2016年UKMT Team Challenge Regional Final"],
                ["TMCR_2015.pdf",         "2015年UKMT Team Challenge Regional Final"],
                ["TMCR_2014.pdf",         "2014年UKMT Team Challenge Regional Final"],
                ["TMCR_2013.pdf",         "2013年UKMT Team Challenge Regional Final"]];
}

function UKMTTS() {
    this.title = "2. Team Senior National Final";
    this.dir   = "http:./document/Mathematics/UKMT/Team/Senior/";
    this.data = [
                ["National_Final_2020.pdf",         "2020年UKMT Team Senior National Final"],
                ["National_Final_2019.pdf",         "2019年UKMT Team Senior National Final"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// CAT定义
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////

function CATHeader() {
    this.title    = "CAT";
    this.subtitle = "Foster lateral thinking and pragmatic problem solving to unearth future talent in computer programming.";
    this.pic      = "./images/Mathematics/CAT.png";
    this.link     = "http:./document/Mathematics/CAT/CAT2-2011-2015.pdf";
}

function CATUP() {
    this.title = "1. CAT Upper Primary";
    this.dir   = "http:./document/Mathematics/CAT/UP/";
    this.data = [
                ["UP-2019.pdf",   "2019年 Primary 考试真题"],
                ["UP-2018.pdf",   "2018年 Primary 考试真题"],
                ["UP-2017.pdf",   "2017年 Primary 考试真题"],
                ["UP-2016.pdf",   "2016年 Primary 考试真题"]];
}

function CATJunior() {
    this.title = "2. CAT Junior";
    this.dir   = "http:./document/Mathematics/CAT/Junior/";
    this.data = [
                ["Junior-2019.pdf",   "2019年 Junior 考试真题"],
                ["Junior-2018.pdf",   "2018年 Junior 考试真题"],
                ["Junior-2017.pdf",   "2017年 Junior 考试真题"],
                ["Junior-2016.pdf",   "2016年 Junior 考试真题"]];
}

function CATIM() {
    this.title = "3. CAT Intermediate";
    this.dir   = "http:./document/Mathematics/CAT/Intermediate/";
    this.data = [
                ["Intermediate-2017.pdf",   "2017年 Intermediate 考试真题"],
                ["Intermediate-2016.pdf",   "2016年 Intermediate 考试真题"]];
}

function CATSenior() {
    this.title = "4. CAT Senior";
    this.dir   = "http:./document/Mathematics/CAT/Senior/";
    this.data = [
                ["Senior-2017.pdf",   "2017年 Senior 考试真题"],
                ["Senior-2016.pdf",   "2016年 Senior 考试真题"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 数学教科书 Cambridge--7
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////

function Cambridge7() {
    this.title    = "Cambridge Mathematics 7";
    this.subtitle = "Essential Mathematics for the Australian Curriculum 2nd edtion.";
    this.pic      = "./images/Mathematics/Cambridge7.png";
    this.link     = "http:./document/Mathematics/Lecture/Cambridge7/Cambridge-Year-7.pdf";
}

function Cambridge7Question() {
    this.title = "Lectures";
    this.dir   = "http:./document/Mathematics/Lecture/Cambridge7/";
    this.data = [
                ["000-unfamiliar.pdf",      "00. Unfamiliar Problems"],
                ["010-number.pdf",          "01. Whole Numbers"],
                ["020-geometry.pdf",        "02. Geometry"],
                ["030-patterns.pdf",        "03. Number properties and Patterns"],
                ["040-fraction.pdf",        "04. Fractions and Percentages"],
                ["050-algbre.pdf",          "05. Algebra"],
                ["060-decimal.pdf",         "06. Decimals"],
                ["070-negative.pdf",        "07. Negative Numbers"],
                ["080-statistics.pdf",      "08. Statistics and Probabilities"],
                ["090-polygon.pdf",         "09. Polygons, Solids and Transformations"],
                ["100-equations.pdf",       "10. Equations"],
                ["110-measurement.pdf",     "11. Measurement"],
                ["120-review.pdf",          "12. Semester Review"]];
}

function Cambridge7Answer() {
    this.title = "Answers for Exercises";
    this.dir   = "http:./document/Mathematics/Lecture/Cambridge7/";
    this.data = [
                ["001-answer.pdf",          "00. Unfamiliar Problems"],
                ["011-answer.pdf",          "01. Whole Numbers"],
                ["021-answer.pdf",          "02. Geometry"],
                ["031-answer.pdf",          "03. Number properties and Patterns"],
                ["041-answer.pdf",          "04. Fractions and Percentages"],
                ["051-answer.pdf",          "05. Algebra"],
                ["061-answer.pdf",          "06. Decimals"],
                ["071-answer.pdf",          "07. Negative Numbers"],
                ["081-answer.pdf",          "08. Statistics and Probabilities"],
                ["091-answer.pdf",          "09. Polygons, Solids and Transformations"],
                ["101-answer.pdf",          "10. Equations"],
                ["111-answer.pdf",          "11. Measurement"],
                ["121-answer.pdf",          "12. Semester Review"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 数学教科书 Cambridge--8
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function Cambridge8() {
    this.title    = "Cambridge Mathematics 8";
    this.subtitle = "Essential Mathematics for the Australian Curriculum 2nd edtion.";
    this.pic      = "./images/Mathematics/Cambridge8.png";
    this.link     = "http:./document/Mathematics/Lecture/Cambridge8/Cambridge-Year-8.pdf";
}

function Cambridge8Question() {
    this.title = "Lectures";
    this.dir   = "http:./document/Mathematics/Lecture/Cambridge8/";
    this.data = [
                ["001-answer.pdf",      "00. Unfamiliar Problems"],
                ["011-answer.pdf",      "01. Integers"],
                ["021-answer.pdf",      "02. Lines, Shapes and Solids"],
                ["031-answer.pdf",      "03. Fractions, Decimals and Percentages"],
                ["041-answer.pdf",      "04. Measurement and Pythagoras Theorem"],
                ["051-answer.pdf",      "05. Algebra"],
                ["061-answer.pdf",      "06. Ratios and Rates"],
                ["071-answer.pdf",      "07. Equation and Inequalities"],
                ["081-answer.pdf",      "08. Probabilities and Statistics"],
                ["091-answer.pdf",      "09. Straight line graphs"],
                ["101-answer.pdf",      "10. Transformation and Congruence"],
                ["111-answer.pdf",      "11. Semester Review"]];
}

function Cambridge8Answer() {
    this.title = "Answers for Exercises";
    this.dir   = "http:./document/Mathematics/Lecture/Cambridge7/";
    this.data = [
        ["000-unfamiliar.pdf",          "00. Unfamiliar Problems"],
        ["010-integers.pdf",            "01. Integers"],
        ["020-shapes.pdf",              "02. Lines, Shapes and Solids"],
        ["030-fraction.pdf",            "03. Fractions, Decimals and Percentages"],
        ["040-measurement.pdf",         "04. Measurement and Pythagoras Theorem"],
        ["050-algebra.pdf",             "05. Algebra"],
        ["060-ratios.pdf",              "06. Ratios and Rates"],
        ["070-equations.pdf",           "07. Equation and Inequalities"],
        ["080-statistics.pdf",          "08. Probabilities and Statistics"],
        ["090-graphs.pdf",              "09. Straight line graphs"],
        ["100-transformation.pdf",      "10. Transformation and Congruence"],
        ["110-review.pdf",              "11. Semester Review"]];
}

//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 数学教科书 Mathematics Extension 9
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////

function EES9() {
    this.title    = "Mathematics Extension 9";
    this.subtitle = "Mathematics Extension Revision and Exam Work book.";
    this.pic      = "./images/Mathematics/EES9.png";
    this.link     = "http:./document/Mathematics/Lecture/EES9/EES-Mathematics-Extension-Year-9.pdf";
}

function EES9Content1() {
    this.title = "Part I";
    this.dir   = "http:./document/Mathematics/Lecture/EES9/";
    this.data = [
        ["EES9_Content.pdf",    "00. Contents"],
        ["EES9_Topic01.pdf",    "01. Rationsal Numbers, Rates and Measurements"],
        ["EES9_Topic02.pdf",    "02. Algebraic Techniques"],
        ["EES9_Topic03.pdf",    "03. Pythagora Theorem"],
        ["EES9_Topic04.pdf",    "04. Financial Mathematics"]];
}

function EES9Content2() {
    this.title = "Part II";
    this.dir   = "http:./document/Mathematics/Lecture/EES9/";
    this.data = [
        ["EES9_Topic05.pdf",    "05. Linear and Non-linear relationships"],
        ["EES9_Topic04.pdf",    "06. Equations"],
        ["EES9_Topic07.pdf",    "07. Area and Volume"],
        ["EES9_Topic08.pdf",    "08. Similarity"],
        ["EES9_Topic09.pdf",    "09. Trigonometry"]];
}

function EES9Content3() {
    this.title = "PartIII";
    this.dir   = "http:./document/Mathematics/Lecture/EES9/";
    this.data = [
        ["EES9_Topic10.pdf",    "10. Probability"],
        ["EES9_Topic11.pdf",    "11. Data Representation adn Analysis"],
        ["EES9_Exams.pdf",      "12. Examp Papers"],
        ["EES9_Answer.pdf",     "13. Answers for Exercises"],
        ["EES9_Topic10.pdf",    "10. Probability"]];
}


//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
//// 数学教科书 International Mathematics 4
//// 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡////
function IM4() {
    this.title    = "International Mathematics 4";
    this.subtitle = "International Mathematics for the Middle Years.";
    this.pic      = "./images/Mathematics/IM4.png";
    this.link     = "http:./document/Mathematics/Lecture/IM4/international-mathematics-4.pdf";
}

function IM4Question() {
    this.title = "Lectures";
    this.dir   = "http:./document/Mathematics/Lecture/IM4/";
    this.data = [
                ["010-Numerical.pdf",       "01. Basic Skills and NUmber"],
                ["020-Proportion.pdf",      "02. Proportion"],
                ["030-Arithmetic.pdf",      "03. Consume Arithmetic"],
                ["040-Algebraic.pdf",       "04. Algebraic Expressions"],
                ["050-Indices.pdf",         "05. Indices and Surds"],
                ["060-Equations.pdf",       "06. Equations Inequations and Formulae"],
                ["070-Factory.pdf",         "07. Factorising Algebraic Expressions"],
                ["080-Coordinate.pdf",      "08. Coordinate Geometry"],
                ["090-Simultaneous.pdf",    "09. Simultaneous Equations"],
                ["100-Physical.pdf",        "10. Graphs of Physical Phenomena"],
                ["110-Deductive.pdf",       "11. Deductive Geometry"],
                ["120-Measurement.pdf",     "12. Measurement"],
                ["130-Trigonometry.pdf",    "13. Trigonometry"],
                ["140-Vectors.pdf",         "14. Vectors"],
                ["150-Statistics.pdf",      "15. Statistics"],
                ["160-Probability.pdf",     "16. Probability"],
                ["170-Logic.pdf",           "17. Logic"]];
}

function IM4Answer() {
    this.title = "Answers for Exercises";
    this.dir   = "http:./document/Mathematics/Lecture/IM4/";
    this.data = [
        ["011-answer.pdf",      "01. Basic Skills and NUmber"],
        ["021-answer.pdf",      "02. Proportion"],
        ["031-answer.pdf",      "03. Consume Arithmetic"],
        ["041-answer.pdf",      "04. Algebraic Expressions"],
        ["051-answer.pdf",      "05. Indices and Surds"],
        ["061-answer.pdf",      "06. Equations Inequations and Formulae"],
        ["071-answer.pdf",      "07. Factorising Algebraic Expressions"],
        ["081-answer.pdf",      "08. Coordinate Geometry"],
        ["091-answer.pdf",      "09. Simultaneous Equations"],
        ["101-answer.pdf",      "10. Graphs of Physical Phenomena"],
        ["111-answer.pdf",      "11. Deductive Geometry"],
        ["121-answer.pdf",      "12. Measurement"],
        ["131-answer.pdf",      "13. Trigonometry"],
        ["141-answer.pdf",      "14. Vectors"],
        ["151-answer.pdf",      "15. Statistics"],
        ["161-answer.pdf",      "16. Probability"],
        ["171-answer.pdf",      "17. Logic"]];
}

