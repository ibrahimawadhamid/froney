import React, {Component} from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PaginationController extends Component {
	render () {
		return (
			<Pagination aria-label="Page navigation example">
				<PaginationItem>
					<PaginationLink previous href="#">
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">
                        1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#">
					</PaginationLink>
				</PaginationItem>
			</Pagination>
		);
	}
}

export default PaginationController;
