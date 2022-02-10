import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateProps = (state) => {
  return {
    userDetail: state.users.userDetail,
  };
};

function DetailComponent(props) {
  console.log(props.userDetail);
  return (
    <div>
      <Table>
        <thead></thead>
        <tbody>
          <tr>
            <td>nama</td>
            <td>{props.userDetail.nama}</td>
          </tr>

          <tr>
            <td>alamat</td>
            <td>{props.userDetail.alamat}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default connect(mapStateProps, null)(DetailComponent);
