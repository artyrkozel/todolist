import React from 'react'

import App from './App'
import {ReduxStoreProviderDecorator, BrowserRouterDecorator} from '../stories/decorators/ReduxStoreProviderDecorator'

export default {
    title: 'App Stories',
    component: App,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator]
}

export const AppBaseExample = (props: any) => {
    return (<App demo={true} />)
}
