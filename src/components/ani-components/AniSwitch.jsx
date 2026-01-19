import { FormControlLabel, FormGroup, Switch } from '@mui/material'

export const AniSwitch = (props) => {
  const { label = 'Label', ...rest } = props;
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked {...rest} />} label={label} {...rest} />
    </FormGroup>
  )
}
