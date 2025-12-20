import { FormControl, OutlinedInput, Select, MenuItem, RadioGroup, Radio, Checkbox, FormControlLabel} from "@mui/material";

export const AniFormInput = ({ label, optional, error, type = "text", options = [],...props}) => {
  const renderInputByType = () => {
    switch (type) {
      case "select":
        return (
          <Select {...props} id={(props.label)}>
            {options.map((opt, index) => (
              <MenuItem key={index} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        );

      case "radio":
        return (
          <RadioGroup {...props}>
            {options.map((opt, index) => (
              <FormControlLabel key={index} value={opt.value} control={<Radio />} label={opt.label} />
            ))}
          </RadioGroup>
        );

      case "checkbox":
        return (
          <FormControlLabel control={<Checkbox {...props} />} label={label} />
        );
    
    //   case "date":
    //     return (
    //      "date"
    //     );

      default:
        // text, password, email, number, etc.
        return <OutlinedInput type={type} name={props.label} {...props} value={props.value}  />;
    }
  };

  return (
    <FormControl fullWidth error={error}>
      {/* Static label (not floating) */}
      {label && type !== "checkbox" && (
        <span className="mb-1 text-sm font-medium text-[var(--color-text)]">
          {label} 
        </span>
      )}

      {renderInputByType()}

      {optional && (
        <span className="mt-1 text-xs text-gray-500">
          Optional
        </span>
      )}
    </FormControl>
  );
};
