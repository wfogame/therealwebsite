try:
    from http.server import SimpleHTTPRequestHandler, test as test_orig
except ImportError:
    from SimpleHTTPServer import SimpleHTTPRequestHandler
    from BaseHTTPServer import test as test_orig

def test(*a): test_orig(*a, port=int(a[0]) if a else 8000)
if __name__ == '__main__': test()
