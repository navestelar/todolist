import Checkbox from '@mui/material/Checkbox'
import CheckboxChecked from "../../assets/checkboxChecked.svg"
import  CheckboxUnchecked from "./../assets/checkboxUnchecked.svg"

export default function CheckboxRounded() {
  return (
    <Checkbox
      icon={<CheckboxUnchecked />} 
      checkedIcon={<CheckboxChecked />}
    />
  )
}