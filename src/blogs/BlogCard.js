const blogsCard = (blog) => {
    return (
      <div className="card bg-light text-dark m-3" style={{ width: '18rem', cursor: 'pointer', transition: 'transform .3s, box-shadow .3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.body}</p>
          <p className="card-text"><small className="text-muted">Posted on: {blog.createdAt}</small></p>
        </div>
      </div>
    );
  };

export default blogsCard