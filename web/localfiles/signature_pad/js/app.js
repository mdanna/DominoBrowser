var wrapper = document.getElementById("signature-pad"),
    clearButton = wrapper.querySelector("[data-action=clear]"),
    //savePNGButton = wrapper.querySelector("[data-action=save-png]"),
    //saveSVGButton = wrapper.querySelector("[data-action=save-svg]"),
    canvas = wrapper.querySelector("canvas"),
    signaturePad;

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
signaturePad = new SignaturePad(canvas);
//window.orientation=resizeCanvas;
resizeCanvas();
function getSignatureBase64(){
  return signaturePad ? signaturePad.toDataURL().replace(/data:image\/png;base64,/g, '') : null;
}


clearButton.addEventListener("click", function (event) {
  signaturePad.clear();
});

clearCanvasData = () => {
  signaturePad.clear();
};

setCanvasData = (base64Image) => {
  clearCanvasData();
  base64Image && signaturePad.fromDataURL("data:image/png;base64," + base64Image);
};

