const dropdownButton = document.querySelector('.button__chevron');
const dropdownListItems = document.querySelectorAll('.dropdown__list-item');
const chevron = document.querySelector('.chevron');

dropdownButton.addEventListener("click", () => {
    /* -----> List-items reveal <----- */
    dropdownListItems.forEach(
        item => {
            item.classList.toggle('reveal');
        }
    );

    /* -----> Chevron stays down <----- */
    chevron.classList.toggle("idown");
});