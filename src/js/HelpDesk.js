import Tickets from './Tickets';

export default class HelpDesk {
    constructor(container) {
      if (!(container instanceof HTMLElement)) {
        throw new Error('This is not HTML element!');
      }
      this.container = container;
      this.api = new Tickets();
    }

    init() {
        console.log('this.container')
    }
}