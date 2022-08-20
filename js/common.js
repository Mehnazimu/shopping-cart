function getTextElementValueByid(elementId) {
    const totalElementValue = document.getElementById(elementId);
    const currentTotalValueString = totalElementValue.innerText;
    const currentTotalValue = parseInt(currentTotalValueString);
    return currentTotalValue;

}

function setTextElementValueById(elementId, value) {

    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;


}
function calculateSubtotal() {
    //calculate total
    const currentPhoneTotal = getTextElementValueByid('phone-total');
    const currentCaseTotal = getTextElementValueByid('case-total');

    const currentSubtotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubtotal);
    const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubtotal + taxAmount;

    setTextElementValueById('final-total', finalAmount);


}