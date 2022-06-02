import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { productState } from "../hooks/interface";
import getProdData from "../util/getProdData";

export async function getServerSideProps() {
  const product = await getProdData();
  return { props: { product } };
}

interface Column {
  label: string;
  minWidth?: number;
  align?: "right" | "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { label: "id", minWidth: 170, align: "left" },
  { label: "brand", minWidth: 170, align: "left" },
  { label: "name", minWidth: 170, align: "left" },
  { label: "price", minWidth: 170, align: "left" },
];

type AlignOptions = "id" | "가격높은순" | "가격낮은순";
const alignOptions: AlignOptions[] = ["id", "가격높은순", "가격낮은순"];

const Product = ({ product }: productState) => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [findTitle, setFindTitle] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [alignOption, setAlignOption] = useState<AlignOptions>();

  const open = Boolean(anchorEl);
  const navigateToEditProd = (id: number) => {
    router.push(`/editProd/${id}`);
  };

  const handleChangePage = (evt: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+evt.target.value);
    setPage(0);
  };

  const searchByInput = (keyword: string) => {
    setFindTitle(keyword);
  };

  const alignOptionToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const alignOptionClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(alignOption);
    if (alignOption === "id") {
      product = product.sort((a, b) => a.id - b.id);
    }
  }, [alignOption]);
  return (
    <>
      <TextField
        value={findTitle}
        onChange={(evt) => {
          searchByInput(evt.target.value);
        }}
        placeholder="상품이름으로 검색"
      />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      color: "white",
                      background: "black",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>
                  <Button
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={alignOptionToggle}
                  >
                    정렬
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={alignOptionClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {alignOptions.map((option) => (
                      <MenuItem
                        onClick={() => {
                          setAlignOption(option);
                          alignOptionClose();
                        }}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .filter((item) => item.name.toLowerCase().includes(findTitle))
                .map((item) => {
                  return (
                    <TableRow
                      key={item.id}
                      selected
                      onClick={() => {
                        navigateToEditProd(item.id);
                      }}
                    >
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.brand}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.price}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={product.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Product;
