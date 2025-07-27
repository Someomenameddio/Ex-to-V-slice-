// Get HTML elements
const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileInput");
const progressBar = document.querySelector("progress");
const statusText = document.getElementById("status");
const resultDiv = document.getElementById("result");
const downloadBtn = document.getElementById("downloadBtn");

// Prevent default drag behaviors
["dragenter", "dragover", "dragleave", "drop"].forEach(event => {
    dropArea.addEventListener(event, (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
});

// Highlight drop area when dragging over
["dragenter", "dragover"].forEach(event => {
    dropArea.addEventListener(event, () => {
        dropArea.style.borderColor = "#8a2be2";
    });
});

["dragleave", "drop"].forEach(event => {
    dropArea.addEventListener(event, () => {
        dropArea.style.borderColor = "#555";
    });
});

// Handle dropped files
dropArea.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    handleFiles(files);
});

// Handle selected files
fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
});

// Process files
function handleFiles(files) {
    document.getElementById("progress").style.display = "block";
    statusText.textContent = "Processing files...";
    
    // Simulate conversion (replace with real code later)
    setTimeout(() => {
        progressBar.value = 100;
        statusText.textContent = "Conversion complete!";
        resultDiv.style.display = "block";
    }, 2000);
}

// Download button (placeholder)
downloadBtn.addEventListener("click", () => {
    alert("This would download the converted mod in a real app!");
});