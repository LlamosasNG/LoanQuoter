import Header from "./components/Header";
import Button from "./components/Button";
import useQuoter from "./hooks/useQuoter";
import { formatMoney } from "./helpers";

export default function App() {
  const {
    quantity,
    handleChange,
    months,
    setMonths,
    total,
    payment,
    handleClickDecrease,
    handleClickIncrease,
    MIN,
    MAX,
    STEP,
  } = useQuoter();

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button operator="-" operation={handleClickDecrease} />
        <Button operator="+" operation={handleClickIncrease} />
      </div>

      <input
        type="range"
        className="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatMoney(quantity)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600"> plazo </span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={months}
        onChange={(e) => setMonths(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600"> de pagos </span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">{months} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">Total a pagar: {formatMoney(total)}</p>
        <p className="text-xl text-gray-500 text-center font-bold">Pago mensual: {formatMoney(payment)}</p>
        
      </div>
    </div>
  );
}
