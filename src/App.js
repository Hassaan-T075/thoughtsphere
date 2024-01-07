import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Homepage from './home/Homepage';
import Profile from './services/Profile';
import UpdateProfile from './services/UpdateProfile';
import AddBlog from './blogs/AddBlog';
import MyBlogs from './blogs/MyBlogs';
import EditBlogs from './blogs/EditBlogs';
import Notifications from './services/Notifications';
import RecentBlogs from './blogs/RecentBlogs';
import ViewBlog from './blogs/ViewBlog'
import './App.scss'
import Bookmarks from './blogs/Bookmarks';
import Logout from './auth/Logout';

function App() {

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
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/update-profile" element={<UpdateProfile />}></Route>
          <Route exact path="/blogs/edit-blog" element={<EditBlogs />}></Route>
          <Route exact path="/blogs/view-blog" element={<ViewBlog />}></Route>
          <Route exact path="/notifications" element={<Notifications />}></Route>
        </Routes>
        
      </div>
    </switch>
  );
}

export default App;
