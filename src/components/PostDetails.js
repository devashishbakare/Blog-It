import {useParams} from "react-router-dom";
import {db} from "../firebase";
import {useState, useEffect} from "react";
import { doc, getDoc } from "firebase/firestore";


function PostDetails() {

  const [post, setPost] = useState({});
  
  const {postId} = useParams();
  console.log("Postid from params", postId);

  useEffect(() => {
      
    const fetchPost = async () => {
      const docRef = doc(db, "posts", postId.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [postId]);

  return(
    <>
     <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
    </>
  );
}

export default PostDetails;
