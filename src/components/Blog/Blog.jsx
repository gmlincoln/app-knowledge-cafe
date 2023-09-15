import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog }) => {
    const { cover, author, author_img, title, hashtag, posted_date, reading_time } = blog;
    return (
        <div className="mb-16">
            <img className='mb-4' src={cover} alt={`Cover picture of ${title}`} />
            <div className="flex justify-between mb-4">
                {/* User Image, Name and posted date */}
                <div className="flex items-center gap-3">
                    <img className="w-[60px]" src={author_img} alt={author} />
                    <div >
                        <h4 className="text-2xl font-bold text-[#111]">{author}</h4>
                        <p className="text-base">{posted_date}</p>
                    </div>
                </div>
                {/* Reading Time */}
                <div className="flex items-center gap-2">
                    <p className="text-[rgba(17,17,17,0.60)]">
                        {
                            reading_time < 10 ?
                                `0${reading_time} min to read` :
                                `${reading_time} min to read`
                        }
                    </p>
                    {/* Bookmark Button */}
                    <button><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <h4 className="text-lg lg:text-2xl font-bold mb-4">{title}</h4>
            <p className="text-[rgba(17,17,17,0.60)] font-medium mb-4">{hashtag.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)}</p>
            <a href="" className="text-[#6047EC] underline">Mark as read</a>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;