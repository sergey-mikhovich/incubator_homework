const initState = {
    themeId: 1,
}

type ThemeState = typeof initState

export const themeReducer = (state = initState, action: ActionType): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

type ActionType = ChangeThemeIdActionType

export type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
