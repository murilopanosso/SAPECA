import MeasurementConsts from './measurementConsts';
const VALUE_SC_ALQ = 0.0968;
const DIGGING = 'digging';
const HARVESTING = 'harvesting';
export function runMeasuresCalculations(values) {
    const baseValues = MeasurementConsts(values.lossType, values.variety);
    let lossesKg = baseValues.v1*Math.pow(values.podsNumber, baseValues.v2);
    lossesKg = parseFloat(lossesKg.toFixed(2));
    let moneyLostHe = (Number(lossesKg)/25) * Number(values.currentValue);
    moneyLostHe = parseFloat(moneyLostHe.toFixed(2));
    let lossesScAlq = parseFloat(lossesKg*VALUE_SC_ALQ);
    lossesScAlq = parseFloat(lossesScAlq.toFixed(2));
    let moneyLostAlq = (Number(lossesScAlq) * Number(values.currentValue));
    moneyLostAlq = parseFloat(moneyLostAlq.toFixed(2));

    const finalResults = {
        lossesKg,
        moneyLostHe,
        lossesScAlq,
        moneyLostAlq 
    }
    return {
            type: 'MEASUREMENTS_CALCULATIONS',
            payload: finalResults
        }
}

export function reset(){
        return{
            type: 'MEASUREMENTS_CALCULATIONS',
            payload: -1
        }
  }

export function populateSelectLossType(operation) {
    console.log('passou aqui', operation);
    let options = [];
    if(operation === DIGGING){
        options = [{title: 'Visíveis', id: 'visible'}, {title: 'Invisíveis', id: 'invisible'}];
    }else if (operation === HARVESTING) {
        options = [{title: 'Visíveis totais', id: 'visible'}];
    }
    return {
        type: 'POPULATE_SELECT_LOSS_TYPE',
        payload: options
    }

}