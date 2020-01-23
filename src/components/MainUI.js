import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./MemeGenerator";

function MyInfo(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
};

export default MyInfo  //to make this function available in this application