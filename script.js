let inp = document.querySelector('#inp');
let img = document.querySelector('#img');

function myFun(){
    let value = inp.value;
    if(value){
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`
    }
}

