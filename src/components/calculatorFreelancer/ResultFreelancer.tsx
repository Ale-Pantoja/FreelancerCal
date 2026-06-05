/**
 * Componente que muestra de forma visual los resultados finales del cálculo freelance.
 * @component
 * @param {ResultFreelancerProps} props - Propiedades del componente.
 * @param {number} props.hourlyRate - La tarifa sugerida por hora calculada en base a los gastos.
 * @param {number} props.totalMonthlyCost - La suma total de gastos mensuales más el salario deseado.
 * @returns {JSX.Element} Una tarjeta con el costo mensual y la tarifa por hora formateados.
 */

interface ResultFreelancerProps {
  hourlyRate: number;
  totalMonthlyCost: number;
}

export const ResultFreelancer = ({ hourlyRate, totalMonthlyCost }: ResultFreelancerProps) => {
  return (
    <div className="relative overflow-hidden p-5 rounded-2xl shadow-xl group bg-linear-to-br from-[#6A669D] via-[#1C325B] to-[#9ABF80]">
      <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-[#9ABF80]/20 rounded-full blur-2xl -mr-8 -mt-8"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#E5E3D4]/10 rounded-full blur-2xl -ml-8 -mb-8"></div>

      <div className="relative z-10 text-[#E5E3D4]">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[9px] font-light uppercase tracking-[0.2em] opacity-80 mb-1">
              Costo Operativo
            </p>
            <span className="text-base font-medium">
              ${totalMonthlyCost.toFixed(2)}
            </span>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-light uppercase tracking-[0.2em] opacity-80 mb-1">
              Recomendado
            </p>
            <div className="flex items-baseline justify-end gap-0.5">
              <span className="text-2xl font-light italic">$</span>
              <span className="text-3xl font-bold tracking-tighter">
                {hourlyRate.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#E5E3D4]/10 backdrop-blur-md rounded-xl p-2 text-center border border-[#E5E3D4]/20">
          <p className="text-[10px] font-medium tracking-wide">
            Tarifa ideal por hora de trabajo
          </p>
        </div>
      </div>
    </div>
  );
};
