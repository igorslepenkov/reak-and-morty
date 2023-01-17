import { ClipLoader } from "react-spinners";
import { SpinnerOverlay } from "./style";

export const Spinner = () => {
  return (
    <SpinnerOverlay>
      <ClipLoader loading={true} />
    </SpinnerOverlay>
  );
};
