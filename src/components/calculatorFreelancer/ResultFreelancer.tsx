interface ResultFreelancerProps {
  hourlyRate: number;
  totalMonthlyCost: number;
}

export const ResultFreelancer = ({
  hourlyRate,
  totalMonthlyCost,
}: ResultFreelancerProps) => {
  return (
    <div className="mt-6 p-4 bg-slate-900 rounded-xl border border-slate-700">
      <p className="text-slate-400 text-sm tracking-wider">
        Costo mensual total:
      </p>
      <span className="text-2xl font-bold text-slate-200">
        ${totalMonthlyCost.toFixed(2)}
      </span>
      <p className="text-slate-400 text-sm tracking-wider mt-4">
        Tarifa por hora recomendada:
      </p>
      <span className="text-3xl font-bold text-green-400">
        ${hourlyRate.toFixed(2)}
      </span>
    </div>
  );
};
