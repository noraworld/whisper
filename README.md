# Whisper
![screenshot](https://github.com/noraworld/whisper/blob/master/assets/img/screenshot_desktop.png)

The customized theme for [Ghost](https://github.com/TryGhost/Ghost).  
This theme is based on the default Ghost theme, [Casper](https://github.com/TryGhost/Casper).

## Dependencies
**IMPORTANT:** If you use this theme, you should edit the following things.

### SNS links
See `default.hbs` and find the part below.

```html
<ul class="header-navigation">
  <li><a href="YOUR_HOMEPAGE_LINK"><span>Home</span></a></li>
  <li><a href="{{@blog.url}}"><span>Blog</span></a></li>
  <li><a href="YOUR_OTHER_PAGE_LINK"><span>Something</span></a></li>
  <li><a class="twitter" href="https://twitter.com/YOUR_TWITTER_ACCOUNT" target="_blank"><i class="sns-twitter"></i></a></li>
  <li><a class="instagram" href="https://www.instagram.com/YOUR_INSTAGRAM_ACCOUNT" target="_blank"><i class="sns-instagram"></i></a></li>
  <li><a class="github" href="https://github.com/YOUR_GITHUB_ACCOUNT" target="_blank"><i class="sns-github"></i></a></li>
  <li><a class="qiita" href="http://qiita.com/YOUR_QIITA_ACCOUNT" target="_blank"><i class="sns-qiita"></i></a></li>
</ul>

<a class="sns-hamburger hamburger-button" id="hamburger-button"></a>
<ul class="hamburger-menu" id="hamburger-menu">
  <li><a href="YOUR_HOMEPAGE_LINK"><span>Home</span></a></li>
  <li><a href="{{@blog.url}}"><span>Blog</span></a></li>
  <li><a href="YOUR_OTHER_PAGE_LINK"><span>Something</span></a></li>
  <li><a href="https://twitter.com/YOUR_TWITTER_ACCOUNT" target="_blank"><span>Twitter</span></a></li>
  <li><a href="https://www.instagram.com/YOUR_INSTAGRAM_ACCOUNT" target="_blank"><span>Instagram</span></a></li>
  <li><a href="https://github.com/YOUR_GITHUB_ACCOUNT" target="_blank"><span>GitHub</span></a></li>
  <li><a href="http://qiita.com/YOUR_QIITA_ACCOUNT" target="_blank"><span>Qiita</span></a></li>
</ul>
```

Replace links or anchors with your own things. Append or delete lists if you want or don't want these.

### Environment variables
This theme supports the following tools.

* Google Analytics
* Disqus
* Ghost API

Create a `env.js` file in `assets/js/` directory, and paste the code below.

```javascript
// This is the environment variables for injected JavaScript codes.

// If true, the Google Analytics is enabled
var isAnalytics = false;
// Paste your tracking code here (if you use the Google Analytics)
var trackingCode = 'UA-XXXXXXXX-X';

// If true, the Disqus comment system is enabled
var isDisqus = false;
// Paste your Disqus shortname here (if you use the Disqus)
var disqusUsername = 'example';

// Paste your Ghost slug
var ghostSlug = 'example';
```

Replace the values according to your own environment referring to the comments.

**NOTE:** This file is necessary even if you do not use all of the tools above.

## License
All codes of this repository are available under the MIT license. See the [LICENSE](https://github.com/noraworld/whisper/blob/master/LICENSE) for more information.
