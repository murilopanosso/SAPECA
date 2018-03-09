import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, change} from 'redux-form';
import {populateSelectLossType} from './measurementsActions';
import {handler} from 'default-passive-events';
document.addEventListener('mousewheel', handler, {passive: true});
const options = ['teste', 'testando']
class SelectLossType extends Component {

    componentWillMount() {
        this.props.populateSelectLossType();
    }

    render(){
        return (
            <div className="form-group">
                        <h4>Operação</h4>
                        <Field name="operation" component="select"  className="form-control" onChange={e => { this.props.populateSelectLossType(e.target.value); }}>
                            <option>-Selecione-</option>
                            <option value="digging">Arranquio</option>
                            <option value="harvesting">Recolhimento</option>
                        </Field>
        </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({populateSelectLossType}, dispatch);
export default connect(null, mapDispatchToProps)(SelectLossType);