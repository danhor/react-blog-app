import { useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
// import PRODUCTS from '../thdata.js'
import postsData from "../posts.json";
// import Comments from "./Comments";
import "./SinglePage.css";

const SinglePage = () => {

  const navigate = useNavigate();
  const { productId } = useParams();
  //const { pathname } = useLocation();

  const initialFormValues = {
    comment: " ",
    author:" ",
  };

  

  // get product
  const SinglePage = postsData.find(product => product.id === parseInt(productId))
  
  // use == instead of === if useParams fails to get the id
  // or just check data type or use parseInt(id)

  // console.log(typeof(productId))

  const { title, text, author, date, image, comments, likes, isliked } = SinglePage

  //const [commentts, setCommentts] = useState(comments);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [posts, setPosts] = useState([]);  
  const [like, setLike] = useState(likes)
  
  // useEffect(() => {
  //   // Perform any necessary actions when 'likes' value changes
  //   console.log('Likes updated:', likes);
  // }, [likes]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const newComment = {
  //     //id: Date.now(),
  //     //title: formData.get('title'),
  //     //author: formData.get('author'),
  //     //date: formData.get('date'),
  //     comment: formData.get('comment'),
  //   };
  //   //setComment([...posts, newPost]);
  //   //setFormValues(initialFormValues);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentText = formData.get('comment');
    const author = formData.get('author');
    const date = new Date();

  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

    // Generate a unique ID for the new comment
    const newComment = {
      id: Date.now(),
      text: commentText,
      author,
      date: formattedDate,
      likes: 0,
      isliked: false
    };

    console.log(newComment)
    //console.log(comments)
    
    comments.unshift(newComment)
    setFormValues(initialFormValues);
  };

  const handleLikeClick = () => {
    console.log('adf')
    console.log(likes)
    console.log(like)
    //likes += 1;
    let addLike = likes + 1;
    setLike(addLike)
    
  }


  const handleLike = (postName) => {
    const updatedPosts = comments.map(post => {          
      if (post.text === postName) {        
        return { ...posts, likes: post.likes++ };
      }      
      return posts;
    });

    setPosts(updatedPosts);
  };


 

  return (
    <main>   
                 
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h3>{title}</h3>
            {/* <p className="date">Author: <strong>{author}</strong>   Date Posted: <strong>{date}</strong> </p>                         */}
            <span className="date">Author: <strong>{author}</strong></span> 
            <span className="date">    Date Posted: <strong>{date}</strong></span> 
            <br/>
            <p>{text}</p>              
            <span className="date fa-regular fa fa-thumbs-up" onClick={handleLikeClick}>{likes}</span>                             
            <span className="date fa-regular fa-heart">{   isliked}</span> 
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <p><h4>Leave a comments:</h4></p>

              <input className='leave-comment' type="text" name="author" placeholder='Author' required />

              <textarea 
                className='leave-comment' 
                placeholder='Content' 
                required
                type='text' 
                name="comment"
                onChange={handleInputChange}
              />

              <button className="btn btn-danger btn-sm btn-send" type="submit">Send</button>
            </form>
            <hr/> 
          
            <span>{comments && comments.map((comments, i) => 
                  <div key={i}><strong> Author: </strong>{comments.author}<br/>
                  <strong>Content: </strong>{comments.text} <br/> <h6 className='comment-date'>Comment date: {comments.date}</h6>  
                  <p onClick={() => handleLike(comments.text)} className="date fa-regular fa-thumbs-up">  {comments.likes}</p>
                  </div>)}                                  
            </span>
                    
          
            {/* <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>BACK</button> &nbsp;  */}
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/blog/allposts')}>Back</button> &nbsp;
            {/* <Link to={`/blog/allpost/${productId}/comments`} className="btn btn-primary btn-sm" onClick={() => navigate('/blog/postlist')}>Comments</Link>             */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SinglePage;