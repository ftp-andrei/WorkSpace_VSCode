<?php 
namespace app\CitasMedicas\repositorio;
use ConexionBd;

class MedicoRepositorio
{
    // Comprueba si existe el medico
    public function existeMedico(string $numColegiado): bool{
        $sql = 'SELECT NumColegiado FROM Medico WHERE NumColegiado = :numColegiado';
        // var_dump($numColegiado);
        require_once __DIR__.'/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($sql);
            $snt -> bindValue(':numColegiado', $numColegiado);
            $snt -> execute();
            //Fetch devuelve un array
            $fila=$snt ->fetch(\PDO::FETCH_ASSOC);
            // Devuelve true si existe
            return !(empty($fila));
        } catch (\PDOException $th) {
            throw $th;
        }finally{
            if(isset($snt)){
                unset($snt);
                unset($con);
            }
        }
    }

    public function getCitasMedico(string $numColegiado): array{
        $citas= "SELECT fcita,hcita,apellido,nombre as paciente, fnacimiento, genero= case hombre 
        when 1 then 'hombre' 
        when 0 then 'mujer'
        end, observaciones 
        FROM cita as c inner join paciente as p on c.idpaciente=p.idpaciente and idmedico=(select idmedico from medico where numColegiado = :numColegiado) and (fcita= getdate() or fcita = dateadd(day,1,getdate()))";

        require_once __DIR__.'/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($citas);
            $snt -> bindValue(':numColegiado', $numColegiado);
            $snt -> execute();
            //Fetch devuelve un array
            $citas=$snt ->fetchAll(\PDO::FETCH_ASSOC);
            var_dump($citas);
            // Devuelve el array
            return $citas;
        } catch (\PDOException $th) {
            throw $th;
        }finally{
            if(isset($snt)){
                unset($snt);
                unset($con);
            }
        }
    }

    public function getAllEspecialidades(): array{
        $sql= 'SELECT DISTINCT especialidad FROM medico ORDER BY especialidad';
        require_once __DIR__.'/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($sql);
            $snt -> execute();
            //Fetch devuelve un array
            $sql=$snt ->fetchAll(\PDO::FETCH_ASSOC);
            // Devuelve el array
            return $sql;
        } catch (\PDOException $th) {
            throw $th;
        }finally{
            if(isset($snt)){
                unset($snt);
                unset($con);
            }
        }
    }
// Esto es para Solicitar Cita de los Pacientes
    public function saveCita(array $cita){
        $sql1 ='INSERT INTO cita(fcita,hcita,idpaciente,idmedico,observaciones) VALUES (:fcita,:hcita,:idpa,:idmed,:obs)';
        $sql2 ='SELECT idPaciente from paciente WHERE numSS= :numSS';
        $sql3 ='SELECT idMedico from medico where especialidad = :es';

        require_once __DIR__.'/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($sql1);
            $snt -> bindValue(':numSS', $cita['numSS']);
            $snt -> execute();
            //Fetch devuelve un array, al ser fetch devolverá 0 o 1
            $fila=$snt ->fetch(\PDO::FETCH_ASSOC);
            $idPa = $fila['idPaciente'];
            $snt = $con -> prepare($sql2);
            $snt -> bindValue(':es', $cita['especialidad']);
            $snt -> execute();
            $fila=$snt ->fetch(\PDO::FETCH_ASSOC);
            $idMed = $fila['idMedico'];
            $snt = $con -> prepare($sql3);
            $snt -> bindValue(':fcita', $cita['fcita']);
            $snt -> bindValue(':hcita', $cita['hcita']);
            $snt -> bindValue(':idpa', $idPa);
            $snt -> bindValue(':idmed', $idMed);
            $snt -> bindValue(':obs', $cita['obs']);
            $snt -> execute();

            // Devuelve el array
            return $citas;
        } catch (\PDOException $th) {
            throw $th;
        }finally{
            if(isset($snt)){
                unset($snt);
                unset($con);
            }
        }
    }
}