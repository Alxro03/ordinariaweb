import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Video } from "../types.ts";
import Fav from "../islands/fav.tsx";



type VideoDetailProps={
    video: Video;
    userid: string;
}

const Header: FunctionComponent<VideoDetailProps> = ({video, userid})=>{
    return(
        <div class="video-detail-container">
            <a href="/videos" class="back-button">← Go Back to List</a>
            <div class="video-frame">
                <iframe width="100%" height="400px" src={`https://www.youtube.com/embed/${video.youtubeid}`} title={video.tittle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <h2 class="video-detail-title">{video.tittle}</h2>
            <p class="video-detail-description">{video.description}</p>
            <Fav id={video.id} userid={userid} fav={video.fav}></Fav>
        </div>
    )
}

export default Header;