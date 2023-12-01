function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyARGYc6I4c43n6WlpPU4n1Uon2_Aj0lGBk',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadVideosFromGoogleSheet();
    });
}

function loadVideosFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk';
    const sheetName = 'pagina5';  

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const videosContainer = document.querySelector('.col-md-9'); 
            videosContainer.innerHTML = '';  

            data.forEach(function (row) {
                const tituloVideo = row[0];
                const urlVideo = row[1];
                const descricaoVideo = row[2];

                const videoDiv = document.createElement('div');
                videoDiv.id = tituloVideo.toLowerCase().replace(/\s+/g, '-'); // ID único para cada vídeo
                videoDiv.className = 'mb-4';
                videoDiv.innerHTML = `
                    <h2 class="video-title">${tituloVideo}</h2>
                    <div class="video-wrapper">
                        <iframe src="${urlVideo}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p class="video-description">${descricaoVideo}</p>
                `;
                videosContainer.appendChild(videoDiv);
            });
        }
    });
}

gapi.load('client', initGoogleSheetsApi);
