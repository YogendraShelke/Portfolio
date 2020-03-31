import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./Trending.css"
import { fetchTrendingRepos } from '../../store/actions/TrendingActions'
import { fetchRepoDetails } from '../../store/actions/DetailActions'

class Trending extends Component {

    state = { selectedIndex: 0 }

    componentDidMount() {
        this.props.fetchTrendingRepos()
    }

    renderRepo = (repo, index) => {
        const className = this.state.selectedIndex === index ? "card-container highlited" : "card-container"
        return (
            <div key={repo.id} className={className} onClick={() => this.onRepoClick(repo, index)}>
                <h4>{repo.name}</h4>
            </div>
        )
    }

    onRepoClick = (repo, index) => {
        this.setState({ selectedIndex: index })
        this.props.fetchRepoDetails(repo.full_name)
    }

    render() {
        const { repos } = this.props
        return (
            <div className="trending-container">
                {repos.map((repo, index) => this.renderRepo(repo, index))}
            </div>
        )
    }
}

const mapStateToProps = ({ trending: { repos } }) => ({ repos })
const mapDispatchToProps = { fetchTrendingRepos, fetchRepoDetails }

export default connect(mapStateToProps, mapDispatchToProps)(Trending)