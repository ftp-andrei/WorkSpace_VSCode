<?php ob_start() ?>
<table>
    <caption>Pacientes del medico con num <?= $_SESSION['numColegiado'] ?></caption>
    <thead>
    <th>Paciente</th>
    <th>Apellido</th>
    <th>Genero</th>
    <th>Nacimiento</th>
    <th>Fecha</th>
    <th>Hora</th>
    <th>Observaciones</th>
    </thead>
    <tbody>

    <tr>
    <td></td>
    </tr>
    <?php 
        foreach ($citas as $key => $value) { ?>
            <tr> 
            <td> <?= $value['paciente']?> </td>
            <td> <?= $value['apellido']?></td>
            <td> <?= $value['genero']?></td>
            <td> <?= $value['fnacimiento']?></td>
            <td> <?= $value['fcita']?></td>
            <td> <?= $value['hcita']?></td>
            <td> <?= $value['observaciones']?></td>
            </tr>
            <?php } ?>
    </tbody>
</table>

<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>