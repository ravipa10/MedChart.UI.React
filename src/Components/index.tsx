import * as React from "react";
import TableRow from "./TableRow";
import BloodPressure from '../Models/BloodPressureModel';
import BaseService from '../Services/Base.Service';
import * as toastr from "toastr";
interface IProps {}
interface IState {
  listBloodPressures: Array<BloodPressure>;
  isReady: Boolean;
  hasError: Boolean;
}

class Index extends React.Component<IProps, IState> {
  public state: IState = {
    listBloodPressures: new Array<BloodPressure>(),
    isReady: false,
    hasError: false,
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      isReady: false,
      listBloodPressures: Array<BloodPressure>(),
      hasError: false,
    };
  }

  public componentDidMount() {
    BaseService.getAll<BloodPressure>("/blood_pressure").then((rp) => {
      if (rp.Status) {
        var data = rp.Data;
        const listBloodPressures = new Array<BloodPressure>();
        data.forEach((bp: BloodPressure) => {
          listBloodPressures.push(new BloodPressure(bp.SystolicReading, bp.DiabolicReading, bp.HeartRate, bp.ExamDate, bp.CreatedDate, bp.UpdatedDate, bp.Id));
        });

        this.setState({ listBloodPressures: listBloodPressures }); 
        this.setState({ isReady: true });
      } else {
        this.setState({ isReady: true });
        this.setState({ hasError: true });
        console.log("Messages: " + rp.Messages);
        console.log("Exception: " + rp.Exception);
      }
    });

    setTimeout(() => {
      if (!this.state.isReady) {
        toastr.info(
          "Service may have restarted, please wait!",
          "",
          { timeOut: 8000 }
        );
      }

      if (this.state.hasError) {
        toastr.error(
          "An error occurred!",
          "",
          { timeOut: 8000 }
        );
      }
    }, 2000);
  }

  public tabRow = () => {
    if (!this.state.isReady) {
      return (
        <tr>
          <td colSpan={6} className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </td>
        </tr>
      );
    }
    if (this.state.hasError) {
      return (
        <tr>
          <td colSpan={6} className="text-center">
            <div className="alert alert-danger" role="alert">
              An error occurred!
            </div>
          </td>
        </tr>
      );
    }
    return this.state.listBloodPressures.map(function (object, i) {
      return <TableRow key={i} index={i + 1} bloodPressure={object} />;
    });
  };

  public render(): React.ReactNode {
    return (
      <div>
        <h3 className="text-center">Blood Pressure List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Systolic</th>
              <th>Diastolic</th>
              <th>Heart Rate</th>
              <th>Exam Date</th>
              <th className="text-center" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default Index;
