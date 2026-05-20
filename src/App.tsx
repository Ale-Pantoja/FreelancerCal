import { CalculatorPayment } from "./components/calculatorPayment/CalculatorPayment";
import { CalculatorFreelancer } from "./components/calculatorFreelancer/CalculatorFreelancer";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1C325B] p-1 font-sans selection:bg-[#9ABF80] selection:text-[#1C325B]">
      <div className="h-full w-full flex flex-col">
        <header className="shrink-0 text-center pt-4 pb-2">
          <h1 className="text-4xl font-light tracking-tight text-[#E5E3D4] mb-0.5">
            Calc<span className="font-semibold text-[#9ABF80]">Freelancer</span>
          </h1>
          <p className="text-white text-[11px] mb-3 font-normal tracking-wide">
            Tu rincón para planificar comisiones y tarifas con claridad
          </p>
        </header>

        <main className="flex-1 min-h-0 flex items-center justify-center px-4 py-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-6xl mx-auto">
            <div className="h-full">
              <CalculatorFreelancer />
            </div>
            <div className="h-full">
              <CalculatorPayment />
            </div>
          </div>
        </main>

        <footer className="shrink-0 text-center text-[10px] text-[#6A669D]/50 py-2">
          &copy; 2026 Alejandra Pantoja
        </footer>
      </div>
    </div>
  );
}

export default App;
