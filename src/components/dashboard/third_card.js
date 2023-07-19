import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Paper, Box } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Row = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1),
}));

const ChildRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function BillCard() {
  return (
    <StyledCard sx={{ maxWidth: 675, backgroundColor: "#8CA1AD" }}>
      {/* First Row */}
      <Row>
        <Typography variant="h6">Current Bill</Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--red, #982737)",
            textAlign: "center",

            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.4px" /* 160% */,
            textDecorationLine: "underline",
          }}
        >
          Bill Details
        </Typography>
      </Row>
      {/* Second Row */}
      <Row>
        <Typography
          variant="body2"
          sx={{
            color: "#6C6C6C",

            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.4px",
          }}
        >
          Account ID{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--red, #982737)",
            textAlign: "center",

            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.4px" /* 160% */,
            textDecorationLine: "underline",
          }}
        >
          Download Bill
        </Typography>
      </Row>
      {/* Third Row */}
      <ChildRow>
        <Typography variant="h5">Amount: $100.00</Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--us-heading, #181818)",

            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "100%" /* 160% */,
          }}
        >
          July 18, 2023
        </Typography>
      </ChildRow>
      <Paper
      elevation={0}
      sx={{

        backgroundColor:'#8CA1AD',
        display: "flex",
        width: "100%",
        height: "30px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
        <Box
         sx={{
            display: "flex",
            width: "615px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
            
        </Box>
      </Paper>
      {/* Button */}
      <Button variant="contained" color="primary" fullWidth>
        Pay Bill
      </Button>
    </StyledCard>
  );
}
