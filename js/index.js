const urlInput = document.getElementById("urlInput");

function goProto() {
    var url = encodeURIComponent(btoa(urlInput.value));
    window.location.href = `/${url}`;
}