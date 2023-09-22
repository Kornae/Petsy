import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function MediaCover() {
    return (
        <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
            <Card component="li" sx={{ minWidth: '100%', height:'100%', flexGrow: 1, borderRadius: '27px' }}>
                <CardCover>
                    <video
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src="https://cdn.pixabay.com/vimeo/514139134/cat-65438.mp4?width=1280&hash=b0d1900a29d35666b2f76c71732025a2e94543b1"
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
                <CardContent>
                    <Typography
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#ffffff"
                        display="flex"
                        justifyContent="flex-end"
                        padding='5px'
                    >

                        <Chip sx={{ padding:'3px 8px'}}><FiberManualRecordIcon fontSize='small' color='error'/> Live 01:34:27</Chip>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}