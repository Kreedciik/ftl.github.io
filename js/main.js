"use strict"

const showByCheckbox = element => {
    const trigger = document.querySelector('[data-checkbox]');

    trigger.addEventListener('change', () => {
        element.classList.toggle('active');
    });
}

const hideOptionList = element => {
    element.forEach(item => {
        item.classList.add('disable');
    });
    
}
hideOptionList(document.querySelectorAll('.option__list'));
const showOption = ( trigger, element ) => {
    
    trigger.forEach((item, index) => {
      item.addEventListener('click', e => {
        element[index].classList.toggle('disable');
        
      });
      
    });
}

const changeOptionName = (element, optionName) => {
    element.forEach( (item, index) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            item.parentNode.parentNode.previousElementSibling.textContent = item.textContent;
            item.parentNode.parentNode.previousElementSibling.classList.remove('disable-name');
          
        });
    });
}

const addClass = element => {
    element.forEach( item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

showByCheckbox(document.querySelector('.temperatureMode'));
showOption(document.querySelectorAll('[data-option]'), document.querySelectorAll('.option__list'));
changeOptionName(document.querySelectorAll('.option__list-item a'), document.querySelectorAll('.option__name .name'));
addClass(document.querySelectorAll('.option__name'));
