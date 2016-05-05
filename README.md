# FrunBootstrap

# Demo
http://nas.jorgechato.com/funbootstrap

# Production
## Install
```zsh
npm install --production
```
## Run
```zsh
node index.js #or forever index.js
```
# Develop
## Install
```zsh
npm install
bower install
```
## Run
```zsh
gulp
```
# Ressources
## Color
```less
@nav-color : #BDBDBD;
@sky : #6caff1;
@red : #ff5967;
@orange : #ff794d;
@blue : #5082e5;
@purple : #be5fb6;
@darkpink : #ff5867;
@lightblue : #33ccbe;
@yellow : #ffaf40;
@green : #68bf60;
@black : #262626;
@grey : #464646;
@inputgrey : #ccc;
@lightgrey : #b2b2b2;
@basegrey : #e4e4e4;
@darkerwhite : #f6f5f6;
@lime : #cccc52;
@purpleblue : #7870cc;
@bluegrey : #548899;
@basewhite : #fff;
@mainColor : @black;
```
## Font
```less
@import url("//fonts.googleapis.com/css?family=Lato:300,400,700");
@import "font-awesome";
```

# Technology
+ *Backend* Node.js
+ *Style*
  + Normalice.css
  + bootstrap 3
+ *Template Engine* swig

# Structure
```zsh
.
├── bower.json
├── dist          # production folder
│   ├── assets
│   │   └── img
│   │       ├── 1.jpg
│   │       ├── 2.jpg
│   │       ├── 3.jpg
│   │       ├── 4.jpg
│   │       ├── favicon.ico
│   │       ├── logo.png
│   │       └── ...
│   ├── fonts
│   │   ├── emoticons.eot
│   │   ├── emoticons.svg
│   │   ├── emoticons.ttf
│   │   ├── emoticons.woff
│   │   ├── FontAwesome.otf
│   │   ├── fontawesome-webfont.eot
│   │   ├── fontawesome-webfont.svg
│   │   ├── fontawesome-webfont.ttf
│   │   ├── fontawesome-webfont.woff
│   │   └── fontawesome-webfont.woff2
│   ├── scripts
│   │   ├── base.min.js
│   │   └── vendor.min.js
│   ├── style
│   │   ├── base.min.css
│   │   └── vendor.min.css
│   └── views    # views compressed by node in server side
│       ├── activities.html
│       ├── contact.html
│       ├── elements
│       │   ├── footer.html
│       │   └── nav.html
│       ├── events.html
│       ├── index.html
│       └── _layout.html
├── gulpfile.js
├── index.js    # Server
├── package.json
├── Procfile
├── README.md
└── src         # develop folder
    ├── scripts
    ├── style
    │   ├── import.less
    │   ├── split
    │   │   ├── _base.less
    │   │   ├── _footer.less
    │   │   └── _header.less
    │   └── _variables.less
    └── views
        ├── activities.html
        ├── contact.html
        ├── elements
        │   ├── footer.html
        │   └── nav.html
        ├── events.html
        ├── index.html
        └── _layout.html
```
