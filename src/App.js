import './App.css';
// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Homepage from './home/Homepage';
import Profile from './services/Profile';
import ChangePassword from './services/ChangePassword';
import AddBlog from './blogs/AddBlog';
import MyBlogs from './blogs/MyBlogs';
import EditBlogs from './blogs/EditBlogs';
import Notifications from './services/Notifications';
import RecentBlogs from './blogs/RecentBlogs';
import ViewBlog from './blogs/ViewBlog'
import './App.scss'
import { useSelector } from 'react-redux';


function App() {

  // const username = useSelector((state) => state.active.username);

  return (
    <switch>
      <div className="App">
        <Routes>
          <Route exact path="/auth/login" element={<Login />}></Route>
          <Route exact path="/auth/signup" element={<Signup />}></Route>
          <Route path="/" element={<Homepage />}>
            <Route index element={<RecentBlogs />} />
            <Route path='/myblogs' element={<MyBlogs />} />
            <Route path='/addnew' element={<AddBlog />} />
            <Route path='/notif' element={<Notifications />} />
            <Route path='/auth/login' element={<Login />} />
          </Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/change-password" element={<ChangePassword />}></Route>
          {/* <Route exact path="/blogs/add-blog" element={<AddBlog />}></Route> */}
          {/* <Route exact path="/blogs/my-blogs" element={<MyBlogs />}></Route> */}
          <Route exact path="/blogs/edit-blog" element={<EditBlogs />}></Route>
          <Route exact path="/blogs/view-blog" element={<ViewBlog />}></Route>
          {/* <Route exact path="/blogs/recent-blogs" element={<RecentBlogs />}></Route> */}
          <Route exact path="/notifications" element={<Notifications />}></Route>
        </Routes>
      </div>
    </switch>
  );
}

export default App;
