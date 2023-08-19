document.getElementById('withdraw-btn').addEventListener('click', function() {
    const newWithdraw = getInputFieldValueById('withdraw-input-field');
    const previousTotalWithdraw = getTextElementValueById('total-withdraw');

    if (isNaN(newWithdraw)) {
        alert('input a valid number');
        return;
    }

    const currenTotalWithdraw = newWithdraw + previousTotalWithdraw;

    setTextElementValueById('total-withdraw', currenTotalWithdraw);


    const previousTotalBalance = getTextElementValueById('total-balance');
    const currentTotalBalance = previousTotalBalance - newWithdraw;
    setTextElementValueById('total-balance', currentTotalBalance);
})