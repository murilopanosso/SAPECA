import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {reset} from './measurementsActions';


class MeasurementsResult extends Component {

    componentDidMount(){
        $('#panel-result').slideDown("slow");
    }

    componentWillUnMount(){
        $('#panel-result').slideUp("slow");
    }

    render() {
        const {props} = this;
        const {handleSubmit} = this.props;
        return (
            <div id="panel-result" className="panel-result">
                        Sua lavoura perdeu <strong>{props.result.lossesScAlq}sc/alq</strong> (<strong>{props.result.lossesKg}kg/ha</strong>)<br />
                        Você deixou de ganhar <strong>{props.result.moneyLostAlq}R$/alq</strong> (<strong>{props.result.moneyLostHe}R$/ha</strong>)
                        <button className='btn btn-success form-control' id="btn-reset" onClick={props.reset}>VOLTAR</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({reset}, dispatch);
export default connect(null, mapDispatchToProps)(MeasurementsResult);