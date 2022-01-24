import * as React from 'react';
import BloodPressure from '../Models/BloodPressureModel';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Input, Button } from '../Common/FormComponents';

interface Props {
    bloodPressure: BloodPressure;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const CreateBloodPressureForm: React.FunctionComponent<Props> = (props) => {    

const [examDate, setExamDate] = React.useState(new Date());
    return (
        <form>
            <h1>Add Blood Pressure</h1>

            <Input
                name="SystolicReading"
                label="Systolic Reading"
                value={props.bloodPressure.SystolicReading}
                onChange={props.onChange}
            />

            <Input
                name="DiabolicReading"
                label="Diabolic Reading"
                value={props.bloodPressure.DiabolicReading}
                onChange={props.onChange}
            />

            <Input
                name="HeartRate"
                label="Heart Rate"
                value={props.bloodPressure.HeartRate}
                onChange={props.onChange}
            />

            <label className='ExamDate'>Exam Date</label>
            <DatePicker 
            name="ExamDate"
            selected={examDate} 
            onChange={(date: Date) => setExamDate(date)} />

            <Button
                label="Save"
                className="btn btn-success mt-2"
                onClick={props.onSave}
            />
        </form>
    );
};
