
import React, { useMemo, useState, useEffect } from 'react'
import { Table, Input, Button, Pagination, Select, Tooltip } from 'components/ui'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table'
import { rankItem } from '@tanstack/match-sorter-utils'
import { dataTest } from './data'
import { HiOutlinePencilAlt, HiOutlineTrash, HiPhone } from 'react-icons/hi'

const { Tr, Th, Td, THead, TBody, Sorter } = Table

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <div className="flex justify-end">
      <div className="flex items-center mb-4">
        <span className="mr-2 whitespace-nowrap">Tìm kiếm:</span>
        <Input
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const Data = (props) => {
  const [columnFilters, setColumnFilters] = React.useState([])
  const [globalFilter, setGlobalFilter] = React.useState('')

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('id', {
      header: () => 'STT',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('tenSanPham', {
      header: () => 'Tên sản phẩm',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('hinhAnhSanPham', {
      header: () => 'Hình ảnh sản phẩm',
      cell: info => <img src={info.getValue()} className='rounded-md w-20 h-20 object-cover' />,
    }),
    columnHelper.accessor('giaSanPham', {
      header: () => 'Giá sản phẩm',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('ngayDang', {
      header: () => 'Ngày đăng',
      cell: info => info.getValue(),
    }),
  ]

  const [data] = React.useState(() => dataTest)

  const totalData = dataTest.length

  const pageSizeOption = [
    { value: 10, label: 'Hiển thị 10 / 1 trang' },
    { value: 20, label: 'Hiển thị 20 / 1 trang' },
    { value: 30, label: 'Hiển thị 30 / 1 trang' },
    { value: 40, label: 'Hiển thị 40 / 1 trang' },
    { value: 50, label: 'Hiển thị 50 / 1 trang' },
  ]

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugHeaders: true,
    debugColumns: false,
  })

  const onPaginationChange = (page) => {
    table.setPageIndex(page - 1)
  }

  const onSelectChange = (value) => {
    table.setPageSize(Number(value))
  }

  return (
    <>
      <div className='mt-4'>
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(String(value))}
          className="p-2 font-lg shadow border border-block"
          placeholder="Gõ để tìm kiếm"
        />
        <Table>
          <THead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className:
                              header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                            onClick:
                              header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef
                              .header,
                            header.getContext()
                          )}
                          {
                            <Sorter
                              sort={header.column.getIsSorted()}
                            />
                          }
                        </div>
                      )}
                    </Th>
                  )
                })}
                <Th>
                  Thao tác
                </Th>
              </Tr>
            ))}
          </THead>
          <TBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    )
                  })}
                  <Td>
                    <div className='flex items-center'>
                      <Tooltip title="Sửa">
                        <Button
                          shape="circle"
                          size="sm"
                          variant="twoTone"
                          className="mr-3"
                          onClick={props.onEdit}
                          icon={<HiOutlinePencilAlt />}
                        />
                      </Tooltip>
                      <Tooltip title="Xóa">
                        <Button
                          shape="circle"
                          size="sm"
                          variant="twoTone"
                          onClick={props.onDelete}
                          icon={<HiOutlineTrash />}
                        />
                      </Tooltip>
                    </div>
                  </Td>
                </Tr>
              )
            })}
          </TBody>
        </Table>
        <div className="flex items-center justify-between mt-4">
          <Pagination
            pageSize={table.getState().pagination.pageSize}
            currentPage={table.getState().pagination.pageIndex + 1}
            total={totalData}
            onChange={onPaginationChange}
          />
          <div style={{ minWidth: 130 }}>
            <Select
              size="sm"
              isSearchable={false}
              value={pageSizeOption.filter(
                (option) =>
                  option.value ===
                  table.getState().pagination.pageSize
              )}
              options={pageSizeOption}
              onChange={(option) => onSelectChange(option.value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Data

