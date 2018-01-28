
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import {selectTab, showTabs} from '../common/tab/tabAction';
import MeasurementForm from './measurementForm';
import {runMeasuresCalculations} from './measurementsActions';
import MeasurementsResult from './measurementsResult';
import MeasurementInfo from './measurementInfo';



class Measurements extends Component {

    componentWillMount(){
        this.props.selectTab('tabCalculator');
        this.props.showTabs('tabCalculator', 'tabInfo');
    }

    renderCalculationTab(){ 
        console.log(this.props.mr);       
        if(this.props.mr 
            && this.props.mr.moneyLost
            &&  this.props.mr.lossesKg){
            return <MeasurementsResult result={this.props.mr} />
        } else {
            return <MeasurementForm onSubmit={this.props.runMeasuresCalculations} />
        }        
    }
    
    render(){
        return (
            <div>
                <ContentHeader title='Sistema de avaliação de perdas na colheita de amendoim' small='SAPECA' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label=' Calcular' icon='calculator' target='tabCalculator' />
                            <TabHeader label=' Instruções' icon='info' target='tabInfo' />
                         
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabCalculator'>
                                {this.renderCalculationTab()}   
                            </TabContent>
                            <TabContent id='tabInfo'> 
                               <MeasurementInfo />
                             </TabContent>  
                        </TabsContent>
                    </Tabs>
                </Content>

            </div>
        )
    }
}

const mapStateToProps = state => ({mr: state.measurements.mr});
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, runMeasuresCalculations}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Measurements);