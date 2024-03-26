<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        require_once 'pizzas/getpizzas.php';
        break;
    case 'POST':
        require_once 'pizzas/postpizzas.php';
        break;
    case 'DELETE':
        require_once 'pizzas/deletepizzas.php';
        break;
    case 'PUT':
        require_once 'pizzas/putpizzas.php';
        break;
    default:
        break;
}