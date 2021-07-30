const allKey = document.querySelectorAll(".key");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const rst = document.querySelector(".reset");
const del = document.querySelector(".delete");

const operations = ['+', '-', '*', '/'];

reset();

for(let key of allKey){
    key.addEventListener("click", ()=>{
        
        let ch = input.value[input.value.length-1];
        if(operations.includes(ch) && operations.includes(key.value)){
            input.value = (input.value).slice(0, -1) + key.value;
        }else{
            input.value = input.value + key.value;
        }
    })
}
input.addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        evalExp();
    }
});
submit.addEventListener("click", evalExp);


function evalExp(){
    input.value = eval(input.value);
}

rst.addEventListener("click", reset);

del.addEventListener("click", ()=>{
    input.value = (input.value).slice(0, -1);
});

function reset(){
    input.value = '';
}