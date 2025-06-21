import { useQuery } from '@apollo/client';
import { REPO_DETAILS } from '../../graphql/queries.ts';
import {
    Card,
    CardContent,
    Typography,
    Button,
    CircularProgress,
    Alert,
    Box,
    List,
    ListItem,
} from '@mui/material';
import styles from './repoDetailsStyles';

type Props = {
    repo: string;
    onBack: () => void;
};

export default function RepoDetails({ repo, onBack }: Props) {
    const { loading, error, data } = useQuery(REPO_DETAILS, {
        variables: { repo },
    });

    if (loading) {
        return (
            <Box sx={styles.centeredBox}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={styles.centeredBox}>
                <Alert severity="error">{error.message}</Alert>
            </Box>
        );
    }

    const details = data.repositoryDetails;

    return (
        <Box sx={styles.container}>
            <Card sx={styles.card}>
                <CardContent>
                    <Button onClick={onBack} sx={styles.backButton}>← Back to list</Button>
                    <Typography variant="h5" sx={styles.title}>{details.name}</Typography>
                    <Typography>Owner: {details.owner}</Typography>
                    <Typography>Size: {details.size}</Typography>
                    <Typography>Private: {details.isPrivate ? 'Yes' : 'No'}</Typography>
                    <Typography>Files Count: {details.numberOfFiles}</Typography>
                    <Box mt={2}>
                        <Typography variant="subtitle1">Webhooks:</Typography>
                        {details.webhooks.length ? (
                            <List>
                                {details.webhooks.map((url: string, idx: number) => (
                                    <ListItem key={idx}>{url}</ListItem>
                                ))}
                            </List>
                        ) : (
                            <Typography>No active webhooks.</Typography>
                        )}
                    </Box>
                    <Box mt={2}>
                        <Typography variant="subtitle1">YML File Content:</Typography>
                        <Box component="pre" sx={styles.ymlBox}>
                            {details.ymlFileContent || 'No yml file found'}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
