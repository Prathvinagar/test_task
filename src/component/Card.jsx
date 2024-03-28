
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Box, CardContent, Typography } from '@mui/material';
import ReactPaginate from "react-paginate";


export default function OutlinedCard() {
  const [search, setSearch] = useState("");
  const dataShow = useSelector((state) => state.UserReducer.data);


  function handleChange(e) {
    setSearch(e.target.value);
  }

  const filteredData = dataShow.filter(item => {
    return item?.name?.toLowerCase().includes(search?.toLowerCase());
  });
 return (
    <>
      <h2>Country Name</h2> 
      <input 
        placeholder="Search By country Name" 
        value={search} 
        type="text" 
        onChange={handleChange}
      />
      <Grid container spacing={2}>
        {filteredData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ width: 300, border: "1px solid" }}>
              <CardContent sx={{ border: "1px solid" }}>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Id: {item.id}
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Country: {item.name}
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Capital: {item.capital}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
