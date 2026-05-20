import { useState } from "react";
import { FormFreelancer } from "./FormFreelancer";
import { ResultFreelancer } from "./ResultFreelancer";

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
