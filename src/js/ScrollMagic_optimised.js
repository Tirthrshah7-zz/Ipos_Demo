function Ipos() {
    var document_width, document_height;
    function mediaSize() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $(function () {
                // global function 

                // init controller
                var controller = new ScrollMagic.Controller();

                // ImagesSequence Loop
                function images_sequenece(images, filename, frameCount, callback) {
                    var cnt = 0;
                    for (var i = 0; i < frameCount; i++) {
                        var img = new Image();
                        img.onload = () => {
                            ++cnt;
                            if (cnt >= frameCount) {
                                callback();
                            }
                        }
                        img.src = filename(i);
                        images.push(img);
                    }
                }

                // frames sequences
                function frame_images(images_id, images, tween) {
                    // create tween
                    var anim = { frame: 0 };
                    tween
                        .add(TweenMax.to(anim, 1, {
                            frame: images.length - 1,  // animate propery frame to number of images
                            roundProps: "frame",       // only integers so it can be used as an array index
                            immediateRender: true,    // load first image automatically
                            ease: Linear.easeNone,
                            // show every image the same ammount of time
                            onUpdate: () => {
                                $(images_id).attr("src", images[anim.frame].src); // set the image source
                            }
                        }));
                }

                // Scroll Type
                function typing(myText, myTextLength, displayedLength, name) {
                    if (displayedLength <= myTextLength) {
                        $(name).text(myText.substring(0, displayedLength));
                    }
                }
                function type(myText, myTextLength, scene, name) {
                    let scrollProgress = Math.ceil(scene.progress() * myTextLength);
                    typing(myText, myTextLength, scrollProgress, name);
                }


                // function init all controller //////////////////////////

                //station
                $(function () {
                    var station_img = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/station/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 25;

                    var intro = document.querySelector(".station_items_img");
                    function init() {

                        var tween = new TimelineMax()
                        // new Scene 
                        frame_images(".station-img", station_img, tween);
                        var scene = new ScrollMagic.Scene({
                            duration: 3000,
                            triggerElement: intro,
                            triggerHook: 0.03,

                        })
                        // tween set
                        scene.setTween(tween)
                            .setPin(intro)
                            .addTo(controller);
                    }
                    // init calling 
                    images_sequenece(station_img, filename, frameCount, init);

                });

                //face id
                $(function () {
                    var face_id = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/face_id/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 25;

                    var intro = document.querySelector(".face-scanner");
                    function init() {

                        // typing effect
                        var myText = " Secure login using Facial ID ";
                        let myTextLength = myText.length;
                        var audioElement = document.querySelector('#Ipos');
                        // audioElement.setAttribute('src', 'audio/notification.mp3');

                        // create tween
                        var tween = new TimelineMax()
                        frame_images("#myimg", face_id, tween)

                        // new Scene 
                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
                            triggerElement: intro,
                            triggerHook: 0.02,
                        })

                        // tween set
                        scene.setTween(tween)
                            .setPin(intro)
                            .on('progress', function () {
                                type(myText, myTextLength, scene, ".face-text");
                            })
                            .on('leave', function () {
                                // var beepOne = $("#Ipos")[0];

                                // $(function () {
                                //     beepOne.play();
                                // });
                            })
                            .addTo(controller);
                    }
                    // init calling 
                    images_sequenece(face_id, filename, frameCount, init);
                });

                //password frame
                $(function () {
                    var app_frame = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/App-Video-Frams/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 24;
                    var vdeo = document.querySelector("#pass-id");

                    function init() {
                        var myText = " A Simple Workflow that can be Used with minimal or no training.";
                        let myTextLength = myText.length;

                        var tween1 = new TimelineMax()
                        frame_images(".pass-img", app_frame, tween1)

                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
                            triggerElement: vdeo,
                            triggerHook: 0.05,
                        })
                        scene.setTween(tween1)
                            .setPin(vdeo)
                            .setClassToggle(vdeo, 'modifier1')
                            .on('progress', function () {
                                type(myText, myTextLength, scene, "#workflow");
                            })
                            .addTo(controller);
                    }
                    images_sequenece(app_frame, filename, frameCount, init)
                });

                // type of business
                $(function () {
                    // Create scenes in jQuery each() loop
                    $(".sec_1").each(function () {
                        var text = $(this).find(".opn");
                        var img_scale = $(this).find(".scale-new");
                        var tween01 = new TimelineMax()
                            .add(TweenMax.fromTo(this, 1, { opacity: 0.4 }, { opacity: 1, ease: Linear.easeNone }))
                            .add(TweenMax.fromTo(img_scale, 1, { x: "+250%", opacity: 0.1 }, { x: "0%", opacity: 0.8, ease: Linear.easeNone }))
                            .add(TweenMax.fromTo(img_scale, 1, { scale: 3.1, opacity: 0.5 }, { scale: 1, opacity: 1, ease: Linear.easeNone }))
                            .add(TweenMax.fromTo(text, 1, { y: "30%", opacity: 0.1 }, { y: "0%", opacity: 1, ease: Power1.easeOut }))
                        new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: 0.1,
                            duration: "200%",
                        })
                            .setPin(this)
                            .setTween(tween01)
                            .addTo(controller);
                    });
                });

                // kitchen section
                $(function () {
                    var kitchen_img = new Array();
                    var kitchen_frame = index => (
                        `ipos_images/images_sequenece/kitchen_frame/${index.toString().padStart(0, '1')}.png`
                    )
                    const frameCount = 60;
                    var kitchne = document.querySelector(".kitchne-sec");
                    function init() {
                        // create tween
                        var myText = " Our advanced Interactive systems will make the work flow a breeze";
                        let myTextLength = myText.length;

                        var tween011 = new TimelineMax()
                        frame_images(".kds_proccess", kitchen_img, tween011)
                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
                            triggerElement: kitchne,
                            triggerHook: 0.01,
                        })
                        scene.setTween(tween011)
                            .setPin(kitchne)
                            .on('progress', function () {
                                type(myText, myTextLength, scene, ".k_break")
                            })
                            .setClassToggle('.kitchne-sec', 'modifier1')
                            .addTo(controller);
                    }
                    images_sequenece(kitchen_img, kitchen_frame, frameCount, init);
                });

                //kitchne printer_1
                $(function () {
                    var kitchen_printer1 = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/Part-1/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 13;

                    var intro = document.querySelector(".part-1");
                    function init() {

                        // create tween
                        var tween = new TimelineMax()

                        frame_images(".1p", kitchen_printer1, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
                            triggerElement: intro,
                            triggerHook: 0.19,
                        })
                        scene.setTween(tween)
                            .setPin(intro)
                            .addTo(controller);
                    }
                    images_sequenece(kitchen_printer1, filename, frameCount, init);
                });

                //kitchne printer_2
                $(function () {
                    var kitchen_printer2 = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/kitchne_part-2/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 33;
                    var intro = document.querySelector(".part-2");

                    function init() {
                        var tween = new TimelineMax()

                        frame_images(".2p", kitchen_printer2, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "300%",
                            triggerElement: intro,
                            triggerHook: 0.2,
                        })
                        scene.setTween(tween)
                            .setPin(intro)
                            .addTo(controller);
                    }
                    images_sequenece(kitchen_printer2, filename, frameCount, init)
                });

                // printer_1
                $(function () {
                    var printer_1 = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/printer_1/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 31;

                    var introssss = document.querySelector("#printer-1");
                    function init() {
                        var tween = new TimelineMax()

                        frame_images(".printer-1", printer_1, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "250%",
                            triggerElement: introssss,
                            triggerHook: 0.05,
                        })
                        scene.setTween(tween)
                            .setPin(introssss)
                            .setClassToggle('#printer-1', 'modifier1')
                            .addTo(controller);
                    }
                    images_sequenece(printer_1, filename, frameCount, init);
                });

                // printer 2
                $(function () {
                    var printer_2 = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/printer_2/${index.toString().padStart(0, '0')}.png`
                    )

                    const frameCount = 28;

                    var introssssss = document.querySelector("#printer-2");
                    function init() {

                        // create tween
                        var tween = new TimelineMax()

                        frame_images(".printer-2", printer_2, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
                            triggerElement: introssssss,
                            triggerHook: 0,
                        })
                        scene.setTween(tween)
                            .setPin(introssssss)
                            .setClassToggle('#printer-2', 'modifier1')
                            .addTo(controller);
                    }
                    images_sequenece(printer_2, filename, frameCount, init);
                });

                // eats max
                $(function () {
                    var eats_mob = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/eats_max/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 57;
                    var introsssss = document.querySelector(".eats-max-sec");
                    function init() {
                        var myText = " your valued clients which is truly free of fees";
                        let myTextLength = myText.length;
                        var tween = new TimelineMax()

                            .add(TweenMax.fromTo(".p5p", 1.5, { opacity: 0, y: "100px" }, { opacity: 1, y: "0", ease: Power4.easeNone }, "+1.3"))
                        frame_images(".eats-max", eats_mob, tween)

                        var scene = new ScrollMagic.Scene({
                            duration: "300%",
                            triggerElement: introsssss,
                            triggerHook: 0,
                        })

                        scene.on('progress', function () {
                            type(myText, myTextLength, scene, ".eats_mob_text")
                        })
                            .setTween(tween)
                            .setPin(introsssss)
                            .setClassToggle(introsssss, 'modifier1')
                            .addTo(controller)
                    }
                    images_sequenece(eats_mob, filename, frameCount, init);
                });

                // eats website
                $(function () {
                    var eats_web = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/Eats Web/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 35;
                    var introsssss = document.querySelector(".eats_Website-sec");
                    function init() {
                        var myText = " The orders will come into your POS and will automatically fire to the kitchen printer or display.";
                        let myTextLength = myText.length;

                        // create tween
                        var tween = new TimelineMax()
                        frame_images(".eats_Website", eats_web, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "300%",
                            triggerElement: introsssss,
                            triggerHook: 0,
                        })
                        scene.on('progress', function () {
                            type(myText, myTextLength, scene, ".eats_website")
                        })
                            .setTween(tween)
                            .setPin(introsssss)
                            .setClassToggle(introsssss, 'modifier1')
                            .addTo(controller);
                    }
                    images_sequenece(eats_web, filename, frameCount, init);
                });

                // customer_display
                $(function () {
                    var cust_display = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/customer_display/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 35;
                    var customer_display = document.querySelector("#customer_display");
                    function init() {

                        var myText = "giving them a rewards program and capturing their valuable feedback";
                        let myTextLength = myText.length;

                        var tween = new TimelineMax()
                        frame_images(".customer_display", cust_display, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "300%",
                            triggerElement: customer_display,
                            triggerHook: 0.02,
                        })
                        scene.setTween(tween).setPin(customer_display).on('progress', function () {
                            type(myText, myTextLength, scene, ".cut_display_text")
                        }).addTo(controller).setClassToggle('#customer_display', 'modifier1');
                    }
                    images_sequenece(cust_display, filename, frameCount, init);
                });

                // New Way
                $(function () {
                    var new_ways = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/new_way/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 9;
                    var new_way = document.querySelector("#new_way_sec");
                    function init() {

                        var tween = new TimelineMax()

                        frame_images(".new_way", new_ways, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "150%",
                            triggerElement: new_way,
                            triggerHook: 0.09,
                        })
                        scene.setTween(tween).setPin(new_way).addTo(controller).setClassToggle('#new_way', 'modifier1');
                    }
                    images_sequenece(new_ways, filename, frameCount, init)
                });

                // imenu
                $(function () {
                    var imenu_img = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/imenu_gallery/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 183;
                    var imenu = document.querySelector("#imenu");
                    function init() {
                        var tween = new TimelineMax()
                        frame_images(".imenu", imenu_img, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "250%",
                            triggerElement: imenu,
                            triggerHook: 0,
                        })
                        scene.setTween(tween).setPin(imenu).addTo(controller).setClassToggle('#imenu', 'modifier1');
                    }
                    images_sequenece(imenu_img, filename, frameCount, init)
                });

                // mobile payment
                $(function () {
                    var mobile_pay = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/mobile_payment_new/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 30;
                    var payment = document.querySelector(".payment_mobile");
                    function init() {
                        var tween = new TimelineMax()
                        tween
                        frame_images(".mobile_payment_new", mobile_pay, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: "250%",
                            triggerElement: payment,
                            triggerHook: 0.01,
                        })
                        scene.setTween(tween)
                            .setPin(payment)
                            .setClassToggle(payment, 'modifier1')
                            .addTo(controller);
                    }
                    images_sequenece(mobile_pay, filename, frameCount, init);
                });

                function t() { }
                //qr code
                $(function () {
                    var qr_img = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/qr_code/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 35;
                    var qr = document.querySelector(".qr_code");
                    function init() {
                        var myText = " My iPos is the solution got you covered.";
                        let myTextLength = myText.length;
                        var tween = new TimelineMax()
                        frame_images(".qr_code", qr_img, tween)
                        var scene = new ScrollMagic.Scene({
                            duration: 4000,
                            triggerElement: qr,
                            triggerHook: 0.1,
                        })
                        scene.on('progress', function () {
                            type(myText, myTextLength, scene, ".qr_text");
                        })
                            .setTween(tween)
                            .setPin(qr)
                            .setClassToggle(qr, 'modifier1')
                            .addTo(controller);
                    }
                    images_sequenece(qr_img, filename, frameCount, init);
                });
                $(window).on('resize', function () {
                    if (document_width != $(document).width() || document_height != $(document).height()) {
                        location.reload(1);
                    }
                })
            });
        }
        else {
            var dwidth = $(window).width();
            // console.log(dwidth);
            $(window).on("resize", function () {
                var wwidth = $(window).width();
                // console.log(wwidth);
                if (dwidth !== wwidth) {
                    location.reload(0)
                }
            });

        };
    }
    mediaSize();
    window.addEventListener('resize', mediaSize, false);
};

const classList = document.querySelector(".main-content");
const classLength = classList.length;
if (classLength != 0) {
    // console.log("Element found with the specified class name");
    Ipos();
} else {
    // console.log("No element found with the specified class name");
}


