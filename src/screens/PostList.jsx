import { Link, useNavigate } from 'react-router-dom'
import "./PostList.css";
import { useState } from 'react';


const PostList = ({postsData}) => {
     const navigate = useNavigate();
     const [postsLike, setpostsLike] = useState([]);  
     const [showFavorites, setShowFavorites] = useState(false);
     const [allBlogPosts, setAllBlogPosts] = useState(postsData)

const toggleLike = (id) => {
    const updatedPosts = allBlogPosts.map((post) => {
      if (post.id === id) {
        return { ...post, isLiked: !post.isLiked };
      }
      return post;
    });
    setAllBlogPosts(updatedPosts);
  };


const handleLike = (postId) => {
    const updatedPosts = allBlogPosts.map(post => {          
      if (post.id === postId) {        
        return { ...postsLike, likes: post.likes++ };
      }      
      return postsLike;
    });

    setpostsLike(updatedPosts);
  };

  return (
    <main>

          <div>
            <button className='btn-blog' onClick={() => setShowFavorites(false)}>All Posts</button>
            <button className='btn-blog' onClick={() => setShowFavorites(true)}>Favorites</button>                        
            <button className="btn-blog" onClick={() => navigate('/blog/create')}>Create blog</button>     
          </div>

      
        <div className="pg-header">
          <div className="container">
            <div className="row align-items-center">            
              <div className="col-lg-7">
                <h2>All posts</h2>
              </div>          
            </div>
          </div>
        </div>
      

      <div className="container content">
        <div className="row products-row">
                         
           {allBlogPosts
                .filter((records) => !showFavorites || records.isLiked)
                .map((records) => (


              <div className="col-lg-4" key={records.id}>                                     
                <div className="card">

                  <div className="img-wrap">
                    <img src={records.image} alt="" />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{records.title}</h5>
                    <p className="card-text">{records.text}</p>
                    <div className="d-flex justify-content-between align-items-center">                     
                      <span className="date">{records.date}</span>                             
                      <span className="date">{records.author}</span>                             
                      <span onClick={() => handleLike(records.id)} className="date fa-regular fa fa-thumbs-up"> {records.likes}</span>                                                   
                      <span onClick={() => toggleLike(records.id)} className="date fa-regular fa-heart"> {records.isLiked}</span> 
                      
                      <button className='btn btn-info btn-sm' onClick={() => toggleLike(records.id)} >
                                {records.isLiked ? 'Unlike' : 'Like'}
                      </button>                      

                    </div>                    
                    <div>
                      <br/>
                      <Link to={`/blog/allposts/${records.id}`} className="btn btn-secondary btn-sm ms-auto">&#8594;</Link>                      
                    </div>
                  </div>
                </div>
              </div>            
            ))}    
        </div>
      </div>

    </main>
  )
}
export default PostList;