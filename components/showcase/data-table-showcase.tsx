'use client';

import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  ColumnDef,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/docs/code-block';
import { formatDate } from '@/lib/utils';

/**
 * 사용자 타입 정의
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Guest';
  status: 'Active' | 'Inactive';
  joinedAt: Date;
}

/**
 * 테이블 데이터
 */
const users: User[] = [
  {
    id: '1',
    name: '홍길동',
    email: 'hong@example.com',
    role: 'Admin',
    status: 'Active',
    joinedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: '김영희',
    email: 'kim@example.com',
    role: 'User',
    status: 'Active',
    joinedAt: new Date('2024-02-20'),
  },
  {
    id: '3',
    name: '이순신',
    email: 'lee@example.com',
    role: 'User',
    status: 'Inactive',
    joinedAt: new Date('2024-01-10'),
  },
  {
    id: '4',
    name: '박민수',
    email: 'park@example.com',
    role: 'Guest',
    status: 'Active',
    joinedAt: new Date('2024-03-05'),
  },
  {
    id: '5',
    name: '최지훈',
    email: 'choi@example.com',
    role: 'User',
    status: 'Active',
    joinedAt: new Date('2024-02-14'),
  },
  {
    id: '6',
    name: '정은지',
    email: 'jung@example.com',
    role: 'Admin',
    status: 'Active',
    joinedAt: new Date('2023-12-01'),
  },
  {
    id: '7',
    name: '윤태희',
    email: 'yoon@example.com',
    role: 'User',
    status: 'Inactive',
    joinedAt: new Date('2024-01-25'),
  },
  {
    id: '8',
    name: '조은숙',
    email: 'jo@example.com',
    role: 'User',
    status: 'Active',
    joinedAt: new Date('2024-02-08'),
  },
  {
    id: '9',
    name: '강석훈',
    email: 'kang@example.com',
    role: 'Guest',
    status: 'Active',
    joinedAt: new Date('2024-03-12'),
  },
  {
    id: '10',
    name: '심준호',
    email: 'sim@example.com',
    role: 'User',
    status: 'Active',
    joinedAt: new Date('2024-02-28'),
  },
];

/**
 * 상태 배지 색상
 */
const statusColor = {
  Active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  Inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100',
};

/**
 * 테이블 데이터 쇼케이스
 */
export function DataTableShowcase() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  // 컬럼 정의
  const columns: ColumnDef<User>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      ),
    },
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="h-8 p-0"
        >
          이름
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="font-medium">{row.getValue('name')}</div>,
    },
    {
      accessorKey: 'email',
      header: '이메일',
      cell: ({ row }) => <div className="text-sm">{row.getValue('email')}</div>,
    },
    {
      accessorKey: 'role',
      header: '역할',
      cell: ({ row }) => <Badge variant="outline">{row.getValue('role')}</Badge>,
    },
    {
      accessorKey: 'status',
      header: '상태',
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        return (
          <Badge className={statusColor[status as keyof typeof statusColor]}>
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'joinedAt',
      header: '가입일',
      cell: ({ row }) => {
        const date = row.getValue('joinedAt') as Date;
        return <div className="text-sm text-muted-foreground">{formatDate(date)}</div>;
      },
    },
    {
      id: 'actions',
      header: '작업',
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>작업</DropdownMenuLabel>
            <DropdownMenuItem>수정</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">삭제</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  // 테이블 인스턴스
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div className="space-y-4">
      {/* 검색 필터 */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="이름으로 검색..."
          value={
            (table
              .getColumn('name')
              ?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <span className="text-sm text-muted-foreground ml-auto">
          {table.getFilteredSelectedRowModel().rows.length} 행 선택됨
        </span>
      </div>

      {/* 테이블 */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  데이터가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* 코드 스니펫 */}
      <div className="space-y-4 mt-8">
        <h3 className="text-lg font-semibold">구현 코드</h3>
        <CodeBlock
          language="tsx"
          code={`import { useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// 컬럼 정의
const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting()}>
        이름
      </Button>
    ),
  },
  // ... 다른 컬럼들
];

// 테이블 사용
const table = useReactTable({
  data: users,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
});

// 렌더링
<Table>
  <TableHeader>
    {table.getHeaderGroups().map(group => ...)}
  </TableHeader>
  <TableBody>
    {table.getRowModel().rows.map(row => ...)}
  </TableBody>
</Table>`}
        />
      </div>
    </div>
  );
}
