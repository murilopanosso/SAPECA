import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class MeasurementsForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return(
            <div id="form-calculations">
                <form role="form" onSubmit={handleSubmit}>
                    <div className='box-body' >
                        <div className="form-group">
                        <h4>Variedade</h4>
                            <Field name="variety" component="select"  class="form-control">
                                <option />
                                <option value="GEORGIA06">Georgia-06G</option>
                                <option value="IAC886">IAC 886</option>
                                <option value="GANOLEICO">Granoleico</option>
                            </Field>
                        </div>
                        <div className="form-group">
                        <h4>Operação</h4>
                        <Field name="operation" component="select"  class="form-control">
                            <option />
                            <option value="digging">Arranquio</option>
                            <option value="harvesting">Recolhimento</option>
                        </Field>
                        </div>
                        <div className="form-group">
                        <h4>Tipo de Perda</h4>
                        <Field name="lossType" component="select"  class="form-control">
                            <option />
                            <option value="visible">Visíveis</option>
                            <option value="invisible">Inivisíveis</option>
                        </Field>
                        </div>
                        <div className="form-group">
                        <h4>Número de Vagens</h4>
                        <Field name='podsNumber' component='input'  type="number" class="form-control" />
                        </div>
                        <div className="form-group">
                        <h4>Valor atual da Saca</h4>
                        <Field name='currentValue' component='input' type="number"  class="form-control" />
                        </div>
                    </div>
                    <div className="box-footer">
                            <button type="submit" className='btn btn-primary form-control'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'measurementsForm'})(MeasurementsForm);