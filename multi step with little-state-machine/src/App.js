import "./styles.css";
import { useStateMachine } from "little-state-machine";
import updateFormState from "./store/actions";
import EmailStep from "./steps/Email";
import CongratsStep from "./steps/Congrats";
import PasswordStep from "./steps/Password";

export default function App() {
  // use hook for getting form state and actions
  const { state, actions } = useStateMachine({ updateFormState });
  // form on submit handles
  const emailFormHandle = ({ email, name }) => {
    actions.updateFormState({
      email: email,
      name: name,
      step: "Password"
    });
  };
  const passwordFormHandle = ({ password }) => {
    actions.updateFormState({
      step: "Congrats"
    });
  };
  const signOutHandle = () => {
    actions.updateFormState({
      step: "Email",
      email: "",
      name: ""
    });
  };

  return (
    <div>
      {state.step === "Email" && (
        <EmailStep email={state.email} name={state.name} onSubmit={emailFormHandle} />
      )}
      {state.step === "Password" && (
        <PasswordStep onSubmit={passwordFormHandle} />
      )}
      {state.step === "Congrats" && (
        <CongratsStep state={state} onSignOut={signOutHandle} />
      )}
    </div>
  );
}
