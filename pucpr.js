document.addEventListener("DOMContentLoaded", function () {
    const centeredImage = document.getElementById("puc-logo");

    centeredImage.addEventListener("click", function () {
        // Configuração do efeito de fogos de artifício
        particlesJS("section-flex", {
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: "#000000",
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 5,
                },
                
                move: {
                    enable: true,
                    speed: 5,
                },
            },
        });
    });
});
