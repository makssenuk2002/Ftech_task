

import data from './data.js'

data.columns.map((el,id) =>{
    const cont = document.getElementById('cont');
    const cont_block = document.createElement('div');
    const body = document.createElement('div');
    const header = document.createElement('div');
    const body_text = data.rows[0].values[id];
    header.innerHTML = el.name;

    if(el.dataType === 'DateTime' ){
        let date = new Date(data.rows[0].values[id]).toLocaleDateString("ru-RU");
       
        body.innerHTML = date;
    }else{
        body.innerHTML = body_text;
    }

    cont_block.appendChild(header);
    cont_block.appendChild(body);
    cont.appendChild(cont_block);

    cont_block.classList.add('content__block');
    header.classList.add('block__header');
    body.classList.add('block__body');

   
})

