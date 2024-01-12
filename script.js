function generateCurriculum() {
    const inputText = document.getElementById('inputText').value.trim();
    const outputContainer = document.getElementById('outputContainer');

    if (inputText === "") {
        alert("Please enter valid text for the curriculum.");
        return;
    }

    const modules = inputText.split('\n\n');

    let htmlOutput = '<div class="curriculum-container">\n';

    modules.forEach((module, index) => {
        const lines = module.split('\n');
        const moduleName = lines[0].trim();
        const items = lines.slice(1).map(item => `<li>${item.trim()}</li>`).join('\n');

        htmlOutput += `    <div class="curriculum-item">\n`;
        htmlOutput += `        <div class="module-header">\n`;
        htmlOutput += `            <i class="fas fa-book book-icon"></i>\n`;
        htmlOutput += `            <div class="module-info">\n`;
        htmlOutput += `                <h3>${moduleName}</h3>\n`;
        htmlOutput += `            </div>\n`;
        htmlOutput += `        </div>\n`;
        htmlOutput += `        <ul>\n`;
        htmlOutput += `            ${items}\n`;
        htmlOutput += `        </ul>\n`;
        htmlOutput += `    </div>\n`;
        
        if (index < modules.length - 1) {
            htmlOutput += `    <!-- Next Module -->\n`;
        }
    });

    htmlOutput += '</div>';

    outputContainer.innerHTML = htmlOutput;
}
