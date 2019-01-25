# README

Sample application to show how to integrate Font Awesome 5 SVG Framework
with Ruby on Rails 5.

It will take advantage of the [webpacker](https://github.com/rails/webpacker)
gem, with tree shaking support out of the box.

### Prerequisites

1. Rails 5.1+
2. [Yarn](https://yarnpkg.com/lang/en/) 0.25.2+
3. [Node.js](https://nodejs.org/it/) 6.0.0+

### 1. Init a new application with webpacker

```sh
$ rails new fontawesome5demo --webpack
```

### 2. Add Font Awesome to package.json

```sh
$ yarn add @fortawesome/fontawesome-svg-core@^1.2.12
$ yarn add @fortawesome/free-brands-svg-icons@^5.6.3
$ yarn add @fortawesome/free-regular-svg-icons@^5.6.3
$ yarn add @fortawesome/free-solid-svg-icons@^5.6.3
```

### 3. Add Font Awesome JavaScript

Let's say you need `fas fa-star`, `far fa-star`, and `fab fa-font-awesome`.

Add this to your `/app/javascript/packs/application.js`:

```js
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
```

Refer to https://fontawesome.com/how-to-use/use-with-node-js for the whole documentation

### 4. Add the JavaScript pack to application layout

The standard location is `/app/views/layouts/application.html.erb`

Add this into the head element:
```erb
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

### 5. Profit!

## FAQs

### Is it possible to configure an existing application?
Yes. Please refer to [webpacker documentation](https://github.com/rails/webpacker#installation)

### Is it possible to use with Rails 4.2?
Yes. Please refer to [webpacker documentation](https://github.com/rails/webpacker#installation)
