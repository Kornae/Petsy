import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicNoneIcon from '@mui/icons-material/MicNone';
import MonitorIcon from '@mui/icons-material/Monitor';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ImageAvatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ backgroundColor: '#ffffff', color:'#3b3b3b'}}><VideocamIcon fontSize='small'/></Avatar>
            <Avatar sx={{backgroundColor:'#ffffff', color:'#3b3b3b'}}><MicNoneIcon fontSize='small'/></Avatar>
            <Avatar sx={{ backgroundColor: '#ffffff', color: '#3b3b3b' }}><MonitorIcon fontSize='small'/></Avatar>
            <Avatar sx={{backgroundColor:'#ffffff', color:'red'}}><RadioButtonCheckedIcon fontSize='small'/></Avatar>
            <Avatar sx={{backgroundColor:'#ffffff', color:'#3b3b3b'}}><SettingsIcon fontSize='small'/></Avatar>

        </Stack>
    );
}