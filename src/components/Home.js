import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {db} from "../firebase";
import { collection, getDocs } from "firebase/firestore";
function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

      const fetchPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const allPost = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
    
        console.log('posts', allPost);
        setPosts(allPost);
      };
  
    fetchPosts();

  }, []);

  return (
  <>
    <div className="home">
      <h1>Tech Blog</h1>
    
      {posts.map((postInfo, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/postDetails/${postInfo.id}`}>
            <h3>{postInfo.title}</h3>
          </Link>

          <p>{postInfo.subTitle}</p>
        </div>
      ))}
    </div>


  </>
  );
}

export default Home;
