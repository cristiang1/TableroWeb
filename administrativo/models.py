from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
class Perfil(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    numero_identificacion = models.CharField(max_length=12, unique=True)
    foto = models.ImageField(upload_to="imgUsuario/", max_length=100)
    
    def __str__(self):
        return self.nombre

class Tablero(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=20)
    tipos = (
        ('Publico', 'Público'),
        ('Privado', 'Privado'),
        )
    tipo = models.CharField(max_length=7, choices=tipos)

    def __str__(self):
        return str("Tablero "+ self.titulo)
    
class Nota(models.Model):
    idea = models.TextField(max_length=150)
    tablero = models.ForeignKey(Tablero, related_name='tablero', on_delete=models.PROTECT)
    user = models.ForeignKey(User, related_name='user', on_delete=models.PROTECT)
    fecha_registro = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.id)