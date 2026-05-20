import { useState } from "react";
import { FormFreelancer, ResultFreelancer } from "./index";

/**
 * Componente principal que maneja la lógica de la calculadora freelance.
 * * Se encarga de centralizar el estado de los gastos mensuales, el salario
 * deseado y las horas de trabajo, realizando el cálculo matemático para
 * obtener la tarifa por hora sugerida.
 * * @component
 * @returns {JSX.Element} La interfaz de la calculadora con el formulario y los resultados.
 */

export const CalculatorFreelancer = () => {
  const [expenses, setExpenses] = useState({
    internet: 0,
    software: 0,
    electricity: 0,
    other: 0,
  });

  const [desiredSalary, setDesiredSalary] = useState(0);
  const [workHours, setWorkHours] = useState(160);
  const totalExpenses = Object.values(expenses).reduce(
    (acc, curr) => acc + curr,
    0,
  );
  const totalNeeded = totalExpenses + desiredSalary;
  const hourlyRate = workHours > 0 ? totalNeeded / workHours : 0;

  return (
    <div className="flex flex-col gap-4 h-full">
      <FormFreelancer
        expenses={expenses}
        setExpenses={setExpenses}
        desiredSalary={desiredSalary}
        workHours={workHours}
        setDesiredSalary={setDesiredSalary}
        setWorkHours={setWorkHours}
      />

      <ResultFreelancer
        hourlyRate={hourlyRate}
        totalMonthlyCost={totalNeeded}
      />
    </div>
  );
};
