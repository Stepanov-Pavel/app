import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper, Stack, Typography } from '@mui/material';

export default function InfoPage() {
    return (
        <Box sx={{ m: 1 }}>
            <Paper elevation={6}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ margin: '5px' }}
                >
                    <Typography variant="h6">
                        Estimator (Сметчик) v.1-ALPHA
                    </Typography>
                    <Typography variant="h6">
                        Все права защищены никем!
                    </Typography>
                </Stack>
            </Paper>
        </Box>
    );
}
