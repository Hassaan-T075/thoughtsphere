import { useNavigate } from "react-router-dom";
import usePost from "../models/usePost";

const Bookmarks = () => {

    const bookmarksUrl = 'http://localhost:3000/api/home/blogs/bookmarks';
    const { data: bookmarksData, isPending, error } = usePost(bookmarksUrl);
    const navigate = useNavigate(); 

    const blogsCard = (blog) => {
        return (
            <div className="card bg-light text-dark m-3" style={{ width: '18rem', cursor: 'pointer', transition: 'transform .3s, box-shadow .3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.body}</p>
                    <p className="card-text"><small className="text-muted">Posted on: {new Date(blog.createdAt).toLocaleDateString()}</small></p>
                </div>
            </div>
        );
    };

    return (
        <div className="container-fluid bg-dark min-vh-100">
            <div className="d-flex flex-wrap justify-content-center align-items-start pt-5">
                {isPending && <p>Loading blogs...</p>}
                {error && <p>Error fetching blogs: {error}</p>}
                {bookmarksData && bookmarksData.bookmarks.map(blog => <div onClick={() => navigate("/blogs/view-blog", { state: blog })}>{blogsCard(blog)}</div>)}
            </div>
        </div>
    );
}

export default Bookmarks;