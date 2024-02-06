window.addEventListener('load', init);

function init() {
    const confirmButton = document.getElementById('confirm');
    const colorSelect = document.getElementById('select-color');
    const outputField = document.getElementById('output-field');
    const embedcodeStep = document.getElementById('step-four');

    confirmButton.addEventListener('click', () => {
        embedcodeStep.style.display = 'block';
        let content = tinymce.activeEditor.getContent();
        let backgroundColorValue = colorSelect.options[colorSelect.selectedIndex].value;
        let output = '<div style="margin:0 0 10px 0; padding:10px; ' +
            'font-family:&#39;Segoe UI&#39;,Roboto,Helvetica,Arial,sans-serif; font-size:16px; line-height:24px; ' +
            'background-color:'+ backgroundColorValue +'">' + content +'</div>';
        outputField.innerText = output;
    });

    outputField.addEventListener('click', () => {
        selectText(outputField);
    });
}

function selectText(element) {
    let range = document.createRange();
    range.selectNodeContents(element);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        navigator.clipboard.writeText(selection.toString());
        displayConfirmation();
    } catch (error) {
        document.execCommand('copy');
        displayConfirmation();
    }
}

function displayConfirmation() {
    let confirmation = document.createElement('div');
    confirmation.innerText = 'Embedcode automatisch gekopieerd!';
    confirmation.style.position = 'absolute';
    confirmation.style.top = '0';
    confirmation.style.left = '0';
    confirmation.style.width = '100%';
    confirmation.style.height = '100%';
    confirmation.style.backgroundColor = 'rgba(0, 150, 0, 0.66)';
    confirmation.style.color = 'white';
    confirmation.style.display = 'flex';
    confirmation.style.justifyContent = 'center';
    confirmation.style.alignItems = 'center';
    confirmation.style.fontSize = '2em';
    confirmation.style.opacity = '1';
    confirmation.style.transition = 'opacity 1s'; // transition effect

    let targetDiv = document.getElementById('output-field');
    targetDiv.style.position = 'relative'; // Make sure the target div is positioned
    targetDiv.appendChild(confirmation);

    setTimeout(function() {
        confirmation.style.opacity = '0';
    }, 2000);

    setTimeout(function() {
        confirmation.remove();
    }, 3000);
}