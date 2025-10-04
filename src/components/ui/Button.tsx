import { Button } from "@mui/material";

function CustomButton({ text }: { text: string }) { 
  return (
    <Button variant="contained" color="primary">
      {text}
    </Button>
  );
}

export default CustomButton;
