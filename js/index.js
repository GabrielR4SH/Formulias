document.getElementById('addFormulaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos de entrada
    const columnIndex = document.getElementById('columnSelect').value;
    const content = document.getElementById('newContent').value;

    // Seleciona a coluna correspondente na tabela
    const table = document.getElementById('formulaTable');
    const column = table.rows[1].cells[columnIndex].getElementsByTagName('ul')[0];

    // Adiciona o conteúdo na forma de lista
    const listItem = document.createElement('li');
    listItem.textContent = content;
    column.appendChild(listItem);

    // Limpa os campos do formulário
    document.getElementById('newContent').value = '';
});

document.getElementById('addColumnForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos de entrada
    const columnName = document.getElementById('newColumn').value;
    const content = document.getElementById('newColumnContent').value;

    // Seleciona a tabela
    const table = document.getElementById('formulaTable');

    // Adiciona o título da coluna
    const newHeader = document.createElement('th');
    newHeader.textContent = columnName;
    table.rows[0].appendChild(newHeader);

    // Cria uma nova célula na linha de dados
    const newCell = document.createElement('td');
    const contentList = document.createElement('ul');
    const listItem = document.createElement('li');
    listItem.textContent = content;
    contentList.appendChild(listItem);
    newCell.appendChild(contentList);
    table.rows[1].appendChild(newCell);

    // Adiciona a nova coluna ao select de seleção de coluna
    const select = document.getElementById('columnSelect');
    const newOption = document.createElement('option');
    newOption.value = table.rows[0].cells.length - 1; // Index da nova coluna
    newOption.textContent = columnName;
    select.appendChild(newOption);

    // Limpa os campos do formulário
    document.getElementById('newColumn').value = '';
    document.getElementById('newColumnContent').value = '';
});
