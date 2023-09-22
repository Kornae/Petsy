import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function PricingCards() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gap: 2,
            }}
        >
            <Card
                size="lg"
                variant="solid"
                color="neutral"
                invertedColors
                sx={{ bgcolor: 'neutral.900',borderRadius: '27px' }}
            >
                <Chip size="sm" variant="outlined">
                    BONUS OFFER
                </Chip>
                <Typography level="h2">Unlimited</Typography>
                <Divider inset="none" />
                <List
                    size="sm"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        mx: 'calc(-1 * var(--ListItem-paddingX))',
                    }}
                >
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Pet Grooming
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Dog Boarding
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Cat Boarding
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Pet Training Classes
                    </ListItem>
                    
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        24/7 Vet Consultation
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Pet Transport
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                        $60{' '}
                        <Typography fontSize="sm" textColor="text.tertiary">
                            / month
                        </Typography>
                    </Typography>
                    <Button endDecorator={<KeyboardArrowRight />}>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
}