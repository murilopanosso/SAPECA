import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field} from 'redux-form';

class SelectLossType extends Component {

    render(){
        return (
            <div className="form-group">
            <h4>Tipo de Perda</h4>
                <Field name="lossType" component="select"  className="form-control">
                <option>-Selecione-</option>
                    {
                        this.props.options.map((item) => {
                            return (<option value={item.id}>{item.title}</option>)
                        })
                    }
                </Field>
            </div>
        )
    }
}
const mapStateToProps = state => ({options: state.measurements.options});
export default connect(mapStateToProps, null)(SelectLossType);