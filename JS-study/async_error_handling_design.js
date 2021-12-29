// design
const somethingGonnaHappen = callback => {
    waitingUntilSomethingHappens()

    if (isSomethingGood) {
        callback(null, something)
    }

    if (isSomethingBad) {
        callback(something, null)
    }
}

// usage
somethingGonnaHappen((err, data) => {
    if (err) {
        console.log('에러다!');
        return;
    }
    return data;
})