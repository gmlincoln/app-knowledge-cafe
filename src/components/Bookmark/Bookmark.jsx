import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div className="space-y-4 text-lg lg:text-lg bg-[#fff] p-6 font-bold rounded-lg">
            <p>
                {title}
            </p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;

{/* <div className="text-xl lg:text-2xl bg-[rgba(96,71,236,0.10)] p-6 text-center text-[#6047EC] font-bold rounded-lg border-2 border-[#6047EC]">
                <p>Spent time on read : 177 min</p>

            </div>
            <div className="space-y-4 text-xl lg:text-2xl bg-[rgba(96,71,236,0.10)] p-6 font-bold rounded-lg">
                <p>Bookmarked Blogs : 0</p>
                <div className="space-y-4 text-lg lg:text-lg bg-[#fff] p-6 font-bold rounded-lg">
                    <p>JavaScript Objects for Absolute Beginner</p>
                </div>
            </div> */}