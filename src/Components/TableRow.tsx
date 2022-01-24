import React from "react";
import { Link } from "react-router-dom";
import BloodPressure from '../Models/BloodPressureModel';

interface IProps {
  bloodPressure: BloodPressure;
  index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => { 
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.bloodPressure.SystolicReading}</td>
      <td>{props.bloodPressure.DiabolicReading}</td>
      <td>{props.bloodPressure.HeartRate}</td>
      <td>{props.bloodPressure.ExamDate}</td>
      <td>
        <Link to={"/edit/" + props.bloodPressure.Id} className="btn btn-primary">
          Edit
        </Link>
      </td>
    </tr>
  );
};
export default TableRow;
