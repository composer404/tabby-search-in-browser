import { Component } from '@angular/core';
import { ConfigService } from 'tabby-core';
import { SEARCH_ENGINES } from '../interfaces/interfaces';

@Component({
    template: require('./search-in-browser-settings.component.pug'),
})
export class SearchInBrowserSettingsComponent {
    engines = SEARCH_ENGINES;

    constructor(public config: ConfigService) {}

    getEngines(): SEARCH_ENGINES[] {
        return Object.values(this.engines);
    }
}
