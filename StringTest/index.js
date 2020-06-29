// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toLocaleUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var arr = sentence.split(' ');
for(var i=0;i<arr.length;i++){
    var s = arr[i].slice(0,1).toUpperCase();
    var h = arr[i].slice(1);
    arr[i]=s+h;
}
console.log(arr.join(' '));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var str = money.substring(1,money.length);
console.log(str)

