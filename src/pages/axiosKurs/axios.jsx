import React from "react";
import axios from "axios";
const postURL = "http://127.0.0.1:8000/web_push/api/";
const baseURL = "http://127.0.0.1:8000/nyheter/api/"


export const Axios = () => {
  const [post, setPost] = React.useState(null);
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(post);
    });
  }, []);
  function createPost() {
    axios.post(postURL, {
      date: new Date()
    })
  }
  return(
  <>
    <form>
        <label>
        Name:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <button onClick={createPost()}>Click me!</button>
    </form>
  </>
)};