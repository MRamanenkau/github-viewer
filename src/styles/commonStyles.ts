import type { SxProps, Theme } from '@mui/material';

export const commonStyles: Record<string, SxProps<Theme>> = {
    centeredContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        pt: 4,
    },
    centeredContainerFull: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    contentCard: {
        width: '100%',
        maxWidth: 600,
        padding: 4,
    },
};