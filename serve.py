#!/usr/bin/env python3
"""Servidor local para desarrollo, sin caché de navegador.

python3 -m http.server no manda Cache-Control, así que Chrome/Safari
cachean data.js, css e imágenes y los cambios no se ven hasta un
refresco forzado. Este servidor añade Cache-Control: no-store a cada
respuesta para que un refresco normal (Cmd+R) siempre traiga lo último.

Uso:
    python3 serve.py            # puerto 4599 (igual que antes)
    python3 serve.py 8080       # otro puerto
"""
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4599
    HTTPServer(("", port), NoCacheHandler).serve_forever()
