let counter = 0;

$(document).ready(function() {
    $(function() {
        $(document).tooltip();
    });

    $(".slide-logo").on("click", function(){
        console.log("image clicked")
        counter = counter + 1;
        if(counter > 9){
            $(".disappear").hide();
        }
    });


});