import Box from '@mui/material/Box';
import { Paper, Stack, Typography } from '@mui/material';

export default function MainPage() {
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
                        Тут будет таблица
                    </Typography>
                </Stack>
            </Paper>
        </Box>
    );
}
