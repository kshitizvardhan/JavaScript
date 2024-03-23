let x = 5;
{
    let x = 6;
    console.log(x);
    let y = 4;
}
console.log(x);
// error occurs as not defined, console.log(y);
// beacuse let is block scoped variable.