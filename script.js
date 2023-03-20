let flowRateValue = document.querySelector('#flow-rate-value').value;
let flowRateMeasure = document.querySelector('#flow-rate-measure').value;
let flowRateResult = 0;
let flowRateButton = document.querySelector('#flow-rate-button');
let flowRateClean = document.querySelector('#flow-rate-clean');
let flowRateShow = document.querySelector('#flow-rate-show');

function ValidateInput() {
    if (flowRateValue.length != null && flowRateMeasure.length != null) {
        flowRateButton.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

function FlowRateCalculate() {
    let flowRateValue = document.querySelector('#flow-rate-value').value;
    let flowRateMeasure = document.querySelector('#flow-rate-measure').value;
    let flowRateResult = 0;
 
    flowRateResult = ((flowRateValue - flowRateMeasure) / flowRateValue) * 100;

    flowRateShow.textContent = flowRateResult.toFixed(1) + "%";

    flowRateClean.hidden = "";
    flowRateButton.hidden = "hidden";
}

function FlowRateClean() {
    location.reload();
}