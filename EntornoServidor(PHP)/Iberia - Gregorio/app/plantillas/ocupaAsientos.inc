<?php ob_start(); 
?>
<h1>Ocupación de los asientos reservados</h1>
<h2>Vuelo <?=$vuelo?> el día <?=$fecha?> con origen <?=$origen?> y destino <?=$destino?></h2>
<p id="aviso"></p>
<form method="post" id="formQueAsientos">
<table>
  <thead>
    <tr>
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach($ocupVuelo['filas'] as $key =>$value): ?>
      <tr>
        <td>Fila <?=$key?></td>
        <?php foreach($arrAsientos as $clave => $valor): ?>
        <td><?=($value&$valor)?'<span style="color:red">Ocupado</span>': 
                               '<input type="checkbox" class="casilla"
                               name="asiento['.$key.']['.$clave.']" value="'.$valor.'" '.
                               'onclick="verificaPlazas(event)">'?></td>
        <?php endforeach; ?>
        <td><input type="number" value=<?=$value?> name="fila[<?=$key?>]" readonly hidden></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
<select name="pasajeros" id="pasajeros" autofocus>
  <option value="" selected>Selecciona el pasajero para el que se reserva la plaza</option>
  <?php foreach($pasajeros as $value): var_dump($value);?>
  <option value="<?=$value['idPasajero']?>"><?=$value['Pasajero']?></option>
  <?php endforeach; ?>
</select>
<input type="submit" name="ok" id="ok" value="Reservar asientos" disabled>
</form>
<dialog style="z-index:100;" id="dialogo">
  <p class="error">Debes seleccionar el pasajero para el que se reserva la plaza</p>
  <button id="aceptar" name="aceptar" onclick="document.getElementById('dialogo').open=false">Aceptar</button>
</dialog>
<script type="text/javascript">
  let asientos=<?= json_encode($_SESSION['quedan'])?>;
  function verificaPlazas(obj){
    let nombre=obj.target.name.toString();
    let elemento=document.getElementsByName(obj.target.name);
    let pasajeros=document.getElementById("pasajeros");
    if(pasajeros[0].selected && obj.target.checked){
      //alert("Selecciona el pasajero al que asignar la plaza");
      document.getElementById("dialogo").open=true;
      elemento[0].checked=false;
    } else {
      let pasajero;
      let num=pasajeros.length;
      for(var j=0;j<num;j++){
        if(pasajeros[j].selected){
          pasajero=pasajeros[j];
          break;
        }
      }
      if(obj.target.checked==true){
        asientos--;
        elemento[0].className= "seleccionado";
        elemento[0].value=pasajero.value;
        pasajero.disabled=true;
        if(asientos == 0){
          pasajeros.disabled=true;
          var casillas = document.querySelectorAll("input.casilla");
          var cant = casillas.length;
          for(var x=0; x<cant; x++){
          //  if(casillas[x].checked==false){
              casillas[x].disabled=true;
          //  }
          }
          document.getElementById("ok").disabled=false;
          document.getElementById("aviso").innerHTML="Ya ha seleccionado todas sus plazas.<br> Si desea continuar asignando las plazas a los pasajeros pulse el botón Reservar asientos";
        }
      } else {
        if(asientos == 0){
          pasajeros.disabled=false;
          var casillas = document.querySelectorAll("input.casilla");
          var cant = casillas.length;
          for(var x=0; x<cant; x++){
          //  if(casillas[x].disabled==true){
              casillas[x].disabled=false;
          //  }
          }
          document.getElementById("aviso").innerHTML="";
          document.getElementById("ok").disabled=true;
        }
        cant=pasajeros.length;
        for(var x=1;x<cant;x++){
          if(pasajeros[x].value==elemento[0].value){
            pasajeros[x].disabled=false;
            break;
          }
        }
        asientos++;
        elemento[0].className= "casilla";
      }
      pasajeros[0].selected=true;
    }
//    console.log(obj.target.checked);
  console.log(elemento);
  //console.log(pasajero);
  console.log(pasajeros);
  }
</script>

<?php $contenido=ob_get_clean(); include 'base.php' ?>