import React, {useState} from 'react';
import {Box, AppBar, Toolbar, Typography, IconButton, Tooltip, Backdrop} from '@mui/material';
import { orange } from '../../constants/color';
import {Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationIcon} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
// import SearchDialog from '../specific/Search';

const SearchDialog = lazy(() => import('../specific/Search'));
const NotificationDialog = lazy(() => import('../specific/Notification'));
const NewGroupDialog = lazy(() => import('../specific/NewGroupDialog'));

const Header = () => {

    const [isMobile, setIsMobile ] = useState(false);
    const [isSearch, setIsSearch ] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const navigate = useNavigate();
    const handleMobile = () => {
        console.log ("Jai Shree Radhe-Krishna");
        setIsMobile((prev)=>!prev);
    } 

    const OpenSearch = () => {
        console.log ("Jai Shree SiyaRam");
        setIsSearch((prev)=>!prev);
    }

    const OpenNewGroup = () => {
        console.log("Jai Jai Shree SiyaRam");
        setIsNewGroup((prev)=>!prev);
    }

    const navigateToGroup = () => navigate("/group");

    const logoutHandler = () => {
        console.log("Har Har Mahadev")
    }

    const openNoification = () => {
        setIsNotification((prev)=>!prev);
    }


    
  return (
    <>
    <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position="static" sx={{
            bgcolor:orange
        }}
        >
            <Toolbar>
                <Typography
                variant="h6"
                sx={{
                    display: {xs: "none", sm: "block"},
                }}>
                    Jai Mata di
                </Typography>
                <Box sx={{
                    display: {xs: "block", sm: "none"},
                }}>
                    <IconButton color="inherit" onClick={handleMobile}>
                        <MenuIcon/>
                    </IconButton>
                </Box> 
                <Box sx={{
                    flexGrow: 1
                }}>
                </Box>
                <Box>

                    <IconBtn
                    title={"Search"}
                    icon={<SearchIcon/>}
                    onClick={OpenSearch}
                    />

                    <IconBtn
                    title={"New Group"}
                    icon={<AddIcon/>}
                    onClick={OpenNewGroup}
                    />

                    <IconBtn
                    title={"Manage Groups"}
                    icon={<GroupIcon/>}
                    onClick={navigateToGroup}
                    />

                    <IconBtn
                    title={"Notifications"}
                    icon={<NotificationIcon/>}
                    onClick={openNoification}
                    />

                    <IconBtn
                    title={"Logout"}
                    icon={<LogoutIcon/>}
                    onClick={logoutHandler}
                    />

                </Box>  
            </Toolbar>
        </AppBar>
    </Box>

    {isSearch && (
        <Suspense fallback={<div><Backdrop open /></div>}>
            <SearchDialog/>
            </Suspense>
        )}

    {isNotification && (
            <Suspense fallback={<div><Backdrop open /></div>}>
                <NotificationDialog/>
            </Suspense>
        )}

    {isNewGroup && (
        <Suspense fallback={<div><Backdrop open /></div>}>
            <NewGroupDialog/>
        </Suspense>
    )
    }

    </>
  )
};

const IconBtn = ({title, icon, onClick}) => {
    return (
        <Tooltip title = {title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
};

export default Header;