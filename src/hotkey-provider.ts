import { HotkeyDescription, HotkeyProvider } from 'tabby-core';

import { Injectable } from '@angular/core';
import { SEARCH_IN_BROWSER_HOTKEYS } from './interfaces/interfaces';

@Injectable()
export class SearchInBrowserHotkeyProvider extends HotkeyProvider {
    async provide(): Promise<HotkeyDescription[]> {
        return [
            {
                id: SEARCH_IN_BROWSER_HOTKEYS.SEARCH_IN_BROWSER,
                name: 'Search with Browser',
            },
        ];
    }
}
