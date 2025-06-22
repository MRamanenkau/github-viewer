import type { SxProps, Theme } from '@mui/material';
import { commonStyles } from '../../styles/commonStyles';

const styles: Record<string, SxProps<Theme>> = {
    loadingBox: {
        ...commonStyles.centeredContainer,
    },
    errorBox: {
        ...commonStyles.centeredContainerFull,
    },
    container: {
        ...commonStyles.centeredContainer,
    },
    paper: {
        ...commonStyles.contentCard,
    },
    details: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 0, sm: 1 },
    },
};

export default styles;