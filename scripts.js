function updateClock()  {
 const now = new Date();
 const hours = now.getHours().toString().padStart(2,0);
 const minutes = now.getMinutes().toString().padStart(2,0);
 const seconds = now.getSeconds().toString().padStart(2,0);
 const timeString = `${hours}:${minutes}:${seconds}`; 



 document.getElementById("clock").textContent = timeString;
}
function timeSinceJune23() {
    // Set the target date (June 23 of the current year)
    const now = new Date();
    const year = now.getFullYear();
    const june23 = new Date(year, 5, 23); // Month is 0-indexed, so 5 represents June

    // Get the difference in milliseconds
    let diffInMs = now - june23;

    // If June 23 hasn't occurred yet this year, calculate from the previous year
    if (diffInMs < 0) {
        june23.setFullYear(year - 1);
        diffInMs = now - june23;
    }

    // Convert milliseconds to hours, minutes, and seconds
    const seconds = Math.floor(diffInMs / 1000) % 60;
    const minutes = Math.floor(diffInMs / (1000 * 60)) % 60;
    const hours = Math.floor(diffInMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const tijdstring = `${days}d:${hours}:${minutes}:${seconds}`; 

    document.getElementById("clocksinds").textContent = tijdstring
}

updateClock();
timeSinceJune23();
setInterval(updateClock, 1000)
setInterval(timeSinceJune23, 1000)