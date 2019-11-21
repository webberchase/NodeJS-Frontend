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
                                    Header: "Item ID",
                                    accessor: "itemID",
                                    Cell: this.renderEditable
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Type",
                                    accessor: "itemType",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Description",
                                    accessor: "itemDescription",
                                    Cell: this.renderEditable
                                }
                            ]
                        },
                        {
                            Header: "Metrics",
                            columns: [
                                {
                                    Header: "Length",
                                    accessor: "itemlength",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Width",
                                    accessor: "itemwidth",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Height",
                                    accessor: "itemheight",
                                    Cell: this.renderEditable
                                }
                            ]
                        }, 
                        {
                            Header: "Status",
                            columns: [
                                {
                                    Header: "Scrap?",
                                    accessor: "isscrap",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Last Update",
                                    accessor: "updatetime",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Employee",
                                    accessor: "employeeid",
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