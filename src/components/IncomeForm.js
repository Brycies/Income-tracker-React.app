import React, { useRef } from "react";

function incomeForm({ income, setIncome }) {
  const desc = useRef[null];
  const date = useRef[null];
  const price = useRef[null];

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };
  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
          ref={desc}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Income date..."
          ref={price}
        />
        <input type="submit" value="Add Income" ref={date} />
      </div>
    </form>
  );
}
export default incomeForm;
