'use strict';

const box = document.querySelector('.box');


/*Создадиим объект, который следит за элементом mutationRecords. Если он меняется, то выполняется эта функция*/

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

observer.observe(box,{ // В аргументах 2 объекта: объект, за которым мы следим; конфигурации этого объекта, за которыми нужно следить
    childList: true
});

observer.disconnect();