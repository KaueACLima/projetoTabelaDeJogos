const inClub = document.getElementById('inClub');
const toAdd = document.getElementById('toAdd');
const setUpGameTables = document.getElementById('setUpGameTables');
const newClubs = document.getElementById('newClubs');
const contentClub = document.getElementById('content-club');
const contentTable = document.getElementById('content-table');
const mensagem = document.getElementById('mensage');

toAdd.addEventListener('click', (e) => {
  e.preventDefault()
  const nameClube = inClub.value.trim();

  if (!nameClube) {
    mensagem.textContent = 'Por favor, insira o nome de um clube.';
    return;
  }

  mensagem.textContent = '';

  const h5 = document.createElement('h5');
  h5.textContent = nameClube;
  contentClub.appendChild(h5);

  inClub.value = '';
});


setUpGameTables.addEventListener('click', () => {
  const clubs = document.querySelectorAll('#content-club h5');

  if (clubs.length % 2 !== 0) {
    mensagem.textContent = 'O número de clubes deve ser par para montar a tabela.';
    return;
  }

  mensagem.textContent = '';

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  thead.innerHTML = `
    <tr>
      <th>Jogo</th>
      <th>Clube 1</th>
      <th>Clube 2</th>
    </tr>
  `;

  clubs.forEach((club, index) => {
    if (index % 2 === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>Jogo ${index / 2 + 1}</td>
        <td>${clubs[index].textContent}</td>
        <td>${clubs[index + 1].textContent}</td>
      `;
      tbody.appendChild(tr);
    }
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  contentTable.innerHTML = '';
  contentTable.appendChild(table);

  toAdd.disabled = true;
  setUpGameTables.disabled = true;

});