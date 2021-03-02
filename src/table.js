import { TableContainer, Table as MTable, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core'
import css from './table.module.css';

export function Table({ columns, data }) {

  return (
    <div className={css.relativePositioner}>
      <div className={css.absolutePositioner}>
        <TableContainer className={css.container}>
          <MTable stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell>{column.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody >
              {data.map(row => (
                <TableRow>
                  {columns.map(column => (
                    <TableCell>{row[column.field]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </MTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          count={10}
          rowsPerPage={10}
          page={0}
        />
      </div>
    </div>
  )
}
