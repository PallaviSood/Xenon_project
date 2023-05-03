import {} from "react";
import "./Body.css";
import { BsFillImageFill, BsFillSendCheckFill } from "react-icons/bs";

function Body() {
  return (
    <div className="body">
      <div className="blog_post">
        <div className="imageUser">
          <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" />
        </div>
        <div className="blog_input">
          <input type="text" placeholder="post your blog...." />
        </div>
        <div>
          <BsFillImageFill className="icon__upload" />
        </div>
        <div>
          <BsFillSendCheckFill className="icon_post" />
        </div>
      </div>
      <div className="border"></div>
      <div>
        {/* <div>
          <div className="imageUser">
            <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" />
          </div>
          <div>
            <p>Pallavi sood</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Body;
