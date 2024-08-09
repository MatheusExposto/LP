document.addEventListener('DOMContentLoaded', () => {
    let myList = document.querySelectorAll('.lista');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let count = myList.length;
    let active = Array.from(myList).findIndex(item => item.classList.contains('active'));

    console.log("Initial active index:", active); // Debugging

    next.onclick = () => {
        let activeOld = document.querySelector('.active');
        let fruitsOld = activeOld.querySelectorAll('.fruit');
        let titleOld = activeOld.querySelector('.title');

        // Adiciona a classe 'old' para animação de saída
        fruitsOld.forEach(fruit => fruit.classList.add('old'));
        titleOld.classList.add('old');

        activeOld.classList.remove('active');

        active = (active + 1) % count; // Passa para o próximo item
        myList[active].classList.add('active');

        let fruitsNew = myList[active].querySelectorAll('.fruit');
        let titleNew = myList[active].querySelector('.title');

        // Remove a classe 'old' para animação de entrada
        fruitsNew.forEach(fruit => fruit.classList.remove('old'));
        titleNew.classList.remove('old');

        console.log("Next active index:", active); // Debugging
    };

    prev.onclick = () => {
        let activeOld = document.querySelector('.active');
        let fruitsOld = activeOld.querySelectorAll('.fruit');
        let titleOld = activeOld.querySelector('.title');

        // Adiciona a classe 'old' para animação de saída
        fruitsOld.forEach(fruit => fruit.classList.add('old'));
        titleOld.classList.add('old');

        activeOld.classList.remove('active');

        active = (active - 1 + count) % count; // Volta para o item anterior
        myList[active].classList.add('active');

        let fruitsNew = myList[active].querySelectorAll('.fruit');
        let titleNew = myList[active].querySelector('.title');

        // Remove a classe 'old' para animação de entrada
        fruitsNew.forEach(fruit => fruit.classList.remove('old'));
        titleNew.classList.remove('old');

        console.log("Prev active index:", active); // Debugging
    };
});









