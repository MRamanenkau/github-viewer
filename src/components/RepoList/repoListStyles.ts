import type {SxProps, Theme} from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
    loadingBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        pt: 4,
    },
    errorBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        pt: 4,
    },
    paper: {
        padding: 4,
        width: '100%',
        maxWidth: 600,
    },
};

export default styles;
