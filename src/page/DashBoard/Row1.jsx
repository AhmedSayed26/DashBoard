import React from "react";
import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      justifyContent={{ xs: "center", sm: "space-between" }}
      margin={2}
    >
      <Card
        Icon={
          <EmailIcon
            sx={{
              fontSize: "23px",
              color: theme.palette.secondary.main,
            }}
          />
        }
        title="12.361"
        subtitle="Email Sent"
        degree="+14%"
        data={data1}
        scheme={"nivo"}
      />
      <Card
        Icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title="431,225"
        subtitle="Sales obtained"
        degree="+21%"
        data={data2}
        scheme={"category10"}
      />
      <Card
        Icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title="32,441"
        subtitle="New Clients"
        degree="+5%"
        data={data3}
        scheme={"accent"}
      />
      <Card
        Icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title="1.325.134"
        subtitle="Total Received"
        degree="+43%"
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
}
