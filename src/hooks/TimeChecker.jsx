const TimeChecker = () => {
    // Step 1: Get the current time
    const currentTime = new Date();

    // Get the minute part of the current time
    const minute = currentTime.getMinutes();

    // Get the last digit of the minute
    const lastDigit = minute % 10;

    return lastDigit === 5;
}

export default TimeChecker;