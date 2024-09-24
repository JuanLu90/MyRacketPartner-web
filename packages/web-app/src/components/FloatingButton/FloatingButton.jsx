// STYLES
import { Button, PlusIcon } from "./FloatingButton.styled";

const FloatingButton = ({ action }) => {
  return (
    <Button onClick={action}>
      <PlusIcon />
    </Button>
  );
};

export default FloatingButton;
