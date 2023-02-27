<?php
namespace app\iberia\modelo;
use app\iberia\modelo\AppException;
use DateTime;

class Pasajero
{
  private int $idPasajero;
  private string $nombre;
  private string $apellido;
  private string $dni;
  private \DateTime $fNacimiento;
  private int $idUsuario; 

  public function __construct(array $pasajero)
  {
    if(!$this->setNombre($pasajero['nombre'])){
      $error['nombre']='Nombre es obligatorio o está mal formado';
    }
    if(!$this->setApellido($pasajero['apellido'])){
      $error['apellido']='Apellido es obligatorio o está mal formado';
    }
    if(!$this->setDni($pasajero['dni'])){
      $error['dni']='DNI es obligatorio o formato incorrecto';
    }
    $fecha=$this->setFNacimiento($pasajero['fNacimiento']);
    if(is_string($fecha)){
      $error['fNacimiento']=$fecha;
    }
    if(isset($error)){
      throw new AppException($error, 'Hay errores en los datos del pasajero');
    }
  }
  /************************************** Mutadores ****************************/
  public function setIdPasajero(int $idPasajero)
  {
    $this->idPasajero=$idPasajero;
  }
  public function setIdUsuario(int $idUsuario)
  {
    $this->idUsuario=$idUsuario;
  }
  public function setNombre(string $nombre):bool
  {
    $expReg='/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){0,3}$/';
    if(!preg_match($expReg, $nombre)){
      return false;
    }
    $this->nombre=$nombre;
    return true;
  }
  public function setApellido(string $apellido):bool
  {
    $expReg='/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(-[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(-[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?){0,3}$/';
    if(!preg_match($expReg, $apellido)){
      return false;
    }
    $this->apellido=$apellido;
    return true;
  }
  
  public function setDni(string $dni):bool
  {
    $expReg='/^[0-9]{8}[A-Z]$/';
    if(!preg_match($expReg, $dni)){
      return false;
    }
    $this->dni=$dni;
    return true;
  }
  public function setFNacimiento(string $fNacimiento):string | bool
  {
    if(!$fecha=\DateTime::createFromFormat('Y-m-d',$fNacimiento)){
      return 'Formato de fecha incorrecto';
    }
    $hoy=new DateTime("now");
    if($fecha >= $hoy){
      return 'Fecha de nacimiento inconsistente';
    }
    $this->fNacimiento=$fecha;
    return true;
  }
  /************************************** Accesores ****************************/
  public function getIdPasajero():int
  {
    return $this->idPasajero;
  }
  public function getNombre():string
  {
    return $this->nombre;
  }
  public function getApellido():string
  {
    return $this->apellido;
  }
  public function getDni():string
  {
    return $this->dni;
  }
  public function getFNacimiento():\DateTime
  {
    return $this->fNacimiento;
  }
  public function getIdUsuario():int 
  {
    return $this->idUsuario;
  }
/********************************* Serialización ********************/
  public function __serialize(): array
  {
    return [
      'idPasj'=>$this->idPasajero,
      'nombre'=>$this->nombre,
      'apellido'=>$this->apellido,
      'dni'=>$this->dni,
      'fNacimiento'=>$this->fNacimiento->format('Y-m-d'),
      'idUsu'=>$this->idUsuario,
    ];
  }
  public function __unserialize(array $data): void
  {
    $this->idPasajero=$data['idPasj'];
    $this->nombre=$data['nombre'];
    $this->apellido=$data['apellido'];
    $this->dni=$data['dni'];
    $this->fNacimiento=\DateTime::createFromFormat('Y-m-d',$data['fNacimiento']);
    $this->idUsuario=$data['idUsu'];
  }
}