/* =========================================================
   ZORHAM.TECH
   DOWNLOAD PAGE
   INTERACTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement =
        document.getElementById("typingText");


    const texts = [
        "Download dan gunakan Aplikasi Z.",
        "Kelola data dengan lebih mudah.",
        "Catat iuran Agustusan dengan rapi.",
        "Satu aplikasi. Banyak kebutuhan."
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
                charIndex >=
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


            if (charIndex <= 0) {

                charIndex = 0;

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
       DOWNLOAD BUTTON EFFECT
    ===================================================== */

    const downloadButton =
        document.getElementById(
            "downloadButton"
        );


    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            () => {

                downloadButton
                    .querySelector("span")
                    .textContent =
                    "./ DOWNLOADING...";


                setTimeout(
                    () => {

                        downloadButton
                            .querySelector("span")
                            .textContent =
                            "./ DOWNLOAD_APK";

                    },
                    2500
                );

            }
        );

    }



    /* =====================================================
       TERMINAL GLITCH
    ===================================================== */

    const title =
        document.querySelector(
            ".download-title h1"
        );


    if (title) {

        setInterval(
            () => {

                if (
                    Math.random() > 0.82
                ) {

                    title.style.transform =
                        "translateX(2px)";


                    setTimeout(
                        () => {

                            title.style.transform =
                                "translateX(0)";

                        },
                        70
                    );

                }

            },
            1800
        );

    }



    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c ZORHAM.TECH ",
        "background:#00f6ff;color:#030507;font-weight:bold;padding:5px;"
    );


    console.log(
        "Aplikasi Z download system initialized."
    );

});