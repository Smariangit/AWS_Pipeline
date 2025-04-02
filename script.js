document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mileage-form");
    const result = document.getElementById("result");
 
    form.addEventListener("submit", function (event) {
        event.preventDefault();
 
        let distance = parseFloat(document.getElementById("distance").value);
        let fuel = parseFloat(document.getElementById("fuel").value);
 
        if (isNaN(distance) || isNaN(fuel) || fuel <= 0) {
            result.textContent = "Please enter valid numbers.";
            return;
        }
 
        let mileage = distance / fuel;
        result.textContent = `Your mileage is ${mileage.toFixed(2)} km per liter.`;
    });
});