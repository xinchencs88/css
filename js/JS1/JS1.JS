var a = document.getElementsByClassName("div");
var bone = document.getElementById("b-one");
var btwo = document.getElementById("b-two");
var animation;
function array() {
    // 随机获得3个小方块
    var noe = Math.floor(Math.random()*9);
    var two = Math.floor(Math.random()*9);
    var three = Math.floor(Math.random()*9);
    if(noe == two ){
        noe = Math.floor(Math.random()*9);

    }
    else if(two == three){
        var two = Math.floor(Math.random()*9);
    }
    else if(three ==noe){
        three = Math.floor(Math.random()*9);
    }
       a [noe].style.backgroundColor = 'rgb'+ randomColor();   
        a [two].style.backgroundColor = 'rgb'+ randomColor();
        a [three].style.backgroundColor = 'rgb'+ randomColor();
}
function randomColor(){
    var colorVal;
    var r = Math.floor(Math.random()*265);
    var g = Math.floor(Math.random()*265);
    var b = Math.floor(Math.random()*265);
    colorVal = '('+ r +','+ g +','+ b +')';
    return colorVal;
}
bone.onclick = function btop(){
    animation = setInterval(function(){
        for(var i = 0; i<9 ; i++){
            a [i].style.background = 'rgb(221, 159, 43)';
        }
        array();

    },1000);
    

}
 btwo.onclick = function btop2(){
     clearInterval( animation); 
    for (var i = 0 ; i < 9 ; i++ ){
         a [i].style.background = 'rgb(221, 159, 43)';

     }    
    
 } 