import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
    renderEditable (cellInfo) {
        return (
            <div
                style = {{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
            />
        );
    }
    render() {
        return(
            <div>
                <ReactTable
                    columns = {[
                        {
                            Header: "ID",
                            columns: [
                                {
                                    Header: "Tool ID",
                                    accessor: "toolid",
                                    Cell: this.renderEditable
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Name",
                                    accessor: "toolname",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Type",
                                    accessor: "tooltype",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Description",
                                    accessor: "tooldescription",
                                    Cell: this.renderEditable
                                }
                            ]
                        }, 
                        {
                            Header: "Check-Out",
                            columns: [
                                {
                                    Header: "Checked out?",
                                    accessor: "checkedout",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Employee",
                                    accessor: "employeeid",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Job ID",
                                    accessor: "jobid",
                                    Cell: this.renderEditable
                                },
                                {   
                                    Header: "Updated",
                                    accessor: "updatetime",
                                    Cell: this.renderEditable
                                }
                            ]
                        }
                    ]}
                    defaultPageSize = {20}
                    style = {{
                        height: "400px" //forces the table body to scroll
                    }}
                    className = "-striped -highlight"
                />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));