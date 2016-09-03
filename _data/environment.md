Set this flag to `true` to load local versions of dependencies.

```
is_local: false
```

### head.html
```
{% if site.data.environment.is_local %}
  <link rel="stylesheet" href="../path/to/bootstrap.min.css">
{% else %}
  <link rel="stylesheet" href="https://example-cdn.com/path/to/bootstrap.min.css">
{% endif %}
```

### footer-scripts.html
```
{% if site.data.environment.is_local %}
  <script src="../assets/js/vendor/jquery.min.js"></script>
  <script src="../assets/js/vendor/bootstrap.min.js"></script>
{% else %}
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
          integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
          crossorigin="anonymous"></script>
{% endif %}
```
