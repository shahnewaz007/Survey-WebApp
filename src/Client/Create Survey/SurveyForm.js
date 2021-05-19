import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import {Container, Row, Col, Form} from 'react-bootstrap'
import axios from "axios";
 
function SurveyForm() {
  const [inputList, setInputList] = useState([{ question: ""}]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { question: ""}]);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log("Survey Title: "+title)
    console.log("Survey Description: "+description)
    console.log(inputList)


    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "api/survey/postsurvey", //API Call
        {
          surveyTitle: title,
          surveyDescription: description,
          questionList: inputList
        }
      );

      alert(response.data.message);
      

  }
  catch
  {
     
  }





}


  return (
    <div className="center">

        <form className=" main_box bg-white shadow p-5" onSubmit={handleSubmit}>

            <h2 className="center Heading">Create a New Survey</h2>


            <MDBInput

                label="Title" 
                type="text"
                name="title"
                value={title}
                id="name"
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                required
            />



            <MDBInput
                label="Description" 
                type="text"
                name="description"
                value={description}
                id="name"
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                required
            />

            <br/>
            <br/>

            {inputList.map((x, i) => {
                var j = i+1
                return (
                    <div className="row">
                    

                        <Col sm={8}>
                        <MDBInput
                            label={"Question "+ j}
                            name="question"
                            value={x.question}
                            onChange={e => handleInputChange(e, i)}
                        />


                        </Col>


                        <Col sm={4}>

                        <div className="btn-box">
                        {inputList.length !== 1 && <button
                            className="mr10 btn btn-outline-dark pt-1 pb-1"
                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                        {inputList.length - 1 === i && <button type="button" className= "btn btn-outline-dark pt-1 pb-1" onClick={handleAddClick}>Add</button>}
                        </div>

                        </Col>

                    


                    </div>
                );
            })}



            <div className = "center pt-4 pb-4">
              <button type="submit" className="btn btn-dark btn-rounded">Submit</button>
            </div>

        </form>



      
    </div>
  );
}
 
export default SurveyForm;
