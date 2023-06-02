import { Link } from 'react-router-dom';
import { useState } from 'react';
 

const Favorites = ({postsData}) => {       
     const [postsLike, setpostsLike] = useState([postsData]); 
     const [postsdata, setPostsData] = useState(postsData);

const handleLike = (postId) => {     
    const updatedPosts = postsdata.map(post => {          
      if (post.id === postId) {        
        return { ...post, likes: post.likes++ };
      }      
      return post;
    });         
    setpostsLike(updatedPosts);
  };


const updateIsLiked = (postId) => {     
   const updatedPosts = postsdata.map(post => {          
      if (post.id === postId) {               
        return { ...postsdata, isLiked: !post.isLiked };
      }      
      return postsdata;
    });
    setPostsData(updatedPosts);
};    

  return (
    <main>
      
      
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">            
            <div className="col-lg-7">
              <h2>Favorites</h2>
            </div>          
          </div>
        </div>
      </div>


      <div className="container content">
        <div className="row products-row">

          {/* isLiked == false */}
          {/* {postsData.filter((records) => !records.isLiked).map((records, index) => { */}
          
          {/* isLiked == true */}
          {postsdata.filter((records) => records.isLiked).map((records, index) => {   
            
            return (
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
                      <button className='btn btn-info btn-sm' onClick={() => updateIsLiked(records.id)}>{records.isLiked ? 'UnLike' : 'Like'} </button>
                    </div>    

                    <div>
                      <br/>
                      <Link to={`/blog/favorites/${records.id}`} className="btn btn-secondary btn-sm ms-auto">&#8594;</Link>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
          
        </div>
      </div>

    </main>
  )
}

export default Favorites;