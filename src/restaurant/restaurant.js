import React from "react";
import Table from "./table";
export default class Restaurant extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                <Table name="darshan" tableno="01" />
                <Table name="swati" tableno="02" />
                <Table name="abhishek" tableno="03" />
            </div>
        </div>

        )
    }
}
