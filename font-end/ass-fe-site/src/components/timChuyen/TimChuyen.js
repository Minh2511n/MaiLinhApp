import { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Thêm CSS cho Carousel
import "antd/dist/antd.css";
import withRouter from "../../helpers/withRouter";
import { connect } from "react-redux";
import { loadDataLoca } from "../../redux/actions/actionSearch";
import { TimChuyen } from "./TimChuyen.1";

const mapStateToProps = (state) => ({
  dataLoca: state.SearchReducers.dataLoca,
});

const mapDispatchToProps = {
  loadDataLoca,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TimChuyen));
