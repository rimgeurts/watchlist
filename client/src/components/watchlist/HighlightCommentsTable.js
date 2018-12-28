import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import '../../styles/components/HighlightCommentsTable.scss'



class HighlightCommentTable extends React.Component {

    render() {
        return ( 
                <div className="comments-table-header">
                    <ul className="comments-table-wrapper">
                        <li className="comments-table-wrapper comments-table-wrapper__item"> 
                            Overall net limit increase amounts to 2.02bn with 81.2% of gross 
                            increases driven by 10 groups
                        </li>
                        <li className="comments-table-wrapper comments-table-wrapper__item">
                            Very significant (66%) concentration to Top 10 groups (out of 123) within 
                            selected portfolio, with only 0% rated IG
                        </li>
                        <li className="comments-table-wrapper comments-table-wrapper__item">
                            The watch list exposure is at 16%, visibly deteriorating vs 31-jul-2018
                        </li> 
                        <li className="comments-table-wrapper comments-table-wrapper__item">
                            Majority (79%) of limits are less than 5 years. Top 3 industries account 
                            for 66% of l/t limits
                        </li> 
                        <li className="comments-table-wrapper comments-table-wrapper__item">
                            Credit RWA shows a visible increase of 14% to now 2.4bn
                        </li> 
                        <li className="comments-table-wrapper comments-table-wrapper__item">
                            The overall relative EL ratio of 1.4% is elevated and has decreased 
                            in absolute terms by 19m
                        </li> 
                    </ul>
                </div>
        )
    }
}

export default HighlightCommentTable;