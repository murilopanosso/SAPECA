import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SelectLossType from './measurementSelectLossType';
import SelectOperation from './measurementSelectOperation';



class MeasurementsForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return(
            <div id="form-calculations">
                <form role="form" onSubmit={handleSubmit}>
                    <div className='box-body' >
                        <div className="form-group">
                        <h4>Variedade</h4>
                            <Field name="variety" component="select"  className="form-control">
                                <option>-Selecione-</option>
                                <option value="GEORGIA06">Georgia-06G (EUA)</option>
                                <option value="IAC886">IAC 886</option>
                                <option value="GANOLEICO">Granoleico</option>
                            </Field>
                        </div>
                        <SelectOperation onChange />
                        <SelectLossType  />
                        <div className="form-group">
                        <h4>Número de Vagens</h4>
                        <Field name='podsNumber' component='input'  type="number" className="form-control" />
                        </div>
                        <div className="form-group">
                        <h4>Valor atual da Saca (25 kg), em R$</h4>
                        <Field name='currentValue' component='input' type="number"  className="form-control" />
                        </div>
                    </div>
                    <div className="box-footer">
                            <button type="submit" className='btn btn-primary form-control'>AVALIAR</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'measurementsForm'})(MeasurementsForm);