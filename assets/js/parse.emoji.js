twemoji.parse(document.body, {
  callback: function(icon, options, vatiant) {
    switch (icon) {
      case   'a9':  // copyright
      case   'ae':  // registered trademark
      case '2122':  // trademark
            return false;
    }
    return ''.concat(options.base, options.path, '/', icon, options.ext);
  }
});
