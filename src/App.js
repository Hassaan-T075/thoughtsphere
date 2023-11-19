import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Homepage from './screens/home/Homepage';
import Profile from './screens/Profile';
import ChangePassword from './screens/ChangePassword';
import AddBlog from './screens/blogs/AddBlog';
import MyBlogs from './screens/blogs/MyBlogs';
import EditBlogs from './screens/blogs/EditBlogs';
import Notifications from './screens/Notifications';


function App() {
  return (
<Router>
      <div className="App">
        <Routes>
          <Route exact path="/auth/login" element={<Login />}></Route>
          <Route exact path="/auth/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Homepage />}></Route>
          <Route exact path="/profile" element={ <Profile/ >}></Route>
          <Route exact path="/change-password" element={ <ChangePassword/ >}></Route>
          <Route exact path="/blogs/add-blog" element={ <AddBlog/ >}></Route>
          <Route exact path="/blogs/my-blogs" element={ <MyBlogs/ >}></Route>
          <Route exact path="/blogs/edit-blog" element={ <EditBlogs/ >}></Route>
          <Route exact path="/notifications" element={ <Notifications/ >}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
