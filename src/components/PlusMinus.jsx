import {
    Box, Button, TextField, Container, Typography,
    Card,
    IconButton
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



const PlusMinus = (props) => {
    console.log("props",props);
    const onPlusClicks = () => {
        props.onPlusClick()
    } 
    const onMinusClicks = () => {
        props.onMinusClick()
    } 
    const {onPlusClick, onMinusClick, dependantCount} = props
    return (
        <Card
            style={{
                border: "1 px solid grey",
                width: '70px',
                height: "20px",
                padding: "12px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "12px",
                gap: "6px"
            }}>
            <IconButton onClick={onPlusClicks}>
                <AddCircleOutlineIcon />
            </IconButton>
            <Card
                sx={{
                    border: "1px solid grey",
                    width: "20px"
                }}>
                {props.dependantCount}
            </Card>
            <RemoveCircleOutlineIcon onClick={onMinusClicks} />
        </Card>
    )
}
export default PlusMinus