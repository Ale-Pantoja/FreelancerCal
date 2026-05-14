interface FormFreelancerProps {
  expenses: {
    internet: number;
    software: number;
    electricity: number;
    other: number;
  };
  setExpenses: (expenses: {
    internet: number;
    software: number;
    electricity: number;
    other: number;
  }) => void;
  desiredSalary: number;
  setDesiredSalary: (salary: number) => void;
  workHours: number;
  setWorkHours: (hours: number) => void;
}

export const FormFreelancer = ({
  expenses,
  setExpenses,
  desiredSalary,
  setDesiredSalary,
  workHours,
  setWorkHours,
}: FormFreelancerProps) => {
  return (
    <div className="bg-slate-700 p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">Gastos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Internet
          </label>
          <input
            type="number"
            value={expenses.internet}
            onChange={(e) =>
              setExpenses({ ...expenses, internet: Number(e.target.value) })
            }
            className="bg-slate-600 text-slate-300 placeholder:text-slate-500 border border-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Software
          </label>
          <input
            type="number"
            value={expenses.software}
            onChange={(e) =>
              setExpenses({ ...expenses, software: Number(e.target.value) })
            }
            className="bg-slate-600 text-slate-300 placeholder:text-slate-500 border border-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Electricidad
          </label>
          <input
            type="number"
            value={expenses.electricity}
            onChange={(e) =>
              setExpenses({ ...expenses, electricity: Number(e.target.value) })
            }
            className="bg-slate-600 text-slate-300 placeholder:text-slate-500 border border-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Otros
          </label>
          <input
            type="number"
            value={expenses.other}
            onChange={(e) =>
              setExpenses({ ...expenses, other: Number(e.target.value) })
            }
            className="bg-slate-600 text-slate-300 placeholder:text-slate-500 border border-slate-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-500 mb-2">
          Salario Deseado
        </label>
        <input
          type="number"
          value={desiredSalary}
          onChange={(e) => setDesiredSalary(Number(e.target.value))}
          className="bg-slate-500 text-slate-300 placeholder:text-slate-500 border border-slate-500 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-500 mb-2">
          Horas de Trabajo por Mes
        </label>
        <input
          type="number"
          value={workHours}
          onChange={(e) => setWorkHours(Number(e.target.value))}
          className="bg-slate-500 text-slate-300 placeholder:text-slate-500 border border-slate-500 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};
