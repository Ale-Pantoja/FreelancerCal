interface Props {
  amount: number;
  totalToReceive: number;
  platformName: string;
}

export const ResultPayment = ({
  amount,
  totalToReceive,
  platformName,
}: Props) => {
  return (
    <div className="mt-6 p-4 bg-slate-900 rounded-xl border border-slate-700">
      <p className="text-slate-400 text-sm tracking-wider">Monto ingresado:</p>
      <span className="text-3xl font-bold text-green-400">${amount}</span>
      <p className="text-slate-400 text-sm tracking-wider mt-4">
        Plataforma de pago:
      </p>
      <span className="text-lg font-bold text-blue-400">{platformName}</span>
      <p className="text-slate-400 text-sm tracking-wider mt-4">
        Monto a recibir:
      </p>
      <span className="text-3xl font-bold text-green-400">
        ${totalToReceive.toFixed(2)}
      </span>
    </div>
  );
};
