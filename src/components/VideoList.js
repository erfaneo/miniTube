import React from "react";
import "./VideoList.css"

const VideoList = (props) => {
    if (props.Response.data){
        const imgs = props.Response.data.items
        const firstVid = () => {
            props.onVidClick(imgs[0].id.videoId, imgs[0].snippet.title, imgs[0].snippet.description)
        }
        const img = imgs.map((item) => {
            const onClick = (e) => {
                props.onVidClick(item.id.videoId, item.snippet.title, item.snippet.description)
            }
            
        return( 
            <div className="vidLst-cntr col-12 col-sm-6 col-lg-12" key={"KEY-" + item.id.videoId}>
                <div className="row list-cards d-flex flex-column my-2 my-lg-0 flex-lg-row justify-content-center align-items-center m-0"  >
                    <div className="col-12 col-lg-6">
                    <img className="rounded nail-imgs col-10 offset-1 mt-1" onClick={onClick} src={item.snippet.thumbnails.high.url}/>
                    </div>
                    <div className="container p-0 col-10 col-lg-6 text-left justify-content-center d-flex align-items-center">
                        <h1 onClick={onClick} className="nail-h text-left py-3 px-4">{item.snippet.title}</h1>
                    </div>
                </div>
                <hr className="my-3 col-8 offset-2 d-lg-block d-none" />
            </div>
            )
    })

    return (
        <div className="col-12 d-flex flex-row flex-wrap flex-lg-column" onLoad={firstVid}> {img} </div>
    )
}
}

export default VideoList;