const calculator = () => {
    const element = document.querySelector('.calculator');

    if (!element) return false;

    const total_price = document.getElementById('total_price');
    const selects = element.querySelectorAll('select');
    const checkboxes = element.querySelectorAll('input[type="checkbox"]');

    const calculate = () => {
        let total = 0;

        for (const select of selects) {
            total += parseInt(select.options[select.selectedIndex].getAttribute('data-price'));
        }

        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                total += parseInt(checkbox.getAttribute('data-price'));
            }
        }

        total_price.textContent = total;
    }

    for (const select of selects) {
        select.addEventListener('change', calculate);
    }

    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', calculate);
    }

    calculate();
}

const slider = () => {

    const container = document.querySelector(".swiper");

    if(!container) return false;

    const options = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    }

    const swiper = new Swiper(container, options)
}

const init = () => {
    calculator();
    slider();
}

document.addEventListener('DOMContentLoaded', init);