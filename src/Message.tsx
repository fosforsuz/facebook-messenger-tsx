import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface messegeInteferce {
  name: string;
  message: string;
}

interface Props {
  key: number;
  message: messegeInteferce;
}

function Message(props: Props) {
  return (
    <Card className="message__card">
      <CardContent>
        <Typography color="black" variant="h5" component="h2">
          {props.message.name}: {props.message.message}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
