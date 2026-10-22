// Datos del negocio. Los servicios se cargan en la base con: npm run db:instalar
// (después se leen desde la base de datos).
module.exports = {
    "nombre":  "Navaja & Co",
    "whatsapp":  "5491155551234",
    "direccion":  "Av. Corrientes 1234, CABA",
    "horarioTexto":  "Lun a Sáb · 10 a 20 hs",
    "horario":  {
                    "diaInicio":  "09:00",
                    "diaFin":  "21:00",
                    "paso":  30,
                    "desde":  "10:00",
                    "hasta":  "20:00",
                    "diasAbiertos":  [
                                         1,
                                         2,
                                         3,
                                         4,
                                         5,
                                         6
                                     ]
                },
    "servicios":  [
                      {
                          "nombre":  "Corte clásico",
                          "precio":  9000,
                          "minutos":  30,
                          "descripcion":  "Tijera o máquina, lavado y peinado."
                      },
                      {
                          "nombre":  "Corte + barba",
                          "precio":  14000,
                          "minutos":  60,
                          "descripcion":  "El combo completo con toalla caliente."
                      },
                      {
                          "nombre":  "Perfilado de barba",
                          "precio":  7000,
                          "minutos":  30,
                          "descripcion":  "Navaja, aceites y vapor."
                      },
                      {
                          "nombre":  "Degradé / fade",
                          "precio":  10000,
                          "minutos":  45,
                          "descripcion":  "Fade a la medida, terminado a navaja."
                      },
                      {
                          "nombre":  "Corte niño",
                          "precio":  7000,
                          "minutos":  30,
                          "descripcion":  "Hasta 12 años."
                      }
                  ]
};
