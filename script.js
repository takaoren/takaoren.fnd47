"use strict";
// 1行目に記載している "use strict" は削除しないでください

let container = document.getElementById("container0");
let str=[];
let x;


function gazou(){
x=pixeldata.value;   

for(let i=1;i<=100;i++){
    str[i]=[];
    for(let j=1;j<=100;j++){
        str[i][j]=[];
        const div = document.createElement("div");

        str[i][j][0]=x.substring(x.length-2,x.length);
        x=x.substring(0,x.length-2);
        str[i][j][1]=x.substring(x.length-2,x.length);
        x=x.substring(0,x.length-2);
        str[i][j][2]=x.substring(x.length-2,x.length);
        x=x.substring(0,x.length-2);
        // console.log(str[i][j][0]);
        // console.log(str[i][j][1]);
        // console.log(str[i][j][2]);

        div.className = "child";
        div.style.backgroundColor = "#"+ str[i][j][0]+str[i][j][1]+str[i][j][2];
        container.appendChild(div);
    }
}
}

//let nameText = document.getElementById('wanisuu');
let checkButton = document.getElementById('wanibutton');

checkButton.addEventListener('click', gazou);
