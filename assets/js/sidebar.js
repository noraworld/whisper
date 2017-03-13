// Profile
// NOTE: Replace `noraworld` with your Ghost slug (user name)
$.get(ghost.url.api('users/slug/' + ghostSlug)).done(function(data) {
  $('.sidebar .sidebar-profile').append('<img class="sidebar-profile-image" src="' + data.users[0].image + '"alt="' + data.users[0].name + '">');
  $('.sidebar .sidebar-profile').append('<h5 class="sidebar-profile-name">' + data.users[0].name + '</h5>');
  $('.sidebar .sidebar-profile').append('<p class="sidebar-profile-bio">' + data.users[0].bio + '</p>');
  $('.sidebar .sidebar-profile').fadeIn(1000);
}).fail(function(err) {
  console.info('The detailed error is here.');
  console.info(err);
});

// Categories
$.get(ghost.url.api('tags')).done(function(data) {
  for (var i = 0; i < data.tags.length; i++) {
    $('.sidebar .sidebar-categories ul').append('<li class="sidebar-categories-list"><a href="/tag/' + data.tags[i].slug + '" alt="' + data.tags[i].name + '">' + data.tags[i].name + '</a></li>');
    $('.nav ul').append('<li class="nav-' + data.tags[i].slug + '"><a href="/tag/' + data.tags[i].slug + '" alt="' + data.tags[i].name + '">' + data.tags[i].name + '</a></li>');
  }
  $('.sidebar .sidebar-categories').fadeIn(1000);
}).fail(function(err) {
  console.info('The detailed error is here');
  console.info(err);
});

// Recent Posts
$.get(ghost.url.api('posts', {limit: 15})).done(function(data) {
  for (var i = 0; i < data.posts.length; i++) {
    $('.sidebar .sidebar-recent-posts ul').append('<li class="sidebar-recent-posts-list"><a href="/' + data.posts[i].slug + '" alt="' + data.posts[i].title + '">' + data.posts[i].title + '</a></li>');
  }
  $('.sidebar .sidebar-recent-posts').fadeIn(1000);
}).fail(function(err) {
  console.info('The detailed error is here');
  console.info(err);
});
