import * as _ from 'lodash/fp'
import { table, tbody, td, th, thead, tr } from 'react-hyperscript-helpers'
import { useTable } from 'react-table'
import { colors } from 'src/utils/colors'


const borderStyling = `1px solid ${colors.primary}`

const styles = {
  table: {
    borderSpacing: 0,
    borderLeft: borderStyling,
    borderTop: borderStyling
  },
  tableRow: {
    margin: 0,
    padding: '0.5rem',
    borderBottom: borderStyling,
    borderRight: borderStyling,
    color: colors.primary
  }
}

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return table({ ...getTableProps, style: { ...styles.table } }, [
    thead([
      _.map(headerGroup => tr(headerGroup.getHeaderGroupProps(), [
        _.map(column => th({ ...column.getHeaderProps(), style: { ...styles.tableRow } }, [column.render('Header')]), headerGroup.headers)
      ]), headerGroups)
    ]),
    tbody(getTableBodyProps(), [
      _.map(row => {
        prepareRow(row)
        return tr(row.getRowProps(), [
          _.map(cell => td({ ...cell.getCellProps(), style: { ...styles.tableRow } }, [cell.render('Cell')]), row.cells)
        ])
      }, rows)
    ])
  ])
}
