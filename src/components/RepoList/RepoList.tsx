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

interface Repository {
    name: string;
    owner: string;
    size: number;
}

interface ListRepositoriesResponse {
    listRepositories: Repository[];
}

type Props = {
    onSelect: (repo: string) => void;
};

export default function RepoList({ onSelect }: Props) {
    const { loading, error, data } = useQuery<ListRepositoriesResponse>(LIST_REPOS);

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
                    {data!.listRepositories.map((repo) => (
                        <ListItemButton key={repo.name} onClick={() => onSelect(repo.name)}>
                            <ListItemText
                                primary={repo.name}
                                secondary={
                                    <Box component="span" sx={styles.details}>
                                        <Typography component="span" variant="body2" color="text.secondary">
                                            Owner: {repo.owner}
                                        </Typography>
                                        <Typography component="span" variant="body2" color="text.secondary">
                                            Size: {repo.size} bytes
                                        </Typography>
                                    </Box>
                                }
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}