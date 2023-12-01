function loadVideosFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk';
    const sheetName = 'pagina5';

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const playlistContainer = document.querySelector('#video-list-container');
            playlistContainer.innerHTML = '<ul class="list-group"></ul>';  // Adiciona uma lista ao contêiner

            const playlistItems = playlistContainer.querySelector('ul');

            data.forEach(function (row) {
                const tituloVideo = row[0];

                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `<a href="#${tituloVideo.toLowerCase().replace(/\s+/g, '-')}">${tituloVideo} <i class="fas fa-play"></i></a>`;

                playlistItems.appendChild(listItem);
            });
        }
    });
}

gapi.load('client', initGoogleSheetsApi);
