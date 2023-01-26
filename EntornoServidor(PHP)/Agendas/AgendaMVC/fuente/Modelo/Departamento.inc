<?php

namespace app\educacion\agenda\fuente\modelo;

use \DateTime;
use \app\educacion\agenda\fuente\modelo\exception\AppException;

class Departamento
{
    /**
     * Undocumented variable
     *
     * @var integer|null
     */
    private ?int $id = null;
    /**
     * Undocumented variable
     *
     * @var string
     */
    private string $nombre = '';
    /**
     * Undocumented variable
     *
     * @var string
     */
    private string $division = '';
    /**
     * Undocumented variable
     *
     * @var DateTime
     */
    private ?DateTime $fModificado = null;

    public function __construct(array $departamento)
    {
        if (is_string($error = $this->setNombre($departamento['nombre'])))
            $errores['nombre'] = $error;
        if (is_string($error = $this->setDivision($departamento['division'])))
            $errores['division'] = $error;
        if (is_string($error = $this->setFModificado($departamento['fMod'])))
            $errores['fMod'] = $error;
        if (isset($errores)) {
            require_once __DIR__ . '/exception/AppException.inc';
            throw new AppException($errores);
        }
    }
    /*********************************Mutadores*********************************/
    /**
     * Undocumented function
     *
     * @param string $nombre
     * @return boolean|string
     */
    public function setNombre(string $nombre): bool|string
    {
        $expReg = '/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{1,20}(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{1,20}){0,4}$/';
        if (!preg_match($expReg, $nombre))
            return 'Formato de nombre no válido o falta';
        $this->nombre = $nombre;
        return true;
    }
    /**
     * Undocumented function
     *
     * @param string $division
     * @return boolean|string
     */
    public function setDivision(string $division): bool|string
    {
        $expReg = '/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{1,20}(\s[A-ZÁÉÍÓÚÑ]{0,1}[a-záéíóúñ]{1,20}){0,4}$/';
        if (!preg_match($expReg, $division))
            return 'Formato de división no válido o falta';
        $this->division = $division;
        return true;
    }
    /**
     * Undocumented function
     *
     * @param string $fModificado
     * @return boolean|string
     */
    public function setFModificado(string $fModificado): bool|string
    {
        if(empty($fModificado)){
            return true;
        }
        if (!($fecha = DateTime::createFromFormat('Y-m-d', $fModificado)))
            return 'Formato de fecha no válido o falta';
        if ($fecha > new DateTime('now'))
            return 'Fecha de modificación no puede ser superior a la fecha de hoy';
        $this->fModificado = $fecha;
        return true;
    }
    /*********************************Accesores*********************************/
    public function getNombre(): string
    {
        return $this->nombre;
    }
    public function getDivision(): string
    {
        return $this->division;
    }
    public function getFModificado(): ?DateTime
    {
        return $this->fModificado;
    }
}
