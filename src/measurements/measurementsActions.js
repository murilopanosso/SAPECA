import MeasurementConsts from './measurementConsts';

export function runMeasuresCalculations(values){
    const baseValues = MeasurementConsts(values.lossType, values.variety);
    let lossesKg = baseValues.v1*Math.pow(values.podsNumber, baseValues.v2);
    lossesKg = parseFloat(lossesKg.toFixed(2));
    let moneyLost = (Number(lossesKg)/25) * Number(values.currentValue);
    moneyLost = parseFloat(moneyLost.toFixed(2));
    const finalResults = {
        lossesKg,
        moneyLost 
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