# PHP

You need PHP7 to run this example

```
# Use composer to download dependencies
php composer.phar install

# Run PHP linting on test files
php -l tests/*.php

# Run PHP linting on source files
php -l src/*.php

# Run PHP Code Sniffer on src and tests folders (code analysis)
./vendor/bin/phpcs src tests

# Run Unit Tests
./vendor/bin/phpunit
```
