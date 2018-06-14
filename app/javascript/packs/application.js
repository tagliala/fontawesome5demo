/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import { library, dom } from '@fortawesome/fontawesome-svg-core'

import {
  faFontAwesome
} from '@fortawesome/free-brands-svg-icons'

import {
  faStar as farFaStar
} from '@fortawesome/free-regular-svg-icons';

import {
  faStar as fasFaStar
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFontAwesome,
  farFaStar,
  fasFaStar
);

// Change `observeMutationsRoot` value to `document.documentElement`
// to ensure compatibility with Turbolinks
dom.watch({ observeMutationsRoot: document.documentElement })
