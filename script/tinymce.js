window.addEventListener('load', init);

function init() {

    const stepWithPreviewDiv = document.getElementById('step-one');
    const previewDiv = document.createElement('div');
    previewDiv.id = 'preview';
    stepWithPreviewDiv.appendChild(previewDiv);

    tinymce.init({
        selector: '#preview',
        inline: true,
        menubar: false,
        statusbar: false,
        force_br_newlines: false,
        force_p_newlines: true,
        forced_root_block: 'p',
        paste_as_text: true,
        paste_preprocess: function(pl, o) {
            o.content = o.content
                .replace(/(.*?)<br\s?\/?>/gi,'<p>$1</p>')
        },
        plugins: 'link autolink image lists table code autoresize template visualblocks paste contextmenu',
        contextmenu: 'paste | link',
        default_link_target: '_blank',
        link_context_toolbar: true,
        image_caption: true,
        image_advtab: false,
        image_description: false,
        image_dimensions: false,
        image_class_list: [
            {title: 'Responsive size', value: 'img-responsive'},
            {title: 'Default size', value: 'img'}
        ],
        min_width: 950,
        autoresize_bottom_margin: 10,
        style_formats: [
            { title: 'Paragraaf', format: 'p' },
            { title: 'Kop groot', format: 'h1' },
            { title: 'Kop normaal', format: 'h2' },
            { title: 'Kop klein', format: 'h3' }
        ],
        // The following option is used to append style formats rather than overwrite the default style formats.
        style_formats_merge: false,
        style_formats_autohide: true,
        templates: [
            {title: 'Chapeau reeks', description: 'Kadertje dat dient als intro bij artikels uit een reeks. Telkens bovenaan de broodtekst plaatsen, zodat het onder de inleiding komt.', content: '<h3>Naam reeks</h3><p>&nbsp;</p><p>Hier komt de uitleg over de reeks.</p>'},
            {title: 'Chapeau reeks met aflevering', description: 'Kadertje dat dient als intro bij artikels uit een reeks. Met beschrijving van de aflevering. Telkens bovenaan de broodtekst plaatsen, zodat het onder de inleiding komt.', content: '<h3>Naam reeks</h3><p><span style="background-color: #000000; color: #ecf0f1; padding: 5px;"><strong>Aflevering X:</strong> Titel van de aflevering</span></p><p>&nbsp;</p><p>Hier komt de uitleg over de reeks.</p>'},
            {title: 'Gewoon kaderstukje met inleiding', description: 'Kaderstukje met titel, inleiding en broodtekst.', content: '<h2>Hier komt de titel</h2><p>&nbsp;</p><p><strong>Hier komt de inleiding. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at sagittis risus, vitae rhoncus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse maximus turpis nec nulla egestas sagittis. (DEZE TEKST TUSSEN HAAKJES NIET MEE SELECTEREN BIJ PLAKKEN MAAR WEL ACHTERAF VERWIJDEREN.)</strong></p><p>Hier komt de rest van de tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at sagittis risus, vitae rhoncus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse maximus turpis nec nulla egestas sagittis.</p>'},
            {title: 'Gewoon kaderstukje zonder inleiding', description: 'Kaderstukje met titel en broodtekst.', content: '<h2>Hier komt de titel</h2><p>&nbsp;</p><p>Hier komt de de tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at sagittis risus, vitae rhoncus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse maximus turpis nec nulla egestas sagittis.</p>'},
            {title: 'Kaderstukje met foto en onderschrift', description: 'Kaderstukje met titel, foto met onderschrift en broodtekst.', content: '<h2>Dit is de titel</h2><p>&nbsp;</p><figure class="image" style="text-align: center;"><img class="img-responsive" src="https://static.gva.be/Assets/Images_Upload/2022/04/11/afbeeldingkadertje.png" alt="" /><figcaption>Onderschrift. &nbsp;&mdash; &copy; Credit</figcaption></figure><p>&nbsp;</p><p>Dit is de tekst.</p>'},
            {title: 'Lijstje met bullets', description: 'Een opsomming met bullets en een titeltje erboven.', content: '<h3>Titeltje</h3><ul><li>Punt1</li><li>Punt2</li><li>Punt3</li></ul>'},
            {title: 'Lijstje met cijfers', description: 'Een opsomming met cijfers en een titeltje erboven.', content: '<h3>Titeltje</h3><ol><li>Punt1</li><li>Punt2</li><li>Punt3</li></ol>'},
            {title: 'Assisen Antwerpen', description: 'Kadertje (met logo uit de krant) dat dient als samenvatting bij artikels over een assisenzaak. Telkens bovenaan de broodtekst plaatsen, zodat het onder de inleiding komt.', content: '<p><img style="float: right;" src="https://static.gva.be/Assets/Images_Upload/2021/04/28/assisenlogo.png" alt="" width="132" height="122" /></p> <h2>Assisen Antwerpen</h2><p>&nbsp;</p><p><strong>Beschuldigde:</strong> Voornaam Naam (leeftijd)<br /><strong>Beschuldiging:</strong> feiten<br /><strong>Slachtoffer:</strong> Voornaam Naam (leeftijd)<br /><strong>Plaats:</strong> locatie feiten<br /><strong>Datum:</strong> dag maand jaar</p>'},
            {title: 'Assisen Antwerpen (zonder logo)', description: 'Kadertje (zonder logo uit de krant) dat dient als samenvatting bij artikels over een assisenzaak. Telkens bovenaan de broodtekst plaatsen, zodat het onder de inleiding komt.', content: '<h2>Assisen Antwerpen</h2><p>&nbsp;</p><p><strong>Beschuldigde:</strong> Voornaam Naam (leeftijd)<br /><strong>Beschuldiging:</strong> feiten<br /><strong>Slachtoffer:</strong> Voornaam Naam (leeftijd)<br /><strong>Plaats:</strong> locatie feiten<br /><strong>Datum:</strong> dag maand jaar</p>'},
            {title: 'Eenvoudige tabel', description: 'Een basistabel met drie kolommen die je gemakkelijk zelf kan aanpassen.', content: '<table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 33.281%;">&nbsp;</td><td style="width: 33.281%;"><strong>KolomA</strong></td><td style="width: 33.281%;"><strong>KolomB</strong></td></tr><tr><td style="width: 33.281%;"><strong>Rij1</strong></td><td style="width: 33.281%;">100</td><td style="width: 33.281%;">200</td></tr><tr><td style="width: 33.281%;"><strong>Rij2</strong></td><td style="width: 33.281%;">100</td><td style="width: 33.281%;">200</td></tr><tr><td style="width: 33.281%;"><strong>Rij3</strong></td><td style="width: 33.281%;">100</td><td style="width: 33.281%;">200</td></tr></tbody></table>'},
            {title: 'Eenvoudige tabel met titeltje', description: 'Een basistabel met drie kolommen die je gemakkelijk zelf kan aanpassen.', content: '<h3>Titeltje</h3><p>&nbsp;</p><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 33.281%;">&nbsp;</td><td style="width: 33.281%;"><strong>KolomA</strong></td><td style="width: 33.281%;"><strong>KolomB</strong></td></tr><tr><td style="width: 33.281%;"><strong>Rij1</strong></td><td style="width: 33.281%;">100</td><td style="width: 33.281%;">200</td></tr><tr><td style="width: 33.281%;"><strong>Rij2</strong></td><td style="width: 33.281%;">100</td><td style="width: 33.281%;">200</td></tr><tr><td style="width: 33.281%;"><strong>Rij3</strong></td><td style="width: 33.281%;">100</td><td style="width: 33.281%;">200</td></tr></tbody></table>'},
            {title: 'Markante moorden in de Kempen', description: 'Chapeau voor de reeks van Marc Helsen over markante moorden in de Kempen.', content: '<h2><img style="float: right;" src="https://static.gva.be/Assets/Images_Upload/2021/04/30/marchelsen.jpg" alt="Marc Helsen" width="150" height="100" />Markante moorden in de Kempen</h2><br /><em>Onze journalist Marc Helsen diept de meest spraakmakende moordverhalen uit de Kempen op, die hij meemaakte in zijn decennialange carri&egrave;re als reporter.</em><br /><br /><strong><span style="text-decoration: underline;">AFLEVERING volgnummer</span>: de moord op Voornaam Naam (leeftijd) uit Woonplaats</strong><ul><li><span style="color: #e03e2d;"><span style="color: #000000;"><strong>dag maand jaar:</strong> uitleg over de feiten.</span></span></li><li><span style="color: #e03e2d;"><span style="color: #000000;"><strong>dag maand jaar:</strong> uitleg over de rechtsgang.</span></span></li></ul>'},
        ],
        toolbar: 'template | undo redo | styleselect h1 h2 h3 pastetext | bold italic underline forecolor backcolor | alignleft aligncenter alignright | bullist numlist | link image table | visualblocks code',
        content_style: 'a { color: #0281c7; } ' + 'body { line-height: 1; } ',
    });
}