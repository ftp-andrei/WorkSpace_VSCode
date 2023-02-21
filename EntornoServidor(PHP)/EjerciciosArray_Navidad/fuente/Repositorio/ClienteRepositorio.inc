<?php
namespace app\ejercicios\repositorio;
class ClienteRepositorio{
    public function sanitizarText(string $text):string{
        return htmlspecialchars($text);
    }

    public function sanitizarNumber(int $number):int{
        return htmlspecialchars($number);
    }

    public function sanitizarMail(string $email):string{
        return filter_var($email , FILTER_SANITIZE_EMAIL);
    }
}

?>