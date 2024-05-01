var str=""
function getOne(){
    str+='1'
    document.getElementById('result').value=str;
}
function getTwo(){
    str+='2'
    document.getElementById('result').value=str;
}
function getThree(){
    str+='3'
    document.getElementById('result').value=str;
}
function getFour(){
    str+='4'
    document.getElementById('result').value=str;
}
function getFive(){
    str+='5'
    document.getElementById('result').value=str;
}
function getSix(){
    str+='6'
    document.getElementById('result').value=str;
}
function getSeven(){
    str+='7'
    document.getElementById('result').value=str;
}
function getEight(){
    str+='8'
    document.getElementById('result').value=str;
}
function getNine(){
    str+='9'
    document.getElementById('result').value=str;
}
function getZero(){
    str+='0'
    document.getElementById('result').value=str;
}
function getPlus(){
    str+='+'
    document.getElementById('result').value=str;
}
function getMinus(){
    str+='-'
    document.getElementById('result').value=str;
}
function getMultiply(){
    str+='*'
    document.getElementById('result').value;
}
function getDivision(){
    str+='/'
    document.getElementById('result').value=str;
}

function getClear(){
    str=''
    document.getElementById('result').value=str;
}
function getAns(){
    if(str.length >= 3){
        var ans = eval(str);
        document.getElementById('result').value=ans;
    }else{
        document.getElementById('result').value="Invalid Expression";
    }
    
}