import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="lg:w-[32%] space-y-8 px-2 lg:px-0">
            <div className="text-lg lg:text-xl bg-[rgba(96,71,236,0.10)] p-6 text-center text-[#6047EC] font-bold rounded-lg border-2 border-[#6047EC]">
                <p>Spent time on read : {readingTime} min</p>
            </div>
            <div className="space-y-4 text-lg lg:text-xl bg-[rgba(96,71,236,0.10)] p-6 font-bold rounded-lg">
                <p>Bookmarked Blogs : {bookmarks.length}</p>

                {
                    bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;