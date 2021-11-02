import { useSelector } from "react-redux";
import useCartForm from "../../hooks/useCartForm";
import { CartSubmitting } from "../../hooks/useCartForm";
import { selectCartItems } from "../../store/store";

import { Form } from "./Checkout.styles";

interface Props {
  className?: string;
  onClose?: () => void;
  onConfirm: (val: CartSubmitting) => void;
}

const Checkout = ({ onClose, className, onConfirm }: Props) => {
  const items = useSelector(selectCartItems);

  const {
    state: values,
    error,
    submitHandler,
    changeInputHandler: onChange,
  } = useCartForm(
    {
      name: "",
      street: "",
      postalcode: "",
    },
    onConfirm
  );

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.objectId}>
              {item.amount} x {item.name} ({item.price})
            </li>
          );
        })}
      </ul>
      <Form onSubmit={submitHandler} className={className}>
        <div className="control">
          <label htmlFor="name">Name:</label>
          <input
            autoFocus
            type="text"
            name="name"
            id="name"
            value={values?.name}
            onChange={onChange}
          />
          {error.name}
        </div>
        <div className="control">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            name="street"
            id="street"
            value={values?.street}
            onChange={onChange}
          />
          {error.street}
        </div>
        <div className="control">
          <label htmlFor="postalcode">Postal Code:</label>
          <input
            type="text"
            name="postalcode"
            id="postalcode"
            placeholder="122-445-667"
            onChange={onChange}
            value={values?.postalcode}
          />
          {error.postalcode}
        </div>

        <div className={className}>
          <div className="actions">
            <button className="button--alt" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="submit">Confirm</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
