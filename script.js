document.getElementById('tracking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const trackingNumber = document.getElementById('tracking-number').value.trim();
    if (trackingNumber === '') {
        alert('Please enter a tracking number.');
        return;
    }

    // Redirect to ParcelsApp with the tracking number
    const parcelsAppUrl = `https://m.17track.net/en/track-details?nums=${encodeURIComponent(trackingNumber)}`;
    window.location.href = parcelsAppUrl;
});