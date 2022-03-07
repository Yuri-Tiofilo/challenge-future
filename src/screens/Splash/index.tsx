import { Button } from "@components/Controllers/Button";
import React from "react";

import { Container, Title } from "./styles";

import signInAnimation from "@assets/animations/signin.json";

import { Lottie } from "@components/Animations/Lottie";
import { useSplash } from "@hooks/useSplash";

const Splash = () => {
  const { handleDashboard: handleDashboardNavigation } = useSplash();
  const handleDashboard = async () => {
    handleDashboardNavigation();

    return false;
  };
  return (
    <Container>
      <Title>Bem-vindo ao desafio futuro!</Title>
      <Lottie source={signInAnimation} />

      <Button title="CONTINUAR" onPress={() => handleDashboard()} />
    </Container>
  );
};

export { Splash };
