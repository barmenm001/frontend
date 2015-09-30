$(document).ready(function(){
    $("#project").hide();
    $("#stage").hide();

    $("#project-button").click(function() {
        $("#stage").hide();
        $("#project").show();
    });

    $("#stage-button").click(function() {
        $("#project").hide();
        $("#stage").show();
    });
});
