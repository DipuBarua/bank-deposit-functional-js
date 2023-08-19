//we removed the function form here to utilities

document.getElementById('deposit-btn').addEventListener('click', function() {
    const newDeposit = getInputFieldValueById('deposit-input-field');

    const previousTotalDeposit = getTextElementValueById('total-deposit');

    if (isNaN(newDeposit)) {
        alert('input a valid number');
        return;
    }

    const currenTotalDeposit = newDeposit + previousTotalDeposit;

    setTextElementValueById('total-deposit', currenTotalDeposit);

    const previousTotalBalance = getTextElementValueById('total-balance');
    const currentTotalBalance = newDeposit + previousTotalBalance;
    setTextElementValueById('total-balance', currentTotalBalance);
})


/**
 * [Note: function work here like a funel or formula. we can use same function for calculate deposit,withdraw,balance]
 * 
 * [ how to work the function ]
 * 
 * step>> 1
 * >>get the element by id.
 * >>get the value from the element
 * >>convert string value to a number.
 * 
 * step>> 2
 * >>get previous Total deposit by id
 * 
 * step>> 3
 * >>calculate new deposit total.
 * 
 * step>> 4
 * >>set deposit total value.
 * 
 * step>> 5
 * >>get previous balance by using the function
 * >>calculate new balance
 * >>set new balance.
 */