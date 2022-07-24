import "./TopBar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>

        </div>
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
        </div>
        <div className="topRight">
            <img 
              className="topImg"
              src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Profile-Pic-For-Girl.jpg" 
              alt="" 
              />
              <i className="topSearchIcon fas fa-search"></i>
              </div>
            
            </div>  
            
           )
}
