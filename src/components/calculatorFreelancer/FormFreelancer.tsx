/**
 * Formulario para capturar los gastos y objetivos financieros del freelancer.
 * * @component
 * @param {FormFreelancerProps} props - Propiedades del componente.
 * @param {Object} props.expenses - Objeto que contiene los gastos mensuales agrupados.
 * @param {number} props.expenses.internet - Costo mensual del servicio de internet.
 * @param {number} props.expenses.software - Costo mensual de licencias de software (Adobe, Figma, etc.).
 * @param {number} props.expenses.electricity - Costo mensual de la energía eléctrica.
 * @param {number} props.expenses.other - Suma de otros gastos misceláneos.
 * @param {function} props.setExpenses - Función del Padre para actualizar el objeto de gastos.
 * @param {number} props.desiredSalary - La cantidad de dinero limpia que el freelancer quiere ganar al mes.
 * @param {function} props.setDesiredSalary - Función para actualizar el estado del salario deseado en el Padre.
 * @param {number} props.workHours - La cantidad de horas totales que el freelancer planea trabajar al mes.
 * @param {function} props.setWorkHours - Función para actualizar el estado de las horas de trabajo en el Padre.
 * @returns {JSX.Element} El formulario renderizado con la cuadrícula de inputs.
 */

export const FormFreelancer = ({
  expenses,
  setExpenses,
  desiredSalary,
  setDesiredSalary,
  workHours,
  setWorkHours,
}: any) => {
  return (
    <div className="bg-[#E5E3D4]/10 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#E5E3D4]/20">
      <h3 className="text-base font-semibold text-[#9ABF80] mb-4 tracking-wide">
        Gastos & Objetivos
      </h3>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] text-[#E5E3D4]/60 mb-1 ml-1 uppercase tracking-wider">
              Internet
            </label>
            <input
              type="number"
              value={expenses.internet}
              onChange={(e) =>
                setExpenses({ ...expenses, internet: Number(e.target.value) })
              }
              className="w-full bg-[#1C325B]/80 text-[#E5E3D4] p-2 rounded-xl border border-[#6A669D]/30 focus:ring-2 focus:ring-[#9ABF80]/50 focus:border-[#9ABF80] transition-all outline-none text-sm"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-[10px] text-[#E5E3D4]/60 mb-1 ml-1 uppercase tracking-wider">
              Software
            </label>
            <input
              type="number"
              value={expenses.software}
              onChange={(e) =>
                setExpenses({ ...expenses, software: Number(e.target.value) })
              }
              className="w-full bg-[#1C325B]/80 text-[#E5E3D4] p-2 rounded-xl border border-[#6A669D]/30 focus:ring-2 focus:ring-[#9ABF80]/50 focus:border-[#9ABF80] transition-all outline-none text-sm"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-[10px] text-[#E5E3D4]/60 mb-1 ml-1 uppercase tracking-wider">
              Luz
            </label>
            <input
              type="number"
              value={expenses.electricity}
              onChange={(e) =>
                setExpenses({
                  ...expenses,
                  electricity: Number(e.target.value),
                })
              }
              className="w-full bg-[#1C325B]/80 text-[#E5E3D4] p-2 rounded-xl border border-[#6A669D]/30 focus:ring-2 focus:ring-[#9ABF80]/50 focus:border-[#9ABF80] transition-all outline-none text-sm"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-[10px] text-[#E5E3D4]/60 mb-1 ml-1 uppercase tracking-wider">
              Otros
            </label>
            <input
              type="number"
              value={expenses.other}
              onChange={(e) =>
                setExpenses({ ...expenses, other: Number(e.target.value) })
              }
              className="w-full bg-[#1C325B]/80 text-[#E5E3D4] p-2 rounded-xl border border-[#6A669D]/30 focus:ring-2 focus:ring-[#9ABF80]/50 focus:border-[#9ABF80] transition-all outline-none text-sm"
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <label className="block text-[10px] text-[#E5E3D4]/60 mb-1 ml-1 uppercase tracking-wider">
              Salario Deseado
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A669D] text-xs">
                $
              </span>
              <input
                type="number"
                value={desiredSalary}
                onChange={(e) => setDesiredSalary(Number(e.target.value))}
                className="w-full bg-[#1C325B]/80 text-[#E5E3D4] pl-7 pr-4 py-2 rounded-xl border border-[#6A669D]/30 focus:ring-2 focus:ring-[#9ABF80]/50 focus:border-[#9ABF80] outline-none text-sm font-medium"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] text-[#E5E3D4]/60 mb-1 ml-1 uppercase tracking-wider">
              Horas Mensuales
            </label>
            <input
              type="number"
              value={workHours}
              onChange={(e) => setWorkHours(Number(e.target.value))}
              className="w-full bg-[#1C325B]/80 text-[#E5E3D4] px-4 py-2 rounded-xl border border-[#6A669D]/30 focus:ring-2 focus:ring-[#9ABF80]/50 focus:border-[#9ABF80] outline-none text-sm font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
