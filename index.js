const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEL) => {
    counterEL.innerText = "0";
    increamentCounter();

    function increamentCounter() {
        let currentNum = +counterEL.innerText;
        const dataCeil = counterEL.getAttribute("data-ceil");
        const increament = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increament);
        
        if (currentNum < dataCeil) {
            counterEL.innerText = currentNum;
            setTimeout(increamentCounter, 50);
        }else {
            counterEL.innerText = dataCeil;
        }
    }
})