import {
    AppService,
    BaseTabComponent,
    ConfigService,
    HotkeysService,
    PlatformService,
    SplitTabComponent,
} from 'tabby-core';
import { SEARCH_ENGINES, SEARCH_IN_BROWSER_HOTKEYS } from '../interfaces/interfaces';

import { BaseTerminalTabComponent } from 'tabby-terminal';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchInBrowserService {
    constructor(
        private readonly appSerivce: AppService,
        private readonly hotkeyService: HotkeysService,
        private readonly platformService: PlatformService,
        private readonly configService: ConfigService,
    ) {}

    /**
     * Description. Subscribes for search in browser hotkey
     */
    init(): void {
        this.hotkeyService.hotkey$.subscribe((hotkey) => {
            if (hotkey === SEARCH_IN_BROWSER_HOTKEYS.SEARCH_IN_BROWSER) {
                const selections = this.searchForSelections();
                if (selections.length) {
                    for (const selectedText of selections) {
                        this.openSelectedTextInBrowser(selectedText);
                    }
                }
            }
        });
    }

    /**
     * Opens selected text in system default browser using default search engine
     */
    openSelectedTextInBrowser(selectedText: string): void {
        const defaultEngine = this.configService.store.searchInBrowserPlugin.defaultEngine;
        const link = `https://${defaultEngine || SEARCH_ENGINES.GOOGLE}/${
            defaultEngine === SEARCH_ENGINES.DUCKDUCKGO ? `` : `search`
        }?q=${selectedText}`;
        this.platformService.openExternal(link);
    }

    /**
     * Returns text selected by user
     */
    getSelectedText(tab: BaseTabComponent): string {
        const selectedText = (tab as BaseTerminalTabComponent).frontend?.getSelection();
        return selectedText;
    }

    private searchForSelections(): string[] {
        const activeTab = (this.appSerivce.activeTab as SplitTabComponent).root;
        const selections: string[] = [];
        if (activeTab) {
            for (const tab of activeTab.children) {
                const selectedText = this.getSelectedText(tab as BaseTerminalTabComponent);
                if (selectedText) {
                    selections.push(selectedText);
                }
            }
        }
        return selections;
    }
}
