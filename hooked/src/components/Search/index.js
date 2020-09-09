import React , {useState} from 'react'

const Search = (props) => {

    const [searchValue, setSearchValue] = useState(""); //this.state
    const handleSearchInputChanges = (e) => { //update the state with new value
        setSearchValue(e.target.value);
    }

    const resetInputField = () => { //call the state update function with an empty string
        setSearchValue ("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputField();
    }

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input
                onClick={callSearchFunction}
                type="submit"
                value="SEARCH"   
            />
        </form>
    )
}

export default Search