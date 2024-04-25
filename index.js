document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("temperatureForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Menghentikan pengiriman formulir

        // Mendapatkan suhu yang dimasukkan
        var inputTemp = parseFloat(document.getElementById("inputTemp").value);
        
        // Validasi input
        if (isNaN(inputTemp)) {
            alert("Masukkan suhu yang valid!");
            return;
        }

        // Konversi Celsius ke Fahrenheit
        var resultFahrenheit = (inputTemp * 9/5) + 32;

        // Menampilkan hasil konversi
        document.getElementById("convertedTemp").innerText = "Hasil Konversi: " + resultFahrenheit.toFixed(2) + " Fahrenheit";

        // Menampilkan penjelasan konversi (rumus dengan nilai input)
        var explanation = "<h2>Penjelasan Konversi:</h2>";
        explanation += "<p>Fahrenheit = Celsius × 9/5 + 32</p>";
        explanation += "<p>Fahrenheit = " + inputTemp + " × 9/5 + 32</p>";
        explanation += "<p>Fahrenheit = " + resultFahrenheit.toFixed(2) + "</p>";
        document.getElementById("conversionExplanation").innerHTML = explanation;
        
        // Menampilkan penjelasan umum konversi
        var generalExplanation = "Penjelasan Umum: Untuk mengkonversi suhu dari Celsius ke Fahrenheit, kalikan suhu dalam Celsius dengan 9/5 dan kemudian tambahkan 32. Sedangkan untuk mengkonversi suhu Fahrenheit ke Celcius, suhu Fahrenheit dikurangi 32 kemudian dikalikan 5/9.";
        document.getElementById("generalExplanation").innerText = generalExplanation;

        // Menampilkan hasil konversi
        document.getElementById("resultContainer").style.display = "block";
    });

    // Reset tombol
    document.getElementById("resetButton").addEventListener("click", function() {
        document.getElementById("inputTemp").value = "";
        document.getElementById("resultContainer").style.display = "none";
    });

    // Reverse tombol
    document.getElementById("reverseButton").addEventListener("click", function() {
        var inputTemp = parseFloat(document.getElementById("inputTemp").value);
        var resultCelsius = (inputTemp - 32) * 5/9;
        document.getElementById("convertedTemp").innerText = "Hasil Konversi: " + resultCelsius.toFixed(2) + " Celsius";
        document.getElementById("conversionExplanation").innerHTML = "<h2>Cara Kalkulasi:</h2><p>Celsius = (Fahrenheit - 32) × 5/9</p><p>Celsius = (" + inputTemp + " - 32) × 5/9</p><p>Celsius = " + resultCelsius.toFixed(2) + "</p>";
        document.getElementById("resultContainer").style.display = "block";
    });
});
