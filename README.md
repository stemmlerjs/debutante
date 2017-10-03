## Debutante
debutante.press

### Apache Config
For Angular 1x apps, we need to use the .htaccess file in combination with the ```<base href="/">``` tag and AllowHTML5Mode setting.

Ensure to enable the rewrite module in ```httpd.conf```.
```
LoadModule rewrite_module modules/mod_rewrite.so
```

And also set:
```
AllowOverride All
```
