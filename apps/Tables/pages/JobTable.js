<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">

    <title>JobTable</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/starter-template/">

    <!-- Bootstrap core CSS -->
    <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!--Personal CSS -->
    <link rel="stylesheet" href="/css/style.css">
  </head>

  <body>

    <!-- Navigationbar -->
    <nav class="navbar navbar-expand-sm navbar-light bg-nav fixed-top">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a data-scroll class="nav-link" href="../main/views/pages/index">Home</a>
          </li>
          <li class="nav-item">
            <a data-scroll class="nav-link" href="../tables/pages/InventoryTable">InventoryTable</a>
          </li>
          <li class="nav-item">
            <a data-scroll class="nav-link" href="../tables/pages/JobTable">JobTable</a>
          </li>
          <li class="nav-item">
            <a data-scroll class="nav-link" href="../tables/pages/ToolTable">ToolTable</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" action="/user/sign-out" method="POST">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
        </form>
      </div>
    </nav>
    <!-- Navigationbar end -->

    <main role="main" class="container">

      <div class="starter-template">
        <h1>Welcome</h1>
        <h3>Something</h3>
        <h3>Something</h3>
        <h3>Something</h3>
      </div>

    </main>
    <!-- /.container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="../../assets/js/vendor/popper.min.js"></script>
    <script src="../../dist/js/bootstrap.min.js"></script>
  </body>
</html>
