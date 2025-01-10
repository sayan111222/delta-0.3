document.getElementById('uniqueLink').addEventListener('click', function(event) {
    event.preventDefault();
    const uniqueId = generateUniqueId();
    const url = `https://m.indiamart.com/impcat/usb-headset.html?utm_source=sayan_s7ztv&utm_medium=affiliate&utm_campaign=0125&utm_content=29&uniqueId=${uniqueId}`;
    const newWindow = window.open();
    newWindow.opener = null;
    newWindow.location = url;
});

function generateUniqueId() {
    return 'xxxx-xxxx-4xxx-yxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}