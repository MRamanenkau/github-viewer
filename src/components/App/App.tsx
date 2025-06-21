import { ApolloProvider } from '@apollo/client';
import { client } from '../../apollo.ts';
import { Container, Typography, Box } from '@mui/material';
import RepoList from '../RepoList/RepoList.tsx';
import RepoDetails from '../RepoDetails/RepoDetails.tsx';
import { useState } from 'react';

function App() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <ApolloProvider client={client}>
            <Container maxWidth="md">
                <Box
                    my={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                    >
                        GitHub Repo Viewer
                    </Typography>
                    {selected ? (
                        <RepoDetails repo={selected} onBack={() => setSelected(null)} />
                    ) : (
                        <RepoList onSelect={setSelected} />
                    )}
                </Box>
            </Container>
        </ApolloProvider>
    );
}

export default App;