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
        FROM cita as c inner join paciente as p on c.idpaciente=p.idpaciente and idmedico=(select idmedico from medico where numColegiado = :numColegiado)";
//  and (fcita= getdate() or fcita = dateadd(day,1,getdate()))";
        require_once __DIR__.'/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($citas);
            $snt -> bindValue(':numColegiado', $numColegiado);
            $snt -> execute();
            //Fetch devuelve un array
            $citas=$snt ->fetchAll(\PDO::FETCH_ASSOC);
            // var_dump($citas);
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
        //sql principal
        $sql1 ='INSERT INTO cita(fcita,hcita,idpaciente,idmedico,observaciones) VALUES (:fcita,:hcita,:idpa,:idmed,:obs)';
        // Devuelve el id de paciente, para la sql principal
        $sql2 ='SELECT idPaciente from paciente WHERE numSS= :numSS';
        // Devuelve el id del medico, para la sql principal
        $sql3 ='SELECT idMedico from medico where especialidad = :es';
        //Mostramos las citas del paciente
        $sql4= '
        SELECT p.numss,p.nombre,p.apellido,m.Especialidad,c.Observaciones,c.fcita,c.hcita FROM cita c JOIN paciente p ON p.idpaciente=c.idpaciente JOIN medico m ON m.idmedico=c.idmedico where p.idpaciente = :idpa and m.especialidad = :es;';

        require_once __DIR__.'/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($sql2);
            $snt -> bindValue(':numSS', intval($cita['ss']));
            $snt -> execute();
            //Fetch devuelve un array, al ser fetch devolverá 0 o 1
            $fila=$snt ->fetch(\PDO::FETCH_ASSOC);
            // Esto devolverá el id del paciente
            // poner ifelse en caso de errores con la sql
            $idPa = $fila['idPaciente'];
            $snt = $con -> prepare($sql3);
            $snt -> bindValue(':es', $cita['especialidad']);
            $snt -> execute();
            $fila=$snt ->fetch(\PDO::FETCH_ASSOC);
            // Esto devolverá el id del medico
            $idMed = $fila['idMedico'];
            $snt = $con -> prepare($sql1);
            $snt -> bindValue(':fcita', $cita['fcita']);
            $snt -> bindValue(':hcita', $cita['hcita']);
            $snt -> bindValue(':idpa', $idPa);
            $snt -> bindValue(':idmed', $idMed);
            $snt -> bindValue(':obs', $cita['observaciones']);
            // Devuelve el array
            if($snt -> execute()){

            $snt = $con -> prepare($sql4);
            $snt -> bindValue(':es', $cita['especialidad']);
            $snt -> bindValue(':idpa', $idPa);
            $snt -> execute();
            $sql4=$snt ->fetchAll(\PDO::FETCH_ASSOC);
                // Devuelve el array
                return $sql4;
            }
            
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