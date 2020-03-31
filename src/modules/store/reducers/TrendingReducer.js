import { TrendingActionType } from "../ActionType"

const initialState = { repos: [], error: undefined }

export default function trending(state = initialState, action) {
    switch (action.type) {
        case TrendingActionType.success:
            return { ...state, error: undefined, repos: action.payload }
        case TrendingActionType.error:
            return { ...state, repos: [], error: action.payload }
        default:
            return { ...state }
    }
}
