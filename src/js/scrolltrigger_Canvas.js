function Ipos() {
    var document_width, document_height;
    function mediaSize() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            // gsap loading plugin
            gsap.registerPlugin(ScrollTrigger);

            // on scorll typeing
            function type(myText, scene, name) {
                let myTextLength = myText.length;
                function typing(myText, myTextLength, displayedLength, name) {
                    if (displayedLength <= myTextLength) {
                        $(name).text(myText.substring(0, displayedLength));
                    }
                }
                let scrollProgress = Math.ceil(scene.progress * myTextLength);
                typing(myText, myTextLength, scrollProgress, name);

            }

            // canvas rendering 
            function render(canvas, images, airpods) {
                var context = canvas.getContext("2d");
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);
            }

            // canvas images
            function canvas_images(images, frameCount, currentFrame, canvas, ts) {
                const airpods = {
                    frame: 0
                }
                for (let i = 0; i < frameCount; i++) {
                    const img = new Image();
                    img.src = currentFrame(i);
                    images.push(img);
                }
                ts.to(airpods, {
                    frame: frameCount - 1,
                    snap: "frame",
                    roundProps: "frame",       // only integers so it can be used as an array index
                    immediateRender: true,    // load first image automatically
                    ease: Linear.easeNone,
                    onUpdate: () => {
                        render(canvas, images, airpods)
                    }
                })
                images[0].onload = () => {
                    render(canvas, images, airpods);
                }
            }

            // station id
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("station_id");
                canvas.width = 814;
                canvas.height = 764;
                var frameCount = 24;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/station/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/station/${index.toString().padStart(0, '0')}.png`
                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".station_items_img",
                        scrub: 1,
                        start: "top",
                        end: "+=600%",
                        pin: true,
                        toggleClass: "station_new"
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            // face id
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("myimg");
                canvas.width = 813;
                canvas.height = 713;
                var frameCount = 25;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/face_id/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/face_id/${index.toString().padStart(0, '0')}.png`
                );
                var myText = " Secure login using Facial ID ";
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".face-scanner",
                        scrub: 1,
                        start: "top 1%",
                        end: "+=600%",
                        pin: true,
                        onUpdate: self => {
                            type(myText, self, ".face-text");
                        },
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            // pass id
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("pass_canvas");
                canvas.width = 920;
                canvas.height = 707;
                var frameCount = 24;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/App-Video-Frams/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/App-Video-Frams/${index.toString().padStart(0, '0')}.png`
                );
                var myText = " A Simple Workflow that can be Used with minimal or no training.";
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#pass-id",
                        scrub: 1,
                        start: "top 8%",
                        end: "+=500%",
                        pin: true,
                        onUpdate: self => {
                            type(myText, self, "#workflow");
                        },
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            // type of business
            $(function () {
                const boxes = gsap.utils.toArray('.type_Sec');
                boxes.forEach((box, i) => {
                    var images = box.querySelector(".scale-new");
                    var text = box.querySelector(".opn");
                    var ts = gsap.timeline({
                        scrollTrigger: {
                            trigger: box,
                            scrub: 1,
                            pin: true,
                            ease: "power2.easeInOut",
                            start: "top 5%",
                            end: "'+=200%",
                        }
                    })
                    ts
                        .fromTo(images, {
                            scale: 2, x: 100, opacity: 0
                        }, {
                            scale: 1, x: 0, opacity: 1
                        })
                        .fromTo(text, {
                            y: 70, opacity: 0.01
                        }, {
                            y: 0, opacity: 1
                        })
                });

            });

            // kitchne id
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("kds_proccess");
                canvas.width = 1920;
                canvas.height = 732;
                var frameCount = 60;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/kitchen_frame/${index.toString().padStart(0, '1')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/kitchen_frame/${index.toString().padStart(0, '0')}.png`

                );
                var myText = " Our advanced Interactive systems will make the work flow a breeze";
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".kitchne-sec",
                        scrub: 1,
                        start: "top ",
                        end: "+=500%",
                        pin: true,
                        onUpdate: self => {
                            type(myText, self, ".k_break");
                        },
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            // kitchne Printer 1
            $(function () {
                var images = new Array();
                var canvas = document.querySelector(".part1");
                canvas.width = 1408;
                canvas.height = 587;
                var frameCount = 13;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/Part-1/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/Part-1/${index.toString().padStart(0, '0')}.png`
                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".part-1",
                        scrub: 1,
                        start: "top 5%",
                        end: "+=550%",
                        pin: true,
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            // kitchne Printer 2
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("part2");
                canvas.width = 1408;
                canvas.height = 499;
                var frameCount = 33;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/Part-2/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/Part-2/${index.toString().padStart(0, '0')}.png`
                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".part-2",
                        scrub: 1,
                        start: "top 8%",
                        end: "+=500%",
                        pin: true,
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            //  Printer 1
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("printer1");
                canvas.width = 1920;
                canvas.height = 806;
                var frameCount = 31;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/printer_1/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/printer_1/${index.toString().padStart(0, '0')}.png`
                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#printer-1",
                        scrub: 1,
                        start: "top 10%",
                        end: "+=500%",
                        pin: true,
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            //  Printer 2
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("printer2");
                canvas.width = 1920;
                canvas.height = 1276;
                var frameCount = 28;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/printer_2/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/printer_2/${index.toString().padStart(0, '0')}.png`
                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#printer-2",
                        scrub: 1,
                        start: "top",
                        end: "+=600%",
                        pin: true,
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            // eats  max
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("eats_max");
                canvas.width = 370;
                canvas.height = 635;
                var frameCount = 57;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/eats_max/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/eats_max/${index.toString().padStart(0, '0')}.png`
                );
                var myText = " your valued clients which is truly free of fees";
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".eats-max-sec",
                        scrub: 1,
                        start: "top -2.5%",
                        end: "+=550%",
                        pin: true,
                        onUpdate: self => {
                            type(myText, self, ".eats_mob_text");
                        },
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
                ts.fromTo(".p5p", { y: "60%", opacity: 0 }, { y: "0", opacity: 1 });

            });

            // eats  website
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("eats_Website");
                canvas.width = 1088;
                canvas.height = 680;
                var frameCount = 35;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/Eats Web/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/Eats Web/${index.toString().padStart(0, '0')}.png`
                );
                var myText = " The orders will come into your POS and will automatically fire to the kitchen printer or display.";
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".eats_Website-sec",
                        scrub: 1,
                        start: "top 3%",
                        end: "+=550%",
                        pin: true,
                        onUpdate: self => {
                            type(myText, self, ".eats_website_text");
                        },
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            // customer  Display
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("cus_display");
                canvas.width = 950;
                canvas.height = 750;
                var frameCount = 35;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/customer_display/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/customer_display/${index.toString().padStart(0, '0')}.png`
                );
                var myText = "giving them a rewards program and capturing their valuable feedback";
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#customer_display",
                        scrub: 1,
                        start: "top -2%",
                        end: "+=550%",
                        pin: true,
                        onUpdate: self => {
                            type(myText, self, ".cut_display_text");
                        },
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            //  new way
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("new_way");
                canvas.width = 850;
                canvas.height = 850;
                var frameCount = 9;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/new_way/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/new_way/${index.toString().padStart(0, '0')}.png`
                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#new_way_sec",
                        scrub: 1,
                        start: "top 5%",
                        end: "+=400%",
                        pin: true,
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            //  imenu
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("imenu_gallery");
                canvas.width = 1072;
                canvas.height = 599;
                var frameCount = 183;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/imenu_gallery/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/imenu_gallery/${index.toString().padStart(0, '0')}.png`
                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#imenu",
                        scrub: 1,
                        start: "top ",
                        end: "+=600%",
                        pin: true,
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            //  payment method
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("mobile_payment_new");
                canvas.width = 950;
                canvas.height = 560;
                var frameCount = 30;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/mobile_payment_new/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/mobile_payment_new/${index.toString().padStart(0, '0')}.png`

                );
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".payment_mobile",
                        scrub: 1,
                        start: "top -2%",
                        end: "+=600%",
                        pin: true,
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            //  qr code
            $(function () {
                var images = new Array();
                var canvas = document.getElementById("qr-img");
                canvas.width = 580;
                canvas.height = 580;
                var frameCount = 35;
                const currentFrame = index => (
                    // `ipos_images/images_sequenece/qr_code/${index.toString().padStart(0, '0')}.png`
                    `https://ipos-demo.s3.ap-south-1.amazonaws.com/images_sequenece_new/qr_code/${index.toString().padStart(0, '0')}.png`
                );
                var myText = " My iPos is the solution got you covered.";
                var ts = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".qr_code",
                        scrub: 1,
                        start: "top 8% ",
                        end: "+=600%",
                        pin: true,
                        onUpdate: self => {
                            type(myText, self, ".qr_text");
                        },
                    }
                })
                canvas_images(images, frameCount, currentFrame, canvas, ts)
            });

            $(window).on('resize', function () {
                if (document_width != $(document).width() || document_height != $(document).height()) {
                    location.reload(1);
                }
            })
        }
        else {
            var dwidth = $(window).width();
            $(window).on("resize", function () {
                var wwidth = $(window).width();
                if (dwidth !== wwidth) {
                    location.reload(0)
                }
            });
        }
    }
    mediaSize();
    window.addEventListener('resize ', mediaSize, false);

}

const classList = document.querySelector(".main-content");
const classLength = classList.length;
if (classLength != 0) {
    // console.log("Element found with the specified class name");
    Ipos();
} else {
    // console.log("No element found with the specified class name");
}
