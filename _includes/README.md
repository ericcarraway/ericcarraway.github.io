## TODO

#### Dynamic Page Title
```
<title>
  {% if page.title == "Home" %}
    {{ site.title }} &middot; {{ site.tagline }}
  {% else %}
    {{ page.title }} &middot; {{ site.title }}
  {% endif %}
</title>
```

#### RSS
```
<link rel="alternate"
      type="application/rss+xml"
      title="RSS"
      href="/atom.xml">
```

#### Icons
```
<link rel="apple-touch-icon-precomposed"
      sizes="144x144"
      href="{{ site.baseurl }}/public/apple-touch-icon-precomposed.png">

<link rel="shortcut icon"
      href="{{ site.baseurl }}/public/favicon.ico">
```

#### HTML4 definition of the 'rel' attribute
http://gmpg.org/xfn/11
```
<link href="http://gmpg.org/xfn/11" rel="profile">
```

#### HTML best practices
https://github.com/hail2u/html-best-practices
