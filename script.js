function calculateBMI() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Check if inputs are valid
    if (!age || !weight || !height || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI (BMI = weight / height^2)
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI category
    let bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Healthy";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Your BMI: ${bmi.toFixed(2)}</p>
        <p>Category: ${bmiCategory}</p>
        <p>Gender: ${gender.value}</p>
    `;
}
