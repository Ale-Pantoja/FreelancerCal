import { PLATFORMS, type Platform } from "./Platforms";

interface Props {
  onAmountChange: (value: number) => void;
  onPlatformChange: (p: Platform) => void;
  currentPlatform: Platform;
}

/**
 * Formulario para ingresar el monto y seleccionar la plataforma de pago.
 * * @component
 * @param {FormPaymentProps} props - Propiedades del componente.
 * @param {number} props.amount - El monto neto que el usuario desea recibir en su cuenta.
 * @param {function} props.setAmount - Función para actualizar el estado del monto en el componente padre.
 * @param {Object} props.currentPlatform - Objeto con la información de la pasarela de pago activa.
 * @param {string} props.currentPlatform.name - Nombre de la plataforma (ej. PayPal, Stripe).
 * @param {number} props.currentPlatform.percentage - Porcentaje de comisión que cobra la plataforma.
 * @param {number} props.currentPlatform.fixedFee - Comisión fija por transacción de la plataforma.
 * @param {function} props.onPlatformChange - Función que se ejecuta al hacer clic en una plataforma para cambiarla en el padre.
 * @returns {JSX.Element} El formulario con el input numérico y la lista dinámica de botones de plataformas.
 */

export const FormPayment = ({
  onAmountChange,
  onPlatformChange,
  currentPlatform,
}: Props) => {
  const platformList = Object.values(PLATFORMS);

  return (
    <div className="bg-[#E5E3D4]/10 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#E5E3D4]/20">
      <h3 className="text-base font-semibold text-[#9ABF80] mb-4 tracking-wide">
        Pasarela de Pago
      </h3>

      <label className="block text-[10px] text-[#E5E3D4]/60 mb-3 ml-1 uppercase tracking-wider">
        Selecciona Plataforma
      </label>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {platformList.map((p) => (
          <button
            key={p.name}
            onClick={() => onPlatformChange(p)}
            className={`py-2 rounded-xl text-xs transition-all duration-300 ${
              currentPlatform.name === p.name
                ? "bg-[#9ABF80] text-[#1C325B] shadow-md shadow-[#9ABF80]/20 font-semibold"
                : "bg-[#1C325B]/60 text-[#E5E3D4]/70 hover:bg-[#1C325B]/80 border border-[#6A669D]/30"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-[10px] text-[#E5E3D4]/60 mb-1 ml-1 uppercase tracking-wider">
          Monto a recibir ($)
        </label>
        <input
          type="number"
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="w-full bg-[#1C325B]/80 text-[#E5E3D4] px-4 py-2 rounded-xl border border-[#6A669D]/30 focus:ring-2 focus:ring-[#9ABF80]/50 focus:border-[#9ABF80] outline-none text-sm font-medium"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};
