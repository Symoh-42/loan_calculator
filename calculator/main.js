function calculateLoan() {
    // Get input values
    const principal = parseFloat(document.getElementById('loanAmount').value) || 0;
    const annualRate = parseFloat(document.getElementById('interestRate').value) || 0;
    const months = parseInt(document.getElementById('loanTenure').value) || 0;

    if (principal <= 0 || annualRate <= 0 || months <= 0) {
        alert('Please enter valid positive values for all fields.');
        return;
    }

    // Convert annual rate to monthly rate
    const monthlyRate = (annualRate / 100) / 12;

    // Calculate EMI using the formula: EMI = P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    // Calculate totals
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    // Update display
    document.getElementById('emiValue').textContent = formatNumber(emi);
    document.getElementById('interestValue').textContent = formatNumber(totalInterest);
    document.getElementById('totalValue').textContent = formatNumber(totalAmount);
}

function formatNumber(num) {
    return Math.round(num).toLocaleString();
}

// Calculate on page load
calculateLoan();

// Add event listeners for real-time calculation
document.getElementById('loanAmount').addEventListener('input', calculateLoan);
document.getElementById('interestRate').addEventListener('input', calculateLoan);
document.getElementById('loanTenure').addEventListener('input', calculateLoan);