import React from 'react'

import { EmptyState } from '../EmptyState'
import {
  Table,
  TableRow,
  TableCell,
  DataItem,
  Header,
  DataSpan,
  ActionContainer,
  TableBody,
  DataItemContainer,
} from './styled'

type DataListProps<TData extends Record<string, unknown>> = {
  columns: Partial<ColumnInfo<TData>>
  data: TData[] | undefined
  actionColumns?: ActionColumn<TData>[]
  keyExtractor: (row: TData, index: number) => string | number
  disabledPredicate?: (row: TData) => boolean
  emptyMessage?: string
}

export type ColumnInfo<TData extends Record<string, unknown>> = {
  [K in keyof TData]: {
    header: string
    transform?: (value: TData[K], row: TData, index: number) => React.ReactNode
  }
}

export type ActionColumn<Data extends Record<string, unknown>> = {
  action: (item: Data, index: number) => JSX.Element
}

export function DataList<TData extends Record<string, unknown>>({
  data = [],
  columns,
  keyExtractor,
  actionColumns,
  disabledPredicate,
  emptyMessage,
}: DataListProps<TData>) {
  const isTableEmpty = data.length === 0

  if (isTableEmpty) {
    return <EmptyState data-testid="empty-state" message={emptyMessage} />
  }

  const columnKeys = Object.keys(columns)

  const shouldRenderActions = Boolean(actionColumns?.length)

  const renderActionColumns = (
    item: TData,
    index: number,
    isDisable: boolean,
  ) => {
    return (
      <TableCell key={`${item?.id}-${index}`} disabled={isDisable}>
        <ActionContainer>
          {React.Children.toArray(
            actionColumns?.map((actionColumn) =>
              actionColumn.action(item, index),
            ),
          )}
        </ActionContainer>
      </TableCell>
    )
  }

  return (
    <Table>
      <TableBody>
        {data.map((item, index) => {
          const key = keyExtractor(item, index)
          const isDisable = disabledPredicate ? disabledPredicate(item) : false

          return (
            <TableRow key={key}>
              {columnKeys.map((key, columnIndex) => {
                const column = columns[key]

                const value = column?.transform
                  ? column?.transform(
                      item[key as keyof typeof columns] as TData[string],
                      item,
                      index,
                    )
                  : (item[key as keyof typeof columns] as React.ReactNode)

                return (
                  <TableCell
                    disabled={isDisable}
                    data-label={column?.header}
                    key={`${column?.header}-${columnIndex}`}
                  >
                    <DataItemContainer>
                      <DataItem>
                        <Header>{column?.header}</Header>
                        <DataSpan className="data-span">{value}</DataSpan>
                      </DataItem>
                    </DataItemContainer>
                  </TableCell>
                )
              })}
              {shouldRenderActions
                ? renderActionColumns(item, index, isDisable)
                : null}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
