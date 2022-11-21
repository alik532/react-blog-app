import './App.css';
import { useState } from 'react';
import AuthorsList from './components/AuthorsList/AuthorsList';
import AuthorPage from './components/AuthorPage/AuthorPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import PostList from './components/PostList/PostList';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [authors, setAuthors] = useState([
    {id: 1, img: "https://joeschmoe.io/api/v1/Delpha%20Crist", name: "Delpha", surname: "Crist", blogs: [
      {id: 1, title: "My Blog 1", content: "", likes: 5, date: "2015-9-5"},
      {id: 2, title: "My Blog 2", content: "", likes: 8, date: "2018-11-10"},
      {id: 3, title: "My Blog 3", content: "", likes: 1, date: "2015-8-22"},
      {id: 4, title: "My Blog 4", content: "", likes: 3, date: "2000-4-21"},
    ], phone: "57867878"},
    {id: 2, img: "https://joeschmoe.io/api/v1/Amya%20Satterfield", name: "Braun", surname: "Crist", blogs: [
      {id: 5, title: "My Blog 1", content: "", likes: 8, date: "2005-11-20"},
      {id: 6, title: "My Blog 2", content: "", likes: 4, date: "2000-12-19"},
    ], phone: "7568"},
    {id: 3, img: "https://joeschmoe.io/api/v1/Santina%20Leannon", name: "Amya", surname: "Lennie", blogs: [
      {id: 7, title: "My Blog 1", content: "", likes: 2, date: "2014-10-20"},
      {id: 8, title: "My Blog 2", content: "", likes: 9, date: "2021-7-22"},
    ], phone: "325"},
    {id: 4, img: "https://joeschmoe.io/api/v1/Maximillia%20Hammes", name: "Santina ", surname: "Leannon", blogs: [
      {id: 9, title: "My Blog 1", content: "", likes: 14, date: "2002-4-8"},
      {id: 10, title: "My Blog 2", content: "", likes: 2, date: "2021-7-21"},
      {id: 11, title: "My Blog 3", content: "", likes: 0, date: "2001-9-21"},
      {id: 12, title: "My Blog 4", content: "", likes: 9, date: "2010-11-22"},
      {id: 13, title: "My Blog 5", content: "", likes: 11, date: "2020-3-20"},
    ], phone: "564878"},
    {id: 5, img: "https://joeschmoe.io/api/v1/Bianka%20Ward", name: "Maximillia ", surname: "Hammes", blogs: [
      {id: 14, title: "My Blog 1", content: "", likes: 6, date: "2000-3-20"},
      {id: 15, title: "My Blog 2", content: "", likes: 19, date: "2011-5-20"},
      {id: 16, title: "My Blog 3", content: "", likes: 2, date: "2022-8-22"},
    ], phone: "25578"},
    {id: 6, img: "https://joeschmoe.io/api/v1/Jacklyn%20Olson", name: "Bianka ", surname: "Ward", blogs: [
      {id: 17, title: "My Blog 1", content: "", likes: 0, date: "2008-10-19"},
    ], phone: "354345"},
  ])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<AuthorsList authors={authors}/>}/>
            {authors.map(author =>
              <Route path={`/page${author.id}`} element={<AuthorPage author={author}/>}/>
            )}
            {authors.map(author =>
              author.blogs.map(blog =>
                <Route path={`/blog${blog.id}`} element={<Blog blog={blog}/>}/>
              )
            )}
            <Route path='/posts' element={<PostList authors={authors}/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
