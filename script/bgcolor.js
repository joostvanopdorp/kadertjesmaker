window.addEventListener('load', init);

function init() {
    const colors = {
        lichtpaars: '#ece0ff',
        paars: '#5100c3',
        perzik: '#fcc8be',
        lichtgrijs: '#efefef',
        grijs: '#d7d7d7',
        rood: '#e20714',
        wit: '#ffffff',
        zwart: '#292c2f'
    };

    const colorSelect = document.getElementById('select-color');
    const colorOptions = document.querySelectorAll('#select-color option');
    const previewDiv = document.getElementById('preview');

    for (let colorOption of colorOptions) {
        for (let [colorName, colorCode] of Object.entries(colors)) {
            if (colorOption.id === colorName) {
                colorOption.style.backgroundColor = colorCode;
            }
            if (colorOption.id === colorName && (colorName === 'zwart' || colorName === 'rood' || colorName === 'paars')) {
                colorOption.style.color = 'white';
            }
        }
    }

    colorSelect.addEventListener('change', () => {
        previewDiv.style.backgroundColor = colorSelect.options[colorSelect.selectedIndex].value;
    });
}