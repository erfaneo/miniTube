import React from "react";

class SearchBar extends React.Component {
    state = {value: "Search Somthing...", color: "gray"}
    onChange = (e) => {
        this.setState({value: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.getInput(this.state.value)
    }
    onClick = () => {
        if (this.state.value == "Search Somthing..."){
            this.setState({value: "", color: "black"})
        }
    }

    render(){
        return(
            <div className="d-flex justify-content-center mt-4">
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} value={this.state.value} onClick={this.onClick}  type="text" className="border border-3 rounded-2 p-1" style={{color: `${this.state.color}`}}></input>
                </form>
                <button onClick={this.onSubmit} className="btn btn-outline-success mx-1 p-1 px-2">Search</button>
            </div>
        )
    }
}

export default SearchBar;