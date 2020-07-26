import React, { useState } from "react";
import { IUserInput } from "../../Common/Interfaces";
import "./SearchBar.css";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
interface ISearchBarProps {
  SetUserInput: (a: IUserInput) => void;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    minWidth: 180,
  },
  Button: {
    marginTop: "20px",
  },
}));

function SearchBar(props: ISearchBarProps) {
  const classes = useStyles();

  const brandList = [
    "Almay",
    "Alva",
    "Anna Sui",
    "Annabelle",
    "Benefit",
    "Boosh",
    "Burt's Bees",
    "Butter London",
    "C'est Moi",
    "Cargo Cosmetics",
    "China Glaze",
    "Clinique",
    "Coastal Classic Creation",
    "Colourpop",
    "Covergirl",
    "Dalish",
    "Deciem",
    "Dior",
    "Dr. Hauschka",
    "E.l.f.",
    "Essie",
    "Fenty",
    "Glossier",
    "Green People",
    "Iman",
    "L'oreal",
    "Lotus Cosmetics USA",
    "Maia's Mineral Galaxy",
    "Marcelle",
    "Marienatie",
    "Maybelline",
    "Milani",
    "Mineral Fusion",
    "Misa",
    "Mistura",
    "Moov",
    "Nudus",
    "Nyx",
    "Orly",
    "Pacifica",
    "Penny Lane Organics",
    "Physicians Formula",
    "Piggy Paint",
    "Pure Anada",
    "Rejuva Minerals",
    "Revlon",
    "Sally b's Skin Yummies",
    "Salon Perfect",
    "Sante",
    "Sinful Colours",
    "Smashbox",
    "Stila",
    "Suncoat",
    "W3llpeople",
    "Wet n Wild",
    "Zorah",
    "Zorah Biocosmetiques",
  ];

  const [SearchQuery, setSearchQuery] = useState<string | null | any>(
    "maybelline"
  );
  const handleSearchQueryChange = (s: string | null | any) => {
    setSearchQuery(s);
  };

  const [HasFocus, setHasFocus] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      SearchQuery?.length !== 0 &&
      SearchQuery !== null &&
      SearchQuery !== ""
    ) {
      let UserInput: IUserInput = {
        SearchQuery: SearchQuery,
      };
      props.SetUserInput(UserInput);
    } else {
      setHasFocus(true);
    }
  };

  return (
    <div className="SearchBar">
      <div className="SearchBarContainer">
        <Grid item xs={6} sm={3}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Brand</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={!!SearchQuery ? SearchQuery : "Maybelline"}
              onChange={(e) => handleSearchQueryChange(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {brandList.map((item, i) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Button
          className={classes.Button}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      {!!SearchQuery ? SearchQuery : "Maybelline"}
    </div>
  );
}

export default SearchBar;
