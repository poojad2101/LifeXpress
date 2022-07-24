import "./SideBar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://www.cadburygifting.in/media/magefan_blog/Blog_5_-_6_Best_Women_s_Day_gift_ideas_for_your_colleagues.jpg" alt=""
            />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Travel</li>
            <li className="sidebarListItem">Food and Fitness</li>
            <li className="sidebarListItem">Music</li>

            </ul>
            </div>
            <div className="sidebarItem">

            </div>
            <span className="sidebarTitle">FOLLOW US </span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebar fab fa-instagram-square"></i>
            <i className="sidebar fab fa-pinterest-square"></i>
            <i className="sidebar fab fa-twitter-square"></i>
            </div>
            </div>

       )
     }
