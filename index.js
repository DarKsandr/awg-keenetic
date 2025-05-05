window.addEventListener('load', function () {
    const template = document.querySelector('#template');
    const name = document.querySelector('#name');
    const config = document.querySelector('#config');
    const result = document.querySelector('#result');

    function make(){
        let res = template.innerText;

        if(name.value){
            res = res.replace('{name}', name.value);
        }

        config.value.split('\n').forEach(item => {
           const [key, value] = item.split('=').map(el => el.trim());
           if(key && value){
               res = res.replace(`{${key.toLowerCase()}}`, value);
           }
        });
        
        result.innerHTML = res;
    }

    make();
    name.addEventListener('input', make);
    config.addEventListener('input', make);
});