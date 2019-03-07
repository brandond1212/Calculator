/*

We are building a simple calculator app.
Our app will add / subtract / multiple / divide two numbers based on what button is clicked
The solution to the equation will be printed to the page

*/
$(".add").click(function() {
   var firstNum=parseInt($("#number1").val());
   var secondNum=parseInt($("#number2").val());
   var solution=firstNum+secondNum;
   $("#solution").text(solution);
});
$(".subtract").click(function() {
   var firstNum=parseInt($("#number1").val());
   var secondNum=parseInt($("#number2").val());
   var solution=firstNum-secondNum;
   $("#solution").text(solution);
});
$(".divide").click(function() {
   var firstNum=parseInt($("#number1").val());
   var secondNum=parseInt($("#number2").val());
   var solution=firstNum/secondNum;
   $("#solution").text(solution);
});
$(".multiply").click(function() {
   var firstNum=parseInt($("#number1").val());
   var secondNum=parseInt($("#number2").val());
   var solution=firstNum*secondNum;
   $("#solution").text(solution);
});