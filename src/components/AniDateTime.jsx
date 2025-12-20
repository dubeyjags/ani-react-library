import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker,MobileDateTimePicker,DateTimePicker,DesktopTimePicker,MobileTimePicker,TimePicker,DesktopDatePicker,MobileDatePicker,DatePicker  } from '@mui/x-date-pickers';

export const AniDateTime = ({type,defaultValue,...props}) => {
    const renderCalendar = () => {
        switch (type) {
            case "desktop":
                return <DesktopDateTimePicker {...props} defaultValue={dayjs(defaultValue)} />;
            case "mobile":
                return <MobileDateTimePicker {...props} defaultValue={dayjs(defaultValue)} />;
            default:
                return <DateTimePicker {...props}  defaultValue={dayjs(defaultValue)} />;
        }
    }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {renderCalendar()}
    </LocalizationProvider> 
  );
}

export const AniTime = ({type,defaultValue,...props}) => {
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

export const AniDate = ({type,defaultValue,...props}) => {
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