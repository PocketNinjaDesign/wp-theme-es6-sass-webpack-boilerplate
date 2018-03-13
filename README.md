# wp-theme-es6-sass-webpack-boilerplate
Using the foundation of the https://underscores.me/ theme here is some extra to include ES6 and Sass Atomic Design all compiled with webpack.

1. Installation
2. Usage
3. Testing
  - Lint
  - Mocha


## Installation

Before Use make sure Sass is installed correctly with Ruby https://sass-lang.com/install

Okay? good now this:

clone the project into your theme folder of the wordpress site or separate so you can copy the files into your own folder name if you want.

`$ npm install`

The theme name is called "Front End Structure" if you want to change it to something else then as per the instructions found on https://github.com/automattic/_s

So if you wanted to name it to "Whatever You Want"

1. Search for: 'front-end-structure' and replace with: 'whatever-you-want'
2. Search for: front_end_structure_ and replace with: whatever_you_want_
3. Search for: Text Domain: front-end-structure and replace with: Text Domain: whatever-you-want in style.css.
4. Search for: Front_End_Structure and replace with:  Whatever_You_Want
5. Search for: front-end-structure- and replace with: whatever-you-want-


## Usage

To watch your scss and js files:

`$ npm run watch`

The js is saved to the path "/js/index.js" and the scss is saved to the default file "/style.css"


## Testing

### Lint

eslint is added to the project.  In order to run type the following in the cmd line

`$ npm run lint`

The eslint config file "exlintrc.json" extends Airbnb and ignores line endings.

### Mocha tests will be adding very soon