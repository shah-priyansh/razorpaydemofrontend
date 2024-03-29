import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkouthandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("https://razorpaydemobackend.vercel.app/api/getkey");
    const {
      data: { order },
    } = await axios.post("https://razorpaydemobackend.vercel.app/checkout", {
      amount,
    });
    console.log(window);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Espacecarre",
      description: "Razorpay tutorial",
      // image:"https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
      order_id: order.id,
      callback_url:
        "https://razorpaydemobackend.vercel.app/paymentverification",
      prefill: {
        name: "Espace carre",
        email: "infoespacecarre@gmail.com",
        contact: "1234567890",
      },
      notes: {
        address: "razorapy official",
      },
      theme: {
        color: "yellow",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={1}
          img={
            "https://images.pexels.com/photos/17117471/pexels-photo-17117471/free-photo-of-close-up-of-pink-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          checkouthandler={checkouthandler}
        />
        <Card
          amount={1}
          img={
            "https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-toast-with-glasses-of-cold-drinks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          checkouthandler={checkouthandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
