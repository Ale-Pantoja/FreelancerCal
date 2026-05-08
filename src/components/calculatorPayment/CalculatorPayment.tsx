import { useState } from "react";
import { FormPayment, ResultPayment } from ".";
import { PLATFORMS, type Platform } from "../Platforms";

export const CalculatorPayment = () => {
  const [amount, setAmount] = useState<number>(0);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(
    Object.values(PLATFORMS)[0],
  );

  const commission = (amount * selectedPlatform.percentage) / 100;
  const totalToReceive = amount - commission - selectedPlatform.fixedFee;

  return (
    <div>
      <h1>Calculadora de pago</h1>
      <FormPayment
        onAmountChange={setAmount}
        onPlatformChange={setSelectedPlatform}
        currentPlatform={selectedPlatform}
      />

      <ResultPayment
        amount={amount}
        totalToReceive={totalToReceive > 0 ? totalToReceive : 0}
        platformName={selectedPlatform.name}
      />
    </div>
  );
};
