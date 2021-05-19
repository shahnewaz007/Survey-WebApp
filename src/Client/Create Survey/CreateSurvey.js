import React, { Component } from 'react'
import NavigationBar from "../../Shared/Components/NavigationBar";
import SurveyForm from "./SurveyForm.js"

export default class CreateSurvey extends Component {
    render() {
        return (
            <div>

                <NavigationBar/>
                <SurveyForm/>
                
            </div>
        )
    }
}
