import React from "react"


const Header = (props) => {
    return(
        <header className="App-header">
            {/* This is a functional compoenet that renders header tag wiht the text prop */}
            <h2>{props.text}</h2>
        </header>
    )
}

export default Header