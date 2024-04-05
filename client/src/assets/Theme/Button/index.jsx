
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ThemeButton = ({ variant, color, children }) => {
    const theme = createTheme({
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { color: 'error' },
                        style: {
                            backgroundColor: '#FF4848',
                        },
                    },
                ],
                styleOverrides: {
                    root: {
                        fontSize: '14px',
                        padding: '4px 25px',
                        fontFamily: 'Poppins',
                        textTransform: 'capitalize',
                        borderRadius: '14px',
                        fontWeight: 'normal',
                    },
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Button variant={variant} color={color}>{children}</Button>
        </ThemeProvider>
    );
};

ThemeButton.propTypes = {
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']), // Validate variant prop
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']), // Validate color prop
    children: PropTypes.node.isRequired, // Validate children prop
};

export default ThemeButton;
