import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const imageList=[
    {
    'id':'st001',
    'firstname':'Samuel',
    'lastname':'Chris',
    'Position':'Faculty',
    'Gender':'Male',
    'DOB':'18-07-2024',
    'email':'mathiaschristopher1@gmial.com',
    'marital-status':'Single',
    'Course':['Mathematics', 'Science', 'History'],
    'image':'image/biker.jpg',
    },


    {
    'id':'st002',
    'firstname':'Juniro',
    'lastname':'Chomom',
    'Position':'Faculty',
    'Gender':' Female',
    'DOB':'8-02-2021',
    'email':'mathiasbuchi30@gmial.com',
    'marital-status':'Married',
    'Course':['Mathematics', 'Geography', 'Physics'],
    'image':'image/biker.jpg'
    },


    {
    'id':'st003',
    'firstname':'Samuel',
    'lastname':'samson',
    'Position':'Faculty',
    'Gender':'Male',
    'DOB':'10-04-2024',
    'email':'mathiasonyebuchi13@gmial.com',
    'marital-status':'Single',
    'Course':['History', 'Geography', 'Civics'],
    'image':'image/biker.jpg',
    },


    {
    'id':'st004',
    'firstname':'Samklef',
    'lastname':'john',
    'Position':'Faculty',
    'Gender':'Male',
    'DOB':'15-03-2022',
    'email':'christopheronyebuchi15@outlook.com',
    'marital-status':'Divorced',
    'Course':['Mathematics', 'Science', 'History'],
    'image':'image/biker.jpg',
    },


    {
    'id':'st005',
    'firstname':'Oladele',
    'lastname':'Adebiyi',
    'Position':'Faculty',
    'DOB':'20-05-1995',
    'Gender':'Female',
    'email':'oladele.adebiyi@gmail.com',
    'marital-status':'Single',
    'Course':['Physics', 'Chemistry', 'Biology'],
    'image':'image/biker.jpg',
    },


    {
    'id':'st006',
    'firstname':'Aisha',
    'lastname':'Mohammed',
    'Position':'Faculty',
    'DOB':'12-08-1990',
    'Gender':'Male',
    'email':'aisha.mohammed@yahoo.com',
    'marital-status':'Married',
    'Course':['Logic' ,'SQL'],
    'image':'image/biker.jpg',
    }
]  

const StaffList =()=>(
    imageList.map((staff)=>(
        <>

        <li style={{listStyle:'none',
            border:'1px solid  #999',
            padding:'20px',
            float:' left',
            width:'200px',
            height:'300px',
            marginLeft:'20px'
        }}
        
        >

            <img src={staff.image} alt=""  style={{borderRadius:'100px',
                border:'2px solid #999',
                width:'160px',
                height:'40%'
            }} />
            <p>
                Full Name:{staff.firstname} {staff.lastname}
                <br />
                Gender: {staff.Gender}
                <br />
                Position: {staff.Position}
            </p>
        </li>
            
        </>
       
    ))
)
const DoArrow=()=> "srvrsbvrsv";

const VariableObjectMapFilter = () => {
  return(
        <div>
            <ul>
                {StaffList()}
            </ul>
        </div>
    )
}

export default VariableObjectMapFilter