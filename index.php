<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pixelcradle</title>
    <link rel="icon" type="image/png" href=".images/logo_joystick.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>

<body>
<nav>
<div class="logo">Pixelcradle</div>
    <div class="nav-items">
        <a href="index.html">Domov</a>
        <a href="ZoznamHier.html">Zoznam hier</a>
        <a href="ONas.html">O nás</a>
    </div>
</nav>

    <div class="container my-5">
        <h2>List uživateľov</h2>
        <a class="btn btn-primary" href="/create.php" role="button">Nový uživateľ</a>
        <br>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Meno</th>
                <th>Email</th>
                <th>Vytvorené</th>
                <th>Akcia</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $database = "user";

            $connection = new mysqli($servername, $username, $password, $database);

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $sql = "SELECT * FROM clients";
            $result = $connection->query($sql);

            if (!$result) {
                die("Invalid query: " . $connection->error);
            }

            while($row = $result->fetch_assoc()) {
                echo "
                <tr>
                    <td>$row[id]</td>
                    <td>$row[Meno]</td>
                    <td>$row[Email]</td>
                    <td>$row[Vytvorené]</td>
                    <td>$row[Akcia]</td>
                    <td>
                        <a class='btn btn-primary btn-sm' href='edit.php?id=$row[id]'>Zmeniť</a>
                        <a class='btn btn-primary btn-sm' href='delete.php?id=$row[id]'>Odstrániť</a>
                    </td>
                </tr>
                ";
            }


            ?>


            </tbody>
        </table>
    </div>


</body>
</html>