function greet(name,callback)
{
    console.log(name);
    callback();
}
function sum(){
    console.log("this is call back function")
}
greet("jhansi",sum);