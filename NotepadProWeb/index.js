function download() {
    var text = document.getElementById("Pricing").value;
    var filename = document.getElementById("FAQ").value;
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    window.URL.createObjectURL(blob);
    console.log(blob.text.length);
}
