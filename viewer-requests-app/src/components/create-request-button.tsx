import { Add } from "@mui/icons-material"
import { Button, ButtonProps } from "@mui/material"

export const CreateRequestButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} startIcon={<Add />} variant="contained" color="primary">Create Request</Button>
  )
}