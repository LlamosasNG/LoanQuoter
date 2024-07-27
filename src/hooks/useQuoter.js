import { useEffect, useState } from "react";

export default function useQuoter() {
  const [quantity, setQuantity] = useState(10000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const totalPayable = calculateTotal(quantity, months);
    setTotal(totalPayable);
  }, [quantity, months]);

  useEffect(() => {
    setPayment(total / months);
  }, [months, total]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setQuantity(+e.target.value);
  }

  function handleClickDecrease() {
    const value = quantity - STEP;

    if (value < MIN) {
      alert("Cantidad no valida");
      return;
    } else {
      setQuantity(value);
    }
  }

  function handleClickIncrease() {
    const value = quantity + STEP;

    if (value > MAX) {
      alert("Cantidad no valida");
      return;
    } else {
      setQuantity(value);
    }
  }

  function calculateTotal(quantity, deadline) {
    let money;

    /* A mayor cantidad menor interés */
    if (quantity < 5000) {
      money = quantity * 1.5;
    } else if (quantity >= 5000 && quantity < 10000) {
      money = quantity * 1.4;
    } else if (quantity >= 10000 && quantity < 15000) {
      money = quantity * 1.3;
    } else {
      money = quantity * 1.2;
    }

    /* A mayor plazo mayor interés */
    if (deadline === 6) {
      money *= 1.1;
    } else if (deadline === 12) {
      money *= 1.2;
    } else {
      money *= 1.3;
    }

    return money;
  }

  return {
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
    calculateTotal,
  };
}
