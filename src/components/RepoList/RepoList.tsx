import { useQuery } from '@apollo/client';
import { LIST_REPOS } from '../../graphql/queries.ts';
import {
    List,
    ListItemButton,
    ListItemText,
    CircularProgress,
    Alert,
    Box,
    Paper,
    Typography,
} from '@mui/material';
import styles from './repoListStyles';

type Props = {
    onSelect: (repo: string) => void;
};

export default function RepoList({ onSelect }: Props) {
    const { loading, error, data } = useQuery(LIST_REPOS);

    if (loading) {
        return (
            <Box sx={styles.loadingBox}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={styles.errorBox}>
                <Alert severity="error">{error.message}</Alert>
            </Box>
        );
    }

    return (
        <Box sx={styles.container}>
            <Paper elevation={4} sx={styles.paper}>
                <Typography variant="h6" gutterBottom align="center">
                    Repositories
                </Typography>
                <List>
                    {data.listRepositories.map((repo: any) => (
                        <ListItemButton key={repo.name} onClick={() => onSelect(repo.name)}>
                            <ListItemText
                                primary={repo.name}
                                secondary={`Owner: ${repo.owner}, Size: ${repo.size}`}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}
