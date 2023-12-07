function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyARGYc6I4c43n6WlpPU4n1Uon2_Aj0lGBk',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadProfessoresFromGoogleSheet();
        loadBolsistasFromGoogleSheet() ;
        loadAlunosFromGoogleSheet();
    });
}

function loadProfessoresFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk'; 
    const sheetName = 'professores'; 
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const professoresContainer = document.getElementById('professores-container');
            data.forEach(function (row) {
                const nome = row[0];
                const area = row[1];
                const grauInstrucao = row[2];
                const foto = row[3];
                const professorDiv = document.createElement('div');
                professorDiv.className = 'col-md-4';
                professorDiv.innerHTML = `
                    <div class="card">
                        <img src="${foto}" alt="${nome}" class="img-fluid">
                        <h3>${nome}</h3>
                        <p>Área: ${area}</p>
                        <p>Grau de Instrução: ${grauInstrucao}</p>
                    </div>
                `;
                professoresContainer.appendChild(professorDiv);
            });
        }
    });
}

function loadBolsistasFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk'; 
    const sheetName = 'bolsistas'; 
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const bolsistasContainer = document.getElementById('bolsistas-container');
            data.forEach(function (row) {
                const nome = row[0];
                const area = row[1];
                const anoPeriodo = row[2];
                const foto = row[3];
                const bolsistaDiv = document.createElement('div');
                bolsistaDiv.className = 'col-md-4';
                bolsistaDiv.innerHTML = `
                    <div class="card">
                        <img src="${foto}" alt="${nome}" class="img-fluid">
                        <h3>${nome}</h3>
                        <p>Curso: ${area}</p>
                        <p>Ano/Período: ${anoPeriodo}</p>
                    </div>
                `;
                bolsistasContainer.appendChild(bolsistaDiv);
            });
        }
    });
}

function loadAlunosFromGoogleSheet() {
    const spreadsheetId = '1bnIVpHL_md8u_XXo-zA3ZJGbA2J_ijj0XtlJJjOPzvk'; 
    const sheetName = 'alunos'; 
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: sheetName
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const alunosContainer = document.getElementById('alunos-container');
            data.forEach(function (row) {
                const nome = row[0];
                const curso = row[1];
                const anoPeriodo = row[2];
                const descricao = row[3];
                const foto = row[4];
                const alunoDiv = document.createElement('div');
                alunoDiv.className = 'col-md-4';
                alunoDiv.innerHTML = `
                    <div class="card">
                        <img src="${foto}" alt="${nome}" class="img-fluid">
                        <h3>${nome}</h3>
                        <p>Curso: ${curso}</p>
                        <p>Ano/Período: ${anoPeriodo}</p>
                        <p>" ${descricao} "</p>
                    </div>
                `;
                alunosContainer.appendChild(alunoDiv);
            });
        }
    });
}
gapi.load('client', initGoogleSheetsApi);
 
