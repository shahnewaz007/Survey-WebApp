import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import NavigationBar from "../Shared/Components/NavigationBar";
import Footer from "../Shared/Components/Footer";

import Slider from "./components/Slider";
import Fade from "react-reveal/Fade";
import Service from "./components/Service";
import AboutApp from "./components/AboutApp";
import Process from "./components/Process";


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
                <AboutApp />
                <Process />
                <Footer/>
                </Fade>

        

          
                
            </div>
        )
    }
}
