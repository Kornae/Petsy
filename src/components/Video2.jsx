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
                    >
                        <source
                            src="https://cdn.pixabay.com/vimeo/691216261/dog-111268.mp4?width=640&hash=296abf8a3bf637c01f1ce18b4652bd15aade2dbd"
                            type="video/mp4"
                        />
                    </video>
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