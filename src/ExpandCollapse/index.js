'use strict';

require('./styles.css');

const BaseComponent        = require('../BaseComponent');
const Toggle = require('../Toggle/');
const collapseTmpl         = require('./expandCollapseContent.tmpl');

class ExpandCollapse extends BaseComponent {
  constructor(el, opts) {
    super(el, {
      parentElement: opts.parentElement,
      preserveChildElements: true
    });
    const toggle = new Toggle(opts.toggleSelector, opts);
    toggle.render();

    toggle.subscribe((isToggled) => {
      this.expandCollapse(isToggled);
    });

    return this;
  }

  expandCollapse(isToggled) {
    if (isToggled) {
      const wrapperHeight = this.$el.find('.measuringWrapper')[0].clientHeight;
      this.$el.find('.grow').css('height', wrapperHeight + 'px');
    } else {
      this.$el.find('.grow').css('height', '0');
    }
  }

  render() {
    const innerContent = this.$el.html();
    this.$el.html(collapseTmpl(innerContent));
    return this.$el[0].outerHTML;
  }
}

module.exports = ExpandCollapse;