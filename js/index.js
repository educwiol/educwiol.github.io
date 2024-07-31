const urlInput = document.getElementById("urlInput");

const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\e{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

function goProto() {
    if (!isValidUrl(urlInput.value)) {
        alert(`Invalid url! Did you mean 'https://${urlInput.value}' ?`);
    } else {
        var url = encodeURIComponent(btoa(urlInput.value));
        window.location.href = `/p?url=${url}`;
    }
}
