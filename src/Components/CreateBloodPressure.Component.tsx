import React from 'react';
import * as toastr from 'toastr';
import BloodPressure from '../Models/BloodPressureModel';
import BaseService from '../Services/Base.Service';
import { Form } from './Form';
 


interface IProps { 
    // history: History;
    //Map properties match
    match:{ 
        isExact: boolean
        params: {
            id:string
        },
        path: string,
        url: string,
    }
}
interface IState {
    bloodPressure: BloodPressure
}


export default class Create extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
         
        this.state = {
            bloodPressure: {
                SystolicReading: 0,
                DiabolicReading: 0,
                HeartRate: 0,
                ExamDate: new Date()
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);
    }

    private onFieldValueChange(fieldName: string, value: string) { 
        const nextState = {
            ...this.state,
            bloodPressure: {
                ...this.state.bloodPressure,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }
    private onSave = () => { 
        BaseService.create<BloodPressure>("/blood_pressure", this.state.bloodPressure).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Blood pressure entry saved.'); 


                    this.setState({
                        bloodPressure: {
                            SystolicReading: 0,
                            DiabolicReading: 0,
                            HeartRate: 0,
                            ExamDate: new Date()
                        }
                    });
                     
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }
        );

    } 
     
    render() {
        return (
            <Form
                bloodPressure={this.state.bloodPressure}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }     
     
}