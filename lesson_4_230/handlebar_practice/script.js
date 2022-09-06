let post = [
  {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis <b>unde</b> omnis iste natus error sit <em>voluptatem</em> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    tags: [
      'Post',
      'Foo',
      'Bar'
    ]
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 5, 2015',
    body: 'Sed ut perspiciatis <b>unde</b> omnis iste natus error sit <em>voluptatem</em> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
  },
];

$(function() {
  let postTemplate = Handlebars.compile($('#post').html());

  Handlebars.registerPartial('tag', $('#tag').html());

  post.body = '<p>' + post.body + '</p>';

  $('body').html(postTemplate({ posts: post }));
})