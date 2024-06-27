import { useId } from "react";
//label for displaying "from" or "to"
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  className = "",
}) {
  const amountInputId = useId(); // useId will return unique id
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId} // htmlFor is same as for attribute
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value)) // this only checks if onAmountChange is available or not
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;




// { currencyOptions.map((currency) => {
//                             <option key={currency} value={currency}> //Whenever you are mapping over in jsx always use "key"
//                             {currency}
//                             </option>
// })}

// *** This is incorrect code
//  When using curly braces {} in an arrow function, you need to explicitly use the return statement to return a value. If you don't, the function body will execute, but nothing will be returned, resulting in undefined values in the array.
//  if you want to use implicit return, you should use parentheses ():