import {
    Box, Button, TextField, Container, Typography,
    Card
} from "@mui/material";
import { useRef } from "react";

const MemberCard = ({ name, icon, cardFunction, selected, values }) => {
     const inputRef = useRef(null);

    const parentFunction = () => {
        const task = inputRef.current.target;
        // console.log("task",task);
        cardFunction(values, task)
    }

    return (
        <>

            <Card
                style={{
                    border: `2px solid ${selected ? '#FF6458' : 'grey'}`,
                    width: '70px',
                    height: "70px",
                    padding: "12px",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor:'pointer'
                }}
            onClick={parentFunction}
            >
                <input 
                    type="checkbox" 
                    value={values} 
                    checked={selected} 
                    onClick={(e) => { cardFunction(values, e) }} 
                    ref={inputRef}
                />
                <Box>
                    {icon}
                </Box>
                <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>
                    {name}
                </Typography>

            </Card>

        </>
    )
}
export default MemberCard