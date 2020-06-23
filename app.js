// ==== chepter no 21-25 ====


// ==== task no 1 ====

// var a = prompt('Enter your first name');
// var b = prompt('Enter your last name');
// var c = a + ' ' + b;
// alert('Hello' + ' ' + c);





// ==== task no 2 ====

// var x = prompt('Enter your favorite mobile model')
// document.write('My favorite Phone is:' + ' ' + x + '<br />')
// document.write('Length of string:' + ' ' + x.length)





// ==== task no 3 ====

// var city = 'pakistan'
// document.write('String:' + ' ' + city + '<br />')
// document.write('Index of n :' + ' ' + city.indexOf('n'))




// ==== task no 4 ====

// var b = 'Hello World'
// var d = b.lastIndexOf('l')

// document.write('String:' + ' ' + b + '<br />')
// document.write('Last index of "l":' + ' ' + d)





// ==== task no 5 ====

// var p = 'Pakistan'

// document.write('Stirng :' + ' ' + p + '<br />')
// document.write('Character at index 3 :' + ' ' + p[3])





// ==== task no 6 ====

// var val1 = prompt('Enter your first name')
// var val2 = prompt('Enter you last name')
// var gre = 'Hello'
// var ans = gre.concat(' ' + val1 + ' ' + val2);
// alert(ans)




// ==== task no 7 ====

// var city = 'Hyderabad'
// var res = city.replace("Hyder","Islam")
// document.write('City:' + ' ' + city + '<br />')
// document.write('After replacemint:' + ' ' + res + '<br />')




// ==== task no 8 ====

// var message = 'Ali and Sami are best friends. They play cricket and football together.';

// document.write('String:' + ' ' + message + '<br />')
// var res = message.replace(/and/g,"&");
// document.write('After Replacement:' + ' ' + res + '<br />');





// ==== task no 9 ====

// var str = "472";

// document.write('value:' + ' ' + str + '<br />');
// document.write('type:' + ' ' + 'string' + '<br />' );
// document.write('value:' + ' '  + Number(str) + '<br />');
// document.write('type:' + ' ' + 'string' )






// ===== task no 10 ====

// var inp = prompt('Enter your value')
// var inp1 = inp.toUpperCase();

// document.write('User input:' + ' ' + inp + '<br /> ')
// document.write('UPPER CASE:' + ' ' + inp1)






// ==== task no 11 ====


// var inp = prompt('Enter your value')
// var firstchar = inp.slice(0,1);
// var otherchar = inp.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();

// var inp1 = firstchar + otherchar;

// document.write('User input:' + ' ' + inp + '<br /> ')
// document.write('Title Case:' + ' ' + inp1)






// ===== task no 12 ====

// var val = 35.36
// var par = val.toString();
// var par1 = par.length;
// var del = par1.splice(2,1)
// document.write(par1);









// ===== task no 13 ====

// var user = prompt("Enter user name")

// for(var a = 0; a<user.length; a++){
//     if(user[a] === "!"){
//         prompt("Enter tha valid user name")
//     }else if(user[a] === "."){
//         prompt("Enter tha valid user name")
//     }else if(user[a] === ","){
//         prompt("Enter tha valid user name")
//     }else if(user[a] === "@"){
//         prompt("Enter tha valid user name")
//     }else{
//         alert("wellcome to tha website" + " " + user)
//     }
// }






// ===== task no 14 ====

// var pro = prompt("Enter your item")
// pro = pro.toLowerCase();
// var arr = ["cake","apple pie","cookie","chips","patties"]
// for(var i = 0; i<arr.length; i++){
//     if(arr[i] === pro){
//         alert("Item is found in the list")
//         break
//     }
//     else{
//         alert("Item not found")
//         break
//     }
// }






// ===== task no 16 =====

// var universty = "Universty Of Karachi"
// var str = universty.split();

// document.write(str)






// ===== chepter no 26-30 =====







// ===== task  no 1 ====

// var a = prompt("enter your value");
// var b = parseInt(a);
// var c = Math.round(b);
// var d = Math.floor(b);
// var e = Math.ceil(b);

// document.write("number" + " " + a + "<br />")
// document.write("round of value" + " " + c + "<br />")
// document.write("floor of value" + " " + d + "<br />")
// document.write("ceil of value" + " " + e)








// ==== task no 2 ====

// var a = prompt("enter your value");
// var b = parseInt(a);
// var c = Math.round(b);
// var d = Math.floor(b);
// var e = Math.ceil(b);

// document.write("number" + " " + a + "<br />")
// document.write("round of value" + " " + c + "<br />")
// document.write("floor of value" + " " + d + "<br />")
// document.write("ceil of value" + " " + e)









// ===== task no 4 =====

// var ren = Math.random()*11
// var flo = Math.floor(ren);
// var flo1 = Math.round(ren);

// document.write("random dice value:" + " " + flo + "<br />");
// document.write("random dice value:" + " " + flo1);









// ==== task no 5 ====

// var heads = prompt("first user name")
// var tails = prompt("second user name")

// var toss = Math.random()*2;
// var floor = Math.floor(toss);

// if(floor === 0){
//     document.write("heads" + " " + heads + " " + "win the toss")
// }else{
//     document.write("tails" + " " + tails + " " + "win the toss")

// }






// ==== task no 6 ====


// var ren = Math.random()*100

// document.write("rendom number betwen 1 and 100: " + " " + ren)









// ===== task no 7 =====

// var wet = prompt('enter your wegth in kilogram')

// document.write("The wegth of user is:" + " " + wet)










//===== task no 8 ======

// var num = prompt("Enter tha number under 1 and 10")

// for(var i = 0; i<=num.length; i++){
//     if(num === num[i]){
//         alert("congratulate correct anser")
//     }else{
//         alert("try agen")
//         break
//     }
// }










 // ====== chepter no 31-34 ====




// ===== task no 1 =====

// var a = new Date();

// document.write(a);






// ==== task no 2 ====

// var arr = ["Jaunuary","February","March","April","May","June","July","August","September","October","November","December"]
// var a = new Date();
// var b = a.getMonth();
// document.write('Current Month:' + " " + arr[b])





// ===== task no 3 =====

// var a = new Date()
// var b = a.toString();
// var c =  b.slice(0,3);
// document.write("Today is:" + " " + c)







// ===== task no 4 =====

// var a = new Date()
// var b = a.toString();
// var c =  b.slice(0,3);
// if (c === "Sun"){
//     document.write("Today is Funn Day")
// }else if(c === "Sat"){
//     document.write("Today is Funn Day")
// }else{
//     document.write("Today is Working Day")
// }







// ===== task no 6 =====

// var a = new Date();
// var b = a.getTime();
// var c = b/(1000*60);

// document.write("corrent date:" + " " + a + '<br />')
// document.write("Elapsed milliseconds since january 1, 1970:" + " " + b  + '<br />')
// document.write("Elapsed minutes since january 1, 1970:" + " " + c)






// ===== task no 7 =====

// var a = new Date()
// var b = a.toString();
// var c =  b.slice(16,18);
// if( c < "24"){
//     alert("Its PM")
// }
// else if( c < "12"){
//     alert("Its AM")
// }






// ====== task no 8 ====

// var laterdate = new Date();
// var b = laterdate.setMonth(11);
// var c = laterdate.setDate(31);
// document.write("Later Date: " + " " + laterdate)






// ===== task no 9 ====

// var first = new Date("jun 18, 2015");
// var firstmili = first.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - firstmili;
// var acco = Math.floor(diff / (1000*60*60*24))
// document.write(acco + " " + "Days have passed since 1st Ramazan, 2015")





// ===== task no 10 ====

// var ref = new Date("dec 05, 2015")
// var refmili = ref.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - refmili;
// var acco = Math.floor(diff /(1000*60))
// document.write("One refrence date: " + " " + ref + "<br />")
// document.write(acco + " " + "seconds had passed since beginning of 2015")






// ===== task no 11 ======

// var curr = new Date();
// var a = new Date();
// var b = a.setHours(15);
// document.write("Current Date:" + " " + curr + "<br / >")
// document.write("1 Hour ago, it was set :" + " " + a + "<br / >")






// ===== task no 12 ====

// var curr = new Date();
// var a = new Date();
// var b = a.setFullYear(1920);
// document.write("Current Date:" + " " + curr + " <br />")
// document.write("100 years back, it was :" + " " + a + " <br />")






// ===== task no 13 =====


// var dob = new Date(prompt("Enter your date of birth","nov 11, 1993"))
// var str = dob.toString();
// var yer = str.slice(11,15);
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var acco = Math.floor(diff / (1000*60*60*24*30*12))
// document.write("Your age is : " + " " + acco + "<br />")
// document.write("Your birth year is :" + " " + yer)








// ===== task no 14 =====

// var cusname = "Arsalan";
// var curmonth = "June";
// var numunit = 1500;
// var chrunit = 16;
// var net = numunit*chrunit;
// var late = 350;
// var gross = net + late;


// document.write("<h1>K-Electric Bill</h1>" + "<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("Customer Name :" + " " + cusname + "<br />")
// document.write("Current Month :" + " " + curmonth + "<br />")
// document.write("Number of units :" + " " + numunit + "<br />")
// document.write("Charges per unit :" + " " + chrunit + "<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("<br />")
// document.write("Net Amount Payable (within Due Date) :" + " " + net + "<br />")
// document.write("Late Payment Surcharge :" + " " + late + "<br />")
// document.write("Gross Amount Payable (after Due Date) :" + " " + gross + "<br />")












// ===== chepter no 35-38 =====




// ===== task no 1 ====

// function Current(){
//     var a = new Date();
//     document.write(a)
// }

// Current();






// ===== task no 2 ====

// function greet(a,b){
//     alert("Hello" + " " + a + " " + b)
// }

// var a = prompt('Enter your first name')
// var b = prompt('Enter your last name')

// greet(a,b);






// ===== task no 3 ====

// function add(a,b){
//     alert("Total" + " " + a+b)
// }

// var a = +prompt('Enter your first value')
// var b = +prompt('Enter your last value')

// add(a,b);






// ===== task no 4 ====

// function calc(num1,opret,num2){
//     if(opret === "+"){
//         return num1 + num2
//     }else if(opret === "-"){
//         return num1 - num2
//     }else if(opret === "*"){
//         return num1 * num2
//     }else if(opret === "/"){
//         return num1 / num2
//     }else{
//         return "Incurret opretor"
//     }
// }


// var res = calc(10,"+",10)
// document.write(res)






// ===== task no 5 =====

// function greet(hello){
//     alert(hello)
// }


// greet("hello world");






// ===== task no 6 ====

// function adding(a,b,c){
//     alert(a+b+c)
// }

// adding(2,3,4);





// ===== task no 9 ====

// function sum(a,b){
//     document.write("the sum of both value" + " " + a+b)
// }

// sum(3,3);




// ==== task no 10 ====

// function pal(word){
//     var wo = word;
//     var check = "";

//     for(var i = wo.langth -1; i>=0; i++){
//         check += wo[i]
//     }
//     if(wo === check){
//         document.write(wo + " " + "word is palindrom")
//     }else{document.write(wo + " " + "word is not palindrom")}
// }


// pal("madam");




// ===== task no 11 ====

function str(string){

}