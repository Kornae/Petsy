import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ImageAvatars from './Buttons';

export default function MediaCover2() {
    return (
        <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
            <Card component="li" sx={{ minWidth: '100%', height: '100%', flexGrow: 1, borderRadius: '27px' }}>
                <CardCover>
                    <img
                        src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        srcSet="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        loading="lazy"
                        alt=""
                    />
                </CardCover>
                <CardContent>
                    <Typography
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#fff"
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >

                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ImageAvatars />
                </div>
            </Card>
        </Box>
    );
}