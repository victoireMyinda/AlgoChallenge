<?php
class Users {
    protected $userName;
    protected $userAge;

    public function __construct($nom, $age){
        $this->userName = $nom;
        $this->userAge = $age;
    }
}

$pierre = new Users("pierre", 18);
$andre = new Users("andre", 20);
$paul = new Users("paul", 25);

console.log($pierre)

?>