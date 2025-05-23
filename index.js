window.addEventListener('load', function () {
    const template = document.querySelector('#template');
    const name = document.querySelector('#name');
    const config = document.querySelector('#config');
    const result = document.querySelector('#result');
    const zeros = document.querySelector('#zeros');

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

        if(zeros.checked){
            res = res.replace(`{s1}`, 0).replace(`{s2}`, 0);
        }

        result.innerHTML = res;
    }

    make();
    name.addEventListener('input', make);
    config.addEventListener('input', make);
    zeros.addEventListener('change', make);

    document.querySelectorAll('pre').forEach(el => el.addEventListener('click', function (){
        navigator.clipboard.writeText(this.innerText.trim());
    }));
});