"use client";

import { Home, HomeOutlined, Search } from "@mui/icons-material";
import FilterVintage from "@mui/icons-material/FilterVintage";
import Pets from "@mui/icons-material/Pets";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const pages = [
  ["Biby", <Pets />],
  ["Zavamaniry", <FilterVintage />],
];

const Navbar = () => {
  const path = usePathname();

  return (
    <AppBar sx={{ paddingX: [0, 1, 3] }} position="static">
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            fontSize: ["h6.fontSize", "h5.fontSize"],
            mr: 2,
            fontWeight: 700,
            display: { xs: "none", md: "flex" },
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Ramlam
        </Typography>

        {/* N A V  */}
        <Stack direction={"row"}>
          <Link href={"/"}>
            <IconButton sx={{ my: 1, color: "white", display: { xs: "flex", md: "none" } }}>
              {path === "/" ? <Home /> : <HomeOutlined />}
            </IconButton>
          </Link>
          {pages.map(([name, itemIcon]) => (
            <Link href={name.toLowerCase()} key={name}>
              <Button
                sx={{ my: 1, color: "white", bgcolor: path === `/${name.toLowerCase()}` ? "text.disabled" : "none" }}
                startIcon={<Icon sx={{ display: { xs: "none", md: "flex" } }}>{itemIcon}</Icon>}
              >
                {name}
              </Button>
            </Link>
          ))}
        </Stack>
        <IconButton color="inherit">
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
