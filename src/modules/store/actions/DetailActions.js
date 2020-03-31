import { RepoDetailActionType, ContributorActionType, OwnerActionType } from "../ActionType"


export const fetchRepoDetails = (id) => {
    return async dispatch => {
        dispatch(resetDetails())
        try {
            const res = await fetch(`https://api.github.com/repos/${id}`)
            const details = await res.json()
            dispatch(detailSuccess(details))
            dispatch(fetchContributors(id))
            dispatch(fetchOwner(details.owner.url))
        } catch (err) {
            dispatch(detailError(err))
        }
    }
}

export const fetchContributors = (id) => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.github.com/repos/${id}/contributors`)
            const contributors = await res.json()
            dispatch(contributorSuccess(contributors))
        } catch (err) {
            dispatch(contributorError(err))
        }
    }
}

export const fetchOwner = (url) => {
    return async dispatch => {
        try {
            const res = await fetch(url)
            const owner = await res.json()
            dispatch(ownerSuccess(owner))
        } catch (err) {
            dispatch(ownerError(err))
        }
    }
}

const detailSuccess = (payload) => ({ type: RepoDetailActionType.success, payload })

const detailError = (payload) => ({ type: RepoDetailActionType.error, payload })

export const resetDetails = () => ({ type: RepoDetailActionType.reset })

const contributorSuccess = (payload) => ({ type: ContributorActionType.success, payload })
const contributorError = (payload) => ({ type: ContributorActionType.error, payload })


const ownerSuccess = (payload) => ({ type: OwnerActionType.success, payload })
const ownerError = (payload) => ({ type: OwnerActionType.error, payload })