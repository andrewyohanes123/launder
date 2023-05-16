"use client";
import React, { FC, ReactElement } from "react";
import { Box, Group, Text, Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navbarContainer: {
    width: "100%",
    padding: 15,
    boxShadow: theme.shadows.md,
    right: 0,
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    position: "fixed",
    background: theme.white,
    zIndex: 300,
  },
}));

const Navbar: FC = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.navbarContainer}>
        <Title variant="gradient" order={3}>
          Laundry
        </Title>
        <Group>
          <Text>Home</Text>
          <Text>Product</Text>
          <Text>About Us</Text>
          <Text>Contact Us</Text>
        </Group>
      </Box>
      <Box />
    </>
  );
};

export default Navbar;
