// Function to fetch customer details based on customer ID and dive date
function getCustomerDetails() {
    const custId = document.getElementById('custId').value.trim();
    const diveDate = document.getElementById('diveDate').value.trim();
    
    // Clear previous output
    clearOutput();

    
    // example uses mock data due to lack of actual backend integration here
    const outputArea = document.getElementById('outputArea');
    outputArea.innerHTML += `Fetching customer details for Customer ID: ${custId} and Dive Date: ${diveDate}...\n`;

    // Mocking a response from server
    setTimeout(() => {
        const customerDetails = `CUSTOMER DETAILS: Heinrich Wilis booked for the current adventure on the 15-JULY-17`;
        outputArea.innerHTML += customerDetails + '\n';
    }, 1000); // Simulating delay for demonstration purposes
}

// Function to fetch dive adjustments based on dive duration
function getDiveAdjustments() {
    const diveDuration = document.getElementById('diveDate').value.trim();
    
    // Clear previous output
    clearOutput();

    
    // example uses mock data due to lack of actual backend integration here
    const outputArea = document.getElementById('outputArea');
    outputArea.innerHTML += `Fetching dive adjustments for Dive Duration: ${diveDuration}...\n`;

    // Mocking a response from server
    setTimeout(() => {
        const diveAdjustments = `Dive adjustments details here...`;
        outputArea.innerHTML += diveAdjustments + '\n';
    }, 1000); // Simulating delay for demonstration purposes
}

// Function to clear output area
function clearOutput() {
    const outputArea = document.getElementById('outputArea');
    outputArea.value = '';
}