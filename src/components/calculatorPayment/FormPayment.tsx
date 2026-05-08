import { PLATFORMS, type Platform } from "../Platforms";

interface Props {
  onAmountChange: (value: number) => void;
  onPlatformChange: (p: Platform) => void;
  currentPlatform: Platform;
}

export const FormPayment = ({
  onAmountChange,
  onPlatformChange,
  currentPlatform,
}: Props) => {
  const platformList = Object.values(PLATFORMS);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <label className="text-slate-400 text-sm">Plataforma de pago</label>
        {platformList.map((p) => (
          <button
            key={p.name}
            onClick={() => onPlatformChange(p)}
            className={`flex-1 p-2 rounded-lg text-xs font-bold transition-all ${
              currentPlatform.name === p.name
                ? "bg-blue-600 text-white border-2 border-blue-400"
                : "bg-slate-700 text-slate-400 border-2 border-transparent"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-slate-400 text-sm">Monto a recibir ($)</label>
        <input
          type="number"
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="p-3 rounded-lg bg-slate-900 text-white border border-slate-700 outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};
