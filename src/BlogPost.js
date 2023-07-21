import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata} from './blogdata.js'
import { useAuth } from "./auth.js";
function BlogPost() {
    const navigate = useNavigate()
    const {slug} = useParams()
    const auth = useAuth()
    const blogpost = blogdata.find(post => post.slug == slug)
    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username
    const returnToBlog = () => {
        navigate('/blog')
    }
    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
            {canDelete && (
                <button>Eliminar blogspot</button>
            )}
        </>
    )
}
export { BlogPost}