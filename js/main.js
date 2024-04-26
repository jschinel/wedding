

$(window).on("load",function(){
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex==slideLen-1)
        {
            slideIndex=0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})

$(document).ready(function(){

    //people filter
    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        if($(this).hasClass("active")){
            return;
        }
        else{
            peopleFilter($(this).attr("data-target"))
        }
    })
    function peopleFilter(target){
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+target+"']").fadeIn();
    }

    //Gallery Popup
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");

    let gpIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })

    //Go to Next Picture
    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    //Go to Previous Picture
    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large")
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) + "/" + totalGalleryItems);
    }
    //close gallery popup
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open")
    })



    //Main Navigation

    // Get the <div> element with the class "nav"
    const navDiv = document.querySelector('.nav');
    
    // Get the <ul> element inside the "nav" div
    const ulElement = navDiv.querySelector('ul');
    
    // Add event listener for click events on the <ul>
    ulElement.addEventListener('click', function(event) {
        // Check if the clicked element is an <li>
        if (event.target.tagName === 'LI') {
            // Get the id attribute of the clicked <li>
            const liId = event.target.getAttribute('id');
            goToSection(liId)
        }
    });
    const ids=['home','couple','story','events','people','gallery','rsvp',]
    function goToSection(navigationSelected){
        const element = document.getElementById(ids[navigationSelected])
        if(element)
        {
            element.scrollIntoView();
        }
    }
})