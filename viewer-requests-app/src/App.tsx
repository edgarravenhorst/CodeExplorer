import { Add } from '@mui/icons-material';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { CreateRequestButton } from './components/create-request-button';
import { RequestOverview } from './components/request-overview';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h2"> What ya like to know more about?</Typography>
      <CreateRequestButton startIcon={<Add />}>Create Request</CreateRequestButton>
      <RequestOverview />
    </ThemeProvider>
  );
}

export default App;
