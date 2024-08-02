import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BasicRating from './Rating';

export default function FolderList() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', padding: '3px', margin: '10px' }}>
            <List sx={{ width: '100%', bgcolor: '#7A9D96;', borderRadius: '18px', color: '#ffffff' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80' />
                    </ListItemAvatar>
                    <ListItemText primary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="#ffffff"
                                fontSize=".9rem"
                                lineHeight="1.5"
                            >
                                "Incredible! Found my fur-ever friend, Luna, here!" <br /> - <em>Alex <BasicRating /></em>
                            </Typography>
                        </React.Fragment>
                    } />


                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80' />
                    </ListItemAvatar>
                    <ListItemText primary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="#ffffff"
                                fontSize=".9rem"
                                lineHeight="1.5"
                            >
                                "I'm head over heels for my new buddy, Leo." <br /> - <em>Jessica <BasicRating /> </em>
                            </Typography>
                        </React.Fragment>
                    } />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyZUVTQ2hwUU8zWXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60' />
                    </ListItemAvatar>
                    <ListItemText primary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="#ffffff"
                                fontSize=".9rem"
                                lineHeight="1.5"
                            >
                                "I'm so happy with my dog, Bailey." <br /> - <em>Michael <BasicRating /> </em>
                            </Typography>
                        </React.Fragment>
                    } />
                </ListItem>
            </List>
        </div>
    );
}