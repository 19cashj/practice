import React from "react";

export default function Pagination(props) {
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(props.totalPosts/props.postsPerPage); i++) {
        pageNumbers.push(i);
    }

    function createPageButtons(number) {
        return (
            <button key={number} onClick={() => props.paginate(number)}>
                {number}
            </button>
        )
    }

    return (
        <nav>
            {pageNumbers.map(createPageButtons)}
        </nav>
    )
}