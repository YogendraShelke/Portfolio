import { RepoDetailActionType, ContributorActionType, OwnerActionType } from "../ActionType"

const initialState = { repo: undefined, error: undefined, contributors: undefined, owner: undefined }

export default function details(state = initialState, action) {
    switch (action.type) {
        case RepoDetailActionType.success:
            return { ...state, ...{ ...initialState, repo: action.payload } }
        case RepoDetailActionType.error:
            return { ...state, ...{ ...initialState, error: action.payload } }
        case RepoDetailActionType.reset:
            return { ...state, ...initialState }
        case ContributorActionType.success:
            return { ...state, contributors: action.payload }
        case OwnerActionType.success:
            return { ...state, owner: action.payload }
        default:
            return { ...state }
    }
}
