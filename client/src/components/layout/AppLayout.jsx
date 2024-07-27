import React from 'react';
import Title  from '../shared/Title';
import Header from './Header';
import {Grid} from '@mui/material';
import ChatList from '../specific/ChatList';
import {sampleChats} from '../../constants/SampleData';
import { useParams } from 'react-router-dom';

const AppLayout = () => WrappedComponent => {
  return (props) => {

    const params = useParams();
    const chatId = params.chatId;

    return (
        <>
        <Title/> 
            <div><Header/></div>
            <Grid container height={"calc(100vh - 4rem)"}>
                <Grid item sm={4} md ={3} sx={{
                    display:{ xs:"none", sm:"block"},
                }} 
                height={"100%"}j
                >
                    <ChatList chats = {sampleChats} chatId={chatId}
                    newMessagesAlert={[{
                        chatId,
                        count: 4
                    },
                ]}
                    onlineUsers={["1","2"]}
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                    <WrappedComponent {...props}/>
                </Grid>
                <Grid item md={4} lg={3} sx={{
                    display:{ xs:"none", sm:"block"},
                    padding:"2rem",
                    bgcolor:"rgb( 0,0,0,0.85)"

                }}
                height={"100%"} 
                >
                    <ChatList chat = {sampleChats}/>
                </Grid>

            </Grid>
            <WrappedComponent {...props}/>
        </>
    )
  }
}

export default AppLayout