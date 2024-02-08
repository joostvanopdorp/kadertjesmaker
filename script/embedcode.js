window.addEventListener('load', init);

function init() {
    const colorSelect = document.getElementById('select-color');
    const confirmButton = document.getElementById('confirm');
    const embedCodeStep = document.getElementById('step-four');
    const outputField = document.getElementById('output-field');

    confirmButton.addEventListener('click', () => {
        showEmbedCode(colorSelect, embedCodeStep, outputField);
    });

    outputField.addEventListener('click', () => {
        selectText(outputField);
    });
}

function showEmbedCode(colorSelect, embedCodeStep, outputField) {
    embedCodeStep.style.display = 'block';
    let content = tinymce.activeEditor.getContent();
    let backgroundColorValue = colorSelect.options[colorSelect.selectedIndex].value;
    outputField.innerText = '<div style="margin:0 0 10px 0; padding:10px; ' +
        'font-family:&#39;Segoe UI&#39;,Roboto,Helvetica,Arial,sans-serif; font-size:16px; line-height:24px; ' +
        'background-color:' + backgroundColorValue + '">' + content + '</div>';
}

function selectText(outputField) {
    let range = document.createRange();
    range.selectNodeContents(outputField);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        navigator.clipboard.writeText(selection.toString());
        displayConfirmation(outputField);
    } catch (error) {
        document.execCommand('copy');
        displayConfirmation(outputField);
    }
}

function displayConfirmation(outputField) {
    let confirmation = document.createElement('div');
    setContentConfirmation(confirmation);

    outputField.appendChild(confirmation);
    outputField.style.position = 'relative';
    confirmation.style.position = 'absolute';
    confirmation.style.top = '0';
    confirmation.style.left = '0';
    confirmation.style.width = '100%';
    confirmation.style.height = '100%';

    setTimeout(() => {
        confirmation.style.opacity = '0';
    }, 2000);
}

function setContentConfirmation(confirmation) {
    confirmation.innerText = 'Embedcode automatisch gekopieerd!';
    confirmation.style.backgroundColor = 'rgba(0, 150, 0, 0.66)';
    confirmation.style.color = 'white';
    confirmation.style.display = 'flex';
    confirmation.style.justifyContent = 'center';
    confirmation.style.alignItems = 'center';
    confirmation.style.fontSize = '2em';
    confirmation.style.opacity = '1';
    confirmation.style.transition = 'opacity 1s';
}