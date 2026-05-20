import { CalculatorPayment } from "./components/calculatorPayment/CalculatorPayment";
import { CalculatorFreelancer } from "./components/calculatorFreelancer/CalculatorFreelancer";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-[#1C325B] p-4 md:p-6 font-sans selection:bg-[#9ABF80] selection:text-[#1C325B]">
      <div className="min-h-full lg:h-full w-full flex flex-col justify-between">
        <header className="shrink-0 text-center pt-2 pb-4">
          <h1 className="text-4xl font-light tracking-tight text-[#E5E3D4] mb-0.5">
            Calc<span className="font-semibold text-[#9ABF80]">Freelancer</span>
          </h1>
          <p className="text-white text-[11px] font-normal tracking-wide">
            Tu rincón para planificar comisiones y tarifas con claridad
          </p>
        </header>
        <main className="w-full flex flex-col justify-center py-4 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl mx-auto items-start">
            <div className="w-full">
              <CalculatorFreelancer />
            </div>
            <div className="w-full">
              <CalculatorPayment />
            </div>
          </div>
        </main>

        <footer className="shrink-0 text-center text-[10px] text-[#6A669D]/50 pt-2 pb-2">
          &copy; 2026 Alejandra Pantoja
        </footer>
      </div>
    </div>
  );
}

export default App;
