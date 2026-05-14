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
    <div className="max-w-md mx-auto p-8 bg-slate-800 rounded-3xl shadow-xl border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6">
        Calculadora Freelancer
      </h2>

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
