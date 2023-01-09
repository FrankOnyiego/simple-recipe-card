import React from 'react'
import { Form, FormGroup } from "reactstrap";
import "../styles/findmealform.css"

function FindMeal() {
  return (
    <>
    <Form className="form" >
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="number" name="min"  min="0" val="1" placeholder="Min price" />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="number" name="max"  min="0" placeholder="Max price" />
        </FormGroup>

        <FormGroup className="form__group"> 
          <input type="text" name="brand"  placeholder="Brand e.g Tesla" />
        </FormGroup>

        <FormGroup className="select__group">
          <select name="ac">
            <option value="automatic">Automatic car</option>
            <option value="manual">Manual car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
 
            <button className="btn find__car-btn">Find Meal</button>

        </FormGroup>
      </div>
    </Form>
    </>
  )
}

export default FindMeal
