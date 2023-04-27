import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
    state = {Response: "", vidSrc: "", title: "", description: "", display: "none"}
    onVidClick = (viId, title, description) => {
        this.setState({vidSrc: `https://www.youtube.com/embed/${viId}`, title: {title}, description: {description} })
    }

    getInput = (input) => {
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                q: input,
                key: "AIzaSyClr4M4o-c3cHgZByNaIzE4bckQSpaZi7o",
                part: "snippet", //snippet have a data such as thumbnails & MetaData
                maxResults: 5,
            }
        }).then((Response) => {
            this.setState({Response: Response})
        })
        this.setState({display: "block"})
    }



    render(){
        return(
            <div className="container-fluid">
                    <SearchBar getInput = {this.getInput} />
                    <div className="d-flex flex-column flex-lg-row justify-content-center  col-12 mt-4">
                        <div className="col-lg-7 col-12 ">
                            <div className="col-12">
                                <iframe className="rounded" style={{width: "100%", height: "70vh"}} src={this.state.vidSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="my-3">
                                <h1 className="h4"> {this.state.title.title} </h1>
                                <p>{this.state.description.description} </p>
                            </div>
                            <hr className="my-3 col-8 offset-2 d-block d-lg-none" style={{display: `${this.state.display}`}} />
                        </div>
                        <div className=" col-lg-5 col-12  py-2  justify-content-center">
                            <VideoList onVidClick = {this.onVidClick} Response = {this.state.Response} />
                        </div>
                    </div>
                </div>
            )
    }
}

export default App;