import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';


const AddButton = (props) => {
    const { action, children } = props;

    return (
        <Button
            variant="contained"
            onClick={action}
            startIcon={<CheckIcon sx={{ color: "white" }} />}
            sx={{marginBottom:"40px"}}
        >

            {children}
        </Button>
    )

}

export default AddButton;