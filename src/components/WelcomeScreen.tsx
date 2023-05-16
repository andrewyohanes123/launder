"use client";
import {
  Box,
  Center,
  Container,
  Group,
  Text,
  Title,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import React, { FC, ReactElement } from "react";
import bg from "@/assets/images/navbar.jpg";
import Image from "next/image";
import {
  IconShirt,
  IconTruckDelivery,
  IconWash,
  IconWashMachine,
} from "@tabler/icons-react";
import WorkCard from "./HomeComponents/WorkCard";
import ServiceCard from "./HomeComponents/ServiceCard";

const useStyles = createStyles((theme) => ({
  imageContainer: {
    // bacgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    background: theme.fn.gradient({ from: "blue", to: "teal", deg: 25 }),
    overflow: "hidden",
    position: "relative",
    height: "100%",
    boxShadow: theme.shadows.md,
    borderBottom: `1px solid ${theme.colors.gray[4]}`,
  },
  image: {
    width: "100%",
    positio: "absolute",
    zIndex: 20,
    userSelect: "none",
    pointerEvents: "none",
  },
  textContainer: {
    position: "absolute",
    left: 30,
    top: "50%",
    zIndex: 25,
    // background: "rgba(0, 0, 0, 0.5)",
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    transform: "translateY(-50%)",
  },
  button: {
    borderRadius: theme.radius.xl,
    background: theme.colors.teal[5],
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    color: theme.white,
    transition: "all 350ms ease-in-out",
    ":hover": {
      background: theme.colors.teal[6],
      transition: "all 350ms ease-in-out",
    },
  },
  work: {
    padding: theme.spacing.xl,
    flexDirection: "column",
    borderBottom: `1px solid ${theme.colors.gray[1]}`,
  },
}));

const WelcomeScreen: FC = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={bg.src}
          width={bg.width}
          height={bg.height}
          blurDataURL={bg.blurDataURL}
          alt="William Laundry"
          draggable={false}
        />
        <Box className={classes.textContainer}>
          <Title size={70} color="dark">
            Laundry William
          </Title>
          <Text size="lg" color="dark">
            Aplikasi Laundry Berbasis Website
          </Text>
          <UnstyledButton className={classes.button} mt="md">
            <Group spacing="xs" align="center">
              <Text color="white">Lihat Produk</Text>
              <IconWashMachine />
            </Group>
          </UnstyledButton>
        </Box>
      </Box>
      <Center className={classes.work}>
        <Title my="lg" color="teal">
          This is how we work
        </Title>
        <Container py="md" my="sm">
          <Group>
            <WorkCard
              icon={IconShirt}
              title="We Collect Your Clothes"
              description="Lorem"
            />
            <WorkCard
              icon={IconWash}
              title="Wash Your Clothes"
              description="Lorem"
            />
            <WorkCard
              icon={IconTruckDelivery}
              title="Get Delivery"
              description="Lorem"
            />
          </Group>
        </Container>
      </Center>
      <Container className={classes.work} py="xl">
        <Title my="lg" align="center" color="teal">
          Services we offer
        </Title>
        <ServiceCard
          alt="Launder"
          src="/offers1.png.webp"
          title="Cloth Laundry"
          description="The automated process starts as soon as your clothes go into the machine."
        />
        <ServiceCard
          alt="Launder"
          src="/offers4.png.webp"
          title="Cloth Ironing"
          description="The automated process starts as soon as your clothes go into the machine."
        />
      </Container>
    </>
  );
};

export default WelcomeScreen;
