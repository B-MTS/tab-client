import React, { useState, useEffect, useMemo } from "react";
import { Table, Button } from 'reactstrap';
import { useTable } from "react-table";
import { useHistory } from "react-router-dom";
const Tables = () => {
  const history = useHistory();
  const [dataTable, setdataTable] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [depId, setDepId] = useState(null);
  const [show, setShow] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  useEffect(() => {
    requestTable();
    // console.log()
  }, []);

  async function requestTable() {
    const res = await fetch(
      `http://hr.audit.mn/public/api/v1/surveyList/20996`
    );
    const json = await res.json();

    console.log(json);
    setdataTable(json);
  }



  const columns = useMemo(
    () => [
      {
        Header: "№",
        accessor: "ID",
      },
      {
        Header: "name",
        accessor: "SURVEY_NAME",
      },
      {
        Header: "Status",
        accessor: "STATUS_NAME",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: props => <button onClick={() => {}}>Details</button>
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: dataTable,
    });
  return (
    <div class="columns">
    <div class="column">
    <div class="card"      style={{
          backgroundColor: "white",
          height: "810px",
          overflow: "scroll",
          marginTop:'80px',
        }}>
    <header class="card-header">
    <h5 style={{color:'#002d74'}} class="card-header-title">
        Судалгааны жагсаалт
    </h5>
</header>
<div class="card-body">
                            <div class="table-container">
      <Table responsive hover class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Судалгааны жагсаалт</th>
              <th scope="col">Төлөв</th>
              <th scope="col">Үйлдэл</th>
            </tr>
          </thead>
          <tbody>
            {searchInput.length > 1
              ? filteredResults.map((item) => {
                  return (
                    <tr>
                      <th>{item.ID}</th>
                      <th>{item.SURVEY_NAME}</th>
                      <th>{item.STATUS_NAME}</th>
                      <th> 
          <div style={{width:"110px"}}>
            {/* <Button color="success" >DEL</Button> */}
              {' '}
              {/* <AuthRoute path="/home"  type="private" /> */}
              {/* <Button color="danger"  onClick={() => history.push({pathName: '/sudalgaa', search: `?=${item.SURVEY_ID}`, state: item.SURVEY_ID})}>Del</Button> */}
              <Button color="success"   onClick={() => history.push({pathname: `/sud${item.SURVEY_ID}`, search: `?=${item.SURVEY_ID}`, state: item.SURVEY_ID})}>БӨГЛӨХ</Button>
            </div></th>
                    </tr>
                  );
                })
              :
               dataTable.map((item, index) => {
                  return (
                    <tr>
                      <th>{item.SURVEY_ID}</th>
                      <th>{item.SURVEY_NAME}</th>
                      <th>{item.STATUS_NAME}</th>
                      <th><div style={{width:"110px"}}>
            {/* <Button color="success"  onClick={() => {
                history.push(`/sudalgaa${item.SURVEY_ID}`);
              }}>DEL</Button> */}

 <Button color="success"   onClick={() => history.push({pathname: `/web/sud${item.SURVEY_ID}`, search: `?=${item.SURVEY_ID}`, state: item.SURVEY_ID})}>БӨГЛӨХ</Button>

              {' '}


              {/* <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button> */}

              
            </div></th>
                      </tr>
            
                  );
                })}
          </tbody>
        </Table>
                       </div> 
                     </div>
                    </div>
                 </div>
            </div>
  );
};

export default Tables;
