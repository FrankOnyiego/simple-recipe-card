import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import AddModal from './AddModal';
import Button from 'react-bootstrap/Button'

function RecipeTable() {

    const[recipes, setRecipes]=useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [deleteModalShow, deleteSetModalShow] = React.useState(false);
    const [addModalShow, addSetModalShow] = React.useState(false);
    const[rid,setId]=useState(0);

    async function getData() {
        try {
          const response = await axios.get('http://localhost:5000/recipes');
          console.log(response.data);
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
    <EditModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
        rid={rid}
    />

    <DeleteModal
        show={deleteModalShow}
        onHide={() => deleteSetModalShow(false)}
        rid={rid}
    />

    <AddModal
        show={addModalShow}
        onHide={() => addSetModalShow(false)}
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
          <th><Button variant="success" onClick={() => {addSetModalShow(true); setId(1)}}>ADD <i class="fa fa-plus text-white" aria-hidden="true"></i></Button></th>
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
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{fontSize: '10px'}}>
                        Dr
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={() => {setModalShow(true); setId(item.rid)}}>Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={() => {deleteSetModalShow(true); setId(item.rid)}} >Delete</Dropdown.Item>
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