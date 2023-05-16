import React, { FC, ReactElement, ReactNode } from "react";
import {
  Card,
  Center,
  Text,
  Title,
  createStyles,
  getStylesRef,
} from "@mantine/core";
import { IconClothesRack, TablerIconsProps } from "@tabler/icons-react";

interface props {
  icon?: FC<TablerIconsProps>;
  title?: string;
  description?: string;
}

const useStyles = createStyles((theme) => ({
  iconContainer: {
    background: theme.fn.gradient({
      from: theme.colors.teal[5],
      to: theme.colors.green[4],
      deg: 35,
    }),
    padding: theme.spacing.md,
    [`& .${getStylesRef("icon")}`]: {
      color: theme.white,
    },
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,
  },
  card: {
    // aspectRatio: '1/1',
    width: 250,
  },
}));

const WorkCard: FC<props> = ({
  icon: Icon = IconClothesRack,
  title,
  description,
}): ReactElement => {
  const { classes } = useStyles();
  return (
    <Card className={classes.card} radius="md" shadow="md">
      <Center my="md">
        <Center className={classes.iconContainer}>
          <Icon color="white" size={85} stroke={1.25} />
        </Center>
      </Center>
      <Title color="teal" align="center" order={4} mb="md">
        {title}
      </Title>
      <Text align="center" color="dimmed">
        {description}
      </Text>
    </Card>
  );
};

export default WorkCard;
