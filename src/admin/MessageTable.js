import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteModal from './DeleteModal';
import AddModal from './AddModal';
import Button from 'react-bootstrap/Button';
import {useNavigate, NavLink,Link} from 'react-router-dom';

function MessageTable() {
    const Navigate = useNavigate();
    const[recipes, setRecipes]=useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [deleteModalShow, deleteSetModalShow] = React.useState(false);
    const [addModalShow, addSetModalShow] = React.useState(false);
    const[rid,setId]=useState(0);

    async function getData() {
        try {
          const response = await axios.get('http://localhost:5000/messages');
          setRecipes(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      
      useEffect(()=>{
        getData();
      },[])


  return (
    <>
    <DeleteModal
        show={deleteModalShow}
        onHide={() => deleteSetModalShow(false)}
        rid={rid}
        title={"recipe"}
    />

    <AddModal
        show={addModalShow}
        onHide={() => {
          addSetModalShow(false);           
        }}
        rid={rid}
    />


        <Table responsive className="table table-striped table-hover table-lg mt-2" style={{
        width: '90%',
        marginLeft: '5%',
        marginTop: '560px'
    }}> 

      <thead className="thead-dark">
        <tr>
          <th>FROM</th>
          <th>EMAIL</th>
          <th>MESSAGES</th>
          <th>ACTION</th>
        </tr>
      </thead>

      <tbody style={{marginTop: '1rem'}}>
          {recipes.map((item)=>(
            <tr key={item.msid}>
                <td style={{fontSize: '12px'}}>{item.name}</td>
                <td style={{fontSize: '12px'}}>{item.email}</td>
                <td style={{fontSize: '13px'}}>{item.message}</td>
                <td>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" style={{fontSize: '10px'}}>
                        Action
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={() => {setId(item.msid); Navigate(`/viewmessage/${item.msid}`) }} >Expand</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => {setId(item.msid); Navigate(`/reply/${item.msid}`)}}>Reply</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => {setId(item.msid); deleteSetModalShow(true); }} >Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </td>
            </tr>
          ))
          } 
      </tbody>
    </Table>
    </>
  );
}

export default MessageTable;