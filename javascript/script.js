const header = document.querySelector('header');
const input = document.querySelector('.text');
const button = document.querySelector('.submit');
const arr = [];

button.addEventListener('click', () => {
    const container = document.createElement('div');
    const div = document.createElement('div');
    const remover = document.createElement('button')
    div.classList.add('divJs');
    remover.classList.add('remover');
    let conteudoNovo = document.createTextNode(input.value);
    const textoButton = document.createTextNode('Remover')
    div.appendChild(conteudoNovo);
    remover.appendChild(textoButton);
    container.appendChild(div);
    container.appendChild(remover);
    arr.push(container);
    header.appendChild(arr[arr.length - 1]);
    /*remover.addEventListener('click', () => {
        header.removeChild(arr.shift());
    }); 
    */
    document.addEventListener('click', function (e){
        const el = e.target;
        if(el.classList.contains('remover')){
            el.parentElement.remove();
        }
    })
    input.value = '';
    input.focus();
});