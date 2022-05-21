# ALOS_act3

Dans cette version de l'API, j'ajoute l'API Versioning et l'authentification JWT à mon API.
1. Le versionnage :

v1: Le premier numéro ne s'intéresse qu'aux journaux et aux actualités.


v2: Dans la version 2, vous pouvez interroger les utilisateurs, en plus de tout dans la version 1. De plus, la version 2 fournit une authentification et une autorisation pour tous les chemins.
2.comment utiliser :
lancer le serveur en tapant dans le terminal 
npm start
the
npm install
the go to the url:
http://localhost:3000
3.Authentification :
Vous pouvez utiliser /api/auth/register pour enregistrer un compte utilisateur
Et /api/auth/login pour vous connecter à votre compte existant
Toutes les routes v2 vérifieront l'en-tête du jeton d'accès, pas de préfixes.
Crypting the user Password :
To crypt the the password we need to install "bcrypt" package :
npm i bcrypt
Then we can hash the password by adding the Salt :

// hash the password
const salt = await bcrypt.genSalt()
const hashedPassword = await bcrypt.hash(req.body.password, salt)
