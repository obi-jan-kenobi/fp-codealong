// bad
var hi = function(name) {
  return 'Hi ' + name
}

var greeting = function(name) {
  return hi(name)
}

// better
greeting = hi

greeting('Jan') // 'Hi Jan'

// ignorant
var getServerStuff = function(callback) {
  return ajaxCall(function(json) {
    return callback(json)
  })
}

// this line
return ajaxCall(function(json) {
  return callback(json)
})

// is the same as this line
return ajaxCall(callback)

// so refactor getServerStuff
var getServerStuff = function(callback) {
  return ajaxCall(callback)
}

// ...which is equivalent to this
var getServerStuff = ajaxCall

httpGet('/post/2', function(json) {
  return renderPost(json);
});

// go back to every httpGet call in the application and explicitly pass err
// along.
httpGet('/post/2', function(json, err) {
  return renderPost(json, err);
});

// renderPost is called from within httpGet with however many arguments it wants
httpGet('/post/2', renderPost);

// specific to our current blog
var validArticles = function(articles) {
  return articles.filter(function(article) {
    return article !== null && article !== undefined;
  });
};

// vastly more relevant for future projects
var compact = function(xs) {
  return xs.filter(function(x) {
    return x !== null && x !== undefined;
  });
};
