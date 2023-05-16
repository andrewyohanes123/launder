import React, { FC, ReactElement } from "react";
import { Box, Center, Text, Title, createStyles } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: theme.radius.md,
    display: "flex",
    flexDirection: "row",
    height: 400,
    gap: theme.spacing.md,
    margin: `${theme.spacing.md} 0`,
  },
  imageContainer: {
    flex: 1,
    background: "red",
    overflow: "hidden",
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
  },
  textContainer: {
    flex: 1,
    borderRadius: theme.radius.md,
    background: theme.fn.gradient({
      to: theme.colors.teal[5],
      from: theme.colors.green[4],
      deg: 15,
    }),
    padding: theme.spacing.md,
    boxShadow: theme.shadows.md,
  },
}));

interface props {
  alt: string;
  src: string;
  title?: string;
  description?: string;
}

const ServiceCard: FC<props> = ({
  alt,
  src,
  title,
  description,
}): ReactElement => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.imageContainer}>
        <Image alt={alt} src={src} width={450} height={450} />
      </Box>
      <Center className={classes.textContainer} p="xl">
        <Box>
          <Title align="center" mb="md" order={3} color="white">
            {title}
          </Title>
          <Text color="white" align="center">
            {description}
          </Text>
        </Box>
      </Center>
    </div>
  );
};

export default ServiceCard;
