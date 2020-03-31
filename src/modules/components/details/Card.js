import React from 'react'
import "./Card.css"

export function Card({ label, value }) {
    return (
        <div className="detail-card">
            <h1>{value}</h1>
            <p>{label}</p>
        </div>
    )
}

export function Contributor({ avatar_url, login }) {
    return (
        <div className="contributor-card">
            <img className="image" alt={login} src={avatar_url} />
            <h6>{login}</h6>
        </div>
    )
}

export function Owner(owner) {
    const { name, location, public_gists, public_repos, followers, following, avatar_url, login } = owner
    return (
        <div className="owner-card">
            <img className="owner-image" alt={login} src={avatar_url} />
            <div className="owner-stats">
                <h3>{name}</h3>
                <p>{location}</p>
                <div className="stats-row">
                    <OwnerStats label="Repositories" value={public_repos} />
                    <OwnerStats label="Gists" value={public_gists} />
                </div>
                <div className="stats-row">
                    <OwnerStats label="Followers" value={followers} />
                    <OwnerStats label="Following" value={following} />
                </div>
            </div>
        </div>
    )
}


export function OwnerStats({ label, value }) {
    return (
        <div className="owner-stats-card">
            <h3>{value}</h3>
            <p className="owner-stats-label">{label}</p>
        </div>
    )
}