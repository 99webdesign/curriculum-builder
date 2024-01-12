function convertToHTML() {
    const editorContent = document.getElementById('editor').innerHTML;
    const outputContainer = document.getElementById('outputContainer');
    
    if (!editorContent.trim()) {
        alert("Please enter some text in the editor.");
        return;
    }

    const htmlOutput = `<div class="converted-html">${editorContent}</div>`;
    
    outputContainer.innerHTML = htmlOutput;
}
