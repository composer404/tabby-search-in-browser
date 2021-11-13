import { SEARCH_ENGINES, SEARCH_IN_BROWSER_HOTKEYS } from './interfaces/interfaces';

import { ConfigProvider } from 'tabby-core';

export class SearchInBrowerProvider extends ConfigProvider {
    defaults = {
        searchInBrowserPlugin: {
            defaultEngine: SEARCH_ENGINES.GOOGLE,
        },
        hotkeys: {
            [SEARCH_IN_BROWSER_HOTKEYS.SEARCH_IN_BROWSER]: [],
        },
    };
}
