import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
  /* { field: "lastName", headerName: "Last name", width: 130 }, */
  /* {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  }, */
  /* {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  }, */
];

const rows = [
  { id: 1, firstName: "Coffe" },
  { id: 2, firstName: "Non Coffe" },
  { id: 3, firstName: "Cake" },
  { id: 4, firstName: "Pastry" },
  { id: 5, firstName: "Cookie" },
];

const actionColumn = [
  /* {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
        </div>
      );
    },
  }, */
];

const Mydatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;
