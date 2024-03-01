import React from 'react';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';

let data = [];

function Table01() {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

     data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ];

    return (
        <div className="container mt-5">
            <DataTable 
                columns={columns}
                data={data}
            ></DataTable>  
            
            {/* <Button variant="primary" onClick={TodoDataService.sendtable(data)}>
                Send Table
            </Button> */}
        </div>
    );
};
        
    // function sendtable(data) {

    //     return axios.post("http://127.0.0.1:8000/api/gettable/", data);
    // }

// function Table01() {
//     return (
//       <>

//         <h1>Name: Octavia</h1>
//         <h2>Species: Octopus</h2>
//          <h2>Class: Cephalopoda</h2>
//       </>
//     )
//   }

export default Table01;