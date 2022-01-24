import * as React from 'react';
import BloodPressure from '../Models/BloodPressureModel';
import { CreateBloodPressureForm } from './CreateBloodPressure.Form';

interface IProps {
    bloodPressure: BloodPressure;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const Form: React.FunctionComponent<IProps> = (props: IProps) => {  
    return (
        <CreateBloodPressureForm
            bloodPressure={props.bloodPressure}
            onChange={props.onChange}
            onSave={props.onSave}
        />
    );
}
