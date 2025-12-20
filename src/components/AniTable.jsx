import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';



export const AniTable = () => {
      const { data } = useDemoData({ dataSet: 'Commodity', rowLength: 100 });

  return (
    <div style={{ height: 350, width: 700 }}>
          <DataGrid {...data}   initialState={{ pinnedColumns: { left: ['desk'], right: ['commodity'] } }} />
    </div>
  )
}
