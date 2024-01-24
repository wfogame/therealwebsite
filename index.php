<?php
$port = $_SERVER['PORT'] ?? 3000;

// Map the requested path to the corresponding HTML file
$routes = [
    '/projects' => 'projects.html',
    '/bookmarklets' => 'bookmarklets.html',
    '/settings' => 'settings.html',
    '/support' => 'support.html',
    '/about' => 'about.html',
    '/transfer' => 'transfer.html',
    '/suggest' => 'suggest.html',
    '/contact' => 'contact.html',
    '/ad' => 'ad.html',
];

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Check if the requested path exists in the routes array
if (array_key_exists($path, $routes)) {
    // Set the content type to HTML
    header('Content-Type: text/html');
    
    // Send the corresponding HTML file
    readfile(__DIR__ . '/' . $routes[$path]);
} else {
    // Handle 404 Not Found
    http_response_code(404);
    echo '404 Not Found';
}
?>
