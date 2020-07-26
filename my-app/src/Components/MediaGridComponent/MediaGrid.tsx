import React, { useState, useEffect } from "react";
import MediaCard from "../MediaCardComponent/MediaCard";
import { Grid } from "@material-ui/core";
import "./MediaGrid.css";

interface IMediaGridProps {
  SearchQuery: string | null;
}

function MediaGrid(props: IMediaGridProps) {
  const [ItemArray, setItemArray] = useState([]);

  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=" +
        props.SearchQuery
    )
      .then((response) => response.json())
      .then((response) => {
        setItemArray(response);
      })
      .catch((error) => console.error(error));
  }, [props.SearchQuery]);

  var Cards: JSX.Element[] = [];
  ItemArray.forEach((value: any, i: number) => {
    Cards.push(
      <Grid
        key={"card_" + i}
        item
        sm={6}
        md={4}
        lg={3}
        className="MediaGridCard"
      >
        <MediaCard
          ProductName={value.name}
          ImageUrl={value.image_link}
          Description={value.description}
        />
      </Grid>
    );
  });
  return (
    <div>
      <Grid container spacing={3} className="MediaGridContainer">
        {Cards}
      </Grid>
    </div>
  );
}

export default MediaGrid;
