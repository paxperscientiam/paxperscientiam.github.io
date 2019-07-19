declare global  {
    // tslint:disable-next-line
    interface Window {
        jQuery: JQuery
        $: JQuery
    }
}

import "./scss/index.scss"

import "@paxperscientiam/bookblock"
