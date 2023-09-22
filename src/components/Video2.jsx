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
                    <video
                        autoPlay
                        loop
                        muted
                    // poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                        <source
                            src="./dog6.mp4"
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
                <CardContent>
                    <Typography
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#fff"
                        // mt={{ xs: 12, sm: 18 }}
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