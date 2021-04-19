import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import NavigationBar from "../Shared/Components/NavigationBar";
import Slider from "./components/Slider";
import Fade from "react-reveal/Fade";
import Service from "./components/Service";

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Survey Money</title>
                </Helmet>

                <NavigationBar/>

                <Fade top cascade>
                <Slider />
                <Service id="services" />
                </Fade>
          
                
            </div>
        )
    }
}
