module.exports.day = function () {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let currentDay = new Date();
    let dateFormat = currentDay.toLocaleString("en-US", options);
    return dateFormat;
}