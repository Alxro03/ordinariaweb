
import { useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";



type Props ={
    id: string;
    fav: boolean;
    userid: string;
};

const Fav: FunctionComponent<Props>=({userid, id, fav})=>{
const [favourite, setFavourite]=useState<boolean>(fav);

const toogleFav = async(userid: string, id: string)=>{
    const response = await fetch(`https://videoapp-api.deno.dev/fav/${userid}/${id}`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
    }
    );
    if(response.status === 200){
        setFavourite(!favourite);
        console.log("Fav toggled")
    } else{
        console.error("error toggling fav")
    }
}
return(
    <button className="fav-button" onClick={()=>toogleFav(userid,id)}>{favourite?"❤️ Remove from Favourites" : "🤍 Add to favourites"}</button>
)
}

export default Fav;