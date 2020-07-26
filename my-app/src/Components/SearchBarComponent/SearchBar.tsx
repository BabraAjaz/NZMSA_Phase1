import React, { useState } from "react";
import { IUserInput } from "../../Common/Interfaces";
import "./SearchBar.css";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    minWidth: 180,
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
  const [StartDate, setStartDate] = useState<Date | null>(
    new Date("2014-08-18")
  );
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const [EndDate, setEndDate] = useState<Date | null>(new Date("2020-08-18"));
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    if (
      SearchQuery?.length !== 0 &&
      SearchQuery !== null &&
      SearchQuery !== ""
    ) {
      let UserInput: IUserInput = {
        SearchQuery: SearchQuery,
        StartDate: StartDate,
        EndDate: EndDate,
      };
      props.SetUserInput(UserInput);
    } else {
      setHasFocus(true);
    }
  };

  return (
    <div className="SearchBarContainer">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Brand
            </InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={SearchQuery}
              onChange={(e) => handleSearchQueryChange(e.target.value)}
              label="Brand"
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={6} sm={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="StartDate"
              label="Start Date (optional)"
              value={StartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{ "aria-label": "change date" }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="EndDate"
              label="End Date (optional)"
              value={EndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{ "aria-label": "change date" }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchBar;
