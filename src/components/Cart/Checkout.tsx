import useForm from "../../hooks/use-form";
import { SubmittingType } from "./Cart";
import { Form } from "./Checkout.styles";

interface Props {
  className?: string;
  onClose?: () => void;
  onConfirm: (val: SubmittingType) => void;
}

const Checkout = ({ onClose, className, onConfirm }: Props) => {
  const {
    state: values,
    error,
    submitHandler,
    changeInputHandler: onChange,
  } = useForm(
    {
      name: "",
      street: "",
      postalcode: "",
    },
    () => console.log(values),
    onConfirm
  );

  return (
    <div>
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
            <button className="button--alt" type="reset">
              Reset
            </button>
            <button className="submit">Confirm</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
