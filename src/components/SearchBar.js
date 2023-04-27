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
            <div>
                <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center container mt-3">
                    <form  onSubmit={this.onSubmit}>
                        <input  onChange={this.onChange} value={this.state.value} onFocus={this.onClick} onClick={this.onClick}  type="text" className="col-12 border border-3 rounded-2 p-1" style={{color: `${this.state.color}`}}></input>
                    </form>
                    <button onClick={this.onSubmit} className="col-5 col-sm-2 col-lg-1 p-0 btn btn-outline-success mx-1 p-1 px-2 mt-2 mt-sm-0">Search</button>
                </div>
                <hr className="my-3 col-8 offset-2" />
            </div>
        )
    }
}

export default SearchBar;