var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    var rectangleLocation=rect.getBoundingClientRect();
    var positionInsideRectWall = details.clientX-rectangleLocation.left;

    if(positionInsideRectWall<rectangleLocation.width/2){
        var leftPosition=(rectangleLocation.width/2)-positionInsideRectWall;
        var redColor=gsap.utils.mapRange(
            0, 
            rectangleLocation.width/2 , 
            255, 
            0, 
            positionInsideRectWall)
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4,
        })
    }else{
        var blueColor=gsap.utils.mapRange(
            rectangleLocation.width/2, 
            rectangleLocation.width, 
            0, 
            255, 
            positionInsideRectWall)
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease:Power4,
        })
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})