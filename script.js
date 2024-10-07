document.addEventListener("DOMContentLoaded", function () {
    const bgColorInput = document.getElementById("bgColor");
    const borderColorInput = document.getElementById("borderColor");
    const borderWidthInput = document.getElementById("borderWidth");
    const textInput = document.getElementById("text");
    const fontSizeInput = document.getElementById("fontSize");
    const imageUploadInput = document.getElementById("imageUpload");
    const imageXInput = document.getElementById("imageX");
    const imageYInput = document.getElementById("imageY");
    const card = document.getElementById("card");
    const cardText = document.getElementById("cardText");
    const cardImage = document.getElementById("cardImage");

    function updateCard() {
        card.style.backgroundColor = bgColorInput.value;
        card.style.borderColor = borderColorInput.value;
        card.style.borderWidth = borderWidthInput.value + "px";
        cardText.textContent = textInput.value;
        cardText.style.fontSize = fontSizeInput.value + "px";

        // Atualiza a posição da imagem
        cardImage.style.left = `${imageXInput.value + 1/1000}px`; // Ajuste para centralizar
        cardImage.style.top = `${imageYInput.value + 1/10000}px`; // Ajuste para centralizar
    }

    function handleImageUpload() {
        const file = imageUploadInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                cardImage.src = event.target.result;
                cardImage.style.display = 'block';
                updateCard();
            };
            reader.readAsDataURL(file);
        }
    }

    bgColorInput.addEventListener("input", updateCard);
    borderColorInput.addEventListener("input", updateCard);
    borderWidthInput.addEventListener("input", updateCard);
    textInput.addEventListener("input", updateCard);
    fontSizeInput.addEventListener("input", updateCard);
    imageUploadInput.addEventListener("change", handleImageUpload);
    imageXInput.addEventListener("input", updateCard);
    imageYInput.addEventListener("input", updateCard);
});
