import React from 'react'
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const arrayObject=[
    'Christian','Azez','Sam','Life',
    'Destiny','David','Joel','Skunet',
    'claude','wagio','Omiete','Victony','Cyril'
];

function InsertTable(){
    return arrayObject.map((props) =>
        <tr>
            <td style={{textAlign:'center'}}>
                {props}
            </td>
        </tr>
    );
}
const VariableObjectMaping = () => {
  return (
   <Table hover>
        <thead>
            <tr>
                <th style={{textAlign:'center'}}>
                    CLASS ATTENDANCE
                </th>
            </tr>
        </thead>
        <tbody>

            <InsertTable/>
        </tbody>

   </Table> 
  )
}

export default VariableObjectMaping