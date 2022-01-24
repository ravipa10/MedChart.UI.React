import React from 'react';
import * as toastr from 'toastr';
import BloodPressure from '../Models/BloodPressureModel';
import BaseService from '../Services/Base.Service';
import { Form } from './Form';
import { History } from 'history';

interface IProps { 
    history: History;
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


export default class Edit extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            bloodPressure: {
                Id: '',
                SystolicReading: 0,
                DiabolicReading: 0,
                HeartRate: 0,
                ExamDate: new Date(),
                CreatedDate: new Date(),
                UpdatedDate: new Date()
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

    public componentDidMount() { 
        BaseService.get<BloodPressure>('/blood_pressure/', this.props.match.params.id).then(
            (rp) => {
                if (rp.Status) {
                    const bloodPressure = rp.Data;
                    this.setState({ bloodPressure: new BloodPressure(
                        bloodPressure.systolicReading,
                        bloodPressure.diabolicReading,
                        bloodPressure.heartRate,
                        bloodPressure.examDate,
                        bloodPressure.createdDate,
                        bloodPressure.updatedDate,
                        bloodPressure.Id)});
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

        );
    }


    private onSave = () => {

        console.log(this.state.bloodPressure);
        BaseService.update<BloodPressure>("/blood_pressure/", this.props.match.params.id, this.state.bloodPressure).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Blood Pressure entry updated.');
                    this.props.history.back();
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