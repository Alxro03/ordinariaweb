import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Video } from "../types.ts";
import Fav from "../islands/fav.tsx";



type VideoListProps={
    videos: Video[];
    userid: string;
}

const VideoList: FunctionComponent<VideoListProps> = ({videos, userid})=>{
    return(
        <div class="video-list-container">
            {videos.map((video)=>(
            <div className="video-item" key={video.id}>
                <a href={`/video/${video.id}`} class="video-link">
                <img src={video.thumbnail} alt={video.description} class="video-thumbnail"></img>
                <div class="video-info">
                    <h3 class="video-title">{video.tittle}</h3>
                    <p class="video-description">{video.description}</p>
                    <p class="video-release-date">{video.date}</p>
                </div>
                </a>
                <Fav id={video.id} userid={userid} fav={video.fav}></Fav>
            </div>
            ))}
        </div>
    )
}

export default VideoList;