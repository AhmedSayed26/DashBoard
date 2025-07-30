import * as React from "react";
import clsx from "clsx";
import {
  DataGrid,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows, columns } from "./data";
import Header from "../../Components/Header";

function Button(props) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "px-3 py-2 border-none rounded text-sm bg-blue-500 mx-0.5 cursor-pointer hover:bg-blue-600",
        props.className
      )}
    />
  );
}

function CustomToolbar() {
  return (
    <>
      <div>
        <Toolbar>
          <ColumnsPanelTrigger
            render={<ToolbarButton render={<Button>Columns</Button>} />}
          />
          <FilterPanelTrigger
            render={<ToolbarButton render={<Button>Filter</Button>} />}
          />
          <ExportCsv
            render={<ToolbarButton render={<Button>Export</Button>} />}
          />
          <ExportPrint
            render={<ToolbarButton render={<Button>Print</Button>} />}
          />
        </Toolbar>
      </div>
    </>
  );
}

export default function Invoices() {
  return (
    <Box>
      <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} />
      <Box sx={{ height: 700, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
          showToolbar
        />
      </Box>
    </Box>
  );
}
