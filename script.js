function generateCurriculum() {
    const moduleInput = document.getElementById('moduleInput').value.trim();
    const lessonInput = document.getElementById('lessonInput').value.trim();
    const outputContainer = document.getElementById('outputContainer');

    if (moduleInput === "" || lessonInput === "") {
        alert("Please enter valid input for modules and lessons.");
        return;
    }

    const modules = moduleInput.split('\n');
    const lessons = lessonInput.split('\n');

    if (modules.length !== lessons.length) {
        alert("Number of modules and lessons should match.");
        return;
    }

    let htmlOutput = '<div class="curriculum-container">\n';

    modules.forEach((moduleName, index) => {
        const lessonName = lessons[index];
        const items = lessonName.split(',').map(item => `<li>${item.trim()}</li>`).join('\n');

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
