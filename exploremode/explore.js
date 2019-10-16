$(document).ready(function(){
    $("#calc").on("click", "button", function(e){
        var num1 = $("#num1").val()
        var num2 = $("#num2").val()
        var oper = $(this).html()
        if (oper === "+"){
                $("#result").val(Number(num1) + Number(num2))
            }else if (oper === "-"){
                $("#result").val(Number(num1) - Number(num2))
            }else if (oper === "*"){
                $("#result").val(Number(num1) * Number(num2))
            }else if (oper === "/"){
                $("#result").val(Number(num1) / Number(num2))
            }
    })
})