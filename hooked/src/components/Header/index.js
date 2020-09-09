import React from "react"


const Header = (props) => {
    return(
        <header className="App-header">
            {/* This is a functional component that renders header tag with the text prop */}
            <h2>{props.text}</h2>
        </header>
    )
}

export default Header