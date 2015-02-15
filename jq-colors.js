 
//Miguel Ángel Sainz Ayuso.

$(document).ready(function() {
    $("#orderedlist").addClass("turquoise");
    $("#orderedlist2").addClass("orange");
    $("#orderedlist > li").addClass("red");
    $("#orderedlist2 > li").addClass("red");
    $(".buttons > button").addClass("lightblue");
    $(".buttons > button").addClass("green");
    $("#orderedlist > li:last").hover(function() {
        $("#orderedlist > li:last").addClass("green");
        
        },function() {
            $("#orderedlist > li:last").removeClass("green");
    });
    $("#orderedlist2 > li:last").hover(function() {
        $("#orderedlist2 > li:last").addClass("green");
        
        },function() {
            $("#orderedlist2 > li:last").removeClass("green");
    });
     
});

