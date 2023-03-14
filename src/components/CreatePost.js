import {useState} from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { useFormInput } from "../hooks";
import {db} from "../firebase";


function  CreatePost() {
  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

    async function handleSubmit(event){
    event.preventDefault();

    const newPost = {
      title : title.value,
      subTitle : subTitle.value,
      content : content.value,
      createdAt : new Date()
    };
    
    const newCityRef = doc(collection(db, "posts"));
    await setDoc(newCityRef, newPost);



    console.log("title", title);
    console.log("subTitle", subTitle);
    console.log("content", content);
  }

    return(
      <>
          <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Title</label>
                <input {...title} />
              </div>

              <div className="form-field">
                <label>Sub Title</label>
                <input {...subTitle} />
              </div>

              <div className="form-field">
                <label>Content</label>
                <textarea {...content}></textarea>
              </div>

              <button className="create-post-btn">Create Post</button>
            </form>
          </div>
      </>

    ); 
  }
  
  export default CreatePost;
  