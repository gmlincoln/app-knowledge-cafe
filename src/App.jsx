import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleAddToMarkRead = (id, readTime) => {
    setReadingTime(readingTime + readTime);
    // Remove Bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <main className="md:flex mt-8 gap-[3%]">
          <Blogs handleAddToBookmark={handleAddToBookmark}
            handleAddToMarkRead={handleAddToMarkRead}
          ></Blogs>

          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </main>
      </div >
    </>
  )
}

export default App
