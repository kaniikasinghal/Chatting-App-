import { Typography } from '@mui/material';
import React from 'react';
import { memo } from 'react';
import { Stack, Box } from '@mui/material';
import { Link } from '../styles/StyledComponents';

const ChatItem = ({
    avatar=[],
    name="",
    _id,    
    groupChat=false, 
    sameSender,
    isOnline,
    newMessageAlert, 
    index = 0,
    handleDeleteChatOpen 
}) => {
  return (
    <Link 
    sx={{  
        padding:"0"
    }}
    to = {`/chat/${_id}`}
    onContextMenu={(e)=> handleDeleteChatOpen( e, _id, groupChat)}
    >
        <div
        style = {{
            display :"flex",
            gap: "1rem",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "unset",
            position: "relative"
        }}
            >

                {/* Avatar Card */}
                 <Stack>
                    <Typography>
                        {name}
                    </Typography>
                    {newMessageAlert && (
                        <Typography>{newMessageAlert.count} New Message</Typography>
                    )}

                    {isOnline && (
                        <Box sx={{
                            width:"10px",
                            height: "10px",
                            borderRadius:"50%",
                            backgroundColor:"green",
                            position:"absolute",
                            top:"50%",
                            right:"1rem",
                            transform:"translateY(-50%)"
                        }}
                        />
                    )}
                </Stack>
        </div>
     k</Link>
  )
}

export default memo(ChatItem);   

