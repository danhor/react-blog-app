// import './App.css';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import Header from './components/header';
// import Footer from './components/footer';
// import BlogPost from './blogpost';
// import NoContent from './nocontent';

import PostImage from '../components/PostImage/PostImage';
import datas from "../posts.json";
import './ManageBlog.css';



const ManageBlog = ({emitEvent}) => {    

  const navigate = useNavigate();

  const initialFormValues = {
    title: "",
    author: "",
    date: "",
    text: "",
  };



  const [posts, setPosts] = useState(datas);
  const [editing, setEditing] = useState(false);
  const [indexId, setIndexId] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);  
  const [hiddenValue, setHiddenValue] = useState("");
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const date = new Date();

    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };

    const formattedDate = date.toLocaleDateString('en-US', options);
    
    const formData = new FormData(e.target);
    const newPost = {
      id: Date.now(),
      title: formData.get('title'),
      author: formData.get('author'),      
      date: formattedDate,
      text: formData.get('text'),
      image: formData.get('imageUrl'),
      likes: 0,
      isLiked: false,
      comments:[]

    };

    emitEvent(newPost);
    navigate('/blog/allposts')
    
  };

  const handleImageSuccess = (imageUrl) => {
    //console.log(imageUrl);
    setHiddenValue([...hiddenValue, imageUrl]);
  };

  

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPost = {
      title: formData.get('title'),
      author: formData.get('author'),
      date: formData.get('date'),
      text: formData.get('text'),
    };

    setPosts(posts.map((post, index) => index === indexId ? updatedPost : post));    
    setEditing(false);
    setIndexId(null)
    setFormValues(initialFormValues);   
  };

  return (


 <div className="main-container">    


      <div className="pg-header">
        <div className="kcontainer">
          <div className="row align-items-center">            
            <div className="col-lg-7">
              <h2>Create Blog</h2>
            </div>          
          </div>
        </div>
      </div>

    
      <form onSubmit={editing ? handleUpdate : handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text"
                 id="title" 
                 name="title" 
                 required
                 value={formValues.title}
                 onChange={handleInputChange}          
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text"
                 id="author" 
                 name="author" 
                 required 
                 value={formValues.author}
                 onChange={handleInputChange}                     
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea 
                 id="content" 
                 name="text" 
                 required 
                 value={formValues.text}
                 onChange={handleInputChange}                              
                 rows={5}
         />
        </div>

        <div>
            <input type="hidden" name="imageUrl" value={hiddenValue} />
            <PostImage addImageSuccessful={handleImageSuccess} />
            
        </div>      
                       
        <div className="form-group">
          <button type="submit">{editing ? 'Update' : 'Submit'}</button>          
        </div>
      </form>
    </div> 







    // <div className="Blog-App">
  

    // <div className="pg-header">
    //     <div className="container">
    //       <div className="row align-items-center">            
    //         <div className="col-lg-7">
    //           <h2>Create Blog</h2>
    //         </div>          
    //       </div>
    //     </div>
    // </div>


    //     <div className="App-Header"/>   
            
    //         <div className="box-container">
            
    //         <form onSubmit={editing ? handleUpdate : handleSubmit}>
            
    //           <label>
    //             Title:
    //             <br/>
    //             <input 
    //               className='blog-title'
    //               type="text" 
    //               name="title" 
    //               required 
    //               value={formValues.title}
    //               onChange={handleInputChange}
    //               />
    //           </label>
    //           <br />
    //           <label>
    //             Author:
    //             <br/>
    //             <input 
    //               className='create-blog'
    //               type="text" 
    //               name="author" 
    //               required 
    //               value={formValues.author}
    //               onChange={handleInputChange}
    //             />
    //           </label>
    //           <br />              
    //           <label>
    //             Content:
    //             <br/>
    //             <input
    //               className='create-blog'
    //               type="text" 
    //               name="text" 
    //               required 
    //               value={formValues.text}
    //               onChange={handleInputChange}
    //               rows="7" cols="30"
    //             />
    //           </label>
    //           <br />
    //           <input type="hidden" name="imageUrl" value={hiddenValue} />

    //           <PostImage addImageSuccessful={handleImageSuccess} />

    //           <button className="btn-submit" type="submit">{editing ? 'Update' : 'Submit'}</button>
    //         </form>
            
    //         <br />
           
    //         </div> 
    //         <br/>
                                  
    //       </div>
                  
  );
}

export default ManageBlog;
