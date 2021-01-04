function Ipos() {
	var document_width, document_height;
	function mediaSize() {
		if (window.matchMedia('(min-width: 992px)').matches) {
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

			//station  id
			$(function () {
				var station_img = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/station/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 25;
				var intro = document.querySelector(".station_items_img");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: intro,
							scrub: true,
							start: "top top",
							end: "+=550% center",
							pin: true,
							markers: true,
							toggleClass: 'enable'

						}
					});
					frame_images(".station-img", station_img, ts);
				}
				images_sequenece(station_img, filename, frameCount, init);
			});

			//face id
			$(function () {
				var face_ids = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/face_id/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 25;
				var face_id = document.querySelector(".face-scanner");
				function init() {
					const SOUNDS = {
						CAP: new Audio(
							'https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/cap-gun.mp3'
						),
					}
					var myText = " Secure login using Facial ID ";
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: face_id,
							scrub: 0.5,
							start: "top 20%",
							end: "+=500%",
							pin: true,
							pinSpacing: true,
							onUpdate: self => {
								type(myText, self, ".face-text");
							},
							onLeave: () => {
								SOUNDS.CAP.play()
							}
						}
					});
					frame_images("#myimg", face_ids, ts);
				}
				images_sequenece(face_ids, filename, frameCount, init);
			});

			// Pass id
			$(function () {
				var app_frame = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/App-Video-Frams/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 24;
				var vdeo = document.querySelector("#pass-id");
				function init() {
					const SOUNDS = {
						CAP: new Audio(
							'https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/cap-gun.mp3'
						),
					}
					var myText = " A Simple Workflow that can be Used with minimal or no training.";
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: vdeo,
							scrub: 0.5,
							start: "top +=15%",
							end: "+=5000 center",
							pin: true,
							onUpdate: self => {
								type(myText, self, "#workflow");
							},

						}
					});
					frame_images(".pass-img", app_frame, ts)
				}
				images_sequenece(app_frame, filename, frameCount, init)
			});

			// kitchne id
			$(function () {
				var kitchen_img = new Array();
				var kitchen_frame = index => (
					`ipos_images/images_sequenece/kitchen_frame/${index.toString().padStart(0, '1')}.png`
				)
				const frameCount = 60;
				var kitchne = document.querySelector(".kitchne-sec");
				function init() {
					var myText = " Our advanced Interactive systems will make the work flow a breeze";
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: kitchne,
							scrub: 0.5,
							markers: true,
							start: "top",
							end: "+=4000 ",
							pin: true,
							onUpdate: self => {
								type(myText, self, ".k_break");
							},
						}
					});
					frame_images(".kds_proccess", kitchen_img, ts)
				}
				images_sequenece(kitchen_img, kitchen_frame, frameCount, init);
			});

			// kitchne printer-1
			$(function () {
				var kitchen_printer1 = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/Part-1/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 13;
				var part1 = document.querySelector(".part-1");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: part1,
							scrub: 3,
							markers: true,
							start: "top top",
							end: "+=3500",
							pin: true
						}
					});
					frame_images(".1p", kitchen_printer1, ts)
				}
				images_sequenece(kitchen_printer1, filename, frameCount, init)
			});

			// kitchne printer-2
			$(function () {
				var kitchen_printer2 = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/kitchne_part-2/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 33;
				var part2 = document.querySelector(".part-2");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: part2,
							scrub: 3,
							markers: true,
							start: "top top",
							end: "+=4000",
							pin: true,
							reverse: true
						}
					});
					frame_images(".2p", kitchen_printer2, ts)
				}
				images_sequenece(kitchen_printer2, filename, frameCount, init)
			});

			// printer-1
			$(function () {
				var printer_1 = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/printer_1/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 31;
				var introssss = document.querySelector("#printer-1");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: introssss,
							scrub: 3,
							markers: true,
							start: "top top",
							end: "+=6000 bottom",
							pin: true
						}
					});
					frame_images(".printer-1", printer_1, ts)
				}
				images_sequenece(printer_1, filename, frameCount, init);
			});

			//printer_2
			$(function () {
				var printer_2 = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/printer_2/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 28;
				var introssss = document.querySelector("#printer-2");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: introssss,
							scrub: 3,
							markers: true,
							start: "top top",
							end: "+=4000",
							pin: true,
							reverse: true
						}
					});
					frame_images(".printer-2", printer_2, ts)
				}
				images_sequenece(printer_2, filename, frameCount, init);
			});


			//eats_max
			$(function () {
				var eats_mob = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/eats_max/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 57;
				var introsssss = document.querySelector(".eats-max-sec");
				function init() {
					var myText = " your valued clients which is truly free of fees";
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: introsssss,
							scrub: 1,
							markers: true,
							start: "top top",
							end: "+=5500 center",
							pin: true,
							reverse: true,
							onUpdate: self => {
								type(myText, self, ".eats_mob_text");
							},
						}
					});
					frame_images(".eats-max", eats_mob, ts)
				}
				images_sequenece(eats_mob, filename, frameCount, init);
			});

			//eats_Web
			$(function () {
				var eats_web = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/Eats Web/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 35;
				var introsssss = document.querySelector(".eats_Website-sec");
				function init() {
					var myText = " The orders will come into your POS and will automatically fire to the kitchen printer or display.";
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: introsssss,
							scrub: 1,
							markers: true,
							start: "top top",
							end: "+=600%",
							pin: true,
							reverse: true,
							onUpdate: self => {
								type(myText, self, ".eats_website");
							},
						}
					});
					frame_images(".eats_Website", eats_web, ts)
				}
				images_sequenece(eats_web, filename, frameCount, init);
			});

			//Customer_Display
			$(function () {
				var cust_display = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/customer_display/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 35;
				var customer_display = document.querySelector("#customer_display");
				function init() {
					var myText = "giving them a rewards program and capturing their valuable feedback";
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: customer_display,
							scrub: 1,
							markers: true,
							start: "top top",
							end: "+=600%",
							pin: true,
							reverse: true,
							onUpdate: self => {
								type(myText, self, ".cut_display_text");
							},
						}
					});
					frame_images(".customer_display", cust_display, ts)
				}
				images_sequenece(cust_display, filename, frameCount, init);
			});

			//New Way
			$(function () {
				var new_ways = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/new_way/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 9;
				var new_way = document.querySelector("#new_way_sec");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: new_way,
							scrub: 2,
							markers: true,
							start: "top top",
							end: "+=500%",
							pin: true,
							reverse: true,
						}
					});
					frame_images(".new_way", new_ways, ts)
				}
				images_sequenece(new_ways, filename, frameCount, init)
			});

			//imenu
			$(function () {
				var imenu_img = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/imenu_gallery/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 183;
				var imenu = document.querySelector("#imenu");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: imenu,
							scrub: 1,
							markers: true,
							start: "top top",
							end: "+=650%",
							pin: true,
							reverse: true,
						}
					});
					frame_images(".imenu", imenu_img, ts)
				}
				images_sequenece(imenu_img, filename, frameCount, init)
			});

			//payment mode
			$(function () {
				var mobile_pay = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/mobile_payment_new/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 30;
				var payment = document.querySelector(".payment_mobile");
				function init() {
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: payment,
							scrub: 1,
							markers: true,
							start: "top top",
							end: "+=620%",
							pin: true,
							reverse: true,
						}
					});
					frame_images(".mobile_payment_new", mobile_pay, ts)
				}
				images_sequenece(mobile_pay, filename, frameCount, init);
			});

			// QR Code
			$(function () {
				var qr_img = new Array();
				var filename = index => (
					`ipos_images/images_sequenece/qr_code/${index.toString().padStart(0, '0')}.png`
				)
				const frameCount = 35;
				var qr = document.querySelector(".qr_code");
				function init() {
					const SOUNDS = {
						CAP: new Audio(
							'https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/cap-gun.mp3'
						),
					}
					var myText = " My iPos is the solution got you covered.";
					var ts = gsap.timeline({
						scrollTrigger: {
							trigger: qr,
							scrub: 0.5,
							markers: true,
							start: "top top",
							end: "+=5000",
							pin: true,
							onUpdate: self => {
								type(myText, self, ".qr_text");
							},

						}
					});
					frame_images(".qr_code", qr_img, ts)
				}
				images_sequenece(qr_img, filename, frameCount, init);
			});

			$(window).on('resize', function () {
				if (document_width != $(document).width() || document_height != $(document).height()) {
					location.reload(1);
				}
			})


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
		}
	}
	mediaSize();
	window.addEventListener('resize load', mediaSize, false);
}

const classList = document.querySelector(".main-content");
const classLength = classList.length;
if (classLength != 0) {
	// console.log("Element found with the specified class name");
	Ipos();
} else {
	// console.log("No element found with the specified class name");
}