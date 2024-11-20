let accotops = document.querySelectorAll('.accotop')


function toggleAccordion() {

    this.parentElement.classList.toggle('open')

}

accotops.forEach(accotopsel => {

    accotopsel.addEventListener('click',toggleAccordion)

})