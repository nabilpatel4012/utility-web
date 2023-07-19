import * as React from 'react';
import { Stack, Button } from '@mui/material';

export default function BasicButtons(){
    return(
        <Stack spacing={2} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Stack>

    );
};