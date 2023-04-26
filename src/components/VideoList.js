import React from "react";
import "./VideoList.css"

const VideoList = (props) => {



    if (props.Response.data){
        const imgs = props.Response.data.items
        const img = imgs.map((item) => {
            const onClick = (e) => {
                props.onVidClick(item.id.videoId)
            }
        return( 
            <div key={item.id.videoId}>
                <div className="row list-cards col-12 m-0"   >
                    <div className="col-7">
                    <img className="rounded nail-imgs col-10 offset-1 mt-3" onClick={onClick} src={item.snippet.thumbnails.high.url}/>
                    </div>
                    <div className="container col-5 d-flex align-items-center">
                        <h1 className="nail-h h6 text-center">{item.snippet.title}</h1>
                    </div>
                </div>
                <hr className="mt-4 col-8 offset-2" />
            </div>
            )
    })

    return (
        <div> {img} </div>
    )
}
}

export default VideoList;