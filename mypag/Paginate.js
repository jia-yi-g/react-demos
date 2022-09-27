import React from "react"
import Follower from "./Follower"
import { useFetch } from "./useFetch"

const Paginate = ({page,data}) => {
    
    const start=Math.floor((page-1)*10)
    const newData=data.slice(start,start+10)
    return newData.map((item)=>{
        const {login:name,html_url:url,avatar_url:image}=item

        return <Follower name={name} url={url} image={image}/>
    })

}

export default Paginate
