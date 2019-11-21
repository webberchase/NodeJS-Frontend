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
                            Header: "Order",
                            columns: [
                                {
                                    Header: "Order ID",
                                    accessor: "orderid",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Client",
                                    accessor: "clientname",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Order Description",
                                    accessor: "orderdescription",
                                    Cell: this.renderEditable
                                },
                            ]
                        },
                        {
                            Header: "Job Info",
                            columns: [
                                {
                                    Header: "Job ID",
                                    accessor: "jobid",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Task",
                                    accessor: "jobtask",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Description",
                                    accessor: "jobdescription",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Due Date",
                                    accessor: "duedate",
                                    Cell: this.renderEditable
                                }
                            ]
                        }, 
                        {
                            Header: "Assignment",
                            columns: [
                                {
                                    Header: "Assigned to",
                                    accessor: "employeeid",
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