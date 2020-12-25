import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

const Note = (props) => {
  return (
    <Card key={props.data.addedOn} xs={4} className="card">
      <span className="close" onClick={props.deleteNote}></span>
      <CardHeader
        title={props.data.title}
        subheader={new Date(props.data.addedOn).toLocaleString()}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
