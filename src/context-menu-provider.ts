import { BaseTabComponent, MenuItemOptions, TabContextMenuItemProvider } from 'tabby-core';

import { Injectable } from '@angular/core';
import { SearchInBrowserService } from './services/search-in-browser.service';

@Injectable()
export class SearchInBrowserContextMenuProvider extends TabContextMenuItemProvider {
    constructor(private readonly searchInBrowserSerivce: SearchInBrowserService) {
        super();
    }

    async getItems(tab: BaseTabComponent): Promise<MenuItemOptions[]> {
        let items: MenuItemOptions[] = [];
        const selectedText = this.searchInBrowserSerivce.getSelectedText(tab);

        if (selectedText) {
            items = [
                {
                    label: 'Search with Browser',
                    click: () => {
                        this.searchInBrowserSerivce.openSelectedTextInBrowser(selectedText);
                    },
                },
            ];
        }
        return items;
    }
}
