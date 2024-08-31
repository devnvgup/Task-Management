import { useContext, useEffect, useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import DoneIcon from '@mui/icons-material/Done';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../context/AuthProvider';
import { User, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';




function SideBar() {
    const authContext = useContext(AuthContext)
    let user: User | null
    let img: string = 'default.jpg';
    let displayName: string = 'defaultName'
    const navigate = useNavigate()
    if (authContext) {
        user = authContext.user
        if (user && user.photoURL) {
            img = user.photoURL
        }
        if (user && user.displayName) {
            displayName = user.displayName
        }
    }
    const allTaskRef = useRef<HTMLLIElement>(null)
    const importantRef = useRef<HTMLLIElement>(null)
    const completedRef = useRef<HTMLLIElement>(null)
    const doItNowRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (allTaskRef.current) {
            allTaskRef.current.classList.add('choosen');
        }
    }, [])

    const removeExistClassList = () => {
        const exsitChoosen = document.querySelectorAll(".li__option")
        exsitChoosen.forEach((item) => {
            item.classList.remove('choosen')
        })
    }

    const handleClickAllTasks = () => {
        removeExistClassList()
        if (allTaskRef.current) {
            allTaskRef.current.classList.add('choosen');
        }
        navigate("/allTask")
    }

    const handleClickImportant = () => {
        removeExistClassList()
        if (importantRef.current) {
            importantRef.current.classList.add('choosen');
        }
        navigate("/importantTask")
    }
    const handleClickCompleted = () => {
        removeExistClassList()
        if (completedRef.current) {
            completedRef.current.classList.add('choosen');
        }
        navigate("/completedTask")
    }
    const handleClickDoItNow = () => {
        removeExistClassList()
        if (doItNowRef.current) {
            doItNowRef.current.classList.add('choosen');
        }
        navigate("/doItNowTask")
    }

    const handleSignOut = () => {
        const auth = getAuth();
        auth.signOut()
    }
    return (
        <div className='sidebar__container'>
            <div className='sidebar__header'>
                <Avatar alt="Remy Sharp" src={img} />
                <span style={{ marginLeft: "10px" }}>{displayName}</span>
            </div>
            <div className='sidebar__option'>
                <ul className='option'>
                    <li className='li__option' onClick={handleClickAllTasks} ref={allTaskRef}>
                        <HomeIcon className='icon' />
                        <span>All Tasks</span>
                    </li>
                    <li className='li__option' onClick={handleClickImportant} ref={importantRef}>
                        <PlaylistAddCheckIcon className='icon' />
                        <span> Important!</span>
                    </li>
                    <li className='li__option' onClick={handleClickCompleted} ref={completedRef}>
                        <DoneIcon className='icon' />
                        <span>Completed</span>
                    </li>
                    <li className='li__option' onClick={handleClickDoItNow} ref={doItNowRef}>
                        <EventAvailableIcon className='icon' />
                        <span>Do It Now</span>
                    </li>
                </ul>
            </div>
            <div className='sidebar__signout'>
                <LogoutIcon />
                <span onClick={handleSignOut}> Sign Out</span>
            </div>
        </div>
    )
}

export default SideBar
