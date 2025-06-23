#!/usr/bin/env python3
"""
Simple HTTP server for the political orientation test.
Serves static files without any database functionality.
"""

import http.server
import socketserver
import os
import sys

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(__file__), **kwargs)

def run_server():
    """Run the HTTP server on port 5000"""
    os.chdir(os.path.dirname(__file__))
    
    with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
        print(f"Server running on port {PORT}")
        print(f"Access the app at: http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped")

if __name__ == "__main__":
    run_server()