import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    return (
        <div>
            {
                console.log(blog.length)
            }
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;