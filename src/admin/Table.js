import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteModal from './DeleteModal';
import AddModal from './AddModal';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function RecipeTable() {
    const Navigate = useNavigate();
    const[recipes, setRecipes]=useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [deleteModalShow, deleteSetModalShow] = React.useState(false);
    const [addModalShow, addSetModalShow] = React.useState(false);
    const[rid,setId]=useState(0);

    async function getData() {
        try {
          const response = await axios.get('http://localhost:5000/recipes');
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
    />

    <AddModal
        show={addModalShow}
        onHide={() => {
          addSetModalShow(false);           
        }}
        rid={rid}
    />


        <Table responsive style={{
        width: '90%',
        marginLeft: '5%'
    }}>

      <thead>
        <tr>
          <th>RECIPE</th>
          <th>INGREDIENTS</th>
          <th>DESCRIPTION</th>
          <th><Button variant="secondary" style={{fontSize: '10px'}} onClick={() => {setId(1); addSetModalShow(true);}}>ADD&nbsp;&nbsp;&nbsp;<i className="fa fa-plus text-white" aria-hidden="true"></i></Button></th>
        </tr>
      </thead>

      <tbody>
          {recipes.map((item)=>(
            <tr key={item.rid}>
                <td style={{fontSize: '12px'}}>{item.Title}</td>
                <td style={{fontSize: '12px'}}>{item.ingredients}</td>
                <td style={{fontSize: '13px'}}>{item.description}</td>
                <td>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" style={{fontSize: '10px'}}>
                        Action
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={() => {setId(item.rid); Navigate(`/edit/${item.rid}`)}}>Edit</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => {setId(item.rid); deleteSetModalShow(true); }} >Delete</Dropdown.Item>
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

export default RecipeTable;