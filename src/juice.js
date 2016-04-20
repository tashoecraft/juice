'use strict';

require('babel-polyfill');
const initFunc = require('./init');

// exposed dependences
const Dot = require('./Dot');
const i18n = require('./i18n');

// services
const BaseFragmentFactory = require('./BaseFragmentFactory');
const PubSubHub = require('./PubSubHub');
const State = require('./State');
const url = require('url');

// components
const Button = require('./Button');
const CurrentLocation = require('./CurrentLocation');
const ExpandCollapse = require('./ExpandCollapse/');
const InfiniteScroll = require('./InfiniteScroll');
const ListView = require('./ListView');
const LocationTextInput = require('./LocationTextInput');
const LocationTypeahead = require('./LocationTypeahead');
const MultiSelect = require('./MultiSelect');
const Pagination = require('./Pagination');
const RadioButtons = require('./RadioButtons');
const SingleSelect = require('./SingleSelect');
const TextInput = require('./TextInput');
const Toggle = require('./Toggle');
const Typeahead = require('./Typeahead');
const SentenceGenerator = require('./SentenceGenerator');
const Spinner = require('./Spinner');

const UIComponents = {
  // exposed dependences
  Dot,
  i18n,

  // services
  BaseFragmentFactory,
  PubSubHub,
  State,
  url,

  // components
  Button,
  CurrentLocation,
  ExpandCollapse,
  InfiniteScroll,
  ListView,
  LocationTextInput,
  LocationTypeahead,
  MultiSelect,
  Pagination,
  RadioButtons,
  SingleSelect,
  TextInput,
  Toggle,
  Typeahead,
  SentenceGenerator,
  Spinner
};

UIComponents.init = function init() {
  return initFunc.apply(UIComponents, arguments);
};

module.exports = UIComponents;