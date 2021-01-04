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


                //station
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/station/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 25;

                    var intro = document.querySelector(".station_items_img");
                    function init() {
                        // TweenMax can tween any property of any object. We use this object to cycle through the array
                        var anim = { frame: 0 };

                        // create tween
                        var tween = new TimelineMax()
                        tween
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,
                                // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".station-img").attr("src", images[anim.frame].src); // set the image source
                                }
                            }));
                        
                        // new Scene 
                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
                            triggerElement: intro,
                            triggerHook: 0.03,
                        })

                        // tween set
                        scene.setTween(tween)
                            .setPin(intro)
                            .addTo(controller);
                    }

                    // init calling 
                    images_sequenece(images, filename, frameCount, init);
                });


                //face id
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/face_id/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 25;

                    var intro = document.querySelector(".face-scanner");
                    function init() {
                        // TweenMax can tween any property of any object. We use this object to cycle through the array
                        var anim = { frame: 0 };

                        // typing effect
                        var myText = " Secure login using Facial ID ";
                        let myTextLength = myText.length;
                        var audioElement = document.querySelector('#Ipos');
                        // audioElement.setAttribute('src', 'audio/notification.mp3');


                        // create tween
                        var tween = new TimelineMax()
                        tween
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,
                                // show every image the same ammount of time
                                onUpdate: () => {
                                    $("#myimg").attr("src", images[anim.frame].src); // set the image source
                                }
                            }));

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
                    images_sequenece(images, filename, frameCount, init);
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
                        var anim = { frame: 0 };
                        var myText = " A Simple Workflow that can be Used with minimal or no training.";
                        let myTextLength = myText.length;

                        var tween1 = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: app_frame.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index   // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".pass-img").attr("src", app_frame[anim.frame].src); // set the image source
                                }
                            }));

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
                        // TweenMax can tween any property of any object. We use this object to cycle through the array
                        var anim = { frame: 0 };
                        // create tween
                        var myText = " Our advanced Interactive systems will make the work flow a breeze";
                        let myTextLength = myText.length;

                        var tween011 = new TimelineMax()

                            .to(anim, 1, {
                                frame: kitchen_img.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".kds_proccess").attr("src", kitchen_img[anim.frame].src); // set the image source
                                }
                            })

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
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/Part-1/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 13;

                    var intro = document.querySelector(".part-1");
                    function init() {
                        var anim = { frame: 0 };
                        // create tween
                        var tween = new TimelineMax()
                            .to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".1p").attr("src", images[anim.frame].src); // set the image source
                                }
                            })

                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
                            triggerElement: intro,
                            triggerHook: 0.19,
                        })
                        scene.setTween(tween)
                            .setPin(intro)
                            .addTo(controller);
                    }
                    images_sequenece(images, filename, frameCount, init);
                });

                //kitchne printer_2
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/kitchne_part-2/${index.toString().padStart(0, '0')}.png`
                    )
                    
                    const frameCount = 33;
                    var intro = document.querySelector(".part-2");

                    function init() {
                        var anim = { frame: 0 };
                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".2p").attr("src", images[anim.frame].src); // set the image source
                                }
                            })
                            );
                        var scene = new ScrollMagic.Scene({
                            duration: "300%",
                            triggerElement: intro,
                            triggerHook: 0.2,
                        })
                        scene.setTween(tween)
                            .setPin(intro)
                            .addTo(controller);
                    }
                    images_sequenece(images, filename, frameCount, init)
                });

                // printer_1
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/printer_1/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 31;

                    var introssss = document.querySelector("#printer-1");
                    function init() {
                        var anim = { frame: 0 };
                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".printer-1").attr("src", images[anim.frame].src); // set the image source
                                }
                            })
                            );
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
                    images_sequenece(images, filename, frameCount, init);
                });

                // printer 2
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/printer_2/${index.toString().padStart(0, '0')}.png`
                    )

                    const frameCount = 28;

                    var introssssss = document.querySelector("#printer-2");
                    function init() {

                        var anim = { frame: 0 };
                        // create tween
                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".printer-2").attr("src", images[anim.frame].src); // set the image source
                                }
                            }));
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
                    images_sequenece(images, filename, frameCount, init);
                });

                // eats max
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/eats_max/${index.toString().padStart(0, '0')}.png`
                    )

                    const frameCount = 57;

                    var introsssss = document.querySelector(".eats-max-sec");
                    function init() {
                        var anim = { frame: 0 };
                        var myText = " your valued clients which is truly free of fees";
                        let myTextLength = myText.length;
                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".eats-max").attr("src", images[anim.frame].src);
                                    //$(".p").add("src", images[anim.frame].src); // set the image source
                                }
                            }))


                            // .add(TweenMax.fromTo(".p1p", 1.1, { opacity: 1, y: "100px" }, { opacity: 0, y: "0", ease: Power4.easeNone }, "+1"))
                            // .add(TweenMax.fromTo(".p2p", 1.2, { opacity: 1, y: "100px" }, { opacity: 0, y: "0", ease: Power4.easeNone }, "+1.1"))
                            // .add(TweenMax.fromTo(".p3p", 1.3, { opacity: 1, y: "100px" }, { opacity: 0, y: "0", ease: Power4.easeNone }, "+1.2"))
                            // .add(TweenMax.fromTo(".p4p", 1.4, { opacity: 1, y: "100px" }, { opacity: 0, y: "0", ease: Power4.easeNone }, "+1.3"))
                            .add(TweenMax.fromTo(".p5p", 1.5, { opacity: 0, y: "100px" }, { opacity: 1, y: "0", ease: Power4.easeNone }, "+1.3"))


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

                    images_sequenece(images, filename, frameCount, init);
                });

                // eats website
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/Eats Web/${index.toString().padStart(0, '0')}.png`
                    )

                    const frameCount = 35;
                    var introsssss = document.querySelector(".eats_Website-sec");

                    function init() {

                        var anim = { frame: 0 };
                        var myText = " The orders will come into your POS and will automatically fire to the kitchen printer or display.";
                        let myTextLength = myText.length;

                        // create tween
                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".eats_Website").attr("src", images[anim.frame].src); // set the image source
                                }
                            }))
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
                    images_sequenece(images, filename, frameCount, init);
                });

                // customer_display
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/customer_display/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 35;
                    var customer_display = document.querySelector("#customer_display");
                    function init() {

                        var myText = "giving them a rewards program and capturing their valuable feedback";
                        let myTextLength = myText.length;
                        var anim = { frame: 0 };

                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".customer_display").attr("src", images[anim.frame].src); // set the image source
                                }
                            }));
                        var scene = new ScrollMagic.Scene({
                            duration: "300%",
                            triggerElement: customer_display,
                            triggerHook: 0.02,
                        })
                        scene.setTween(tween).setPin(customer_display).on('progress', function () {
                            type(myText, myTextLength, scene, ".cut_display_text")
                        }).addTo(controller).setClassToggle('#customer_display', 'modifier1');
                    }
                    images_sequenece(images, filename, frameCount, init);
                });

                // New Way
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/new_way/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 9;
                    var new_way = document.querySelector("#new_way_sec");
                    function init() {
                        var anim = { frame: 0 };

                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".new_way").attr("src", images[anim.frame].src); // set the image source
                                }
                            }))
                        var scene = new ScrollMagic.Scene({
                            duration: "150%",
                            triggerElement: new_way,
                            triggerHook: 0.09,
                        })
                        scene.setTween(tween).setPin(new_way).addTo(controller).setClassToggle('#new_way', 'modifier1');
                    }
                    images_sequenece(images, filename, frameCount, init)
                });

                // imenu
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/imenu_gallery/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 183;

                    var imenu = document.querySelector("#imenu");
                    function init() {
                        var anim = { frame: 0 };
                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".imenu").attr("src", images[anim.frame].src); // set the image source
                                }
                            }))
                        var scene = new ScrollMagic.Scene({
                            duration: "250%",
                            triggerElement: imenu,
                            triggerHook: 0,
                        })
                        scene.setTween(tween).setPin(imenu).addTo(controller).setClassToggle('#imenu', 'modifier1');
                    }
                    images_sequenece(images, filename, frameCount, init)
                });

                // mobile payment
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/mobile_payment_new/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 30;
                    var payment = document.querySelector(".payment_mobile");
                    function init() {
                        var anim = { frame: 0 };
                        var tween = new TimelineMax()
                        tween
                            .to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".mobile_payment_new").attr("src", images[anim.frame].src); // set the image source
                                }
                            })
                        if (window.matchMedia('(min-width: 1500px)').matches) {
                            tween.to(".mobile_payment_new", 1, { y: "-5px" }, "-=3.8")
                        }

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
                    images_sequenece(images, filename, frameCount, init);
                });

                //qr code
                $(function () {
                    var images = new Array();
                    var filename = index => (
                        `ipos_images/images_sequenece/qr_code/${index.toString().padStart(0, '0')}.png`
                    )
                    const frameCount = 35;
                    var qr = document.querySelector(".qr_code");
                    function init() {
                        var anim = { frame: 0 };
                        var myText = " My iPos is the solution got you covered.";
                        let myTextLength = myText.length;
                        var tween = new TimelineMax()
                            .add(TweenMax.to(anim, 1, {
                                frame: images.length - 1,  // animate propery frame to number of images
                                roundProps: "frame",       // only integers so it can be used as an array index
                                immediateRender: true,    // load first image automatically
                                ease: Linear.easeNone,     // show every image the same ammount of time
                                onUpdate: () => {
                                    $(".qr_code").attr("src", images[anim.frame].src); // set the image source
                                }
                            }))
                        var scene = new ScrollMagic.Scene({
                            duration: "200%",
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
                    images_sequenece(images, filename, frameCount, init);
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