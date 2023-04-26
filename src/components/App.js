import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
    state = {Response: "", vidSrc: ""}
    onVidClick = (e) => {
        this.setState({vidSrc: `https://www.youtube.com/watch?v=${e}`})
    }

    getInput = input => {
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                q: input,
                key: "AIzaSyA1uyKDJ5EUVQxWs1fZRrs-0tRAKbBBw_E",
                part: "snippet", //snippet have a data such as thumbnails & MetaData
                maxResults: 5,
            }
        }).then((Response) => {
            this.setState({Response: Response})
        })
    }



    render(){
        return(
                <div className="container-fluid">
                    <SearchBar getInput = {this.getInput} />
                    <div className="d-flex flex-row justify-content-center  col-12 mt-4">
                        <div className="col-7">
                            <div>
                                <embed src={this.state.vidSrc} width={680} height={480}/>
                                </div>
                            <div></div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <VideoList onVidClick = {this.onVidClick} Response = {this.state.Response} />
                        </div>
                    </div>
                </div>
            )
    }
}

export default App;