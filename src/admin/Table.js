import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

function RecipeTable() {

    const[recipes, setRecipes]=useState([]);
    const [modalShow, setModalShow] = React.useState(true);
    const [deleteModalShow, deleteSetModalShow] = React.useState(true);
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
        <Table responsive style={{
        width: '80%',
        marginLeft: '10%'
    }}>

      <thead>
        <tr>
          <th>RECIPE</th>
          <th>INGREDIENTS</th>
          <th>DESCRIPTION</th>
          <th>ACTION</th>
        </tr>
      </thead>

      <tbody>
          {recipes.map((item)=>(
            <tr key={item.rid}>
                <td style={{fontSize: '10px'}}>{item.Title}</td>
                <td style={{fontSize: '10px'}}>{item.ingredients}</td>
                <td style={{fontSize: '10px'}}>{item.description}</td>
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