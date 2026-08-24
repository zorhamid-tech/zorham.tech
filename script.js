/* =========================================================
   ZORHAM.TECH
   INTERACTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement =
        document.getElementById("typingText");


    const texts = [

        "Menyesatkan dalam Jalan yang Benar.",

        "Building things from curiosity.",

        "Writing code. Solving problems.",

        "Exploring the digital world."

    ];


    let textIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function typeEffect() {

        if (!typingElement) {

            return;

        }


        const currentText =
            texts[textIndex];


        if (!deleting) {


            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex + 1
                );


            charIndex++;


            if (
                charIndex ===
                currentText.length
            ) {


                deleting = true;


                setTimeout(
                    typeEffect,
                    2200
                );


                return;

            }


        } else {


            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex - 1
                );


            charIndex--;


            if (charIndex === 0) {


                deleting = false;


                textIndex++;


                if (
                    textIndex >=
                    texts.length
                ) {

                    textIndex = 0;

                }

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 35 : 70
        );

    }


    typeEffect();



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const navMenu =
        document.querySelector(
            ".nav-menu"
        );


    if (
        menuToggle &&
        navMenu
    ) {


        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle(
                    "open"
                );

            }
        );


        document
            .querySelectorAll(".nav-link")
            .forEach(link => {


                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(
                    entry => {


                        if (
                            entry.isIntersecting
                        ) {


                            navLinks.forEach(
                                link => {

                                    link.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            const active =
                                document.querySelector(
                                    `.nav-link[href="#${entry.target.id}"]`
                                );


                            if (active) {

                                active.classList.add(
                                    "active"
                                );

                            }

                        }

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    sections.forEach(
        section => {

            observer.observe(
                section
            );

        }
    );



    /* =====================================================
       HERO GLITCH
    ===================================================== */

    const brand =
        document.querySelector(
            ".hero-brand"
        );


    if (brand) {


        setInterval(
            () => {


                if (
                    Math.random() > 0.8
                ) {


                    brand.style.transform =
                        "translateX(2px)";


                    setTimeout(
                        () => {

                            brand.style.transform =
                                "translateX(0)";

                        },
                        80
                    );

                }

            },
            1800
        );

    }



    /* =====================================================
       APPLICATION REQUEST
       EMAIL VIA FORMSUBMIT
    ===================================================== */

    const requestForm =
        document.getElementById(
            "requestForm"
        );


    const requestMessage =
        document.getElementById(
            "requestMessage"
        );


    if (requestForm) {


        requestForm.addEventListener(
            "submit",
            () => {


                /*
                 * Form akan dikirim langsung
                 * ke FormSubmit.
                 *
                 * Tidak menggunakan WhatsApp.
                 *
                 * Tidak menggunakan database.
                 *
                 * Tidak membutuhkan backend sendiri.
                 */


                if (requestMessage) {

                    requestMessage.className =
                        "request-message success";


                    requestMessage.textContent =
                        "[ MENGIRIM ] Request sedang dikirim...";

                }

            }
        );

    }



    /* =====================================================
       DISABLED PROJECT BUTTON
    ===================================================== */

    document
        .querySelectorAll(
            ".app-button.disabled"
        )
        .forEach(button => {


            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                }
            );

        });


});