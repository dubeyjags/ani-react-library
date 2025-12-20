import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker,MobileTimePicker,TimePicker } from '@mui/x-date-pickers';


export default function AniTime ({type,defaultValue,...props}) {
    const renderCalendar = () => {
        switch (type) {
            case "desktop":
                return <DesktopTimePicker  {...props} defaultValue={dayjs(defaultValue)} />;
            case "mobile":
                return <MobileTimePicker  {...props} defaultValue={dayjs(defaultValue)} />;
            default:
                return <TimePicker  {...props}  defaultValue={dayjs(defaultValue)} />;
        }
    }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {renderCalendar()}
    </LocalizationProvider> 
  );
}
