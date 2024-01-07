import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './sidebar.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '',
        section: ''
    },
    {
        display: 'My Blogs',
        icon: <i className='bx bx-star'></i>,
        to: 'myblogs',
        section: 'myblogs'
    },
    {
        display: 'Add Blog',
        icon: <i className='bx bx-calendar'></i>,
        to: 'addnew',
        section: 'addnew'
    },
    {
        display: 'Notifications',
        icon: <i className='bx bx-bell'></i>,
        to: 'notif',
        section: 'notif'
    },
    {
        display: 'Bookmarks',
        icon: <i className='bx bx-bookmarks'></i>,
        to: 'bookmarks',
        section: 'bookmarks'
    },
    {
        display: 'Log out',
        icon: <i className='bx bx-log-out'></i>,
        to: 'logout',
        section: 'logout'
    },
]

const Sidebar = () => {
    const storedData = localStorage.getItem('userdata')
    const userdata = storedData ? JSON.parse(storedData) : {};
    const token = userdata.token
    const navigate = useNavigate();

    if (!token) {
        navigate('/auth/login')
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Thoughtsphere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='sidebar'>
            <div className="sidebar__logo">
                ThoughtSphere
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {
                    sidebarNavItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }


            </div>
        </div>

    </>;
};

export default Sidebar;