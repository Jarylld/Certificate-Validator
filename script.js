document.getElementById('code').addEventListener('input', validateCode);

function validateCode() {
    const code = document.getElementById('code').value.trim();
    const result = document.getElementById('result');

    // Convert code to integer and check if it falls within the range
    const codeNumber = parseInt(code, 10);
    if (codeNumber >= 1 && codeNumber <= 10) {
        result.textContent = 'Code is valid!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Invalid code!';
        result.style.color = 'red';
    }
}
