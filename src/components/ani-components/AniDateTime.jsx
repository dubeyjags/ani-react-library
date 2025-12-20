import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker,MobileDateTimePicker,DateTimePicker} from '@mui/x-date-pickers';

export default function AniDateTime ({type,defaultValue,...props}) {
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
