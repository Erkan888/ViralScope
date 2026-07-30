const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const charNoSpaceCount = document.getElementById('charNoSpaceCount');

textInput.addEventListener('input', updateStats);

function updateStats() {
    const text = textInput.value;
    charCount.textContent = text.length;
    charNoSpaceCount.textContent = text.replace(/\s/g, '').length;
    const words = text.trim() ? text.trim().split(/\s+/) : [];
    wordCount.textContent = words.length;
}

function toUpperCase() {
    textInput.value = textInput.value.toUpperCase();
    updateStats();
}

function toLowerCase() {
    textInput.value = textInput.value.toLowerCase();
    updateStats();
}