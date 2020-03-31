import { TrendingActionType } from "../ActionType"
import { fetchRepoDetails } from "./DetailActions"
const { success, error } = TrendingActionType

export const fetchTrendingRepos = () => {
    return async dispatch => {
        try {
            const res = await fetch('https://api.github.com/repositories')
            const list = await res.json()
            dispatch(({ type: success, payload: list }))
            if (Array.isArray(list) && list.length) {
                dispatch(fetchRepoDetails(list[0].full_name))
            }
        } catch (err) {
            dispatch(({ type: error, payload: err }))
        }
    }
}