import React from 'react'
import "./Details.css"
import { connect } from 'react-redux'
import { Card, Contributor, Owner } from './Card'

const Details = ({ repo, contributors, owner }) => {
    if (repo === undefined) return <div />
    const { name, description } = repo
    return (
        <div className="details-container">
            <h1 className="repo-name">{name}</h1>
            <p>{description}</p>
            <h3 className="section-header">Stats</h3>
            <div className="stats-container">
                {cardOptions(repo).map(e => <Card key={e.label} {...{ ...e }} />)}
            </div>
            <h3 className="section-header">Owner</h3>
            <div className="stats-container">
                {owner && <Owner {...{ ...owner }} />}
            </div>
            <h3 className="section-header">Contributors</h3>
            <div className="stats-container">
                {contributors && contributors.map(e => <Contributor key={e.id} {...{ ...e }} />)}
            </div>
        </div>
    )
}

const mapStateToProps = ({ details: { repo, contributors, owner } }) => ({ repo, contributors, owner })
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Details)


const cardOptions = ({ stargazers_count, forks, open_issues, network_count, subscribers_count }) => [
    {
        label: "Stars",
        value: stargazers_count
    },
    {
        label: "Forks",
        value: forks
    },
    {
        label: "Issues",
        value: open_issues
    },
    {
        label: "Subscribers",
        value: subscribers_count
    }
]