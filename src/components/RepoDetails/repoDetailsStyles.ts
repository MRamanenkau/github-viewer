import type {SxProps, Theme} from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
    centeredBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        pt: 4,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        pt: 4,
    },
    card: {
        width: '100%',
        maxWidth: 600,
        padding: 2,
    },
    backButton: {
        mb: 2,
    },
    title: {
        mb: 1,
    },
    ymlBox: {
        bgcolor: '#f5f5f5',
        p: 2,
        whiteSpace: 'pre-wrap',
        borderRadius: 1,
    },
};

export default styles;
