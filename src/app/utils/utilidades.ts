export class Utilidades {
    
  static obtenerNombreUsuario(): string {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const datosUsuario = JSON.parse(usuario);
      return datosUsuario.nombre_usuario || '';
    }
    return '';
  }

  static calculaLuminancia(color: string): string {
    if (!color) return 'black';

    // Extrae los valores RGB del color hexadecimal
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calcula el brillo (luminancia)
    const luminancia = (0.299 * r + 0.587 * g + 0.114 * b);

    // Si es oscuro, texto blanco; si es claro, texto negro
    return luminancia < 128 ? 'white' : 'black';
  }
}
