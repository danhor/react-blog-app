import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>          
        <div className="copyrights">
          &copy; 2023 <Link to="/"> DataMart Web Development</Link> - All Rights Reserved.
        </div>      
    </footer>
  )
}

export default Footer