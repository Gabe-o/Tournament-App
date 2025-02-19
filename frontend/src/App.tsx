import * as React from 'react';
import {
  Container,
  Typography,
  Stack,
  Box
} from '@mui/material';
import UploadCSVButton from './components/UploadCSVButton';
import TournamentBracket from './components/TournamentBracket';

const teamList = Array.from({ length: 100 }, (_, index) => `Team ${index + 1}`);

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Stack spacing={2} my={4}>
        <Typography variant="h4">
          Material UI Vite.js example in TypeScript
        </Typography>
        <UploadCSVButton />
      </Stack>
      <Box sx={{ 
        flex: 1,
        minHeight: 0,
        mb: 4
      }}>
        <TournamentBracket teams={teamList} />
      </Box>
    </Container>
  );
}