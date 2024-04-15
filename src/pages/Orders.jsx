import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ordersData } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider';

const Orders = () => {
  const { currentMode } = useStateContext();

  const columns = [
    {
      field: "ProductImage",
      headerName: "Product Image",
      flex: 1,
      headerClassName: currentMode === 'Dark' ? 'white-header' : undefined,
      renderCell: (params) => (
        <img src={params.value} alt="Product" style={{ width: 80, height: 70, padding: 20, borderRadius: 20 }} />
      )
    },
    {
      field: "CustomerName",
      headerName: "Customer Name",
      flex: 1,
      cellClassName: currentMode === 'Dark' ? 'white-text' : undefined,
      headerClassName: currentMode === 'Dark' ? 'white-header' : undefined,
    },
    {
      field: "TotalAmount",
      headerName: "Total Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      cellClassName: currentMode === 'Dark' ? 'white-text' : undefined,
      headerClassName: currentMode === 'Dark' ? 'white-header' : undefined,
    },
    {
      field: "OrderItems",
      headerName: "Order Items",
      flex: 1,
      cellClassName: currentMode === 'Dark' ? 'white-text' : undefined,
      headerClassName: currentMode === 'Dark' ? 'white-header' : undefined,
    },
    {
      field: "Location",
      headerName: "Location",
      flex: 1,
      cellClassName: currentMode === 'Dark' ? 'white-text' : undefined,
      headerClassName: currentMode === 'Dark' ? 'white-header' : undefined,
    },
    {
      field: "Status",
      headerName: "Status",
      headerClassName: currentMode === 'Dark' ? 'white-header' : undefined,
      flex: 1,
      renderCell: (params) => {
        let backgroundColor;
        switch (params.value.toLowerCase()) {
          case 'pending':
            backgroundColor = '#FB9678';
            break;
          case 'complete':
            backgroundColor = '#8BE78B';
            break;
          case 'active':
            backgroundColor = '#03C9D7';
            break;
          case 'canceled':
            backgroundColor = '#FF5C8E';
            break;
          case 'rejected':
            backgroundColor = 'red';
            break;
          default:
            backgroundColor = 'transparent';
        }
        return (
          <div style={{ backgroundColor, padding: "5px 20px 5px 20px", borderRadius: 20 }}>
            {params.value}
          </div>
        );
      }
    }
  ];

  return (
    <div className='mt-[20px]'>
      <div className='ml-20 mb-11'>
        <p className='text-xl text-gray-400'>page</p>
        <h1 className='font-bold text-5xl'>Orders</h1>
      </div>
      <Box className=' h-[75vh]'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "gray",
          },
          "& .white-text": {
            color: "white",
          },
          "& .white-header": { // Custom CSS class for white header text
            color: "white",
          },
        }}
      >
        <DataGrid rows={ordersData} columns={columns} components={{ Toolbar: GridToolbar }} />
      </Box>
    </div>
  );
}

export default Orders;
