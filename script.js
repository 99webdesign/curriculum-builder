function convertToHTML() {
    const apiKey = getApiKey(); // Function to fetch API key from environment variable or configuration
    const editorContent = tinymce.get('tinyMCEEditor').getContent();
    const outputContainer = document.getElementById('outputContainer');
    
    if (!editorContent.trim()) {
        alert("Please enter some text in the editor.");
        return;
    }

    const htmlOutput = `<div class="converted-html">${editorContent}</div>`;
    
    outputContainer.innerHTML = htmlOutput;
}

function getApiKey() {
    // Implement logic to fetch API key from environment variable or configuration
    // Example: You might use Ajax or fetch API to get the API key from your server
    // For simplicity, you can hardcode the key here or use any preferred method.
    return "YOUR_ENV_API_KEY";
}
