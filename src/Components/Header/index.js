import './header.css';

import { BiHomeHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
      <div className="header-container" style={{backgroundColor: props.bgColor}}>
        <div className="header-content">

          <div className="app-name">
            <p>{props.title}</p>
          </div>

          <Link to='/'>
            <BiHomeHeart 
              className='link-home'
              size={28}
            />
          </Link>
                    
        </div>
      </div>
    </>
  )
}