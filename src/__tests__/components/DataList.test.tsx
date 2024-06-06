import { render, screen } from '@testing-library/react'

import { ActionColumn, DataList } from '@/components/DataList'

const mockData = [
  {
    id: '1',
    name: 'Alice Smith',
    age: 28,
  },
  {
    id: '2',
    name: 'Bob Johnson',
    age: 34,
  },
]

type MockData = (typeof mockData)[0]

const columns = {
  name: {
    header: 'Name',
  },
  age: {
    header: 'Age',
  },
}

const keyExtractor = (item: MockData) => item.id

describe('<DataList />', () => {
  it('should render EmptyState when data is empty', () => {
    render(
      <DataList
        data={[] as MockData[]}
        columns={columns}
        keyExtractor={(item) => item.id}
        emptyMessage="No data available"
      />,
    )
    expect(screen.getByTestId('empty-state')).toHaveTextContent(
      'No data available',
    )
  })

  it('should render table rows and cells correctly', () => {
    render(
      <DataList
        data={mockData}
        columns={columns}
        keyExtractor={keyExtractor}
      />,
    )
    mockData.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument()
      expect(screen.getByText(row.age.toString())).toBeInTheDocument()
    })
  })

  it('should render action columns correctly', () => {
    const actionColumns: ActionColumn<MockData>[] = [
      { action: (item) => <button>{`Edit ${item.name}`}</button> },
    ]
    render(
      <DataList
        data={mockData}
        columns={columns}
        keyExtractor={keyExtractor}
        actionColumns={actionColumns}
      />,
    )
    mockData.forEach((row) => {
      expect(screen.getByText(`Edit ${row.name}`)).toBeInTheDocument()
    })
  })
})
