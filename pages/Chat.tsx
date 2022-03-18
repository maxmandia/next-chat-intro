import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";

export default function Chat() {
  return (
    <div>
      <Grid container item xs={12} component={Paper} padding={5}>
        <Grid item xs={6}>
          <Typography variant="h4">Haschat</Typography>
        </Grid>
        <Grid item xs={6} textAlign="right" spacing={10}>
          <Button variant="contained">Send Message</Button>
          <Button variant="contained">0x73..7db4</Button>
        </Grid>
      </Grid>
      <Grid container padding={3}>
        <Grid item xs={3}>
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search Contacts"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Ryan.eth">Ryan.eth</ListItemText>
            </ListItem>
            <ListItem button key="Alice">
              <ListItemIcon>
                <Avatar
                  alt="Alice"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Alice.eth">Alice.eth</ListItemText>
            </ListItem>
            <ListItem button key="CindyBaker">
              <ListItemIcon>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Cindy.eth">Cindy.eth</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    primary="Hey man, What's up ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    secondary="09:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ display: "flex", justifyContent: "flex-start" }}
                    primary="Hey, Iam Good! What about you ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ display: "flex", justifyContent: "flex-start" }}
                    secondary="09:31"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    primary="Cool. i am good, let's catch up!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    secondary="10:30"
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid
              xs={1}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
