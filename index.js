import data from './data.js';
data.columns.forEach((el, id) => {
    const content = document.getElementById('content');
    const content_block = document.createElement('div');
    const body = document.createElement('div');
    const header = document.createElement('div');
    const body_text = data.rows[0].values[id];
    header.innerHTML = el.name;

    if (el.dataType === 'DateTime') {
        body.innerHTML = new Date(data.rows[0].values[id]).toLocaleDateString("ru-RU");
    } else {
        body.innerHTML = body_text;
    }

    content_block.appendChild(header);
    content_block.appendChild(body);
    content.appendChild(content_block);

    content_block.classList.add('content__block');
    header.classList.add('block__header');
    body.classList.add('block__body');
})