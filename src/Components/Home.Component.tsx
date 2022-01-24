import * as React from 'react';
import { Link } from "react-router-dom";
interface IProps {
}
interface IState {
}

class Home extends React.Component<IProps, IState> {


    public componentDidMount() {

    }

    public render(): React.ReactNode {
        return (
            <div>
                <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display-5 fw-bold">MedChart Dashboard</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Blood Pressure Entries</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                                  <Link to={'/index'} className="btn btn-outline-secondary btn-lg px-4">List</Link> 
                            </div>
                        </div>
                </div>

            </div>
        );
    }
}
export default Home;