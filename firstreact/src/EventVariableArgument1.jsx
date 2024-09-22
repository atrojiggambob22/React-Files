import React from 'react'
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const arrayStudentData=[
    {
    'id':'st001',
    'firstname':'Samuel',
    'lastname':'Chris',
    'DOB':'18-07-2024',
    'email':'mathiaschristopher1@gmial.com',
    'marital-status':'Single'
    },


    {
    'id':'st002',
    'firstname':'Juniro',
    'lastname':'Chomom',
    'DOB':'8-02-2021',
    'email':'mathiasbuchi30@gmial.com',
    'marital-status':'Married'
    },


    {
    'id':'st003',
    'firstname':'Samuel',
    'lastname':'samson',
    'DOB':'10-04-2024',
    'email':'mathiasonyebuchi13@gmial.com',
    'marital-status':'Single'
    },


    {
    'id':'st004',
    'firstname':'Samklef',
    'lastname':'john',
    'DOB':'15-03-2022',
    'email':'christopheronyebuchi15@outlook.com',
    'marital-status':'Divorced'
    },


    {
    'id':'st005',
    'firstname':'Oladele',
    'lastname':'Adebiyi',
    'DOB':'20-05-1995',
    'email':'oladele.adebiyi@gmail.com',
    'marital-status':'Single'
    },


    {
    'id':'st006',
    'firstname':'Aisha',
    'lastname':'Mohammed',
    'DOB':'12-08-1990',
    'email':'aisha.mohammed@yahoo.com',
    'marital-status':'Married'
    },


    {
    'id':'st007',
    'firstname':'Emeka',
    'lastname':'Okoro',
    'DOB':'03-02-1992',
    'email':'emek.okoro@hotmail.com',
    'marital-status':'Divorced'
    },


    {
    'id':'st008',
    'firstname':'Nneoma',
    'lastname':'Chukwu',
    'DOB':'15-01-1998',
    'email':'nneoma.chukwu@outlook.com',
    'marital-status':'Single'
    },

    {
    'id':'st009',
    'firstname':'Samuel',
    'lastname':'Uche',
    'DOB':'28-04-1991',
    'email':'samuel.uche@gmail.com',
    'marital-status':'Married'
    },


    {
    'id':'st0010',
    'firstname':'Ademola',
    'lastname':'Adeyemi',
    'DOB':'18-06-1993',
    'email':'ademola.adeyemi@yahoo.com',
    'marital-status':'Divorced'
    },

    {
    'id':'st0011',
    'firstname':'Chidinma',
    'lastname':'Okeke',
    'DOB':'22-09-1994',
    'email':'chidinma.okeke@hotmail.com',
    'marital-status':'Single'
    },

    {
    'id':'st0012',
    'firstname':'Olanrewaju',
    'lastname':'Babalola',
    'DOB':'11-11-1996',
    'email':'olanrewaju.babalola@outlook.com',
    'marital-status':'Married'
    },
    
    {
    'id':'st013',
    'firstname':'Temitope',
    'lastname':'Adeoye',
    'DOB':'04-07-1999',
    'email':'temitope.adeoye@gmail.com',
    'marital-status':'Single'
    },

    {
    'id':'st014',
    'firstname':'Abiodun',
    'lastname':'Adedipe',
    'DOB':'16-10-1990',
    'email':'abiodun.adedipe@hotmail.com',
    'marital-status':'Married'
    },

    {
    'id':'st015',
    'firstname':'Yusuf',
    'lastname':'Oyedepo',
    'DOB':'25-12-1994',
    'email':'yusuf.oyedepo@outlook.com',
    'marital-status':'Single'
    }
//They all object then they all varibles but we use single quote to tell the progrm
// that they are not varibales but string that holds varlues
]
 function StartMap(){
    return arrayStudentData.map((student)=>{

        return(
            <tr key={student.id}>
                
                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.DOB}</td>
                <td>{student.email}</td>
                <td>{student['marital-status']}</td>
                <td>{}</td>
                {/* then they are passed here  */}
            </tr>
            )
        })
 }
 
 function MappedTableData(){
    return(
        <>  
            <Table hover>
                <thead style={{textAlign:'center',
                    background:'blue',
                    color:'white'
                }}>
        
            
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>DOB</th>
                    <th>EMAIL</th>
                    <th>MARITAL STATUS</th>
                    {/* <th>GENDER</th> */}
                    
                    
                    
            </thead>

            <tbody>
                <StartMap/>
            </tbody>

    </Table>
        </>
    )
 }
const EventVariableArgument1 = () => {
  return (
    <div className='App'>
                <div>
            <h1 style={{
                textAlign:'center',
                backgroundColor:'#f2f2f2'
            }}>
                </h1> CLASS LIST OF LEGENDS
            </div>
            <MappedTableData/>
        </div> 
  )
}

export default EventVariableArgument1