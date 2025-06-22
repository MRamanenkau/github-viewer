import type { SxProps, Theme } from '@mui/material';
import { commonStyles } from '../../styles/commonStyles';

const styles: Record<string, SxProps<Theme>> = {
    container: {
        ...commonStyles.centeredContainer,
    },
    card: {
        ...commonStyles.contentCard,
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