$( document ).ready(function() {
    $(".div-right2").hide();
    $(".warning").hide();


    /* if submit button is clicked */
    $(".confirm").on("click",function(){
        var confirmname = false;
        var confirmnumber = false;
        var confirmexp = false;
        var confirmcvc = false;
        var invalidchar = false;

        //if name area is empty
        if($("#name").val().length == 0){
            $("#name").css("border-color","hsl(0, 100%, 66%)");
            $(".w1").show();
        }
        else{
            $("#name").css("border-color","hsl(270, 3%, 87%)");
            confirmname = true;
            $(".w1").hide();
        }

        //if card number area is empty or less than 16 number
        if($("#cardnumber").val().length == 0){
            $("#cardnumber").css("border-color","hsl(0, 100%, 66%)");
            $(".w3").show();
            $(".w2").hide();
            $(".w7").hide();
            
        }
        else if($("#cardnumber").val().length != 19){
            $("#cardnumber").css("border-color","hsl(0, 100%, 66%)");
            $(".w7").show();
            $(".w2").hide();
            $(".w3").hide();
        }
   
        else{
            //check for invalid character at card number
            var s = $("#cardnumber").val();
            for ( var i = 0; i < s.length; i++ )
            
            {
                if((i==4 || i==9 || i==14) && s.charAt(i)!=' '){
                    $("#cardnumber").css("border-color","hsl(0, 100%, 66%)");
                    invalidchar = true;
                }
                else if(s.charAt(i) != 0 &&
                s.charAt(i) != 1 &&
                s.charAt(i) != 2 &&
                s.charAt(i) != 3 &&
                s.charAt(i) != 4 &&
                s.charAt(i) != 5 &&
                s.charAt(i) != 6 &&
                s.charAt(i) != 7 &&
                s.charAt(i) != 8 &&
                s.charAt(i) != 9){
                    $("#cardnumber").css("border-color","hsl(0, 100%, 66%)");
                    invalidchar = true;
                }
            }

            if(invalidchar){
                $(".w2").show();
                $(".w3").hide();
                $(".w7").hide();
            }else{
                $("#cardnumber").css("border-color","hsl(270, 3%, 87%)");
                confirmnumber = true;
                $(".w2").hide();
                $(".w3").hide();
                $(".w7").hide();
            }
        }

        //if exp.date area is empty 
        if($("#expdate1").val().length == 0){
            $("#expdate1").css("border-color","hsl(0, 100%, 66%)");

            if($("#expdate2").val().length == 0){
                $("#expdate2").css("border-color","hsl(0, 100%, 66%)");
            }
            else
                $("#expdate2").css("border-color","hsl(270, 3%, 87%)");
                $(".w4").show();
        }
        else if($("#expdate2").val().length == 0){
            $(".w4").show();
        }
        else{
            $("#expdate1").css("border-color","hsl(270, 3%, 87%)");
            $("#expdate2").css("border-color","hsl(270, 3%, 87%)");
            confirmexp = true;
            $(".w4").hide();
        }

        //if cvc number area is empty
        if($("#cvc").val().length == 0){
            $("#cvc").css("border-color","hsl(0, 100%, 66%)");
            $(".w5").show();
        }else{
            $("#cvc").css("border-color","hsl(270, 3%, 87%)");
            confirmcvc = true;
            $(".w5").hide();
        }

        if(confirmname && confirmnumber && confirmexp && confirmcvc){
            $(".frontcard-text-cardnumber").text($("#cardnumber").val());
            $(".frontcard-text-name").text($("#name").val());
            $(".frontcard-text-date:first-child").text($("#expdate1").val());
            $(".frontcard-text-date:last-child").text($("#expdate2").val());
            $(".backcard-text").text($("#cvc").val());

            $(".div-right").hide();
            $(".div-right2").show();

            $(".continue").on("click",function(){
                $(".div-right").show();
                $(".div-right2").hide();
            });
        }


        return false;
    });
});