import { Typography, Box } from "@mui/material";

const Info = (props) => {
    const { name, value } = props;

    return (
        <div>
            <Typography variant="h7" sx={{ fontWeight: 'bold' }}>
                {name}
            </Typography>
            <br />
            <Typography variant="h8" >
                {value}
            </Typography>
        </div>
    )
}

export default Info