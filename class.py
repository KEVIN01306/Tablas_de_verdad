


class persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def mostrar(self):
        print("Nombre: ", self.nombre)
        print("Edad: ", self.edad)

    def es_mayor(self):
        if self.edad >= 18:
            print("Es mayor de edad")
        else:
            print("Es menor de edad")