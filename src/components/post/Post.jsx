import "./Post.css";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg"
                src="https://media.istockphoto.com/photos/vegetable-salad-picture-id603906484?b=1&k=20&m=603906484&s=170667a&w=0&h=occFGDXX0fGM3jkfhNBSn49c1Jj-6A2VrGLbCsbvl48=" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Food</span>
                    <span className="postCat">Fitness</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">2 hours ago</span>
            </div>
        </div>

    )
}
