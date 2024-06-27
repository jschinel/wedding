
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
    let language=false;
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
    const ids=['home','couple','story','events','people','gallery','rsvp',"language"    
    ]
    function goToSection(navigationSelected){
        const element = document.getElementById(ids[navigationSelected])
        if(element&&navigationSelected!="7")
        {
            console.log(element)
            element.scrollIntoView();
        }
        if(navigationSelected=="7")
        {
            language=!language
            console.log(language)
        }
        const navhome=document.getElementById("0")
        const navcouple=document.getElementById("1")
        const navstory=document.getElementById("2")
        const navevents=document.getElementById("3")
        const navgallery=document.getElementById("5")
        const navrsvp=document.getElementById("6")
        const navlanguage=document.getElementById("7")
        const WeddingTitle=document.querySelectorAll(".weddingtitle")
        const DateTitle=document.querySelectorAll(".datetitle")
        const coupletitle=document.getElementById("coupletitle")
        const coupleGroom=document.getElementById("coupleGroom")
        const coupleBride=document.getElementById("coupleBride")
        const lovestory=document.getElementById("lovestory")
        const firstmeet=document.getElementById("firstmeet")
        const firstmeetstory=document.getElementById("firstmeetstory")
        const firstdate=document.getElementById("firstdate")
        const firstdatestory=document.getElementById("firstdatestory")
        const proposal=document.getElementById("proposal")
        const proposalstory=document.getElementById("proposalstory")
        const marraige=document.getElementById("marraige")
        const marraigestory=document.getElementById("marraigestory")
        if(language==true)
        {
            navhome.innerText="Hogar"
            navcouple.innerText="Pareja"
            navstory.innerText="Historia"
            navevents.innerText="Eventos"
            navgallery.innerText="Galería"
            navrsvp.innerText="RSVP"
            navlanguage.innerText="ENG"
            WeddingTitle.forEach(weddingtitle=>{weddingtitle.innerText="Nos vamos a casar"});
            DateTitle.forEach(datetitle=>{datetitle.innerText="Octobre 19th"});
            coupletitle.innerText="Pareja feliz"
            coupleGroom.innerHTML=
            `Proveniente de la Península Superior de Michigan, el corazón de Jon pertenecía al aire libre. Sus viajes por trabajo lo llevaron a lugares inesperados, incluido un país extranjero en el que nunca imaginó encontrar el amor.<br><br>
            En medio de los paisajes escarpados y los pinos imponentes, el alma de Jon encontró la paz. Pero en medio de sus viajes, tropezó con algo aún más notable: el amor en una tierra lejos de casa. <br><br>        
            Lo que una vez fue su santuario en la naturaleza ahora ha encontrado un nuevo hogar en el corazón de otro. La paz que una vez encontró al aire libre ahora reside en el abrazo de su amada, lo que hace que cada viaje, cada aventura, sea aún más significativa.</p>`
            coupleBride.innerHTML=`Un alma vibrante del Valle de Santiago, México, encontró su vocación como maestra de preescolar en Guanajuato. Sus días estuvieron llenos de risas y aprendizaje, pero su corazón anhelaba amor<br><br>
            Una noche, el destino intervino y Ellie conoció a su alma gemela. Juntas, compartieron conversaciones sinceras y su conexión se profundizó con cada sonrisa y risa compartidas<br><br>
            Ahora, mientras Ellie se prepara para el próximo capítulo, lo hace con gratitud y entusiasmo. Con su amado a su lado, sabe que le esperan las mayores aventuras de la vida.</p>`
            lovestory.innerText=`Nuestra historia de amor`
            firstmeet.innerHTML=`Primer encuentro`
            firstmeetstory.innerHTML=`En medio del ambiente poco iluminado del bar, nuestros caminos convergieron en una fortuita danza del destino. Era una noche típica, pero de algún modo extraordinaria, como si el universo conspirara para unirnos. <br>
            Con cada mirada intercambiada y sonrisa compartida, el ruido del mundo se desvanecía en un segundo plano, dejando solo la resonancia de nuestra conexión. La conversación fluyó sin esfuerzo, marcada por risas y momentos de tranquila comprensión.<br>                
            En ese espacio entre extraños, encontramos una familiaridad que hablaba de experiencias compartidas y espíritus afines. A medida que avanzaba la noche, se hizo evidente que este encuentro encierra la promesa de algo más: un vínculo que trasciende el tiempo y las circunstancias.<br>                
            Y así, con el telón de fondo de vasos tintineantes y conversaciones en voz baja, comenzó nuestra historia de amor: una historia de encuentros casuales y corazones destinados a entrelazarse en medio del ajetreo y el bullicio de la vida cotidiana.`
            firstdate.innerHTML=`Primera fecha`
            firstdatestory.innerHTML=`En un mundo donde las primeras citas convencionales a menudo implican reservaciones para cenar o una ronda de bolos, nuestro viaje comenzó por un camino menos transitado: un sendero que serpenteaba a través del corazón del majestuoso paisaje de México, a lomos de caballos bajo la sombra de un volcán inactivo. <br>
            Mientras viajábamos uno al lado del otro, la tierra debajo de nosotros parecía susurrar secretos de siglos pasados, mientras que el cielo pintaba un lienzo de tonos que reflejaban la profundidad de nuestra floreciente conexión. En medio de tanta belleza impresionante, el tiempo pareció detenerse, permitiéndonos perdernos en el momento, el uno en el otro. <br>
            Con cada paso de nuestros nobles corceles, nuestro vínculo se profundizó, tejido por los hilos de la aventura compartida y la exploración mutua. En el contexto de la grandeza de la naturaleza, descubrimos un amor que trascendía lo ordinario, un amor que quedaría grabado para siempre en la tela de nuestros recuerdos. <br>
            Y así, en medio del terreno accidentado y la vasta extensión de la naturaleza, nuestros corazones encontraron su hogar, entrelazados en una historia de amor tan extraordinaria como el paisaje que fue testigo de su comienzo.`
            proposal.innerHTML=`propuesta`
            proposalstory.innerHTML=` Debajo del dosel cubierto de estrellas de las montañas mexicanas, un fuego crepitante pintaba sombras danzantes sobre el paisaje accidentado. Ubicado en el corazón de Guanajuato, nos esperaba nuestro santuario: un acogedor AirBnB ubicado en lo alto de las extensas sierras, que ofrece una vista panorámica que nos dejó sin aliento. <br>                
            Mientras alzamos nuestras copas para brindar por la magia del momento, las llamas parpadeantes reflejaron la calidez de nuestros corazones: una celebración del capítulo más feliz de nuestras vidas que se desarrolla en medio de la tranquilidad del abrazo de la naturaleza. Y en medio del brillo de la luz del fuego, hubo otro destello, un diamante que reflejaba la luz, ubicado en el dedo de mi amado, un símbolo de la promesa duradera de nuestro amor. <br>                
            Con cada risa compartida y promesa susurrada, encontramos consuelo en la belleza del mundo que nos rodea, sabiendo que este momento, suspendido en el tiempo, quedaría grabado para siempre en el tapiz de nuestros recuerdos. <br>                
            Y así, a medida que avanzaba la noche y las estrellas pintaban sus historias en los cielos, nos encontramos perdidos en la serenidad de las montañas, dos almas unidas por el amor y la promesa de un futuro lleno de aventuras sin fin, el brillo de esa diamante un recordatorio constante del amor que iluminó nuestro camino.</p>`
            marraige.innerHTML=`matrimonio`
            marraigestory.innerHTML=`A medida que se acerca nuestro día especial, nos sentimos llenos de emoción y anticipación. Estaríamos honrados y encantados de que se una a nosotros para celebrar nuestro amor y unión. Su presencia haría que el día de nuestra boda fuera aún más significativo y memorable. Esperamos verle allí, compartiendo la alegría y las festividades con nosotros.`
        }
        if(language==false)
        {
            navhome.innerText="Home"
            navcouple.innerText="Couple"
            navstory.innerText="Story"
            navevents.innerText="Event"
            navgallery.innerText="Gallery"
            navrsvp.innerText="RSVP"
            navlanguage.innerText="ESP"
            WeddingTitle.forEach(weddingtitle=>{weddingtitle.innerText="We are getting married"});
            DateTitle.forEach(datetitle=>{datetitle.innerText="October 19th"});
            coupletitle.innerText="Happy Couple"
            coupleGroom.innerHTML=`Hailing from Michigan's Upper Peninsula, Jon's heart belonged to the great outdoors. His travels for work led him to unexpected places, including a foreign country he never imagined finding love in.<br><br>
            Amidst the rugged landscapes and towering pines, Jon's soul found peace. But amidst his travels, he stumbled upon something even more remarkable — love in a land far from home. <br><br>        
            What was once his sanctuary in nature has now found a new home in the heart of another. The peace he once found in the outdoors now resides within the embrace of his beloved, making every journey, every adventure, even more meaningful.</p>`
            coupleBride.innerHTML=`A vibrant soul from Valle de Santiago, Mexico, found her calling as a preschool teacher in Guanajuato. Her days were filled with laughter and learning, but her heart longed for love<br><br>
            Late one night, destiny intervened, and Ellie met her soulmate.Together, they shared heartfelt conversations, their connection deepening with every shared smile and laughter<br><br>
            Now, as Ellie prepares for the next chapter, she does so with gratitude and excitement. With her beloved by her side, she knows that life's greatest adventures await.</p>`
            lovestory.innerText=`Our Love Story`
            firstmeet.innerHTML=`First Meet`
            firstmeetstory.innerHTML=`Amidst the dimly lit ambiance of the bar, our paths converged in a serendipitous dance of fate. It was a typical night, yet somehow extraordinary, as if the universe conspired to bring us together. <br>
            With each exchanged glance and shared smile, the noise of the world faded into the background, leaving only the resonance of our connection. Conversation flowed effortlessly, punctuated by laughter and moments of quiet understanding.<br>                
            In that space between strangers, we found a familiarity that spoke of shared experiences and kindred spirits. As the night unfolded, it became apparent that this encounter held the promise of something more—a bond that transcended time and circumstance.<br>                
            And so, against the backdrop of clinking glasses and hushed conversations, our love story began—a tale of chance meetings and destined hearts intertwining amidst the hustle and bustle of everyday life.`
            firstdate.innerHTML=`First date`
            firstdatestory.innerHTML=`In a world where conventional first dates often involve dinner reservations or a round of bowling, our journey began on a path less traveled—a trail that wound its way through the heart of Mexico's majestic landscape, atop horses beneath the shadow of an inactive volcano. <br>
            As we rode side by side, the earth beneath us seemed to whisper secrets of centuries past, while the sky above painted a canvas of hues that mirrored the depth of our burgeoning connection. In the midst of such breathtaking beauty, time seemed to stand still, allowing us to lose ourselves in the moment, in each other. <br>
            With every step of our noble steeds, our bond deepened, woven together by the threads of shared adventure and mutual exploration. Against the backdrop of nature's grandeur, we discovered a love that transcended the ordinary—a love that would forever be etched in the fabric of our memories. <br>
            And so, amidst the rugged terrain and the vast expanse of the wilderness, our hearts found their home, entwined in a love story as extraordinary as the landscape that bore witness to its beginning.`
            proposal.innerHTML=`Proposal`
            proposalstory.innerHTML=`Beneath the star-strewn canopy of the Mexican mountains, a crackling fire painted dancing shadows upon the rugged landscape. Nestled in the heart of Guanajuato, our sanctuary awaited—a cozy AirBnB perched high above the sprawling sierras, offering a panoramic view that stole our breath away. <br>                
            As we raised our glasses in a toast to the magic of the moment, the flickering flames mirrored the warmth in our hearts—a celebration of the happiest chapter of our lives unfolding amidst the tranquility of nature's embrace. And amidst the glimmer of the firelight, there was another sparkle, a diamond catching the light, nestled upon the finger of my beloved—a symbol of our love's enduring promise. <br>                
            With each shared laugh and whispered promise, we found solace in the beauty of the world around us, knowing that this moment, suspended in time, would forever be etched in the tapestry of our memories. <br>                
            And so, as the night wore on and the stars painted their stories across the heavens, we found ourselves lost in the serenity of the mountains, two souls bound together by love and the promise of a future filled with endless adventure, the twinkle of that diamond a constant reminder of the love that illuminated our path.</p>`
            marraige.innerHTML=`Marraige`
            marraigestory.innerHTML=`As our special day draws near, we find ourselves filled with excitement and anticipation. We would be honored and delighted to have you join us in celebrating our love and union. Your presence would make our wedding day even more meaningful and memorable. We hope to see you there, sharing in the joy and festivities with us.`
        }
    }
})

/* Used to Connect to MongoDB Server
/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('../models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const rsvpCtrl = require('../controllers/RSVP');



/* Create the Express app
--------------------------------------------------------------- */
const app = express();
app.use(express.json());
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));




/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
// Detect if running in a dev environment
if (process.env.ON_HEROKU === 'false') {
    // Configure the app to refresh the browser when nodemon restarts
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        // wait for nodemon to fully restart before refreshing the page
        setTimeout(() => {
        liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}
if (process.env.ON_HEROKU === 'false') {
// When a GET request is sent to `/seed`, the items collection is seeded
app.get('/seed', async (req, res) => {
    // Remove any existing items
    const formerLocations = await db.Location.deleteMany({})
    // Seed the items collection with the starter data
    const newLocations = await db.Location.insertMany(db.seedLocations)
    //Redirect back to item gallery
    res.redirect('/Location')
})
}

/* Mount routes
--------------------------------------------------------------- */

// Home page
app.get('/', async function (req, res) {
    res.redirect('/rsvp')
});


// This tells our app to look at the `controllers/rsvp.js` file 
// to handle all routes that begin with `localhost:3000/rsvp`
app.use('/rsvp', rsvpCtrl)


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
