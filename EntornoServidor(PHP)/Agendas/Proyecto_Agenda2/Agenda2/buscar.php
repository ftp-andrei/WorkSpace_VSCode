<?php
session_start();
include 'funcionesFormulario.php';
$fileAgenda = 'users/' . $_SESSION['email'] . '.txt';
$fileUsers = 'users.txt';
$users = unserialize(file_get_contents($fileUsers));
$agenda = unserialize(file_get_contents($fileAgenda));
// file_put_contents($fileAgenda, serialize($agenda));
?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />

  <title>Agenda Equipo 2</title>
  <meta content="Agenda del equipo 2" name="description" />
  <meta content="Agenda, Deberes, PHP" name="keywords" />
  <meta name="author" content="Equipo 2">

  <!-- Favicons -->
  <link href="assets/img/agenda.png" rel="icon" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="assets/css/stylish.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet" />
</head>

<body style="background:#e1fcff">
  <!-- ======= Mobile nav toggle button ======= -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img src="assets/img/icon.png" alt="" class="img-fluid rounded-circle" />
        <h1 class="text-light">
          <a href="inicio.php">Bienvenid@ <?= ucfirst($users[$_SESSION['email']]['nickname']) ?></a>
        </h1>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <a href="inicio.php" class="nav-link scrollto"><i class="bx bx-home"></i> <span>Inicio</span></a>
          </li>
          <li>
            <a href="" class="nav-link scrollto active"><i class="bx bx-search"></i> <span>Buscar contacto</span></a>
          </li>
          <li>
            <a href="aniadir.php" class="nav-link scrollto"><i class="bx bx-user-plus"></i> <span>Añadir contacto</span></a>
          </li>
          <?= $users[$_SESSION['email']]['role']=='role_admin'? '
            <li>
            <a href="gestionUsuarios.php" class="nav-link scrollto"><i class="bx bx-show"></i> <span>Gestionar usuarios</span></a>
            </li>':'' 
          ?>
          <hr />
          <li>
            <form action="#" method="POST">
              <a class="nav-link scrollto"><i class="bx bx-log-out"></i> <span><button type="submit" name="closeSession" id="logOut">Cerrar sesión</button></span></a>
            </form>
            <?php
            if (isset($_POST['closeSession'])) {
              closeSession();
            }
            ?>
          </li>
        </ul>
      </nav>
      <!-- .nav-menu -->
    </div>
  </header>
  <!-- Fin Header -->

  <!-- ======= Hero Section ======= -->

  <main id="main">
    <div class="container" style="padding: 5%; height: auto">
      <!DOCTYPE html>
      <html lang="es">

      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agenda</title>

      </head>

      <body>




        <?php
        if (!empty($agenda)) {


          echo <<< end
            <form action="" method="POST">
            <fieldset>
            <div class="row">
              <div class="col-md-12">
                <h3 class="animate-charcter"> Buscar Contacto </h3>
              </div>
            </div>
              <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <p> <label for="form_name">Nombre</label>
                    <input id="form_name" type="text" name="nombre" class="form-control" value="">
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <p> <label for="form_lastname">Apellidos</label>
                    <input id="form_lastname" type="text" name="apellidos" class="form-control" value="">
                  </p>
                </div>
              </div>
            </div>
              <p>
                <label for="ciudad">Ciudad</label>
          end;
          selectComunidades();
          echo <<< end
                </p>
                <div class="row">
              <div class="col-md-12">
                <button type="submit" style=" float:right" class="btn btn-primary" name="consultarOK">Buscar</button>
              </div>
            </div>
              </fieldset>
            </form>
            <br>
          end;
          if (isset($_POST['consultarOK'])) {
            consultarContacto($_POST['nombre'], $_POST['apellidos'], $_POST['ciudad'], $agenda);
          }
        } else {
          echo '<h3 class="animate-charcter"> Buscar Contacto </h3><br>';
          echo 'Tu agenda está vacía,<a href="aniadir.php"> añade contactos </a>.';
        }
        ?>
      </body>

      </html>
    </div>
  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Equipo 2</span></strong>
      </div>
      <div class="credits">

        Designed by <a href="https://bootstrapmade.com/">Equipo 2</a>
      </div>
    </div>
  </footer>
  <!-- Fin  Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/typed.js/typed.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
</body>

</html>