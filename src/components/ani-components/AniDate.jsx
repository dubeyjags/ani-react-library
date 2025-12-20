import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker,MobileDatePicker,DatePicker  } from '@mui/x-date-pickers';

export default function AniDate ({type,defaultValue,...props}) {
    const renderCalendar = () => {
        switch (type) {
            case "desktop":
                return <DesktopDatePicker {...props} defaultValue={dayjs(defaultValue)} />;
            case "mobile":
                return <MobileDatePicker   {...props} defaultValue={dayjs(defaultValue)} />;
            default:
                return <DatePicker   {...props}  defaultValue={dayjs(defaultValue)} />;
        }
    }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {renderCalendar()}
    </LocalizationProvider> 
  );
}