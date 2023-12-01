function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyARGYc6I4c43n6WlpPU4n1Uon2_Aj0lGBk',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadEventosFromGoogleSheet();
    });
}


function loadEventosFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk';
    const sheetName = 'pagina4';
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const eventosContainer = document.querySelector('.linha-do-tempo .row');
            data.forEach(function (row, index) {
                const nomeEvento = row[0];
                const descricaoEvento = row[1];
                const imagemEvento = row[2];

                const eventoDiv = document.createElement('div');
                eventoDiv.className = 'col-md-4 evento animate__animated';
                eventoDiv.innerHTML = `
                    <div class="evento">
                        <img src="${imagemEvento}" alt="${nomeEvento}">
                        <h3>${nomeEvento}</h3>
                        <p>${descricaoEvento}</p>
                    </div>
                `;
                eventosContainer.appendChild(eventoDiv);

                
                setTimeout(() => {
                    eventoDiv.classList.add('animate__fadeInUp');
                }, index * 200);
            });
        }
    });
}




gapi.load('client', initGoogleSheetsApi);
