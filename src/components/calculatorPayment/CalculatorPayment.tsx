import { useState } from "react";
import { FormPayment, ResultPayment } from "./index";
import { PLATFORMS, type Platform } from "../Platforms";

/**
 * Componente principal que coordina la calculadora de comisiones por pasarelas de pago.
 * * Maneja los estados del monto requerido por el usuario y la plataforma de pago seleccionada.
 * Realiza los cálculos matemáticos para determinar la comisión que cobra la pasarela
 * y el monto total que se debe facturar al cliente.
 * * @component
 * @returns {JSX.Element} La estructura que integra el formulario de pagos y el cuadro de resultados.
 */
export const CalculatorPayment = () => {
  const [amount, setAmount] = useState<number>(0);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(
    Object.values(PLATFORMS)[0],
  );

  const commission = (amount * selectedPlatform.percentage) / 100;
  const totalToReceive = amount - commission - selectedPlatform.fixedFee;

  return (
    <div className="flex flex-col gap-4 h-full">
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
