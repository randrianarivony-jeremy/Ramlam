"use client";

import { urlForImage } from "@/sanity/lib/image";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const CardItem = ({ content }) => {
  const [truncated, setTruncated] = useState(true);
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardMedia
        sx={{ height: "50vw", objectFit: "contain", bgcolor: "text.secondary" }}
        component={"img"}
        image={urlForImage(content.imgUrl).url()}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {content.name}
        </Typography>
        {truncated ? (
          <LinesEllipsis
            text={content.description}
            maxLine="2"
            ellipsis={
              <>
                ... <Button onClick={() => setTruncated((current) => !current)}>Plus</Button>
              </>
            }
          />
        ) : (
          <Typography variant="body2" color="text.secondary">
            {content.description} <span onClick={() => setTruncated((current) => !current)}>Moins</span>
          </Typography>
        )}
        {/* <Typography variant="body2" color="text.secondary">
          {content.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default CardItem;
