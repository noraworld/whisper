# Whisper
![screenshot](https://github.com/noraworld/whisper/blob/master/assets/img/screenshot_desktop.png)

The customized theme for [Ghost](https://github.com/TryGhost/Ghost).  
This theme is based on the default Ghost theme, [Casper](https://github.com/TryGhost/Casper).

## Dependencies
IMPORTANT! If you use this theme, you should edit the following things.

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

### Google Analytics
If you want to use the [Google Analytics](https://analytics.google.com), see `default.hbs` and check the part below.

```html
{{!-- <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-XXXXXXXX-X', 'auto');
  ga('send', 'pageview');
</script> --}}
```

Replace `UA-XXXXXXXX-X` with your tracking code and uncomment this script. If you don't need the Google Analytics, you can delete this script.

### Disqus
The injected [Disqus](https://disqus.com) code is same as the Google Analytics. See `post.hbs` and check the part below.

```html
{{!-- <section class="comments">
  <div id="disqus_thread"></div>
  <script type="text/javascript">
    var disqus_shortname = 'example';
    var disqus_identifier = '{{post.id}}';
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</section> --}}
```

Replace `example` with your Disqus forum shortname and uncomment this script. If your don't use the Disqus, you can delete it.

### Ghost API
This theme uses the [Ghost API](https://api.ghost.org) for the sidebar. If you don't edit this, your profile is not shown. See `assets/js/sidebar.js` and find the part below.

```javascript
$.get(ghost.url.api('users/slug/USERNAME')).done(function(data) {
  $('.sidebar .sidebar-profile').append('<img class="sidebar-profile-image" src="' + data.users[0].image + '"alt="' + data.users[0].name + '">');
  $('.sidebar .sidebar-profile').append('<h5 class="sidebar-profile-name">' + data.users[0].name + '</h5>');
  $('.sidebar .sidebar-profile').append('<p class="sidebar-profile-bio">' + data.users[0].bio + '</p>');
  $('.sidebar .sidebar-profile').fadeIn(1000);
}).fail(function(err) {
  console.log(err);
});
```

Replace `USERNAME` with your Ghost slug (user name).

## License
All codes of this repository are available under the MIT license. See the [LICENSE](https://github.com/noraworld/whisper/blob/master/LICENSE) for more information.
