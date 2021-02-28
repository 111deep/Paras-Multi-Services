var a = 1, b=5;

if(--a || b++){
    a++;
}
if(a-- || --b){
    ++b;
}

console.log(a,b);