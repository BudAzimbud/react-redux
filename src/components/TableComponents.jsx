import React from "react";
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, ButtonDropdown, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser } from "../actions/userAction";

const { SearchBar } = Search;

function handleDelete(dispatch, id) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

function TableSearchComponents(props) {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama",
      text: "Name",
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button
              color="dark"
              className="mr-2"
              onClick={() => handleDelete(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.users ? (
        <ToolkitProvider
          keyField="id"
          data={props.users}
          columns={columns}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"create/"}>
                    <Button color="dark" className="mr-3">
                      <FontAwesomeIcon /> Add
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <SearchBar {...props.searchProps} />
                </Col>
              </Row>

              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : null}
    </Container>
  );
}

export default connect(mapStateToProps, null)(TableSearchComponents);
