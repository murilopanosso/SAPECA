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
            <div id="panel-result" className="panel-result row">
                        Sua lavoura perdeu <strong>{props.result.lossesKg}</strong> Kg Ha-¹<br />
                        Você deixou de ganhar <strong>{props.result.moneyLost}</strong> Reais
                        <button className='btn btn-success form-control' id="btn-reset" onClick={this.props.reset}>VOLTAR</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({reset}, dispatch);
export default connect(null, mapDispatchToProps)(MeasurementsResult);