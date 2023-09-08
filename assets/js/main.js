
let count = Number(prompt('Введите стоимость товара'));
let money = Number(prompt('Введите кол-во денег клиента'));

if(count == money){
    let done = document.querySelector('.done')
    done.textContent = 'Покупка совершена'
}else{
    if(count > money){
    let a = count - money;
    let aa = document.querySelector('.aa')
    aa.textContent = 'Покупка не совершена. Не хватает: ' + a + ' р.'
    }else{
    let b = money - count;
    let bb = document.querySelector('.bb')
    bb.textContent = 'Покупка совершена. Сдача: ' + b + ' р.'
    }
}

let css = document.querySelector('.block');
css.style.background = '#000000';
css.style.height = '80px';
css.style.width = '200px';
css.style.textAlign = 'center';
css.style.position = 'absolute';
css.style.right = '40%';
css.style.color = 'red'
css.style.fontWeight = 'bold'


css.style.JustifyContent = 'center';
css.style.padding = '20px';